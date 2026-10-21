import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Globe, CreditCard, Phone, Zap, Building2, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F1F3D 0%, #1A3A6B 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>
            <Shield className="w-4 h-4" />
            The Webxact Employee Protection Plan
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Everything your employees need to stay protected.
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: '#CBD5E1' }}>
            Webxact is a comprehensive identity protection benefit that monitors, alerts, and recovers — so your employees can focus on work, not fraud.
          </p>
          <Link href="/signup" className="inline-block font-bold px-8 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F1F3D' }}>What every employee gets</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Full-spectrum identity protection — automatically active from day one of enrollment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Dark web monitoring', desc: 'Continuous scanning of dark web forums, data breach databases, and hacker marketplaces for employee personal information.' },
              { icon: CreditCard, title: 'Credit bureau monitoring', desc: 'Real-time alerts for any changes across all 3 major credit bureaus — Equifax, Experian, and TransUnion.' },
              { icon: Lock, title: 'Financial account alerts', desc: 'Bank and investment account monitoring to detect unauthorized access or suspicious transactions.' },
              { icon: Eye, title: 'Social media protection', desc: 'Detection of account takeover and impersonation attempts across major social platforms.' },
              { icon: AlertTriangle, title: 'SSN & address monitoring', desc: 'Alerts when someone attempts to use an employee&apos;s Social Security number or redirect their mail.' },
              { icon: Shield, title: 'Identity recovery services', desc: 'If an employee&apos;s identity is stolen, our dedicated specialists handle the entire recovery process — fully covered.' },
              { icon: Phone, title: '24/7 expert support', desc: 'Employees can reach our identity protection specialists any time, day or night.' },
              { icon: Zap, title: 'Instant breach alerts', desc: 'Employees are notified immediately when their information appears in a data breach.' },
              { icon: CheckCircle, title: '$1M identity theft insurance', desc: 'Every enrolled employee is covered by up to $1 million in identity theft insurance.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border hover:shadow-md transition-shadow" style={{ borderColor: '#E2E8F0' }}>
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

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0F1F3D' }}>How it works for employers</h2>
          <p className="text-xl text-center mb-14" style={{ color: '#6B7280' }}>Simple to add. Effortless to manage.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Building2, title: 'Add to your benefits package', desc: 'Work with our team to add Webxact to your employee benefits. Setup takes less than a week.' },
              { step: '02', icon: Users, title: 'Employees self-enroll', desc: 'Employees receive their unique Employee ID and activate their own protection in minutes — no IT required.' },
              { step: '03', icon: Shield, title: 'We monitor & protect 24/7', desc: 'Webxact continuously monitors every enrolled employee&apos;s identity and handles any recovery automatically.' },
            ].map((step) => (
              <div key={step.step} className="text-center p-8 bg-white rounded-2xl border" style={{ borderColor: '#E2E8F0' }}>
                <div className="text-5xl font-extrabold mb-4" style={{ color: '#DBEAFE' }}>{step.step}</div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                  <step.icon className="w-6 h-6" style={{ color: '#1A3A6B' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#0F1F3D' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Value */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F1F3D, #1A3A6B)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why employers choose Webxact</h2>
              <p className="text-xl mb-8" style={{ color: '#CBD5E1' }}>
                A high-value benefit that protects your employees and your business — with zero administrative burden.
              </p>
              <Link href="/signup" className="inline-block font-bold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90" style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
                Request a Proposal
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'No cost to the employer', desc: 'Webxact is funded through voluntary employee payroll deduction.' },
                { title: 'Zero IT setup', desc: 'Employees self-enroll using their unique Employee ID. No integration needed.' },
                { title: 'Immediate coverage', desc: 'Protection is active from the moment an employee enrolls.' },
                { title: 'Dedicated HR support', desc: 'Our team supports your HR department throughout implementation and beyond.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#3B82F6' }} />
                  <div>
                    <p className="font-bold text-sm text-white mb-1">{item.title}</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-14 h-14 mx-auto mb-6" style={{ color: '#1A3A6B' }} />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F3D' }}>Ready to protect your workforce?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Request a proposal and our team will walk you through everything.</p>
          <Link href="/signup" className="inline-block font-bold px-8 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#1A3A6B', color: '#FFFFFF' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
