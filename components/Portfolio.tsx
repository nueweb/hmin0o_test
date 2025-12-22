
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-orange font-bold tracking-widest uppercase text-sm">Our Channel</span>
            <h2 className="text-4xl font-extrabold text-navy mt-2">전략이 깃든 작업물들</h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm">
            단순한 디자인이 아닌, 비즈니스 성과를 위해 설계된 '채널'의 결과물들입니다. 각 이미지를 클릭하면 상세 내용을 확인하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 block ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="text-gray-400 group-hover:text-orange transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-navy mb-3 group-hover:text-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
