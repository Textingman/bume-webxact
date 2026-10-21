'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/product', label: 'Product' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#101F3D', borderColor: 'rgba(147,197,253,0.15)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Webxact" width={150} height={44} className="h-10 w-auto object-contain" priority />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: pathname === href ? '#93C5FD' : 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: pathname === href ? 600 : 500 }}>
                {label}
              </Link>
            ))}
            <Link href="/signup"
              className="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#3B82F6', fontFamily: 'Inter, sans-serif' }}>
              Request a Proposal
            </Link>
          </div>
          <button className="md:hidden p-2 rounded-lg" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: '#93C5FD' }}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: 'rgba(147,197,253,0.15)' }}>
            <div className="pt-4 space-y-1">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="block px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ color: pathname === href ? '#93C5FD' : 'rgba(255,255,255,0.75)' }} onClick={() => setMobileOpen(false)}>
                  {label}
                </Link>
              ))}
              <Link href="/signup" className="block mt-3 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
                style={{ backgroundColor: '#3B82F6' }} onClick={() => setMobileOpen(false)}>
                Request a Proposal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
