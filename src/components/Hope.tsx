import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { Facebook, Instagram, Twitter, MessageCircle, Mail, MapPin, Phone, Star } from "lucide-react";

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  services: string[];
  message: string;
};

export default function Hope() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    services: [],
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Stalworld Media Concept transformed our brand identity completely. Their attention to detail and creative approach resulted in a logo and branding package that perfectly represents our company values. The team was professional and delivered beyond our expectations.",
      name: "Kyle Smith",
      role: "Marketing Director, TechVision Inc.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMU21IrrM_sHcBaQNAZi6GIUFLJ4pj8wc5Eg&s"
    },
    {
      id: 2,
      text: "We ordered custom printed merchandise for our annual conference, and Stalworld delivered exceptional quality. The t-shirts, mugs, and bags were all beautifully designed and printed. Our attendees loved them! Will definitely work with them again for our future events.",
      name: "Aliu Rakamad",
      role: "Event Manager, Global Connect",
      avatar: "https://as1.ftcdn.net/jpg/04/63/22/18/1000_F_463221858_50KkvfxxovUaMNlilCmUxrOnTqSpzAlP.jpg"
    },
    {
      id: 3,
      text: "As a startup, we needed a complete branding package that wouldn't break the bank. Stalworld Media Concept provided exactly what we needed - a professional logo, business cards, and social media graphics that helped us establish our presence. Highly recommended!",
      name: "Jennifer Nike",
      role: "Founder, Bloom & Grow",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQZJDElyKAnBd88ZlVkpY3ne0cmUYLz12zQ&s"
    },
    {
      id: 4,
      text: "The team at Stalworld understood our vision from day one. They created stunning packaging designs for our product line that not only looked great but also communicated our brand story effectively. The printing quality was exceptional across all materials.",
      name: "David Chen",
      role: "Product Manager, Nature's Best",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Ohfd1FRMb4-acPk-W70T7V6xIAQCZtBxnw&s"
    },
    {
      id: 5,
      text: "Working with Stalworld was a seamless experience. They delivered our social media graphics ahead of schedule, and the designs received tremendous engagement. Their understanding of current design trends really set our content apart from competitors.",
      name: "Emily Rodriguez",
      role: "Social Media Manager, Trendsetters",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      id: 6,
      text: "The corporate merchandise Stalworld created for our company exceeded all expectations. The quality of printing on the items was superb, and the designs perfectly captured our brand identity. Our employees and clients were equally impressed with the final products.",
      name: "James Wilson",
      role: "HR Director, Corporate Solutions",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iD90aPcN0haaHcR2Xne_MSDG6xn3iiD2ZA&s"
    }
  ];

  const serviceOptions = [
    "Logo Design",
    "Poster Design",
    "Social Media Graphics",
    "T-shirt Printing",
    "Mug Printing",
    "Packaging",
    "Corporate Merchandise",
    "Event Swag",
    "Other"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox") {
      const val = value;
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, val]
          : prev.services.filter(service => service !== val)
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        services: [],
        message: ""
      });
    }, 3000);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonial" className="testimonials-section py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-header text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#c4871f] mb-4 relative inline-block">
              What Our Clients Say
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#c4871f] mt-2" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Stalworld Media Concept.
            </p>
          </div>

          <div className="testimonials-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="quote-icon text-4xl text-[#c4871f] opacity-30 mb-4">❝</div>
                <p className="testimonial-text text-gray-700 italic mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="rating flex gap-1 text-[#ffc107] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} />)}
                </div>
                <div className="client-info flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="client-avatar w-14 h-14 rounded-full border-2 border-[#c4871f] object-cover" />
                  <div className="client-details">
                    <h4 className="text-[#c4871f] font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div id="cta" className="cta-section mt-16 p-8 md:p-12 rounded-xl bg-gradient-to-br from-black to-gray-900 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#c4871f] mb-4">Ready to Transform Your Brand?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Join our satisfied clients and let us bring your creative vision to life with our design and printing services.</p>
              <button onClick={() => handleScrollToSection("contact")} className="btn inline-block px-8 py-3 bg-gradient-to-r from-[#c4871f] to-[#a56c1a] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img src="leave.png" alt="Studio work" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="about-text">
              <h2 className="text-3xl md:text-4xl font-bold text-[#c4871f] mb-6">About Us</h2>
              <p className="text-gray-700 mb-4 text-lg">
                At <strong className="text-[#c4871f]">Stalworld Media Concept</strong>, we design and print bespoke pieces for clients from events to corporate identity campaigns. Design isn't just how it looks — it's how it communicates.
              </p>
              <p className="text-gray-700 mb-6 text-lg">We've worked across events, digital campaigns and product branding. Quality and clear messaging are our priorities.</p>
              <button onClick={() => handleScrollToSection("contact")} className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-[#c4871f] transition-all duration-300 transform hover:scale-105 animate-pulse">
                Work with us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="contact-info bg-gradient-to-br from-gray-900 h-[100vh] to-black text-white p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold text-[#c4871f] mb-6 relative">Get In Touch
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#c4871f] mt-2" />
              </h2>
              <p className="text-gray-300 mb-8 text-lg">Have a project in mind or want to learn more about our services? We'd love to hear from you. Get in touch with us using the form or contact details below.</p>

              <div className="contact-details space-y-6 mb-8">
                <div className="contact-item flex items-start gap-4">
                  <div className="contact-icon w-12 h-12 bg-[#c4871f]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#c4871f]" size={24} />
                  </div>
                  <div className="contact-text">
                    <h4 className="text-[#c4871f] font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-300">47b, New Ipaja Road, Iyana Ipaja, Lagos state, Nigeria</p>
                  </div>
                </div>

                <div className="contact-item flex items-start gap-4">
                  <div className="contact-icon w-12 h-12 bg-[#c4871f]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#c4871f]" size={24} />
                  </div>
                  <div className="contact-text">
                    <h4 className="text-[#c4871f] font-semibold mb-1">Phone Number</h4>
                    <p className="text-gray-300">(+234)8023908821</p>
                  </div>
                </div>

                <div className="contact-item flex items-start gap-4">
                  <div className="contact-icon w-12 h-12 bg-[#c4871f]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#c4871f]" size={24} />
                  </div>
                  <div className="contact-text">
                    <h4 className="text-[#c4871f] font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-300">stalworld@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="social-links flex gap-4">
                <a href="#" className="social-icon w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c4871f] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="social-icon w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c4871f] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="social-icon w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c4871f] transition-colors"><Twitter size={20} /></a>
                <a href="#" className="social-icon w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c4871f] transition-colors"><MessageCircle size={20} /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold text-[#c4871f] mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name <span className="text-red-500">*</span></label>
                    <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4871f] focus:border-transparent outline-none transition-all" placeholder="Enter your first name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4871f] focus:border-transparent outline-none transition-all" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4871f] focus:border-transparent outline-none transition-all" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4871f] focus:border-transparent outline-none transition-all" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In <span className="text-red-500">*</span></label>
                  <select id="service" name="service" required value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4871f] focus:border-transparent outline-none transition-all">
                    <option value="">Select a service</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="custom-printing">Custom Printing</option>
                    <option value="branding-solutions">Branding Solutions</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Others</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-3">Specific Services Needed</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((service, index) => {
                      const val = service.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <div key={index} className="checkbox-item flex items-center">
                          <input type="checkbox" id={`service-${index}`} name="services" value={val} checked={formData.services.includes(val)} onChange={handleInputChange} className="w-4 h-4 text-[#c4871f] rounded focus:ring-[#c4871f] focus:ring-2" />
                          <label htmlFor={`service-${index}`} className="ml-2 text-gray-700">{service}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Project Details <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4871f] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project, timeline, and any specific requirements..." />
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#c4871f] to-[#a56c1a] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">Send Message</button>

                {formSubmitted && <div className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center animate-fade-in">Thank you! Your message has been sent successfully. We'll get back to you soon.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="footer-content">
            <p className="text-xl font-semibold mb-6">Stalworld Media Concept - Turning concepts into creation</p>
            <div className="footer-links flex flex-wrap justify-center gap-6 mb-6">
              <a href="#home" className="text-[#c4871f] hover:text-white transition-colors">Home</a>
              <a href="#what-we-do" className="text-[#c4871f] hover:text-white transition-colors">What We Do</a>
              <a href="#services" className="text-[#c4871f] hover:text-white transition-colors">Services</a>
              <a href="#testimonial" className="text-[#c4871f] hover:text-white transition-colors">Testimonial</a>
              <a href="#about" className="text-[#c4871f] hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-[#c4871f] hover:text-white transition-colors">Contact</a>
            </div>
            <div className="copyright text-gray-400">&copy; {new Date().getFullYear()} Stalworld Media Concept. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Inline styles (kept local for now) */}
      <style>{`
        .btn {
          display: inline-block;
          padding: 14px 32px;
          background: linear-gradient(to right, #c4871f, #a56c1a);
          color: white;
          font-weight: 600;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(196, 135, 31, 0.3);
          border: none;
          cursor: pointer;
        }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(196, 135, 31, 0.4); }
        .contact-icon { transition: all 0.3s ease; }
        .contact-item:hover .contact-icon { transform: scale(1.1); background: rgba(196, 135, 31, 0.3); }
        .social-icon { transition: all 0.3s ease; }
        .social-icon:hover { transform: translateY(-3px); }
        .testimonial-card { transition: all 0.3s ease; }
        .testimonial-card:hover { transform: translateY(-5px); }
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100%{ opacity:1; transform:scale(1) } 50%{ opacity:0.8; transform:scale(1.05) } }
        .animate-pulse { animation: pulse 2s infinite; }
        @media (max-width: 768px) {
          .footer-links { flex-direction: column; gap: 3; }
          .testimonials-container { grid-template-columns: 1fr; }
          .contact-section { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}