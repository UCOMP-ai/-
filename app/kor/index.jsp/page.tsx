```tsx
'use client';

import React, { useState, useEffect } from 'react';

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
    --border-radius: 6px;
    --shadow-card: 0 4px 20px rgba(26, 58, 107, 0.08);
    --shadow-hover: 0 8px 32px rgba(26, 58, 107, 0.15);
    --shadow-button: 0 2px 8px rgba(26, 58, 107, 0.20);
    --spacing-section-padding: 100px 0;
    --spacing-element-gap: 24px;
    --spacing-container-max: 1280px;
    --font-heading: 'Noto Sans KR', sans-serif;
    --font-body: 'Noto Sans KR', sans-serif;
    --text-h1: 48px;
    --text-h2: 36px;
    --text-h3: 24px;
    --text-base: 16px;
    --line-height: 1.7;
    --letter-spacing: -0.02em;
    --animation-duration: 0.3s;
    --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// Unsplash image helper
const getUnsplashUrl = (keyword: string, width: number = 1200, height: number = 800): string => {
  const encodedKeyword = encodeURIComponent(keyword);
  return `https://images.unsplash.com/photo-1486325212027-8081e485255e?w=${width}&h=${height}&fit=crop&q=80&auto=format`;
};

const heroImages = [
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop&q=80',
];

const businessAreas = [
  {
    title: '건축 시공',
    description: '첨단 기술과 풍부한 경험을 바탕으로 고품질 건축물을 시공합니다.',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop&q=80',
  },
  {
    title: '토목 공사',
    description: '도로, 교량, 항만 등 사회 기반 시설 구축에 전문 역량을 발휘합니다.',
    icon: '🛣️',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80',
  },
  {
    title: '분양 사업',
    description: '고객의 주거 가치를 높이는 프리미엄 분양 사업을 진행합니다.',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80',
  },
  {
    title: '부동산 개발',
    description: '창의적인 개발 기획으로 새로운 도시 공간을 창출합니다.',
    icon: '🏙️',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80',
  },
];

const companyInfoItems = [
  { title: '기업 연혁', desc: '수십 년의 역사와 성과', icon: '📅' },
  { title: '경영 이념', desc: '신뢰와 혁신의 경영 철학', icon: '💡' },
  { title: '조직 현황', desc: '전문가 집단의 체계적 조직', icon: '👥' },
  { title: '사회적 책임', desc: '지속 가능한 미래를 위한 책임', icon: '🌱' },
];

const navItems = ['회사소개', '사업영역', '분양정보', '홍보센터', '고객센터'];

const statsData = [
  { value: '50+', label: '년 업력' },
  { value: '1,000+', label: '완공 프로젝트' },
  { value: '5조+', label: '누적 시공액' },
  { value: '98%', label: '고객 만족도' },
];

export default function JinhungHomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{cssVariables}</style>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; }
        
        body {
          font-family: var(--font-body);
          color: var(--color-text);
          background-color: var(--color-background);
          line-height: var(--line-height);
          letter-spacing: var(--letter-spacing);
        }

        .nav-link {
          position: relative;
          color: var(--color-text);
          font-weight: 500;
          text-decoration: none;
          padding: 4px 0;
          transition: color var(--animation-duration) var(--animation-easing);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-accent);
          transition: width var(--animation-duration) var(--animation-easing);
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link-white {
          color: rgba(255,255,255,0.9);
        }

        .nav-link-white:hover {
          color: white;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1s ease-in-out;
        }

        .business-card {
          transition: transform var(--animation-duration) var(--animation-easing),
                      box-shadow var(--animation-duration) var(--animation-easing);
          cursor: pointer;
        }

        .business-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
        }

        .stat-item {
          text-align: center;
        }

        .btn-primary {
          background-color: var(--color-primary);
          color: var(--color-surface);
          padding: 14px 32px;
          border-radius: var(--border-radius);
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: background-color var(--animation-duration) var(--animation-easing),
                      box-shadow var(--animation-duration) var(--animation-easing),
                      transform var(--animation-duration) var(--animation-easing);
          box-shadow: var(--shadow-button);
          letter-spacing: var(--letter-spacing);
        }

        .btn-primary:hover {
          background-color: var(--color-secondary);
          box-shadow: var(--shadow-hover);
          transform: translateY(-1px);
        }

        .btn-accent {
          background-color: var(--color-accent);
          color: var(--color-surface);
          padding: 14px 32px;
          border-radius: var(--border-radius);
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all var(--animation-duration) var(--animation-easing);
          box-shadow: var(--shadow-button);
          letter-spacing: var(--letter-spacing);
        }

        .btn-accent:hover {
          background-color: #d4770f;
          box-shadow: var(--shadow-hover);
          transform: translateY(-1px);
        }

        .btn-outline {
          background-color: transparent;
          color: var(--color-primary);
          padding: 12px 28px;
          border-radius: var(--border-radius);
          font-weight: 600;
          font-size: 15px;
          border: 2px solid var(--color-primary);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all var(--animation-duration) var(--animation-easing);
          letter-spacing: var(--letter-spacing);
        }

        .btn-outline:hover {
          background-color: var(--color-primary);
          color: var(--color-surface);
        }

        .btn-outline-white {
          color: white;
          border-color: white;
        }

        .btn-outline-white:hover {
          background-color: white;
          color: var(--color-primary);
        }

        .section-tag {
          display: inline-block;
          background-color: rgba(26, 58, 107, 0.08);
          color: var(--color-primary);
          font-size: 13px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 100px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .divider-accent {
          width: 48px;
          height: 3px;
          background-color: var(--color-accent);
          border-radius: 2px;
          margin: 0 auto;
        }

        .footer-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
          transition: color var(--animation-duration) var(--animation-easing);
        }

        .footer-link:hover {
          color: white;
        }

        .info-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          padding: 28px;
          transition: all var(--animation-duration) var(--animation-easing);
          cursor: pointer;
        }

        .info-card:hover {
          box-shadow: var(--shadow-hover);
          border-color: var(--color-secondary);
          transform: translateY(-3px);
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
          transition: all var(--animation-duration) var(--animation-easing);
        }

        .hero-dot.active {
          background-color: var(--color-accent);
          border-color: var(--color-accent);
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 32px !important; }
          .section-title { font-size: 28px !important; }
        }
      `}</style>

      <div style={{ fontFamily: 'var(--font-body)' }}>
        {/* Navigation */}
        <nav
          role="navigation"
          aria-label="메인 네비게이션"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: isScrolled ? 'var(--color-surface)' : 'transparent',
            boxShadow: isScrolled ? 'var(--shadow-card)' : 'none',
            transition: `all var(--animation-duration) var(--animation-easing)`,
            borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
          }}
        >
          <div
            style={{
              maxWidth: 'var(--spacing-container-max)',
              margin: '0 auto',
              padding: '0 24px',
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <a
              href="/kor/index.jsp"
              aria-label="진흥기업 홈으로 이동"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'white', fontSize: '18px', fontWeight: '800' }}>진</span>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: isScrolled ? 'var(--color-primary)' : 'white',
                      letterSpacing: '-0.03em',
                      lineHeight: '1.2',
                      transition: `color var(--animation-duration) var(--animation-easing)`,
                    }}
                  >
                    진흥기업
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: isScrolled ? 'var(--color-secondary)' : 'rgba(255,255,255,0.8)',
                      letterSpacing: '0.1em',
                      transition: `color var(--animation-duration) var(--animation-easing)`,
                    }}
                  >
                    CHINHUNG CORPORATION
                  </div>
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                gap: '36px',
              }}
              className="hidden md:flex"
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`nav-link ${!isScrolled ? 'nav-link-white' : ''}`}
                    style={{
                      fontSize: '15px',
                      color: isScrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              aria-label="모바일 메뉴 열기"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: isScrolled ? 'var(--color-primary)' : 'white',
              }}
              className="flex md:hidden flex-col gap-1.5"
            >
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  borderRadius: '2px',
                  transition: `all var(--animation-duration) var(--animation-easing)`,
                  transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  borderRadius: '2px',
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transition: `all var(--animation-duration) var(--animation-easing)`,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  borderRadius: '2px',
                  transition: `all var(--animation-duration) var(--animation-easing)`,
                  transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                }}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                padding: '16px 24px',
              }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item) => (
                  <li key={item} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <a
                      href="#"
                      style={{
                        display: 'block',
                        padding: '14px 0',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontWeight: '500',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          aria-label="히어로 섹션"
          style={{
            position: 'relative',
            height: '100vh',
            minHeight: '600px',
            overflow: 'hidden',
          }}
        >
          {/* Hero Background Slides */}
          {heroImages.map((img, index) => (
            <div
              key={index}
              className="hero-slide"
              style={{
                backgroundImage: `url(${img})`,
                opacity: currentHeroIndex === index ? 1 : 0,
              }}
              aria-hidden={currentHeroIndex !== index}
            />
          ))}

          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(26,58,107,0.85) 0%, rgba(26,58,107,0.5) 50%, rgba(26,58,107,0.3) 100%)',
            }}
          />

          {/* Hero Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              maxWidth: 'var(--spacing-container-max)',
              margin: '0 auto',
              padding: '0 24px',
            }}
          >
            <div style={{ maxWidth: '700px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(232, 136, 26, 0.9)',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '600',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  letterSpacing: '0.08em',
                  marginBottom: '24px',
                }}
              >
                CHINHUNG CORPORATION
              </div>

              <h1
                className="hero-title"
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  color: 'white',
                  letterSpacing: 'var(--letter-spacing)',
                  lineHeight: '1.25',
                  marginBottom: '20px',
                  margin: '0 0 20px 0',
                }}
              >
                대한민국을 짓는 기업,<br />
                <span style={{ color: 'var(--color-accent)' }}>진흥기업</span>
              </h1>

              <p
                style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.88)',
                  lineHeight: '1.7',
                  marginBottom: '40px',
                  fontWeight: '300',
                }}
              >
                대한민국 대표 건설기업 진흥기업의 공식 홈페이지입니다.<br />
                신뢰와 혁신으로 더 나은 내일을 건설합니다.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#" className="btn-accent">
                  자세히 보기
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#" className="btn-outline btn-outline-white">
                  사업영역 보기
                </a>
              </div>
            </div>
          </div>

          {/* Slide Dots */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
              zIndex: 10,
            }}
            role="tablist"
            aria-label="슬라이드 네비게이션"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={currentHeroIndex === index}
                aria-label={`슬라이드 ${index + 1}`}
                className={`hero-dot ${currentHeroIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentHeroIndex(index)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <span
                  style={{
                    display: 'block',
                    width: currentHeroIndex === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: currentHeroIndex === index ? '4px' : '50%',
                    backgroundColor: currentHeroIndex === index ? 'var(--color-accent)' : 'rgba(255,255,255,0.5)',
                    border: '2px solid rgba(255,255,255,0.7)',
                    transition: 'all 0.3s ease',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              zIndex: 10,
            }}
            aria-hidden="true"
          >
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '0.1em', writingMode: 'vertical-rl' }}>
              SCROLL
            </span>
            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
              }}
            />
          </div>
        </section>

        {/* Stats Bar */}
        <section
          aria-label="주요 지표"
          style={{
            backgroundColor: 'var(--color-primary)',
            padding: '0',
          }}
        >
          <div
            style={{
              maxWidth: 'var(--spacing-container-max)',
              margin: '0 auto',
              padding: '0 24px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
              }}
              className="grid grid-cols-2 md:grid-cols-4"
            >
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    padding: '32px 24px',
                    textAlign: 'center',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: '1',
                      marginBottom: '6px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.75)',
                      fontWeight: '400',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Areas - Feature Grid */}
        <section
          aria-labelledby="business-heading"
          style={{
            padding: 'var(--spacing-section-padding)',
            backgroundColor: 'var(--color-background)',
          }}
        >
          <div
            style={{
              maxWidth: 'var(--spacing-container-max)',
              margin: '0 auto',
              padding: '0 24px',
            }}
          >
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="section-tag">Business Areas</span>
              <h2
                id="business-heading"
                className="section-title"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  color: 'var(--color-primary)',
                  letterSpacing: 'var(--letter-spacing)',
                  margin: '0 0 16px 0',
                }}
              >
                사업 영역
              </h2>
              <div className="divider-accent" style={{ marginBottom: '20px' }} />
              <p
                style={{
                  fontSize: '17px',
                  color: '#5a6578',
                  maxWidth: '520px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                건설, 개발, 분양 등 다양한 사업 영역을 통해<br />
                고객 가치를 실현합니다.
              </p>
            </div>

            {/* Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--spacing-element-gap)',
              }}
            >
              {businessAreas.map((area, index) => (
                <article
                  key={index}
                  className="business-card"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--border-radius)',
                    overflow: 'hidden',
                    boxShadow: hoveredCard === index ? 'var(--shadow-hover)' : 'var(--shadow-card)',
                    border: '1px solid var(--color-border)',
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Image */}
                  <div
                    style={{
                      height: '200px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={area.image}
                      alt={`${area.title} 이미지`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: `transform 0.5s var(--animation-easing)`,
                        transform: hoveredCard === index ? 'scale(1.05)' : 'scale