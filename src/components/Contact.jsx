import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

// Web3Forms Access Key. Get yours for free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "dhushyanthan12b@gmail.com",
      link: "mailto:dhushyanthan12b@gmail.com",
      color: "cyan"
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+91 76958 18365",
      link: "tel:+917695818365",
      color: "purple"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+91 76958 18365",
      link: "https://wa.me/917695818365",
      color: "green"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dhushyanthan-m",
      link: "https://linkedin.com/in/dhushyanthan-m",
      color: "cyan"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/Dhushyanthan005",
      link: "https://github.com/Dhushyanthan005",
      color: "purple"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSubmitStatus(null);

    // If Web3Forms has default placeholder, simulate email sending for testing
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setTimeout(() => {
        setIsSending(false);
        setSubmitStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        console.log("Mock email sent successfully with Web3Forms. Form data:", formData);
      }, 1500);
      return;
    }

    // Actual Web3Forms API request
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.user_name,
        email: formData.user_email,
        subject: formData.subject || "Contact Form Submission",
        message: formData.message
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Form submission failed");
      }
    })
    .then((data) => {
      if (data.success) {
        setIsSending(false);
        setSubmitStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        setIsSending(false);
        setSubmitStatus('error');
      }
    })
    .catch((error) => {
      setIsSending(false);
      setSubmitStatus('error');
      console.error("Web3Forms submission error:", error);
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-background-secondary overflow-hidden">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Get In Touch
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Contact Me
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-20 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 origin-left"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info Panels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-heading text-white">
              Let's build something <span className="text-accent-cyan">incredible</span> together!
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-md font-sans">
              I am currently looking for software developer roles, internships, and placement opportunities. Drop me a line, shoot an email, or connect via LinkedIn.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    key={idx}
                    className="block group"
                  >
                    <Card
                      hoverGlow={true}
                      glowColor={info.color}
                      className="p-4 flex items-center gap-4 bg-background-primary/70 border border-white/5 group-hover:border-accent-cyan/30"
                    >
                      <div className={`p-3 rounded-xl ${
                        info.color === 'cyan'
                          ? 'bg-accent-cyan/10 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                          : info.color === 'green'
                          ? 'bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                          : 'bg-accent-purple/10 text-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.1)]'
                      } transition-transform group-hover:scale-110`}>
                        <Icon className="text-lg" />
                      </div>
                      <div>
                        <span className="block text-xs text-white/40 uppercase font-mono tracking-wider">
                          {info.label}
                        </span>
                        <span className="text-white text-sm font-medium hover:text-accent-cyan transition-colors">
                          {info.value}
                        </span>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Card
              hoverGlow={false}
              className="p-8 bg-background-primary/80 border border-white/5 shadow-2xl relative"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form Row: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/60 uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full bg-slate-900/60 border ${
                        errors.user_name ? 'border-red-500' : 'border-white/10 focus:border-accent-cyan'
                      } text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors placeholder-white/20`}
                    />
                    {errors.user_name && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.user_name}</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/60 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      className={`w-full bg-slate-900/60 border ${
                        errors.user_email ? 'border-red-500' : 'border-white/10 focus:border-accent-cyan'
                      } text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors placeholder-white/20`}
                    />
                    {errors.user_email && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.user_email}</span>
                    )}
                  </div>
                </div>

                {/* Form Row: Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider block">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Recruitment Opportunity"
                    className="w-full bg-slate-900/60 border border-white/10 focus:border-accent-cyan text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors placeholder-white/20"
                  />
                </div>

                {/* Form Row: Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider block">
                    Your Message
                  </label>
                  <textarea 
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your job opening or query here..."
                    className={`w-full bg-slate-900/60 border ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-accent-cyan'
                    } text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors placeholder-white/20 resize-none`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isSending}
                    className="w-full sm:w-auto gap-2 flex items-center justify-center py-3 px-8"
                  >
                    {isSending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-xs group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Submit Toast Status message inside card */}
                  {submitStatus === 'success' && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm font-medium"
                    >
                      Message transmitted successfully! I will reply shortly.
                    </motion.span>
                  )}
                  {submitStatus === 'error' && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm font-medium"
                    >
                      Transmission failed. Please try emailing directly.
                    </motion.span>
                  )}
                </div>

              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
