```tsx
'use client';

import { useState, useEffect, useRef } from 'react';

// CSS Variables injection
const cssVariables = `
  :root {
    --color-text: #1E2634;
    --color-accent: #E8881A;
    --color-border: #D1D9E6;
    --color-primary: #1A3A6B;
    --color-surface: #FFFFFF;
    --color-secondary: #2E6DB4;
    --color-background: #F5F7FA;
    --font-heading: 'Noto Sans KR', sans-serif;
    --font-body: 'Noto Sans KR', sans-serif;
    --text-h1: 48px;
    --text-h2: 36px;
    --text-h3: 24px;
    --text-base: 16px;
    --border-radius: 6px;
    --shadow-card: 0 4px 20px rgba(26, 58, 107, 0.08);
    --shadow-hover: 0 8px 32px rgba(26, 58, 107, 0.15);
    --shadow-button: 0 2px 8px rgba(26, 58, 107, 0.20);
    --spacing-section-padding: 100px 0;
    --spacing-element-gap: 24px;
    --container-max-width: 1280px;
    --animation-duration: 0.3s;
    --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// Unsplash image helper
const getUnsplashUrl = (keyword: string, width = 1920, height = 1080) => {
  const encoded = encodeURIComponent(keyword);
  return `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=${width}&h=${height}&fit=crop&q=80&auto=format&sig=${encoded}`;
};

const unsplashImages: Record<string, string> = {
  'modern corporate architecture': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80',
  'business values teamwork': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80',
  'professional business consultation': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=600&fit=crop&q=80',
  'corporate achievement milestone': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=800&fit=crop&q=80',
};

// Core Values Data
interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
    title: '신뢰',
    description: '고객과의 약속을 지키는 투명한 경영으로 흔들리지 않는 파트너십을 구축합니다.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>`,
    title: '혁신',
    description: '변화를 두려워하지 않는 창의적 사고로 산업의 새로운 기준을 제시합니다.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>`,
    title: '전문성',
    description: '수십 년간 축적된 경험과 기술력으로 최고 수준의 솔루션을 제공합니다.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>`,
    title: '성장',
    description: '고객과 함께 지속적으로 발전하며 상생의 생태계를 만들어 갑니다.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
    title: '책임',
    description: '기업 시민으로서 사회와 환경에 대한 책임을 다하겠습니다.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>`,
    title: '도전',
    description: '한계를 넘는 도전 정신으로 불가능을 가능으로 만들어 냅니다.',
  },
];

// Stats Data
interface Stat {
  number: string;
  suffix: string;
  label: string;
  sublabel: string;
  targetNum: number;
}

const stats: Stat[] = [
  { number: '40', suffix: '+', label: '창립', sublabel: '변하지 않는 신뢰와 전통', targetNum: 40 },
  { number: '1,200', suffix: '+', label: '누적 프로젝트', sublabel: '다양한 산업 분야의 풍부한 경험', targetNum: 1200 },
  { number: '300', suffix: '+', label: '파트너사', sublabel: '탄탄한 협력 네트워크', targetNum: 300 },
  { number: '500', suffix: '+', label: '전문 인력', sublabel: '각 분야 최고의 전문가 집단', targetNum: 500 },
  { number: '98', suffix: '%', label: '고객 만족도', sublabel: '지속적인 품질 개선의 결과', targetNum: 98 },
  { number: '15', suffix: '+', label: '국내외 사업장', sublabel: '폭넓은 사업 영역', targetNum: 15 },
];

// Footer links
const footerLinks = [
  {
    title: '회사소개',
    links: ['기업 개요', '경영 이념', '조직도', '연혁'],
  },
  {
    title: '사업분야',
    links: ['주요 사업', '프로젝트', '기술 역량', '파트너십'],
  },
  {
    title: '홍보센터',
    links: ['공지사항', '뉴스룸', 'IR 정보', '사진/영상'],
  },
  {
    title: '채용정보',
    links: ['인재상', '복리후생', '채용공고', '인턴십'],
  },
  {
    title: '고객지원',
    links: ['온라인 상담', 'FAQ', '찾아오시는 길'],
  },
];

