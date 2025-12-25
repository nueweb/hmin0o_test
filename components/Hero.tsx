
import React from 'react';
import { Mail, Phone, ArrowRight, Share2, Target, Zap, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full bg-slate-50 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-l from-slate-100 to-white"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fadeInUp">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-orange font-bold tracking-widest text-sm bg-orange/5 w-fit px-4 py-2 rounded-full border border-orange/10">
                <Target className="w-4 h-4" />
                <span>STRATEGIC MARKETER & CONTENT CREATOR</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-navy leading-[1.2] tracking-tighter">
                <span className="text-orange block mb-2">"WHY"</span>
                왜 이거 디자인<br />
                해야 해?
              </h1>
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed font-semibold">
                디자인 이전에 전략을 설계하는<br/>
                <span className="text-navy">마케터 한현민</span>입니다.
              </p>
            </div>

            {/* Contact Info Directly in Hero */}
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100 max-w-md">
              <div className="flex items-center space-x-3 text-lg font-bold text-navy/80">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  <Mail className="w-5 h-5 text-orange" />
                </div>
                <a href="mailto:4mins12@gmail.com" className="hover:text-orange transition-colors">4mins12@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-lg font-bold text-navy/80">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  <Phone className="w-5 h-5 text-orange" />
                </div>
                <a href="tel:010-9900-2861" className="hover:text-orange transition-colors">010-9900-2861</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://notefolio.net/ai-page" target="_blank" rel="noopener noreferrer" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-navy/90 transition-custom shadow-xl shadow-navy/20 group">
                <span>채널 보러가기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="bg-white text-navy border-2 border-navy px-10 py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-slate-50 transition-custom">
                자기소개 & 철학
              </a>
            </div>
          </div>

          {/* Strategic Graphic Composition */}
          <div className="relative group">
            <div className="relative z-10 w-full aspect-square bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(10,25,47,0.15)] overflow-hidden border border-slate-100 flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-orange/5 opacity-50"></div>
              
              <div className="relative flex flex-col items-center justify-center space-y-8 animate-pulse duration-4000">
                <div className="w-32 h-32 bg-navy rounded-3xl rotate-12 flex items-center justify-center shadow-2xl relative">
                   <Target className="w-16 h-16 text-white -rotate-12" />
                   <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange rounded-full flex items-center justify-center shadow-lg -rotate-12 border-4 border-white">
                      <Zap className="w-6 h-6 text-white" />
                   </div>
                </div>
                <div className="flex space-x-6">
                   <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                      <BarChart3 className="w-10 h-10 text-navy/40" />
                   </div>
                   <div className="w-20 h-20 bg-orange/10 rounded-2xl flex items-center justify-center border border-orange/20 shadow-sm">
                      <Share2 className="w-10 h-10 text-orange" />
                   </div>
                </div>
              </div>

              <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-navy/5 to-transparent rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-orange/5 to-transparent -rotate-45"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-4 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-100">
              <p className="text-navy font-black text-2xl">ROI Focused</p>
              <p className="text-orange text-sm font-bold uppercase tracking-widest">Strategy over Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
