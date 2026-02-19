import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: '진흥기업 홈페이지',
  description: '진흥기업은 끊임없는 도전과 혁신을 통해 산업의 발전을 이끄는 신뢰할 수 있는 파트너입니다. 고객과 사회에 가치를 창출하며 지속 가능한 미래를 함께 만들어 갑니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
