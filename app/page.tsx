import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, Users, TrendingDown, Award, Building2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Alert Banner */}
      <div className="text-white text-center py-3 px-4 text-sm" style={{ backgroundColor: '#1A3A6B' }}>
        <span className="font-medium">Identity theft costs employers $5,000+ per affected employee — </span>
        <Link href="/signup" className="underline hover:no-underline font-semibold">Protect Your Team Today »</Link>
      </div>

      {/* Dark Hero — Employer Focused */}
      <section className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(135deg, #0F1F3D 0%, #1A3A6B 60%, #1e4080 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #1A3A6B, transparent)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>
                <Building2 className="w-4 h-4" />
                Employee Identity Protection Benefit
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Protect Your Employees.<br />
                <span style={{ color: '#93C5FD' }}>Protect Your Business.</span>
              </h1>
              <p className="text-xl mb-10" style={{ color: '#CBD5E1' }}>
                Identity theft affects 1 in 3 employees — costing them hundreds of hours and thousands of dollars to recover. Webxact gives every employee comprehensive identity protection as a workplace benefit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/signup" className="px-8 py-4 text-white text-lg font-bold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#3B82F6' }}>
                  Request a Proposal
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
                <div className="absolute -bottom-4 -left-4 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#3B82F6' }}>24/7 MONITORING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-b" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1 in 3', label: 'Employees affected by identity theft' },
              { value: '$5,000+', label: 'Average cost per affected employee' },
              { value: '200 hrs', label: 'Average recovery time per incident' },
              { value: '15M+', label: 'Employees protected by Webxact' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold mb-1" style={{ color: '#1A3A6B' }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Employers Choose Webxact */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F1F3D' }}>
              Employers Who Care Choose Webxact.
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Identity theft doesn&apos;t just hurt employees — it hurts your business. Distracted, stressed employees cost you productivity, focus, and retention.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: 'Reduce Productivity Loss',
                desc: 'Employees dealing with identity theft spend an average of 200 hours resolving it — on company time. Webxact handles recovery so they can focus on work.',
              },
              {
                icon: Users,
                title: 'Boost Retention & Loyalty',
                desc: 'Employees who feel protected by their employer are more loyal and engaged. Identity protection is a high-value, low-cost benefit that employees love.',
              },
              {
                icon: Award,
                title: 'Trusted by Leading Employers',
                desc: 'Over 15 million employees are protected by Webxact. Join the employers who take their team&apos;s financial security seriously.',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-8 rounded-xl border hover:shadow-lg transition-shadow" style={{ borderColor: '#E2E8F0' }}>
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

      {/* What Employees Get */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F3D' }}>What Every Employee Gets</h2>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                When you add Webxact to your benefits package, every employee gets comprehensive identity protection — at no out-of-pocket cost to them.
              </p>
              <div className="space-y-4">
                {[
                  'Credit monitoring across all 3 bureaus',
                  'Dark web scanning & breach alerts',
                  'Social Security number monitoring',
                  'Bank & investment account alerts',
                  'Social media account protection',
                  'Full identity recovery services',
                  '$1M identity theft insurance',
                  '24/7 dedicated recovery specialists',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#3B82F6' }} />
                    <span className="font-medium" style={{ color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-10" style={{ background: 'linear-gradient(135deg, #0F1F3D, #1A3A6B)' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Simple for Employers</h3>
              <p className="text-lg mb-8" style={{ color: '#CBD5E1' }}>
                Webxact is designed to be effortless to administer. No IT setup, no complex enrollment — employees activate their own protection in minutes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'No cost to the employer',
                  'Easy payroll deduction option',
                  'Employees self-enroll via their ID',
                  'Instant coverage activation',
                  'Dedicated HR support team',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Zap className="w-4 h-4" style={{ color: '#93C5FD' }} />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/signup" className="inline-block w-full text-center font-bold px-8 py-4 rounded-lg text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0F1F3D' }}>How Webxact Works for Employers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Building2, title: 'Add to Your Benefits Package', desc: 'Work with our team to add Webxact to your employee benefits. Takes less than a week to set up.' },
              { step: '02', icon: Users, title: 'Employees Self-Enroll', desc: 'Employees receive their unique Employee ID and activate their own protection in minutes — no IT required.' },
              { step: '03', icon: Shield, title: 'We Monitor & Protect 24/7', desc: 'Webxact continuously monitors every employee&apos;s identity and handles any recovery — so they can focus on work.' },
            ].map((step) => (
              <div key={step.step} className="text-center p-8">
                <div className="text-6xl font-extrabold mb-4" style={{ color: '#DBEAFE' }}>{step.step}</div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                  <step.icon className="w-7 h-7" style={{ color: '#1A3A6B' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F1F3D' }}>{step.title}</h3>
                <p style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F1F3D, #1A3A6B)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">What Employers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: 'After one of our employees had their identity stolen, we knew we needed to act. Webxact was the easiest decision we ever made.', name: 'Sarah M.', title: 'HR Director, TechCorp' },
              { quote: 'Our employees love this benefit. It&apos;s one of the most talked-about perks we offer — and it costs us almost nothing to provide.', name: 'James R.', title: 'VP People, MidWest Manufacturing' },
              { quote: 'We saw a measurable improvement in employee focus and productivity after adding Webxact. Less stress means better work.', name: 'Linda K.', title: 'Benefits Manager, RetailCo' },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(147,197,253,0.2)' }}>
                <p className="text-lg mb-6 italic" style={{ color: '#CBD5E1' }}>"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm" style={{ color: '#93C5FD' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: '#1A3A6B' }} />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F3D' }}>Ready to Protect Your Team?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Join thousands of employers who trust Webxact to protect their most valuable asset — their people.</p>
          <Link href="/signup" className="inline-block font-bold px-10 py-5 rounded-lg text-xl transition-opacity hover:opacity-90" style={{ backgroundColor: '#1A3A6B', color: '#FFFFFF' }}>
            Request a Proposal — Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
