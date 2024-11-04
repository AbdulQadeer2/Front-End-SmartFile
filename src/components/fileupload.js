"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
      file,
      id: `${file.name}-${file.size}-${Date.now()}`, // Unique ID for each file
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2), // Convert size to MB
      type: file.type || "Unknown",
    }));

    setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const deleteFile = (fileIndex) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      // Append actual File objects for upload
      uploadedFiles.forEach(({ file }) => {
        formData.append("Files", file);
      });

      // Append email and password
      formData.append("Email", email);
      formData.append("Password", password);

      const response = await fetch("https://localhost:7269/api/QuickShare/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Upload success:", data);

        // Construct the download link in the required pattern
        const shareLink = `http://localhost:3000/download/${data.shareLink}`;

        // Save shareLink to sessionStorage
        sessionStorage.setItem('shareLink', shareLink);

        // Navigate to the link display page
        router.push('/link');
      } else {
        const errorText = await response.text();
        console.error("Upload failed:", errorText || response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during the upload:", error.message);
    }
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
                  <form
                    className="get-link-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleUpload();
                    }}
                  >
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn-default color-blacked">
                      Get Link
                    </button>
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
