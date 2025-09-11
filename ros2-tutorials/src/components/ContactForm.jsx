import React, { useState, useEffect } from "react";
import userIcon from "../assets/user.png";
import emailIcon from "../assets/email.png";
import messageIcon from "../assets/message.png";

export default function ContactForm() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        setIsSubmitting(false);
        setTimeout(() => setSuccess(false), 4000);
      }, 1500);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 hover:bg-white/15 transition-all duration-300 cursor-pointer">
            <span className="text-2xl animate-wiggle">💬</span>
            <span className="text-white/80 font-medium">Get in Touch</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:text-cyan-300 transition-colors duration-300 cursor-default">
            Contact Us
          </h3>
          <p className="text-xl text-white/80 max-w-2xl mx-auto hover:text-white/90 transition-colors duration-300 cursor-default">
            Have questions about ROS2? Need help with your robotics project? We're here to help!
          </p>
        </div>

        {/* Success Notification */}
        {success && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl animate-bounce-in">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Message sent successfully!</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`transform transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">Let's Connect</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-blue-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold group-hover/item:text-cyan-300 transition-colors duration-300">Email</p>
                    <p className="text-white/70 group-hover/item:text-white/90 transition-colors duration-300">contact@ros2tutorials.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-purple-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold group-hover/item:text-cyan-300 transition-colors duration-300">Location</p>
                    <p className="text-white/70 group-hover/item:text-white/90 transition-colors duration-300">Global Community</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-green-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold group-hover/item:text-cyan-300 transition-colors duration-300">Response Time</p>
                    <p className="text-white/70 group-hover/item:text-white/90 transition-colors duration-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 space-y-6 transform transition-all duration-700 ease-out hover:border-white/40 hover:bg-white/15 transition-form ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Name Field */}
            <div className="group">
              <label className="block text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <img src={userIcon} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" alt="Name" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 hover:border-white/40"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              {errors.name && <p className="text-red-400 text-sm mt-2 animate-shake">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="block text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <img src={emailIcon} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" alt="Email" />
                </div>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 hover:border-white/40"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-2 animate-shake">{errors.email}</p>}
            </div>

            {/* Message Field */}
            <div className="group">
              <label className="block text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">Message</label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <img src={messageIcon} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" alt="Message" />
                </div>
                <textarea
                  placeholder="Tell us about your project or question..."
                  rows="5"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:bg-white/15 hover:border-white/40"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>
              {errors.message && <p className="text-red-400 text-sm mt-2 animate-shake">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                isSubmitting 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes bounce-in {
          0% { transform: translate(-50%, -100px); opacity: 0; }
          50% { transform: translate(-50%, 20px); opacity: 1; }
          70% { transform: translate(-50%, -10px); }
          100% { transform: translate(-50%, 0); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        .transition-form {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}