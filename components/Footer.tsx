
import React from 'react';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-lg">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-navy font-black text-lg tracking-tighter uppercase">Han Hyunmin</span>
          </div>

          <div className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Han Hyunmin. All rights reserved.
          </div>

          <div className="flex space-x-6 text-gray-400">
            <a href="https://notefolio.net/ai-page" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors" title="Notefolio Portfolio">
              <ExternalLink className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-orange transition-colors"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
