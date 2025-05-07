import React from 'react';

const QuarterlyReports = () => {
  // Styles
  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    color: '#333',
  };

  const backgroundImageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
    opacity: 0.3,
  };

  const contentWrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const introTextStyle = {
    fontSize: '1.1rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#555',
  };

  const reportsGridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  };

  const reportYearSectionStyle = {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const yearHeadingStyle = {
    color: '#2980b9',
    marginBottom: '15px',
    fontSize: '1.8rem',
  };

  const quarterLinksStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px',
  };

  const reportLinkStyle = {
    display: 'block',
    padding: '12px 15px',
    backgroundColor: '#f8f9fa',
    color: '#2980b9',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    border: '1px solid #ddd',
  };

  const reportLinkHoverStyle = {
    backgroundColor: '#2980b9',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  // Sample report data
  const reports = [
    {
      year: 2025,
      quarters: [
        { name: 'Q1 2025 Report', link: '/reports/q1-2023.pdf' },
        { name: 'Q2 2025 Report', link: '/reports/q2-2023.pdf' },
        { name: 'Q3 2025 Report', link: '/reports/q3-2023.pdf' },
        { name: 'Q4 2025 Report', link: '/reports/q4-2023.pdf' },
      ]
    },
    {
      year: 2024,
      quarters: [
        { name: 'Q1 2024 Report', link: '/reports/q1-2022.pdf' },
        { name: 'Q2 2024 Report', link: '/reports/q2-2022.pdf' },
        { name: 'Q3 2024 Report', link: '/reports/q3-2022.pdf' },
        { name: 'Q4 2024 Report', link: '/reports/q4-2022.pdf' },
      ]
    },
    // Add more years as needed
  ];

  return (
    <div style={containerStyle}>
      <div style={backgroundImageStyle}></div>
      <div style={contentWrapperStyle}>
        <h1 style={headingStyle}>Quarterly Reports</h1>
        <p style={introTextStyle}>
          Browse our collection of quarterly reports to learn more about our impact and progress.
        </p>
        
        <div style={reportsGridStyle}>
          {reports.map((report) => (
            <div key={report.year} style={reportYearSectionStyle}>
              <h2 style={yearHeadingStyle}>{report.year}</h2>
              <div style={quarterLinksStyle}>
                {report.quarters.map((quarter) => (
                  <a 
                    key={quarter.name} 
                    href={quarter.link} 
                    style={reportLinkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = reportLinkHoverStyle.backgroundColor;
                      e.target.style.color = reportLinkHoverStyle.color;
                      e.target.style.transform = reportLinkHoverStyle.transform;
                      e.target.style.boxShadow = reportLinkHoverStyle.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = reportLinkStyle.backgroundColor;
                      e.target.style.color = reportLinkStyle.color;
                      e.target.style.transform = 'none';
                      e.target.style.boxShadow = 'none';
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {quarter.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuarterlyReports;