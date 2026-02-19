'use client';

import React from 'react';

const HomePage = () => {
  return (
    <div className="font-[var(--font-body)] text-[var(--color-text)]">
      {/* Hero Section */}
      <section
        className="relative py-[var(--spacing-section-padding)]"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/2967/1200/800)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-[var(--font-heading)] text-[var(--text-h1)] font-bold mb-[var(--spacing-element-gap)]">
            신뢰로 만드는 미래
          </h1>
          <h2 className="font-[var(--font-heading)] text-[var(--text-h2)] mb-[var(--spacing-element-gap)]">
            도전과 혁신으로 산업의 내일을 열다
          </h2>
          <p className="text-[var(--text-base)] leading-[var(--line-height)] mb-[var(--spacing-element-gap)]">
            진흥기업은 40여 년의 축적된 전문성과 끊임없는 혁신으로 고객과 사회에 실질적인 가치를 창출합니다. 함께 지속 가능한 미래를 만들어 가겠습니다.
          </p>
          <a
            href="#"
            className="inline-block bg-[var(--color-primary)] text-white py-2 px-6 rounded-[var(--border-radius)] shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]"
          >
            회사 소개 보기 →
          </a>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="bg-[var(--color-background)] py-[var(--spacing-section-padding)]">
        <div className="container mx-auto max-w-[var(--spacing-container-max-width)] px-4">
          <div className="text-center mb-[var(--spacing-element-gap)]">
            <h2 className="font-[var(--font-heading)] text-[var(--text-h2)] font-bold mb-2">
              진흥기업의 핵심 가치
            </h2>
            <p className="text-[var(--text-base)]">우리가 만드는 차이</p>
            <p className="text-[var(--text-base)] leading-[var(--line-height)]">
              진흥기업은 다섯 가지 핵심 가치를 바탕으로 고객과 사회를 위한 최선의 결과를 만들어 냅니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-element-gap)]">
            <div className="p-6 rounded-[var(--border-radius)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]">
              <img src="https://picsum.photos/seed/2470/1200/800" alt="신뢰" className="mb-4" />
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">신뢰</h3>
              <p className="text-[var(--text-base)] leading-[var(--line-height)]">
                고객과의 약속을 지키는 투명한 경영으로 흔들리지 않는 파트너십을 구축합니다.
              </p>
            </div>
            <div className="p-6 rounded-[var(--border-radius)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]">
              <img src="https://picsum.photos/seed/2470/1200/800" alt="혁신" className="mb-4" />
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">혁신</h3>
              <p className="text-[var(--text-base)] leading-[var(--line-height)]">
                변화를 두려워하지 않는 창의적 사고로 산업의 새로운 기준을 제시합니다.
              </p>
            </div>
            <div className="p-6 rounded-[var(--border-radius)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]">
              <img src="https://picsum.photos/seed/2470/1200/800" alt="전문성" className="mb-4" />
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">전문성</h3>
              <p className="text-[var(--text-base)] leading-[var(--line-height)]">
                수십 년간 축적된 경험과 기술력으로 최고 수준의 솔루션을 제공합니다.
              </p>
            </div>
            <div className="p-6 rounded-[var(--border-radius)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]">
              <img src="https://picsum.photos/seed/2470/1200/800" alt="성장" className="mb-4" />
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">성장</h3>
              <p className="text-[var(--text-base)] leading-[var(--line-height)]">
                고객과 함께 지속적으로 발전하며 상생의 생태계를 만들어 갑니다.
              </p>
            </div>
            <div className="p-6 rounded-[var(--border-radius)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]">
              <img src="https://picsum.photos/seed/2470/1200/800" alt="책임" className="mb-4" />
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">책임</h3>
              <p className="text-[var(--text-base)] leading-[var(--line-height)]">
                기업 시민으로서 사회와 환경에 대한 책임을 다하겠습니다.
              </p>
            </div>
             <div className="p-6 rounded-[var(--border-radius)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]">
              <img src="https://picsum.photos/seed/2470/1200/800" alt="도전" className="mb-4" />
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">도전</h3>
              <p className="text-[var(--text-base)] leading-[var(--line-height)]">
                한계를 넘는 도전 정신으로 불가능을 가능으로 만들어 냅니다.
              </p>
            </div>
          </div>
          <div className="text-center mt-[var(--spacing-element-gap)]">
            <a
              href="#"
              className="inline-block bg-[var(--color-surface)] text-[var(--color-primary)] py-2 px-6 rounded-[var(--border-radius)] shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]"
            >
              자세히 알아보기 →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section
        className="bg-[var(--color-primary)] text-white py-[var(--spacing-section-padding)]"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/3556/1200/800)`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(26, 58, 107, 0.8)',
        }}
      >
        <div className="container mx-auto max-w-[var(--spacing-container-max-width)] px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-[var(--spacing-element-gap)] md:mb-0">
            <h2 className="font-[var(--font-heading)] text-[var(--text-h2)] font-bold mb-2">
              진흥기업과 함께 성장하세요
            </h2>
            <p className="text-[var(--text-base)]">새로운 가능성의 시작</p>
            <p className="text-[var(--text-base)] leading-[var(--line-height)]">
              비즈니스 성장을 위한 최적의 파트너를 찾고 계신가요? 진흥기업의 전문가 팀이 귀사의 도전에 함께하겠습니다. 지금 바로 상담을 신청하세요.
            </p>
          </div>
          <div className="md:w-1/2 text-right">
            <a
              href="#"
              className="inline-block bg-[var(--color-surface)] text-[var(--color-primary)] py-2 px-6 rounded-[var(--border-radius)] shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]"
            >
              상담 신청하기 →
            </a>
          </div>
        </div>
      </section>

      {/* Custom Section */}
      <section className="bg-[var(--color-surface)] py-[var(--spacing-section-padding)]">
        <div className="container mx-auto max-w-[var(--spacing-container-max-width)] px-4">
          <div className="text-center mb-[var(--spacing-element-gap)]">
            <h2 className="font-[var(--font-heading)] text-[var(--text-h2)] font-bold mb-2">
              숫자로 보는 진흥기업
            </h2>
            <p className="text-[var(--text-base)]">실적이 증명하는 신뢰</p>
            <p className="text-[var(--text-base)] leading-[var(--line-height)]">
              진흥기업은 수십 년간 다양한 산업 분야에서 축적한 성과를 바탕으로 고객에게 검증된 가치를 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-element-gap)]">
            <div className="text-center">
              <div className="text-[var(--text-h1)] font-bold text-[var(--color-accent)]">40+</div>
              <p className="text-[var(--text-base)]">창립 년도</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--text-h1)] font-bold text-[var(--color-accent)]">1,200+</div>
              <p className="text-[var(--text-base)]">누적 프로젝트</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--text-h1)] font-bold text-[var(--color-accent)]">300+</div>
              <p className="text-[var(--text-base)]">파트너사</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--text-h1)] font-bold text-[var(--color-accent)]">500+</div>
              <p className="text-[var(--text-base)]">전문 인력</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--text-h1)] font-bold text-[var(--color-accent)]">98%</div>
              <p className="text-[var(--text-base)]">고객 만족도</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--text-h1)] font-bold text-[var(--color-accent)]">15+</div>
              <p className="text-[var(--text-base)]">국내외 사업장</p>
            </div>
          </div>
          <div className="text-center mt-[var(--spacing-element-gap)]">
            <a
              href="#"
              className="inline-block bg-[var(--color-surface)] text-[var(--color-primary)] py-2 px-6 rounded-[var(--border-radius)] shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-[var(--animation-duration)] ease-[var(--animation-easing)]"
            >
              사업 실적 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1A2A4A] text-white py-[var(--spacing-section-padding)]">
        <div className="container mx-auto max-w-[var(--spacing-container-max-width)] px-4">
          <div className="mb-[var(--spacing-element-gap)]">
            <h2 className="font-[var(--font-heading)] text-[var(--text-h2)] font-bold">
              진흥기업
            </h2>
            <p className="text-[var(--text-base)]">신뢰와 혁신으로 함께하는 기업</p>
            <p className="text-[var(--text-base)] leading-[var(--line-height)]">
              진흥기업은 고객과 사회에 지속 가능한 가치를 창출하기 위해 오늘도 도전하고 혁신합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-element-gap)]">
            <div>
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">회사소개</h3>
              <ul className="text-[var(--text-base)]">
                <li><a href="#" className="hover:text-[var(--color-accent)]">기업 개요</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">경영 이념</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">조직도</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">연혁</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">사업분야</h3>
              <ul className="text-[var(--text-base)]">
                <li><a href="#" className="hover:text-[var(--color-accent)]">주요 사업</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">프로젝트</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">기술 역량</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">파트너십</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">홍보센터</h3>
              <ul className="text-[var(--text-base)]">
                <li><a href="#" className="hover:text-[var(--color-accent)]">공지사항</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">뉴스룸</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">IR 정보</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">사진/영상</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">채용정보</h3>
              <ul className="text-[var(--text-base)]">
                <li><a href="#" className="hover:text-[var(--color-accent)]">인재상</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">복리후생</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">채용공고</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">인턴십</a></li>
              </ul>
            </div>
             <div>
              <h3 className="font-[var(--font-heading)] text-[var(--text-h3)] font-semibold mb-2">고객지원</h3>
              <ul className="text-[var(--text-base)]">
                <li><a href="#" className="hover:text-[var(--color-accent)]">온라인 상담</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">FAQ</a></li>
                <li><a href="#" className="hover:text-[var(--color-accent)]">찾아오시는 길</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-[var(--spacing-element-gap)] text-[var(--text-base)]">
            사업자등록번호: 000-00-00000 | 대표이사: 홍길동 | 주소: 서울특별시 강남구 테헤란로 123 진흥빌딩 | 대표전화: 02-0000-0000 | 이메일: info@jinhung.co.kr | Copyright © 2024 진흥기업. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;