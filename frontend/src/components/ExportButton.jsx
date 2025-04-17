import React from 'react';

const ExportButton = ({ summary, disabled }) => {
  const handleExport = (type) => {
    const blob = new Blob([summary], { type: type === 'txt' ? 'text/plain' : 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `summary.${type}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="export-buttons">
      <button onClick={() => handleExport('txt')} disabled={disabled}>Export TXT</button>
      {/* PDF export would require a library like jsPDF for formatting */}
    </div>
  );
};

export default ExportButton;
