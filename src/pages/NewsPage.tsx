// import React from 'react';
// import Section from '../components/ui/Section';
// import { newsItems } from '../data/content';
// import { Calendar } from 'lucide-react';

// const NewsPage: React.FC = () => {
//   return (
//     <div className="pt-16">
//       <Section
//         title="News & Insights"
//         subtitle="Stay updated with our latest news, publications, and stories"
//         className="bg-black"
//         dark
//       >
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {newsItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center text-gray-500 text-sm mb-2">
//                   <Calendar size={16} className="mr-2" />
//                   <span>{item.date}</span>
//                 </div>
//                 <span className="inline-block bg-yellow-400 text-black text-sm px-3 py-1 rounded-full mb-3">
//                   {item.category}
//                 </span>
//                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.excerpt}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Section>
//     </div>
//   );
// }

// export default NewsPage;