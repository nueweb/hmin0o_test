
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg shadow-lg shadow-navy/20">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="text-navy font-extrabold text-xl tracking-tighter uppercase">Han Hyunmin</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-semibold text-gray-600">
          <a href="#about" className="hover:text-orange transition-colors">Philosophy</a>
          <a href="#portfolio" className="hover:text-orange transition-colors">Channel</a>
          <a href="#skills" className="hover:text-orange transition-colors">Skills</a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="https://notefolio.net/ai-page" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-slate-50 text-navy border border-navy/10 px-6 py-2.5 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300"
          >
            <span>Notefolio</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
