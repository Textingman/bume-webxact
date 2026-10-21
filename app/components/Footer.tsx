import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#0F1F3D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold mb-3">Webxact</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#93C5FD', maxWidth: '280px' }}>
              Webxact — trusted by employers and employees nationwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#93C5FD">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#93C5FD">
                  <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: '#93C5FD', opacity: 0.6 }}>Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors" style={{ color: '#93C5FD' }}>About Us</Link></li>
              <li><Link href="/signup" className="text-sm hover:text-white transition-colors" style={{ color: '#93C5FD' }}>Request Demo</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors" style={{ color: '#93C5FD' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: '#93C5FD', opacity: 0.6 }}>Legal</h4>
            <ul className="space-y-3 mb-6">
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors" style={{ color: '#93C5FD' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors" style={{ color: '#93C5FD' }}>Terms of Service</Link></li>
            </ul>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: '#93C5FD', opacity: 0.6 }}>Contact</h4>
            <p className="text-sm" style={{ color: '#93C5FD' }}>support@webxact.com</p>
            <p className="text-sm mt-1" style={{ color: '#93C5FD' }}>8 The Green, Ste A</p>
            <p className="text-sm" style={{ color: '#93C5FD' }}>Dover, DE 19901</p>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid #1A3A6B44' }}>
          <p className="text-center text-sm" style={{ color: '#93C5FD' }}>
            &copy; {new Date().getFullYear()} Webxact. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
