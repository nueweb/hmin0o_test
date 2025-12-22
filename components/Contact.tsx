
import React from 'react';
import { Mail, Phone, MessageCircle, ExternalLink, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Abstract Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center text-white space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            전략이 담긴 <span className="text-orange">성공 방정식</span>을<br/>
            함께 만들어 가겠습니다.
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl leading-relaxed">
            한현민 마케터와 함께 성과를 만들 준비가 되셨나요?<br/>
            언제든 편하게 연락 주시면 실리 있는 제안으로 답하겠습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6 w-full pt-10">
            <a href="mailto:4mins12@gmail.com" className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-orange rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <p className="text-blue-200 text-sm font-bold mb-2">E-mail</p>
              <p className="text-xl font-bold">4mins12@gmail.com</p>
            </a>

            <a href="tel:010-9900-2861" className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <p className="text-blue-200 text-sm font-bold mb-2">Phone</p>
              <p className="text-xl font-bold">010-9900-2861</p>
            </a>

            <a 
              href="https://notefolio.net/ai-page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 border border-orange/30 p-8 rounded-[32px] hover:bg-orange transition-all group relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-white text-navy rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <ExternalLink className="w-7 h-7" />
              </div>
              <p className="text-orange group-hover:text-white text-sm font-bold mb-2 transition-colors">Notefolio Channel</p>
              <p className="text-xl font-bold flex items-center justify-center space-x-2">
                <span>포트폴리오</span>
                <ArrowUpRight className="w-5 h-5" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
