import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Globe, Building2, Users, TrendingDown } from 'lucide-react';
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
            <Building2 className="w-4 h-4" />
            About Webxact
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Identity Theft Is Your Employees&apos; Problem.<br />
            <span style={{ color: '#93C5FD' }}>Until It Becomes Yours.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#CBD5E1' }}>
            Webxact was built to help employers protect their workforce from identity theft — because when employees are victimized, businesses pay the price in lost productivity, absenteeism, and turnover.
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
                Identity theft strikes 1 in 3 employees every year. The average victim spends 200 hours and thousands of dollars trying to recover — most of that time happening during work hours.
              </p>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Webxact partners with employers to offer comprehensive identity protection as a workplace benefit — giving every employee 24/7 monitoring, instant alerts, and full recovery services at no out-of-pocket cost.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                The result: employees who feel protected, stay focused, and know their employer has their back.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{ background: 'linear-gradient(135deg, #0F1F3D, #1A3A6B)' }}>
              <h3 className="text-2xl font-bold text-white mb-8">The Business Case</h3>
              <div className="space-y-6">
                {[
                  { icon: TrendingDown, stat: '200 hrs', label: 'Average time employees spend recovering from identity theft' },
                  { icon: Users, stat: '1 in 3', label: 'Employees affected by identity theft each year' },
                  { icon: AlertTriangle, stat: '$5,000+', label: 'Average cost to employers per affected employee' },
                  { icon: Shield, stat: '15M+', label: 'Employees protected by Webxact nationwide' },
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

      {/* What Employees Get */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0F1F3D' }}>Comprehensive Protection for Every Employee</h2>
          <p className="text-xl text-center mb-12" style={{ color: '#6B7280' }}>Every employee enrolled in Webxact gets full-spectrum identity protection — automatically.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Dark Web Monitoring', desc: 'Continuous scanning of dark web forums, data breach databases, and hacker marketplaces for employee data.' },
              { icon: Lock, title: 'Credit Bureau Monitoring', desc: 'Real-time alerts for any changes across all 3 major credit bureaus — Equifax, Experian, and TransUnion.' },
              { icon: Shield, title: 'Financial Account Alerts', desc: 'Bank and investment account monitoring to detect unauthorized access or suspicious transactions.' },
              { icon: Eye, title: 'Social Media Protection', desc: 'Detection of account takeover and impersonation attempts across major social platforms.' },
              { icon: AlertTriangle, title: 'SSN & Address Monitoring', desc: 'Alerts when someone attempts to use an employee&apos;s Social Security number or change their address.' },
              { icon: CheckCircle, title: 'Full Recovery Services', desc: 'If an employee&apos;s identity is stolen, our dedicated specialists handle the entire recovery process — covered under the plan.' },
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

      {/* For Employers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F3D' }}>Built for Employers Who Care</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: '#6B7280' }}>
            Webxact is a voluntary employee benefit — simple to administer, zero IT setup required, and employees self-enroll using their unique Employee ID. Add it to your benefits package in days.
          </p>
          <Link href="/signup" className="inline-block text-white font-bold px-10 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#1A3A6B' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1A3A6B, #0F1F3D)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: '#93C5FD' }} />
          <h2 className="text-4xl font-bold text-white mb-6">Protect Your Workforce Today</h2>
          <p className="text-xl mb-10" style={{ color: '#CBD5E1' }}>Give your employees the identity protection they deserve — and protect your business from the productivity cost of identity theft.</p>
          <Link href="/signup" className="inline-block font-bold px-10 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
            Request a Proposal — Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
