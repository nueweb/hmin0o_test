
import React from 'react';
import { SKILLS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange font-bold tracking-widest uppercase text-sm">Experience & Skills</span>
            <h2 className="text-4xl font-extrabold text-navy mt-2 mb-8">데이터와 툴을 다루는<br/>프로페셔널한 숙련도</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              마케팅은 감각이 아닌 시스템입니다. 최신 마케팅 기술과 분석 툴을 활용하여 가설을 세우고, 실행하고, 검증합니다. 한현민 마케터는 실행 가능한 데이터를 바탕으로 의사결정을 지원합니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-navy">GA4</div>
                <div className="flex-1">
                  <p className="font-bold text-navy">Google Analytics 4</p>
                  <p className="text-sm text-gray-500">유입 경로 및 행동 데이터 정밀 분석</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-navy">Figma</div>
                <div className="flex-1">
                  <p className="font-bold text-navy">UI/UX Design Tools</p>
                  <p className="text-sm text-gray-500">전환 최적화 레이아웃 프로토타이핑</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-gray-200 h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={SKILLS}
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={100} 
                  tick={{ fontSize: 13, fontWeight: 700, fill: '#0A192F' }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={32}>
                  {SKILLS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
