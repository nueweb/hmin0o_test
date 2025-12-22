
import React from 'react';
import { Layout, Zap, TrendingUp, BookOpen, MessageSquare } from 'lucide-react';
import { Project, Strength, Skill } from './types';

export const PROJECTS: Project[] = [
  // 상세 페이지 디자인 (3개)
  {
    id: 1,
    title: "구매 전환율 극대화 상세페이지 #1",
    category: "상세 페이지 디자인",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description: "고객 심리 분석을 바탕으로 이탈률을 줄이고 결제 버튼 클릭을 유도하는 논리적 구조의 상세페이지입니다.",
    link: "https://notefolio.net/ai-page/448892"
  },
  {
    id: 2,
    title: "제품의 본질을 파는 상세페이지 #2",
    category: "상세 페이지 디자인",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    description: "공급자 관점이 아닌 사용자 관점에서 '왜 이 제품인가'에 대한 해답을 시각적으로 풀어냈습니다.",
    link: "https://notefolio.net/ai-page/448698"
  },
  {
    id: 3,
    title: "데이터 기반 상세페이지 리뉴얼 #3",
    category: "상세 페이지 디자인",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad39?q=80&w=1200&auto=format&fit=crop",
    description: "기존 페이지의 문제점을 파악하고 소구점을 재설계하여 실질적인 ROI 상승을 이끌어낸 프로젝트입니다.",
    link: "https://notefolio.net/ai-page/448692"
  },
  // 인스타 광고 배너 (3개)
  {
    id: 4,
    title: "스크롤을 멈추는 인스타 배너 #1",
    category: "인스타 광고 배너",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    description: "강렬한 첫인상과 명확한 혜택 강조로 클릭률(CTR)을 극대화한 광고 소재입니다.",
    link: "https://notefolio.net/ai-page/448691"
  },
  {
    id: 5,
    title: "타겟 맞춤형 인스타 배너 #2",
    category: "인스타 광고 배너",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    description: "페르소나에 맞춘 카피라이팅과 트렌디한 디자인이 결합된 퍼포먼스 마케팅용 배너입니다.",
    link: "https://notefolio.net/ai-page/448695"
  },
  {
    id: 6,
    title: "브랜드 스토리 텔링 배너 #3",
    category: "인스타 광고 배너",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    description: "단순 판매를 넘어 브랜드의 가치를 전달하고 팬덤을 형성하는 콘텐츠형 소재입니다.",
    link: "https://notefolio.net/ai-page/448693"
  },
  // 로고 디자인 (1개)
  {
    id: 7,
    title: "브랜드 정체성 로고 디자인",
    category: "로고 디자인",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    description: "브랜드의 핵심 철학을 간결하고 강력한 심볼로 표현한 아이덴티티 작업입니다.",
    link: "https://notefolio.net/ai-page/448694"
  }
];

export const STRENGTHS: Strength[] = [
  {
    title: "매출 증대 상세페이지",
    value: 1,
    suffix: "분",
    description: "제품 사진 한 장이면 충분합니다. 1분 안에 매출이 오르는 상세페이지 구조를 기획합니다.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "고효율 내재화 설계",
    value: 0,
    suffix: "원",
    description: "고가 외주 없이 누구나 쉽게 따라 할 수 있는 논리적 구조와 카피 설계를 전수합니다.",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    title: "필승 구조 솔루션",
    value: 100,
    suffix: "%",
    description: "마케팅 심리학을 기반으로, 고객이 결제할 수밖에 없는 상세페이지 구조를 상담해 드립니다.",
    icon: <MessageSquare className="w-8 h-8" />
  }
];

export const SKILLS: Skill[] = [
  { name: "UI/UX Design : Figma", level: 95, color: "#FF6B00" },
  { name: "상세페이지 기획", level: 98, color: "#0A192F" },
  { name: "전략적 카피라이팅", level: 95, color: "#FF6B00" },
  { name: "콘텐츠 마케팅", level: 92, color: "#0A192F" },
  { name: "데이터 분석 (GA4)", level: 88, color: "#FF6B00" }
];
