'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui potresti aggiungere la logica per inviare il form
    alert('See you soon! 👽');
    setFormData({ name: '', email: '', subject: '', message: '' });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`modal-container rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto overscroll-contain shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <h2 className={`text-3xl font-bold text-white font-supersonic`}>
                  Contact me!
                </h2>
              </div>
                              <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/20 text-white border border-white/30 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                ✕
              </button>
            </div>
                          {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    inputMode="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors backdrop-blur-sm"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    inputMode="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors backdrop-blur-sm"
                    placeholder="Your.best@email.com"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  autoComplete="on"
                  inputMode="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors backdrop-blur-sm"
                  placeholder="Object"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  inputMode="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors resize-y min-h-[140px] backdrop-blur-sm"
                  placeholder="Your message for the universe..."
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-xl bg-white/20 border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 active:scale-[0.99] backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <span>🚀</span>
                  Send Message
                </motion.button>
              </form>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
