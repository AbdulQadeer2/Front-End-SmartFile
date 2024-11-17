"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as signalR from "@microsoft/signalr";

// Progress Overlay Component
const ProgressOverlay = ({ fileProgress, onClose }) => (
  <div className="progress-overlay">
    <div className="progress-overlay-content">
      <h3>Uploading Files...</h3>
      {fileProgress.map((file) => (
        <div key={file.fileName} className="file-progress">
          <span className="file-name">{file.fileName}</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${file.progressPercentage}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {file.progressPercentage.toFixed(2)}%
          </span>
        </div>
      ))}
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  </div>
);


const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [totalSize, setTotalSize] = useState(0);
  const [activeFeature, setActiveFeature] = useState("simple"); // Track active feature tab
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [connectionId, setConnectionId] = useState("");
  const [fileProgress, setFileProgress] = useState([]); // To hold progress for each file
  const [showProgressOverlay, setShowProgressOverlay] = useState(false); // State for overlay
  const router = useRouter();
  const [recipientEmail, setRecipientEmail] = useState(""); // Add recipientEmail state
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  // Calculate total size in MB whenever uploadedFiles changes
  useEffect(() => {
    const size = uploadedFiles.reduce(
      (acc, file) => acc + (file.progress === 100 ? parseFloat(file.size) : 0),
      0
    );
    setTotalSize(size.toFixed(2)); // Limit to 2 decimal places
  }, [uploadedFiles]);

  useEffect(() => {
    const dropArea = document.getElementById("drop-area");

    dropArea.addEventListener("dragover", handleDragOver);
    dropArea.addEventListener("dragleave", handleDragLeave);
    dropArea.addEventListener("drop", handleDrop);

    return () => {
      dropArea.removeEventListener("dragover", handleDragOver);
      dropArea.removeEventListener("dragleave", handleDragLeave);
      dropArea.removeEventListener("drop", handleDrop);
    };
  }, []);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://smartfilepresentation20241116235142.azurewebsites.net/fileUploadHub")
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveProgress", (progress) => {
      console.log("Received progress update:", progress);
      setFileProgress((prevProgress) => {
        const updatedProgress = prevProgress.map(file =>
          file.fileName === progress.fileName
            ? { ...file, ...progress }
            : file
        );
        if (!updatedProgress.some(file => file.fileName === progress.fileName)) {
          updatedProgress.push(progress);
        }
        return updatedProgress;
      });
    });

    connection.start()
      .then(() => {
        console.log("SignalR Connected");
        setConnectionId(connection.connectionId);
      })
      .catch(err => console.error("SignalR Connection Error: ", err));

    return () => {
      connection.stop();
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");
    handleFiles(e.dataTransfer.files);
  };

  const openFileDialog = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.onchange = () => {
      if (input.files.length > 0) handleFiles(input.files);
    };
    input.click();
  };

  const handleFiles = (files) => {
    const filesArray = Array.from(files).map((file) => ({
      file,
      id: `${file.name}-${file.size}-${Date.now()}`, // Unique ID for each file
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2), // File size in MB with 2 decimal places
      type: file.type || "Unknown",
      progress: 0, // Initial progress set to 0
      uploadedBytes: 0,
      totalBytes: file.size,
      progressPercentage: 0,
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);

    // Simulate file upload progress for each new file by its unique ID
    filesArray.forEach((file) => simulateUploadProgress(file.id));
  };

  const simulateUploadProgress = (fileId) => {
    const interval = setInterval(() => {
      setUploadedFiles((prevFiles) => {
        const updatedFiles = prevFiles.map((file) => {
          if (file.id === fileId) {
            if (file.progress < 100) {
              return { ...file, progress: file.progress + 10 };
            } else {
              clearInterval(interval); // Stop interval when progress is 100%
              return { ...file, progress: 100 };
            }
          }
          return file;
        });
        return updatedFiles;
      });
    }, 500); // Adjust the interval speed as desired
  };

  const deleteFile = (fileIndex) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  const handleFeatureTabClick = (feature) => {
    setActiveFeature(feature); // Change active feature
  };

  const handleUpload = async (formType) => {
    try {
      setUploading(true);
      setShowProgressOverlay(true); // Show overlay
      setUploadProgress(0);

      const formData = new FormData();
      uploadedFiles.forEach(({ file }) => {
        formData.append("Files", file);
      });

      // Append common fields
      formData.append("Email", email);
      formData.append("ConnectionId", connectionId);
      formData.append("Mode", formType === "getLink" ? "Get Link" : "Send File"); // New Mode field

      // Append fields based on form type
      if (formType === "getLink") {
        formData.append("Password", password);
      } else if (formType === "sendFile") {
        formData.append("RecipientEmail", recipientEmail);
        formData.append("Subject", subject);
        formData.append("Message", message);
        formData.append("Password", password);
      }

      const response = await fetch("https://smartfilepresentation20241116235142.azurewebsites.net/api/QuickShare/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const shareLink = `http://localhost:3000/download/${data.shareLink}`;
        sessionStorage.setItem("shareLink", shareLink);
        router.push("/link");
      } else {
        const errorText = await response.text();
        console.error("Upload failed:", errorText || response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during the upload:", error.message);
    } finally {
      setUploading(false);
    }
  };

  // On form submission, pass the type of the form as a parameter
  const handleGetLinkFormSubmit = (e) => {
    e.preventDefault();
    handleUpload("getLink");
  };

  const handleSendFileFormSubmit = (e) => {
    e.preventDefault();
    handleUpload("sendFile");
  };

  const closeProgressOverlay = () => {
    setShowProgressOverlay(false);
  };

  return (
    <>
      {showProgressOverlay && (
        <ProgressOverlay fileProgress={fileProgress} onClose={closeProgressOverlay} />
      )}
      {!uploadedFiles.length ? (
        <div className="drop-area" id="drop-area" onClick={openFileDialog}>
          <h3 className="drop-title">Upload file</h3>
          <p className="drop-text">
            Drag or drop your files here or click to upload
          </p>
          <div className="drop-icon">
            <i className="fa-light fa-upload"></i>
          </div>
        </div>
      ) : (
        <div id="drop-area">
          <div className="upload-file-and-tab">
            <div className="left-area" id="left-drop-area">
              <div id="left-drop-zone" onClick={openFileDialog}>
                <div className="drop-content">
                  <h3 className="drop-title">Upload more files</h3>
                  <p className="drop-text">
                    Drag or drop your files here or click to upload
                  </p>
                </div>
                <div className="drop-icon">
                  <i className="fa-light fa-upload"></i>
                </div>
              </div>
              <div className="file-list">
                {uploadedFiles.map((file, index) => (
                  <div className="file-item" key={file.id}>
                    {file.progress < 100 ? (
                      <div className="d-flex flex-column align-items-start">
                        <span className="file-title">{file.name}</span>
                        <div className="progress progress-light-bg w-100 my-2">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${file.progress}%` }}
                            aria-valuenow={file.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {file.progress}%
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="file-title">{file.name}</span>
                          <span
                            className="delete-icon delete-file-btn"
                            onClick={() => deleteFile(index)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <span className="file-type">{file.type}</span>
                          <span className="file-size">{file.size} MB</span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="total-size mt-4">
                <strong>Total Size:</strong> {totalSize} MB
              </div>
            </div>
            <div className="right-area" id="right-area">
              <div className="tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="get-link-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#get-link-content"
                      role="tab"
                    >
                      Get Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="send-file-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#send-file-content"
                      role="tab"
                    >
                      Send File
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="get-link-content"
                  role="tabpanel"
                  aria-labelledby="get-link-tab"
                >
                  <form className="get-link-form" onSubmit={handleGetLinkFormSubmit}>
                    {/* Get Link form fields */}
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* Feature Tab Content */}
                    <div className="feature-tab-content">
                      {activeFeature === "simple" && <p>Simple Options</p>}
                      {activeFeature === "add-password" && (
                        <div>
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="Enter password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      )}
                      {activeFeature === "notifications" && (
                        <div>
                          <label>Notification Preferences</label>
                          <input type="checkbox" /> Enable Notifications
                        </div>
                      )}
                      {activeFeature === "schedule-sharing" && (
                        <div>
                          <label>Schedule Sharing</label>
                          <input type="datetime-local" className="input " />
                        </div>
                      )}
                      {activeFeature === "download-limit" && (
                        <div>
                          <label>Download Limit</label>
                          <input
                            type="number"
                            placeholder="Set limit"
                            className="input"
                          />
                        </div>
                      )}
                      {activeFeature === "encrypted-sharing" && (
                        <div>
                          <label>Enable Encrypted Sharing</label>
                          <input type="checkbox" />
                        </div>
                      )}
                    </div>

                    {/* Feature Tabs */}
                    <div className="feature-tabs mt-3">
                      <ul className="nav nav-pills right-area-nav gap-4 flex-nowrap">
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "simple" ? "active" : ""
                              }`}
                            onClick={() => handleFeatureTabClick("simple")}
                          >
                            <i className="fa-solid fa-rectangle-xmark"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "add-password" ? "active" : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("add-password")
                            }
                          >
                            <i className="fa fa-lock"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "notifications" ? "active" : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("notifications")
                            }
                          >
                            <i className="fa fa-bell"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "schedule-sharing"
                              ? "active"
                              : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("schedule-sharing")
                            }
                          >
                            <i className="fa fa-calendar"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "download-limit" ? "active" : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("download-limit")
                            }
                          >
                            <i className="fa fa-download"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "encrypted-sharing"
                              ? "active"
                              : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("encrypted-sharing")
                            }
                          >
                            <i className="fa fa-shield-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button type="submit" disabled={uploading}>
                      {uploading ? "Uploading..." : "Get Link"}
                    </button>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="send-file-content"
                  role="tabpanel"
                  aria-labelledby="send-file-tab"
                >
                  <form className="send-file-form" onSubmit={handleSendFileFormSubmit}>
                    {/* Send File form fields */}
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Recipient Email</label>
                    <input
                      type="email"
                      placeholder="Recipient Email"
                      className="input"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)} // Update recipientEmail state
                    />
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />

                    <label>Message</label>
                    <textarea
                      placeholder="Your Message Here..."
                      className="input"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    {/* Feature Tab Content */}
                    <div className="feature-tab-content">
                      {activeFeature === "simple" && <p>Simple Options</p>}
                      {activeFeature === "add-password" && (
                        <div>
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="Enter password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      )}
                      {activeFeature === "notifications" && (
                        <div>
                          <label>Notification Preferences</label>
                          <input type="checkbox" /> Enable Notifications
                        </div>
                      )}
                      {activeFeature === "schedule-sharing" && (
                        <div>
                          <label>Schedule Sharing</label>
                          <input type="datetime-local" className="input" />
                        </div>
                      )}
                      {activeFeature === "download-limit" && (
                        <div>
                          <label>Download Limit</label>
                          <input
                            type="number"
                            placeholder="Set limit"
                            className="input"
                          />
                        </div>
                      )}
                      {activeFeature === "encrypted-sharing" && (
                        <div>
                          <label>Enable Encrypted Sharing</label>
                          <input type="checkbox" />
                        </div>
                      )}
                    </div>

                    {/* Feature Tabs */}
                    <div className="feature-tabs mt-3">
                      <ul className="nav nav-pills right-area-nav gap-4 flex-nowrap">
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "simple" ? "active" : ""
                              }`}
                            onClick={() => handleFeatureTabClick("simple")}
                          >
                            <i className="fa-solid fa-rectangle-xmark"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "add-password" ? "active" : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("add-password")
                            }
                          >
                            <i className="fa fa-lock"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "notifications" ? "active" : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("notifications")
                            }
                          >
                            <i className="fa fa-bell"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "schedule-sharing"
                              ? "active"
                              : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("schedule-sharing")
                            }
                          >
                            <i className="fa fa-calendar"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "download-limit" ? "active" : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("download-limit")
                            }
                          >
                            <i className="fa fa-download"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link feature-tab ${activeFeature === "encrypted-sharing"
                              ? "active"
                              : ""
                              }`}
                            onClick={() =>
                              handleFeatureTabClick("encrypted-sharing")
                            }
                          >
                            <i className="fa fa-shield-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <button type="submit" disabled={uploading}>
                      {uploading ? "Uploading..." : "Send Email"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >
      )}
    </>
  );
};

export default FileUpload;