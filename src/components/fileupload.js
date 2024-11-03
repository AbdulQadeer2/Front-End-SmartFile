"use client";
import { useEffect, useState } from "react";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      id: `${file.name}-${file.size}-${Date.now()}`, // Unique ID for each file
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2),
      type: file.type || "Unknown",
      progress: 0, // Initial progress set to 0
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);

    // Simulate file upload progress for each new file by its unique ID
    filesArray.forEach((file) => simulateUploadProgress(file.id));
  };

  // Function to simulate upload progress
  const simulateUploadProgress = (fileId) => {
    const interval = setInterval(() => {
      setUploadedFiles((prevFiles) => {
        const updatedFiles = prevFiles.map((file) => {
          if (file.id === fileId) {
            if (file.progress < 100) {
              return { ...file, progress: file.progress + 10 };
            } else {
              clearInterval(interval); // Stop interval when progress is 100%
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

  return (
    <>
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
                            className="progress-bar "
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
                  <form className="get-link-form">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="input"
                    />
                    <a className="btn-default color-blacked">Get Link</a>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="send-file-content"
                  role="tabpanel"
                  aria-labelledby="send-file-tab"
                >
                  <form className="send-file-form">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="input"
                    />
                    <label>Recipient Email</label>
                    <input
                      type="email"
                      placeholder="Recipient Email"
                      className="input"
                    />
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input"
                    />
                    <label>Message</label>
                    <textarea
                      placeholder="Your Message Here..."
                      className="input"
                    ></textarea>
                    <a className="btn-default color-blacked">Send Email</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileUpload;
