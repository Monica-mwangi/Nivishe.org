import React from 'react';
import { BookOpen, Users, Clock, Award, Star, Calendar } from 'lucide-react';

const AcademySection = () => {
  const courses = [
    {
      title: "Digital Marketing Mastery",
      description: "Complete digital marketing bootcamp covering SEO, SEM, social media, and analytics.",
      duration: "12 weeks",
      students: "2,400+",
      rating: 4.9,
      price: "$299",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Beginner to Advanced"
    },
    {
      title: "UI/UX Design Fundamentals",
      description: "Learn design thinking, user research, prototyping, and industry-standard design tools.",
      duration: "10 weeks",
      students: "1,800+",
      rating: 4.8,
      price: "$249",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Beginner"
    },
    {
      title: "E-commerce Growth Strategy",
      description: "Master e-commerce platforms, conversion optimization, and growth hacking techniques.",
      duration: "8 weeks",
      students: "1,200+",
      rating: 4.9,
      price: "$199",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Intermediate"
    },
    {
      title: "Content Creation & Strategy",
      description: "Create engaging content across platforms with strategic planning and execution.",
      duration: "6 weeks",
      students: "950+",
      rating: 4.7,
      price: "$149",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "All Levels"
    },
    {
      title: "Data Analytics for Business",
      description: "Learn to analyze business data, create insights, and make data-driven decisions.",
      duration: "10 weeks",
      students: "1,500+",
      rating: 4.8,
      price: "$279",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Intermediate"
    },
    {
      title: "Personal Branding Masterclass",
      description: "Build a powerful personal brand that opens doors and creates opportunities.",
      duration: "4 weeks",
      students: "800+",
      rating: 4.9,
      price: "$99",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "All Levels"
    }
  ];

  return (
    <section id="academy" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Edel Academy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with our industry-leading courses designed by experts 
            and trusted by thousands of professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {course.students}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="btn-primary text-sm px-6 py-2">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary flex items-center space-x-2 mx-auto">
            <BookOpen size={20} />
            <span>Browse All Courses</span>
          </button>
        </div>

        {/* Academy Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Completion Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;