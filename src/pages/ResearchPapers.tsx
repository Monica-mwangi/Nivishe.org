import React from 'react';
import { Link } from 'react-router-dom';

type ResearchPaper = {
  id: number;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  journal: string;
  pdfUrl: string;
  categories: string[];
};

const ResearchPapersPage: React.FC = () => {
  // Sample research data
  const papers: ResearchPaper[] = [
    {
      id: 1,
      title: 'Effectiveness of Community-Based Mental Health Interventions in East Africa',
      authors: ['Dr. Amina Nivishe', 'Prof. James Mwangi', 'Dr. Sarah Johnson'],
      abstract: 'This study evaluates the impact of community-led mental health programs across East African communities, showing significant improvements in wellbeing indicators.',
      publicationDate: '2023-03-15',
      journal: 'Journal of Global Mental Health',
      pdfUrl: '/papers/community-interventions-east-africa.pdf',
      categories: ['Community Health', 'Intervention Studies'],
    },
    {
      id: 2,
      title: 'Cultural Adaptations of CBT for African Populations',
      authors: ['Dr. Fatima Abdi', 'Dr. Amina Nivishe'],
      abstract: 'A systematic review of culturally adapted cognitive behavioral therapy approaches and their efficacy with diverse African populations.',
      publicationDate: '2022-11-01',
      journal: 'African Journal of Psychology',
      pdfUrl: '/papers/cultural-cbt-africa.pdf',
      categories: ['Psychotherapy', 'Cultural Psychology'],
    },
    {
      id: 3,
      title: 'Mental Health Stigma Reduction Through School Programs',
      authors: ['Dr. Samuel Otieno', 'Dr. Grace Mbeki', 'Dr. Amina Nivishe'],
      abstract: 'Longitudinal study demonstrating the effectiveness of school-based anti-stigma programs in Kenya and Tanzania.',
      publicationDate: '2023-01-20',
      journal: 'Child and Adolescent Mental Health',
      pdfUrl: '/papers/school-stigma-reduction.pdf',
      categories: ['Education', 'Stigma Reduction'],
    },
    {
      id: 4,
      title: 'Traditional Healing Practices and Mental Health Outcomes',
      authors: ['Prof. Joseph Kamau', 'Dr. Amina Nivishe'],
      abstract: 'Mixed-methods study examining the intersection of traditional healing practices and modern mental health care in Kenya.',
      publicationDate: '2022-08-10',
      journal: 'Transcultural Psychiatry',
      pdfUrl: '/papers/traditional-healing-kenya.pdf',
      categories: ['Cultural Psychiatry', 'Traditional Medicine'],
    }
  ];

  const handleDownload = (pdfUrl: string) => {
    // Check if the PDF exists at the given URL
    fetch(pdfUrl)
      .then(response => {
        if (response.ok) {
          // If the file exists, open in new tab
          window.open(pdfUrl, '_blank');
        } else {
          // If the file doesn't exist, show an alert
          alert('The requested PDF is not available at this time. Please contact the research team for more information.');
        }
      })
      .catch(() => {
        alert('Failed to access the PDF. Please check your connection or contact the research team.');
      });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-orange-500 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-center px-4 font-bold text-4xl md:text-5xl text-white">
            Research Publications
          </h1>
          <p className="text-center px-4 font-bold text-xl md:text-2xl text-white">
            Evidence-based research contributing to mental health knowledge in Africa
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Research Papers List */}
        <div className="space-y-8">
          {papers.map((paper) => (
            <div key={paper.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-black mb-2">{paper.title}</h2>
                    <p className="text-gray-600 mb-3">
                      <span className="font-medium text-black">Authors:</span> {paper.authors.join(', ')}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium text-black">Published in:</span> {paper.journal} • {new Date(paper.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.categories.map((category) => (
                        <span key={category} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="prose max-w-none text-gray-700 mb-4">
                      <p className="font-medium text-black">Abstract:</p>
                      <p className="text-gray-800">{paper.abstract}</p>
                    </div>
                  </div>
                  <div className="md:w-48 flex-shrink-0 flex flex-col gap-3">
                    <button
                      onClick={() => handleDownload(paper.pdfUrl)}
                      className="px-4 py-2 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-500 transition-colors font-medium"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submission Info */}
        <div className="mt-16 bg-black rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Contribute to Our Research</h2>
          <p className="mb-6">
            We welcome collaborations with researchers and institutions. If you're working on mental health research relevant to African communities, please contact our research team.
          </p>
          <Link
  to="/contact"  
  className="inline-flex items-center px-6 py-3 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors"
>
  Contact Research Team
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</Link>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapersPage;