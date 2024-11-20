"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import * as signalR from '@microsoft/signalr';

const DownloadFiles = () => {
  const { token } = useParams();
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const formatFileSize = (size) => {
    return size >= 1024 ? `${(size / 1024).toFixed(2)} MB` : `${size} KB`;
  };
  useEffect(() => {
    if (!token) return;

    const fetchFiles = async () => {
      try {
        const response = await fetch(`https://localhost:7269/share/${token}`);
        if (response.status === 401) {
          setPasswordRequired(true);
          return;
        }

        if (!response.ok) throw new Error('Failed to fetch files');

        const data = await response.json();
        setFiles(data.files);
      } catch (err) {
        setError('Share link not found or has expired.');
      }
    };

    fetchFiles();
  }, [token]);

  const handlePasswordSubmit = async () => {
    try {
      const response = await fetch(
        `https://localhost:7269/share/${token}?password=${encodeURIComponent(password)}`
      );

      if (response.status === 401) {
        setPasswordError("Invalid password. Please try again.");
        return;
      }

      if (!response.ok) throw new Error('Failed to fetch files');

      const data = await response.json();
      setFiles(data.files);
      setPasswordRequired(false); // Hide password input on success
    } catch (err) {
      setError('Share link not found or has expired.');
    }
  };

  const handleDownloadAll = async () => {
    try {
      // Establish SignalR connection
      const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7269/fileUploadHub")
        .configureLogging(signalR.LogLevel.Information)
        .build();

      connection.on("ReceiveDownloadProgress", (progressData) => {
        setProgress(progressData.progressPercentage); // Update the progress bar
        setProgressMessage(
          `Downloading ${progressData.fileName} (${progressData.filesProcessed} of ${progressData.totalFiles})`
        ); // Update the message
      });

      await connection.start();

      // Request download with connection ID for real-time updates
      const response = await fetch(
        `https://localhost:7269/share/${token}/download-all-files?connectionId=${connection.connectionId}`,
        { method: 'GET' }
      );
      if (!response.ok) throw new Error('Failed to download files');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AllFiles.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      await connection.stop(); // Stop the connection when done
    } catch (err) {
      setError('Failed to download all files.');
    }
  };


  return (
    <>
      <div className="main-content">
        <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h3 className="title h3">Thank You! For Using Nexus Filehub</h3>
                  <ul className="page-list">
                    <li className="rainbow-breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="rainbow-breadcrumb-item active">Thank You!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="rainbow-contact-area rainbow-section-gap Top-big rainbow-section-gap Bottom-big">
            <div className="container">
              <div className="row row--15 justify-content-center">
                <div className="col-lg-8">
                  <div className="contact-details-box">
                    <h3 className="text-center">Ready when you are</h3>
                    <h6 className="text-center">Download files before transfer expires.</h6>

                    {error ? (
                      <p className="text-center text-danger">{error}</p>
                    ) : passwordRequired ? (
                      <div className="password-input">
                        <input
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                        />
                        <button className="btn btn-primary mt-2" onClick={handlePasswordSubmit}>
                          Submit Password
                        </button>
                        {passwordError && <p className="text-danger mt-2">{passwordError}</p>}
                      </div>
                    ) : (
                      <div className="profile-details-tab mt--60">
                        <div className="rbt-profile-row rbt-default-form row row--15">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className="color-primary text-center">Files expire in 3 days</p>
                            <div className="download-file-list file-list d-flex flex-column align-items-center justify-content-center">
                              {files.map((file) => (
                                <div key={file.fileId} className="download-file-item">
                                  <div className="d-flex align-items-center justify-content-center gap-5">
                                    <span className="file-title">{file.fileName}</span>
                                    <span className="file-size">{formatFileSize(file.fileSize)}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="d-flex align-items-center justify-content-center mt-4">
                              <button
                                className="btn-default download-file-btn"
                                onClick={handleDownloadAll}
                              >
                                <i className="fa fa-folder-download" /> Download All
                              </button>
                            </div>

                            {progress > 0 && (
                              <div className="progress mt-3" style={{ width: '100%' }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: `${progress}%` }}
                                  aria-valuenow={progress}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  {progress.toFixed(0)}%
                                </div>
                              </div>
                            )}
                            {progressMessage && <p className="text-center mt-2">{progressMessage}</p>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadFiles;
