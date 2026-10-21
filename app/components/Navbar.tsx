'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: '#0F1F3D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-7 h-7" style={{ color: '#93C5FD' }} />
            <span className="text-2xl font-extrabold text-white">Webxact</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {([['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact'], ['/privacy', 'Privacy'], ['/terms', 'Terms']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-md text-sm font-medium transition-colors" style={{ color: isActive(href) ? '#93C5FD' : '#CBD5E1' }}>
                {label}
              </Link>
            ))}
            <Link href="/signup" className="ml-4 px-6 py-2.5 rounded-lg text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: '#1A3A6B', color: '#FFFFFF', border: '2px solid #3B82F6' }}>
              Get Protected Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
