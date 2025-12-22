
import React from 'react';
import { ShieldCheck, Target, BarChart3, TrendingUp, Search, PenTool, Figma } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <span className="text-orange font-bold tracking-widest text-sm mb-4 block uppercase">Marketer Profile</span>
            <h2 className="text-navy text-5xl font-black mb-8 leading-tight">
              실리를 추구하는<br/>
              전략가 한현민입니다.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
              <p>
                2년 차 마케터로 콘텐츠와 퍼포먼스 마케터로 근무했습니다. 필요하다면 기획 역할도 담당했습니다. 저는 <b>'실리'를 추구하는 마케팅</b>을 좋아합니다.
              </p>
              <p>
                적어도 디자인은 제작하는 데 드는 비용과 시간이 그 디자인으로 얻는 순이익보다 적어야 합니다. 때문에 항상 <b>"왜" 이걸 디자인해야 하는지</b> 의문부터 해결하고 디자인합니다. 이런 과정이 불필요한 시행착오, 즉 '삽질'을 획기적으로 줄여줍니다.
              </p>
              
              <div className="p-6 bg-navy text-white rounded-2xl border-l-8 border-orange">
                <p className="text-xl font-bold italic">"제작 비용(Cost) &lt; 순이익(Profit)"</p>
                <p className="text-sm text-blue-200 mt-2">이 공식이 성립하지 않는 디자인은 마케팅적으로 가치가 없습니다.</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-orange/10 border border-orange/20 text-orange rounded-xl text-sm font-black flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
                  <span>UI/UX Design : Figma</span>
                </span>
                <span className="px-4 py-2 bg-navy/5 border border-navy/10 text-navy rounded-xl text-sm font-black">Performance Marketing</span>
                <span className="px-4 py-2 bg-navy/5 border border-navy/10 text-navy rounded-xl text-sm font-black">Content Strategy</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border-2 border-transparent hover:border-orange transition-custom group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-navy text-white rounded-2xl flex items-center justify-center group-hover:bg-orange transition-colors">
                  <PenTool className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-navy">다양한 디자인 제작 경험</h3>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                디자인 자체에 대한 애정도 있어서 로고, 편집, 웹, 상세 페이지 등 여러 디자인을 제작한 경험이 있습니다. 제가 만든 디자인이 사람 행동을 바꾸거나, 결과로 나오는 일에 큰 희열을 느낍니다.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border-2 border-transparent hover:border-orange transition-custom group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-navy text-white rounded-2xl flex items-center justify-center group-hover:bg-orange transition-colors">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-navy">전환율 최적화 상세페이지</h3>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                현재는 전환율에 직접 관여하여 <b>상세 페이지를 주로 제작</b>하고 있습니다. 단순히 예쁜 페이지가 아니라, 유입된 고객이 구매 버튼을 누르게 만드는 심리학적 장치들을 곳곳에 설계합니다.
              </p>
            </div>

            <div className="bg-orange p-10 rounded-[32px] shadow-xl shadow-orange/20 text-white group">
               <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white text-orange rounded-2xl flex items-center justify-center">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black">근거 있는 기획</h3>
              </div>
              <p className="opacity-90 font-medium leading-relaxed">
                마케터 한현민의 디자인은 데이터와 심리라는 명확한 근거 위에서 시작됩니다. 기획 단계에서의 깊은 고민이 성공적인 결과물로 이어지는 지름길임을 알고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
