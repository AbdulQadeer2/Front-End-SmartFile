import React from 'react';

const ProgressPopup = ({ isVisible, progress }) => {
  if (!isVisible) return null;

  const formatSize = (bytes) => {
    if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(2)} GB`;
    if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(2)} MB`;
    if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(2)} KB`;
    return `${bytes} B`;
  };

  const calculatePercentage = (loaded, total) => {
    return total > 0 ? ((loaded / total) * 100).toFixed(2) : 0;
  };

  const percentage = calculatePercentage(progress.loaded, progress.total);
  const remaining = progress.total - progress.loaded;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>File Upload Progress</h2>
        <p>{`Uploaded: ${formatSize(progress.loaded)} / ${formatSize(progress.total)} (${percentage}%)`}</p>
        <p>{`Remaining: ${formatSize(remaining)}`}</p>
        <progress value={progress.loaded} max={progress.total} />
      </div>
    </div>
  );
};

export default ProgressPopup;
