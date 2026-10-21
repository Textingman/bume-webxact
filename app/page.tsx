import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, Phone, CreditCard, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Dark Hero */}
      <section className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(135deg, #0F1F3D 0%, #1A3A6B 60%, #1e4080 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #1A3A6B, transparent)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>
                <Shield className="w-4 h-4" />
                Trusted Identity Protection
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Defend Your Identity.<br />
                <span style={{ color: '#93C5FD' }}>Protect What Matters Most.</span>
              </h1>
              <p className="text-xl mb-10" style={{ color: '#CBD5E1' }}>
                Comprehensive identity theft protection, credit monitoring, and recovery services — keeping you and your family safe from fraud and cybercrime 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/signup" className="px-8 py-4 text-white text-lg font-bold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#1A3A6B', border: '2px solid #3B82F6' }}>
                  Get Protected Now
                </Link>
                <Link href="/about" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ color: '#93C5FD', border: '2px solid #93C5FD', backgroundColor: 'transparent' }}>
                  Learn More
                </Link>
              </div>
            </div>
            {/* Shield Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3), rgba(26,58,107,0.5))', border: '2px solid rgba(147,197,253,0.3)' }}>
                  <Shield className="w-32 h-32" style={{ color: '#93C5FD' }} />
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">ACTIVE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 border-b" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: '256-bit Encryption' },
              { icon: Eye, label: '24/7 Monitoring' },
              { icon: Lock, label: 'Dark Web Scanning' },
              { icon: Zap, label: 'Instant Alerts' },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <badge.icon className="w-6 h-6" style={{ color: '#1A3A6B' }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: '#1A3A6B' }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Protect */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F1F3D' }}>Comprehensive Protection</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Webxact monitors every corner of the internet to keep your identity safe.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: 'Credit Monitoring', desc: 'Real-time alerts for any changes to your credit report across all 3 bureaus. Know the moment something changes.' },
              { icon: Globe, title: 'Dark Web Scanning', desc: 'We continuously scan dark web forums, data breach databases, and hacker marketplaces for your personal information.' },
              { icon: Phone, title: 'Identity Recovery', desc: 'If your identity is stolen, our dedicated recovery specialists work on your behalf to restore it — fully covered.' },
              { icon: AlertTriangle, title: 'Fraud Alerts', desc: 'Instant notifications when suspicious activity is detected on your accounts, credit, or personal information.' },
              { icon: Shield, title: 'Social Media Monitoring', desc: 'We monitor your social media accounts for signs of account takeover or impersonation attempts.' },
              { icon: Lock, title: 'Financial Account Protection', desc: 'Bank account and investment account monitoring to detect unauthorized access or suspicious transactions.' },
            ].map((feature) => (
              <div key={feature.title} className="p-8 rounded-xl border hover:shadow-lg transition-all hover:border-blue-200" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#EEF2FF' }}>
                  <feature.icon className="w-7 h-7" style={{ color: '#1A3A6B' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F1F3D' }}>{feature.title}</h3>
                <p style={{ color: '#6B7280' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F1F3D, #1A3A6B)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15M+', label: 'Members Protected' },
              { value: '99.9%', label: 'Uptime Monitoring' },
              { value: '$1M', label: 'Identity Theft Insurance' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold mb-2" style={{ color: '#93C5FD' }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: '#CBD5E1' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0F1F3D' }}>How Webxact Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up in Minutes', desc: 'Create your account and enter your personal information. We start monitoring immediately.' },
              { step: '02', title: 'We Monitor 24/7', desc: 'Our systems continuously scan the internet, dark web, and financial networks for your data.' },
              { step: '03', title: 'Instant Alerts & Recovery', desc: 'Get notified the moment a threat is detected. Our team helps you recover if needed.' },
            ].map((step) => (
              <div key={step.step} className="text-center p-8">
                <div className="text-6xl font-extrabold mb-4" style={{ color: '#DBEAFE' }}>{step.step}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F1F3D' }}>{step.title}</h3>
                <p style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1A3A6B, #0F1F3D)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: '#93C5FD' }} />
          <h2 className="text-4xl font-bold text-white mb-6">Start Protecting Your Identity Today</h2>
          <p className="text-xl mb-10" style={{ color: '#CBD5E1' }}>Join millions of people who trust Webxact to keep their identity safe.</p>
          <Link href="/signup" className="inline-block font-bold px-10 py-5 rounded-lg text-xl transition-opacity hover:opacity-90" style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
            Get Protected Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
