
import React from 'react';
import { STRENGTHS } from '../constants';
import { Counter } from './Counter';

const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange font-bold tracking-widest uppercase text-sm">Our Strength</span>
          <h2 className="text-4xl font-extrabold text-navy mt-2">한현민 마케터와 함께해야 하는 이유</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STRENGTHS.map((strength, index) => (
            <div 
              key={index}
              className="group p-10 rounded-3xl border-2 border-gray-100 hover:border-orange/20 hover:bg-orange/[0.02] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-500 mb-2">{strength.title}</h3>
              <div className="text-5xl font-black text-navy mb-6 tracking-tight">
                <Counter end={strength.value} />
                <span className="text-orange">{strength.suffix}</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
