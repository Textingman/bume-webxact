import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#101F3D', color: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-5">
              {/* Invert the blue wordmark to white for the dark footer */}
              <Image
                src="/logo.png"
                alt="Webxact"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px', fontFamily: 'Inter, sans-serif' }}>
              Identity protection for every employee. Protect your people. Protect your business.
            </p>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>
              support@webxact.com<br />8 The Green, Ste A<br />Dover, DE 19901
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>Company</p>
            <ul className="space-y-3">
              {[{ label: 'About Us', href: '/about' }, { label: 'Product', href: '/product' }, { label: 'Request a Proposal', href: '/signup' }, { label: 'Contact Us', href: '/contact' }].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>Legal</p>
            <ul className="space-y-3">
              {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            &copy; {new Date().getFullYear()} Webxact. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
