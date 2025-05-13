import React from 'react';

const DownloadProfileSection = () => {
  const handleDownload = (e) => {
    e.preventDefault(); // Prevent default behavior
    const fileUrl = 'https://nivishefoundation.org/wp-content/uploads/2024/09/Nivishe-Company-Profile-1.pdf';
    
    // Open PDF in new tab without affecting current page
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{
      padding: '50px 30px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      margin: '30px 0',
    //   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    //   border: '1px solid #f0f0f0',
    backgroundImage: 'images/Group.jpg',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{
        color: '#333',
        marginBottom: '20px',
        fontSize: '26px',
        fontWeight: '600',
        letterSpacing: '0.5px'
      }}>
        Download Our Organization Profile
      </h2>
      <p style={{
        color: '#666',
        marginBottom: '30px',
        fontSize: '16px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: '1.6'
      }}>
        Get to know more about Nivishe Foundation by viewing our comprehensive profile document.
      </p>
      <button 
        onClick={handleDownload}
        style={{
          backgroundColor: '#FF6B35',
          color: 'white',
          border: 'none',
          padding: '14px 32px',
          fontSize: '17px',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: '600',
          boxShadow: '0 4px 8px rgba(255,107,53,0.3)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          ':hover': {
            backgroundColor: '#FF5A20',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(255,107,53,0.4)'
          }
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="white"/>
        </svg>
        Download Our Profile
      </button>
      <p style={{
        color: '#888',
        marginTop: '20px',
        fontSize: '14px'
      }}>
      </p>
    </div>
  );
};

export default DownloadProfileSection;