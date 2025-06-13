import React from 'react';

const ResourcesPage = () => {
  // Resource data with file URLs
  const resources = [
    {
      id: 1,
      title: 'Mental Health Pitch Deck',
      description: 'A comprehensive presentation on mental health awareness, strategies, and support systems. Includes statistics, intervention methods, and community resources.',
      image: '/images/woow.jpg', // Replace with your image path
      fileUrl: 'https://nivishe-new.edeldigital.co.ke/assets/NF-Pitchdeck.pdf', // Replace with your actual file URL
      date: 'June 2025'
    },
    // Add more resources here as needed
  ];

  // Download handler function
  const handleResourceDownload = (e, fileUrl) => {
    e.preventDefault();
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nivishe Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access valuable tools, presentations, and materials to support mental health awareness.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>

        {/* Resources Grid */}
        <div style={{
          width: '100%',
          marginTop: '20px',
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#EA580C',
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif",
          }}>Featured Resources</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
            justifyContent: 'center',
          }}>
            {resources.map(resource => (
              <div
                key={resource.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(234, 88, 12, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(234, 88, 12, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(234, 88, 12, 0.1)';
                }}
              >
                <div style={{
                  height: '180px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={resource.image}
                    alt={resource.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div style={{
                  padding: '25px',
                }}>
                  <div style={{
                    color: '#EA580C',
                    fontSize: '14px',
                    marginBottom: '8px',
                    fontWeight: '500',
                  }}>
                    {resource.date}
                  </div>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    color: '#EA580C',
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: '1.4',
                  }}>
                    {resource.title}
                  </h4>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: '#555',
                    marginBottom: '20px',
                  }}>
                    {resource.description}
                  </p>
                  <a
                    href={resource.fileUrl}
                    onClick={(e) => handleResourceDownload(e, resource.fileUrl)}
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#EA580C',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      position: 'relative',
                      cursor: 'pointer',
                      fontFamily: "'Montserrat', sans-serif",
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="#EA580C"/>
                    </svg>
                    Download Resource
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '22px', // Account for icon spacing
                      width: '0',
                      height: '2px',
                      backgroundColor: '#EA580C',
                      transition: 'width 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.width = 'calc(100% - 22px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.width = '0';
                    }}
                    ></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

     

        {/* Future Resources Placeholder */}
        <div style={{
          textAlign: 'center',
          color: '#6B7280',
          marginTop: '3rem',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px dashed #FDBA74',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <p style={{ margin: 0, fontStyle: 'italic' }}>
            More valuable resources will be added here soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;