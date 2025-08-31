'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const { isDark } = useTheme();

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
            className={`modal-container rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <h2 className={`text-2xl font-bold text-white font-supersonic`}>
                  CV
                </h2>
                <span className="text-2xl">👇</span>
              </div>
              <button
                onClick={onClose}
                className={`w-8 h-8 rounded-full ${isDark ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-black/20 text-black hover:bg-black/30'} flex items-center justify-center transition-colors backdrop-blur-sm`}
              >
                ✕
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[70vh] rounded-xl overflow-hidden">
              <iframe
                src="/CVLuceva.pdf"
                className="w-full h-full"
                title="Curriculum Vitae di Luca Evangelista"
              />
            </div>

            {/* Footer */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
