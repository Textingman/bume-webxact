import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Dark Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F1F3D 0%, #1A3A6B 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>
            <Shield className="w-4 h-4" />
            About Webxact
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Identity Theft Is a $10 Billion Problem.<br />
            <span style={{ color: '#93C5FD' }}>We're the Solution.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#CBD5E1' }}>
            Webxact was built by cybersecurity experts who saw firsthand how devastating identity theft can be — and decided to do something about it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F3D' }}>Our Mission</h2>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Every 22 seconds, someone in the US becomes a victim of identity theft. The average victim spends 200 hours and $1,300 trying to recover — and that's if they catch it early.
              </p>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Webxact monitors your personal information across the internet, dark web, financial networks, and social media — 24 hours a day, 7 days a week — so you can live your life without fear.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                If your identity is ever compromised, our dedicated recovery specialists step in immediately to restore it — fully covered under your plan.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{ background: 'linear-gradient(135deg, #0F1F3D, #1A3A6B)' }}>
              <h3 className="text-2xl font-bold text-white mb-8">The Threat Is Real</h3>
              <div className="space-y-6">
                {[
                  { icon: AlertTriangle, stat: '1 in 3', label: 'Americans have experienced identity theft' },
                  { icon: Globe, stat: '$10B+', label: 'lost to identity fraud annually' },
                  { icon: Eye, stat: '200hrs', label: 'average time to recover from identity theft' },
                  { icon: Lock, stat: '15M+', label: 'members protected by Webxact' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1A3A6B', border: '1px solid #3B82F6' }}>
                      <item.icon className="w-6 h-6" style={{ color: '#93C5FD' }} />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold" style={{ color: '#93C5FD' }}>{item.stat}</p>
                      <p className="text-sm" style={{ color: '#CBD5E1' }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Monitor */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0F1F3D' }}>What Webxact Monitors</h2>
          <p className="text-xl text-center mb-12" style={{ color: '#6B7280' }}>Comprehensive surveillance across every channel where your identity could be at risk.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Dark Web Monitoring', desc: 'Continuous scanning of dark web forums, data breach databases, and hacker marketplaces.' },
              { icon: Lock, title: 'Credit Bureau Monitoring', desc: 'Real-time alerts for any changes across all 3 major credit bureaus.' },
              { icon: Shield, title: 'Financial Account Alerts', desc: 'Bank and investment account monitoring for unauthorized access.' },
              { icon: Eye, title: 'Social Media Surveillance', desc: 'Detection of account takeover and impersonation attempts.' },
              { icon: AlertTriangle, title: 'Address Change Monitoring', desc: 'Alerts when someone attempts to redirect your mail or change your address.' },
              { icon: CheckCircle, title: 'Identity Recovery Services', desc: 'Full-service recovery with dedicated specialists if your identity is stolen.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border hover:shadow-md transition-shadow" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#1A3A6B' }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#0F1F3D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
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
          <Link href="/signup" className="inline-block font-bold px-10 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
            Get Protected Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
