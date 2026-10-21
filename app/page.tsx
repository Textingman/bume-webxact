import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Globe, CreditCard, Phone, Zap, Building2, Users, Bell, FileCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #101F3D 0%, #19345F 60%, #1e3d6e 100%)' }}>
        {/* Concentric protection rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full border opacity-10" style={{ borderColor: '#93C5FD' }} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[480px] h-[480px] rounded-full border opacity-8" style={{ borderColor: '#3B82F6' }} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[360px] h-[360px] rounded-full border opacity-6" style={{ borderColor: '#93C5FD' }} />
          {/* Subtle network dots */}
          <div className="absolute top-20 left-20 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: '#93C5FD' }} />
          <div className="absolute top-40 left-40 w-1 h-1 rounded-full opacity-15" style={{ backgroundColor: '#3B82F6' }} />
          <div className="absolute bottom-20 left-32 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: '#93C5FD' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#93C5FD', fontFamily: 'Inter, sans-serif' }}>
                <Shield className="w-4 h-4" />
                Employee Identity Protection Benefit
              </div>

              <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                <span style={{ color: '#FFFFFF', display: 'block' }}>Protect Your Employees.</span>
                <span style={{ color: '#93C5FD', display: 'block' }}>Protect Your Business.</span>
              </h1>

              <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '520px' }}>
                Give your team access to identity theft protection as a workplace benefit. Help employees navigate identity risks with greater confidence and peace of mind.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/signup"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#3B82F6', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
                  Request a Proposal
                </Link>
                <Link href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-opacity hover:opacity-90"
                  style={{ border: '2px solid rgba(147,197,253,0.5)', color: '#93C5FD', fontFamily: 'Inter, sans-serif', fontSize: '1rem', backgroundColor: 'transparent' }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: Shield visualization */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Outer rings */}
                <div className="absolute inset-0 rounded-full border-2 opacity-15" style={{ borderColor: '#93C5FD' }} />
                <div className="absolute inset-8 rounded-full border opacity-12" style={{ borderColor: '#3B82F6' }} />
                <div className="absolute inset-16 rounded-full border opacity-10" style={{ borderColor: '#93C5FD' }} />
                {/* Center shield */}
                <div className="relative w-40 h-40 rounded-3xl flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #19345F, #101F3D)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Shield className="w-20 h-20" style={{ color: '#93C5FD' }} />
                </div>
                {/* Floating icons */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.3)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Eye className="w-5 h-5" style={{ color: '#93C5FD' }} />
                </div>
                <div className="absolute bottom-8 left-8 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.3)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Bell className="w-5 h-5" style={{ color: '#93C5FD' }} />
                </div>
                <div className="absolute top-8 left-12 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.3)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Lock className="w-5 h-5" style={{ color: '#93C5FD' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IDENTITY PROTECTION MATTERS ── */}
      <section className="py-20" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#101F3D', marginBottom: '1rem' }}>
              Why identity protection matters
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Identity theft affects employees across all income levels — and the impact extends directly into the workplace.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Personal information exposure', desc: 'Employee data appears in data breaches, dark web marketplaces, and phishing campaigns every day.' },
              { icon: CreditCard, title: 'Financial disruption', desc: 'Identity theft can damage credit, drain accounts, and create financial stress that affects work performance.' },
              { icon: AlertTriangle, title: 'Recovery complexity', desc: 'Resolving identity theft takes significant time and effort — often during work hours.' },
              { icon: Users, title: 'Employee peace of mind', desc: 'Employees who feel protected are more focused, less stressed, and more engaged at work.' },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl bg-white border" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EFF6FF' }}>
                  <card.icon className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#101F3D', marginBottom: '0.5rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROTECTION FEATURES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#101F3D', marginBottom: '1rem' }}>
              What every employee gets
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Comprehensive identity protection — active from day one of enrollment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Identity monitoring', desc: 'Continuous monitoring of personal information across the internet and dark web.' },
              { icon: Bell, title: 'Alerts and notifications', desc: 'Timely alerts when suspicious activity or potential threats are detected.' },
              { icon: FileCheck, title: 'Identity recovery assistance', desc: 'Dedicated support to help employees navigate identity recovery if needed.' },
              { icon: Shield, title: 'Fraud support', desc: 'Guidance and resources to help employees respond to fraud and identity theft.' },
              { icon: Lock, title: 'Credit monitoring', desc: 'Monitoring for changes across major credit bureaus with alert notifications.' },
              { icon: Eye, title: 'Dark web scanning', desc: 'Scanning for employee personal information on dark web forums and databases.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border hover:shadow-md transition-shadow" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EFF6FF' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#101F3D', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WEBXACT WORKS ── */}
      <section className="py-20" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#101F3D', marginBottom: '1rem' }}>
              How Webxact works
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Simple for employers to introduce. Easy for employees to access.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px" style={{ backgroundColor: '#3B82F6', opacity: 0.3 }} />
            {[
              { num: '01', icon: Building2, title: 'Employers introduce the benefit', desc: 'Add Webxact to your employee benefits package. Our team handles setup — no IT required.' },
              { num: '02', icon: Users, title: 'Employees enroll or activate', desc: 'Employees receive their unique Employee ID and activate their protection in minutes.' },
              { num: '03', icon: Shield, title: 'Access protection services', desc: 'Employees access the included identity protection services and monitoring features.' },
            ].map((step) => (
              <div key={step.num} className="text-center p-8 rounded-2xl bg-white border" style={{ borderColor: '#E2E8F0' }}>
                <div className="text-5xl font-extrabold mb-4" style={{ color: '#DBEAFE', fontFamily: 'Manrope, sans-serif' }}>{step.num}</div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EFF6FF' }}>
                  <step.icon className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#101F3D', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS FOR EMPLOYERS ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #101F3D, #19345F)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'white', marginBottom: '1.25rem' }}>
                Built for employers who care about their people.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Webxact is a voluntary employee benefit that helps organizations offer identity protection as part of a competitive benefits package.
              </p>
              <Link href="/signup"
                className="inline-block px-7 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#3B82F6', fontFamily: 'Inter, sans-serif' }}>
                Request a Proposal
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Competitive employee benefits', desc: 'Stand out as an employer of choice with a benefit employees genuinely value.' },
                { title: 'Support for employee financial well-being', desc: 'Help employees protect their financial identity and reduce stress related to identity risks.' },
                { title: 'Accessible identity protection', desc: 'Remove barriers so employees can access identity protection services with ease.' },
                { title: 'Straightforward benefit communication', desc: 'Easy to explain, easy to enroll, and easy to manage for HR teams.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(147,197,253,0.1)' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#3B82F6' }} />
                  <div>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.25rem' }}>{item.title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24" style={{ backgroundColor: '#3B82F6' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1.25rem' }}>
            Give your team confidence in their digital lives.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Explore identity protection benefits for your organization.
          </p>
          <Link href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#101F3D', color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
