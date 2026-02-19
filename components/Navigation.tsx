'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { href: '/kor/index.jsp', label: '홈' }
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary)', textDecoration: 'none' }}>
          진흥기업 홈페이지
        </Link>
        <div style={{ display: 'flex', gap: 'var(--spacing-element-gap)' }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