// useCountUp Hook
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startVal = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (target - startVal) + startVal));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
}

// StatCard Component
interface StatCardProps {
  stat: Stat;
  inView: boolean;
  index: number;
}

function StatCard({ stat, inView, index }: StatCardProps) {
  const count = useCountUp(stat.targetNum, 2000, inView);

  const formatNumber = (num: number) => {
    if (num >= 1000) return num.toLocaleString('ko-KR');
    return num.toString();
  };

  return (
    <div
      className="flex flex-col items-center text-center p-8 rounded-lg transition-all"
      style={{
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-card)',
        borderRadius: 'var(--border-radius)',
        transitionDuration: 'var(--animation-duration)',
        transitionTimingFunction: 'var(--animation-easing)',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="text-5xl font-bold mb-2"
        style={{
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(36px, 4vw, 56px)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        {inView ? formatNumber(count) : '0'}
        <span style={{ color: 'var(--color-accent)' }}>{stat.suffix}</span>
      </div>
      <div
        className="text-sm font-semibold mb-1"
        style={{
          color: 'var(--color-primary)',
          fontFamily: 'var(--font-body)',
          letterSpacing: '-0.02em',
        }}
      >
        {stat.label}
      </div>
      <p
        className="text-sm"
        style={{
          color: '#6B7A9A',
          fontFamily: 'var(--font-body)',
          lineHeight: 1.6,
        }}
      >
        {stat.sublabel}
      </p>
    </div>
  );
}

// Main Page Component
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap');
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { font-family: var(--font-body); color: var(--color-text); background: var(--color-background); margin: 0; padding: 0; }
          .nav-link:hover { color: var(--color-accent) !important; }
          .footer-link:hover { color: var(--color-accent) !important; }
          .btn-primary { 
            background: var(--color-accent); 
            color: var(--color-surface); 
            transition: all var(--animation-duration) var(--animation-easing);
            box-shadow: var(--shadow-button);
          }
          .btn-primary:hover { 
            background: #D07A15; 
            transform: translateY(-1px); 
            box-shadow: var(--shadow-hover); 
          }
          .btn-outline-white {
            background: var(--color-surface);
            color: var(--color-primary);
            border: 2px solid var(--color-surface);
            transition: all var(--animation-duration) var(--animation-easing);
            box-shadow: var(--shadow-button);
          }
          .btn-outline-white:hover {
            background: transparent;
            color: var(--color-surface);
            transform: translateY(-1px);
          }
          .btn-ghost-white {
            background: transparent;
            color: var(--color-surface);
            border: 2px solid rgba(255,255,255,0.6);
            transition: all var(--animation-duration) var(--animation-easing);
          }
          .btn-ghost-white:hover {
            background: rgba(255,255,255,0.15);
            border-color: var(--color-surface);
          }
          .value-card {
            transition: all var(--animation-duration) var(--animation-easing);
          }
          .value-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-hover) !important;
          }
          .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-hover) !important;
          }
        `
      }} />

      <div style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
        {/* Navigation */}
        <header
          role="banner"
          className="fixed top-0 left-0 right-0 z-50 transition-all"
          style={{
            background: scrolled ? 'var(--color-surface)' : 'transparent',
            boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
            transitionDuration: 'var(--animation-duration)',
            transitionTimingFunction: 'var(--animation-easing)',
          }}
        >
          <div className="mx-auto px-6 flex items-center justify-between" style={{ maxWidth: 'var(--container-max-width)', height: '72px' }}>
            {/* Logo */}
            <a href="/" className="flex items-center gap-3" aria-label="진흥기업 홈으로 이동">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg font-bold text-white text-sm"
                style={{ background: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
              >
                진흥
              </div>
              <span
                className="font-bold text-lg"
                style={{
                  color: scrolled ? 'var(--color-primary)' : 'var(--color-surface)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                  transitionDuration: 'var(--animation-duration)',
                }}
              >
                진흥기업
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav role="navigation" aria-label="주 메뉴" className="hidden md:flex items-center gap-8">
              {['회사소개', '사업분야', '홍보센터', '채용정보', '고객지원'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="nav-link text-sm font-medium transition-colors"
                  style={{
                    color: scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                  }}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary px-5 py-2.5 rounded-md text-sm font-semibold"
                style={{ textDecoration: 'none', borderRadius: 'var(--border-radius)', fontFamily: 'var(--font-body)' }}
              >
                상담 신청
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="모바일 메뉴 열기"
              aria-expanded={mobileMenuOpen}
              style={{ color: scrolled ? 'var(--color-primary)' : 'var(--color-surface)' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className="md:hidden absolute top-full left-0 right-0 py-4 px-6"
              style={{
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-hover)',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <nav className="flex flex-col gap-4">
                {['회사소개', '사업분야', '홍보센터', '채용정보', '고객지원'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium py-2"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-primary text-center py-3 rounded-md text-sm font-semibold mt-2"
                  style={{ textDecoration: 'none', borderRadius: 'var(--border-radius)' }}
                >
                  상담 신청
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* Section 1: Hero */}
        <section
          role="banner"
          aria-labelledby="hero-heading"
          className="relative flex items-center justify-center"
          style={{ minHeight: '100vh', overflow: 'hidden' }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${unsplashImages['modern corporate architecture']}')`,
            }}
            role="img"
            aria-label="현대적인 기업 건물 배경"
          />
          {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(10, 20, 40, 0.55)' }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(26, 58, 107, 0.4) 0%, rgba(10, 20, 40, 0.2) 100%)' }}
          />

          {/* Content */}
          <div
            className="relative z-10 mx-auto px-6 text-center"
            style={{ maxWidth: 'var(--container-max-width)' }}
          >
            <div className="max-w-4xl mx-auto">
              <p
                className="mb-4 font-medium tracking-widest uppercase text-sm"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
              >
                도전과 혁신으로 산업의 내일을 열다
              </p>
              <h1
                id="hero-heading"
                className="font-bold mb-6"
                style={{
                  color: 'var(--color-surface)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                }}
              >
                신뢰로 만드는
                <br />
                <span style={{ color: 'var(--color-accent)' }}>미래</span>
              </h1>
              <p
                className="mb-10 max-w-2xl mx-auto"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: 1.8,
                  letterSpacing: '-0.01em',
                }}
              >
                진흥기업은 40여 년의 축적된 전문성과 끊임없는 혁신으로 고객과 사회에 실질적인 가치를 창출합니다.
                <br className="hidden sm:block" />
                함께 지속 가능한 미래를 만들어 가겠습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base rounded-md"
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    borderRadius: 'var(--border-radius)',
                    fontSize: 'var(--text-base)',
                  }}
                  aria-label="회사 소개 페이지로 이동"
                >
                  회사 소개 보기
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/business"
                  className="btn-ghost-white inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base rounded-md"
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    borderRadius: 'var(--border-radius)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-surface)',
                  }}
                >
                  사업 분야 보기
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            aria-hidden="true"
          >
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)' }}>Scroll</span>
            <div
              className="w-0.5 h-12"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
                animation: 'pulse 2s infinite',
              }}
            />
          </div>
        </section>

        {/* Section 2: Feature Grid - Core Values */}
        <section
          aria-labelledby="values-heading"
          style={{ padding: 'var(--spacing-section-padding)', background: 'var(--color-background)' }}
        >
          <div
            className="mx-auto px-6"
            style={{ maxWidth: 'var(--container-max-width)' }}
          >
            {/* Section Header */}
            <div className="