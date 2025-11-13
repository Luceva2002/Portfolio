const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/luceva2002" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/luca-evangelista-91a2101a3/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/linkedin.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/luc4_evangelist4/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Luca Evangelista</p>
    </footer>
  );
};

export default Footer;
