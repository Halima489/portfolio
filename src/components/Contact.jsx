import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, phone, location, github, linkedin } = portfolioData?.personalInfo || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xyezjonn", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 text-white px-6 sm:px-10 lg:px-16 bg-blue">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mt-3 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#161F30] flex items-center justify-center text-cyan-400 font-bold">
                  📍
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Location</h4>
                  <p className="text-white font-semibold">{location || 'Sylhet, Bangladesh'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#161F30] flex items-center justify-center text-cyan-400 font-bold">
                  ✉️
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Email</h4>
                  <p className="text-white font-semibold">{email || 'halimabegum1301@gmail.com'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#161F30] flex items-center justify-center text-cyan-400 font-bold">
                  📞
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Phone</h4>
                  <p className="text-white font-semibold">{phone || '+880 1834-315182'}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {github && (
                  <a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 rounded-xl bg-[#161F30] hover:bg-slate-700 text-gray-300 hover:text-white transition text-sm font-medium"
                  >
                    GitHub
                  </a>
                )}
                {linkedin && (
                  <a 
                    href={linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 rounded-xl bg-[#161F30] hover:bg-slate-700 text-gray-300 hover:text-white transition text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#111827] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input 
                  id="name"
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#1A2333] border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input 
                  id="email"
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full bg-[#1A2333] border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  id="subject"
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full bg-[#1A2333] border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What would you like to say?"
                  className="w-full bg-[#1A2333] border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
                ></textarea>
              </div>

              <button
  type="submit"
  disabled={status === 'sending'}
 className="w-full py-3.5 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-all shadow-lg"
>
  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message →'}
</button>

              {status === 'sent' && (
                <p className="text-sm text-emerald-400 text-center pt-2">
                  Thanks — your message has been sent directly to my email!
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm text-rose-400 text-center pt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}