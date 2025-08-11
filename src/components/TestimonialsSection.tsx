import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Edel Digital transformed our online presence completely. Their strategic approach and creative solutions resulted in a 400% increase in our web traffic and significantly improved our conversion rates."
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GreenEarth Co.",
      company: "GreenEarth Co.",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The team at Edel Digital is exceptional. They don't just deliver services; they become true partners in your success. Our brand has never looked better, and our social media engagement has skyrocketed."
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, FinanceFlow",
      company: "FinanceFlow",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with Edel Digital was a game-changer for our startup. Their comprehensive digital strategy helped us establish credibility in the market and attract high-quality leads consistently."
    },
    {
      name: "David Thompson",
      position: "VP Marketing, HealthCare Plus",
      company: "HealthCare Plus",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The professionalism and expertise at Edel Digital is unmatched. They delivered beyond our expectations and helped us navigate the complex healthcare marketing landscape with ease."
    }
  ];

  const reasons = [
    {
      title: "Expert Team",
      description: "Industry-leading professionals with proven track records",
      icon: "👑"
    },
    {
      title: "Proven Results",
      description: "Data-driven strategies that deliver measurable ROI",
      icon: "📈"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it",
      icon: "🕐"
    },
    {
      title: "Innovation First",
      description: "Cutting-edge solutions that keep you ahead of competitors",
      icon: "🚀"
    },
    {
      title: "Transparent Process",
      description: "Clear communication and regular progress updates",
      icon: "🔍"
    },
    {
      title: "Long-term Partnership",
      description: "We grow with your business for sustained success",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Edel Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg card-hover relative">
              <Quote className="absolute top-4 right-4 text-blue-200" size={32} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Reasons to Love Edel */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">More Reasons to Love Edel Digital</h3>
            <p className="text-blue-100 text-lg">It's an Edel Digital thing – experience the difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;