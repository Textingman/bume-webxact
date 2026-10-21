'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, CheckCircle } from 'lucide-react';

function generateEmployeeId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = 'WXT-';
  for (let i = 0; i < 4; i++) id += chars[Math.floor(Math.random() * chars.length)];
  id += '-';
  for (let i = 0; i < 4; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
            style={{ backgroundColor: i <= current ? '#3B82F6' : '#E2E8F0', color: i <= current ? 'white' : '#94A3B8', opacity: i < current ? 0.7 : 1 }}>
            {i < current ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : i + 1}
          </div>
          {i < total - 1 && <div className="w-8 h-px" style={{ backgroundColor: i < current ? '#3B82F6' : '#E2E8F0' }} />}
        </div>
      ))}
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', employeeId: '' });
  const [emailError, setEmailError] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState('');
  const [validEmployeeId, setValidEmployeeId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { setValidEmployeeId(generateEmployeeId()); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') setEmailError('');
    if (name === 'employeeId') setEmployeeIdError('');
  };

  const handleStep0 = () => {
    if (!formData.name) return;
    if (!isValidEmail(formData.email)) { setEmailError('Please enter a valid work email address.'); return; }
    setStep(1);
  };

  const handleStep1 = () => {
    if (formData.employeeId.trim() !== validEmployeeId) {
      setEmployeeIdError('Invalid Employee ID. Please check your HR onboarding email and try again.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1500);
  };

  const steps = [
    { label: 'Your Info', desc: 'Name & work email' },
    { label: 'Employee ID', desc: 'Verify your access' },
    { label: 'Activate', desc: 'Complete setup' },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <div className="min-h-screen grid md:grid-cols-2">
        {/* Left Panel */}
        <div className="relative hidden md:flex flex-col justify-between p-12 pt-20" style={{ background: 'linear-gradient(135deg, #101F3D, #19345F)' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full border opacity-10" style={{ borderColor: '#93C5FD' }} />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-72 h-72 rounded-full border opacity-8" style={{ borderColor: '#3B82F6' }} />
          </div>
          <div className="relative z-10">
            <div className="mb-8">
              <Image src="/logo.png" alt="Webxact" width={150} height={44} className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Employee Access</p>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: 'white', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Activate your identity protection.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '340px' }}>
              Your employer has provided Webxact identity protection as a workplace benefit. Use your Employee ID to activate your coverage.
            </p>
          </div>
          <div className="relative z-10 space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ backgroundColor: i < step ? 'rgba(255,255,255,0.9)' : i === step ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)', color: i < step ? '#3B82F6' : 'white', border: i === step ? '1px solid rgba(255,255,255,0.4)' : 'none' }}>
                  {i < step ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg> : i + 1}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: i <= step ? 'white' : 'rgba(255,255,255,0.4)' }}>{s.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-center px-6 py-24 md:px-12 lg:px-16 bg-white">
          <div className="max-w-md w-full mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#EFF6FF' }}>
                  <CheckCircle className="w-10 h-10" style={{ color: '#3B82F6' }} />
                </div>
                <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#101F3D', marginBottom: '1rem' }}>
                  You&apos;re protected!
                </h2>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Your Webxact identity protection is now active. Check your email for next steps to access your protection dashboard.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#3B82F6' }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <StepDots current={step} total={3} />

                {step === 0 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3B82F6' }}>Step 1 of 3 — Your Information</p>
                    <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#101F3D', marginBottom: '0.75rem' }}>Let&apos;s get started.</h1>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: '#475569' }}>Enter your name and work email to begin activating your identity protection.</p>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: '#E2E8F0', color: '#101F3D' }} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Work Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: emailError ? '#DC2626' : '#E2E8F0', color: '#101F3D' }} />
                        {emailError && <p className="text-xs text-red-600 mt-1">{emailError}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: '#E2E8F0', color: '#101F3D' }} />
                      </div>
                      <button type="button" onClick={handleStep0}
                        className="w-full py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                        style={{ backgroundColor: '#3B82F6', opacity: formData.name && formData.email ? 1 : 0.5 }}>
                        Continue →
                      </button>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3B82F6' }}>Step 2 of 3 — Employee Verification</p>
                    <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#101F3D', marginBottom: '0.75rem' }}>Verify your access.</h1>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: '#475569' }}>
                      Enter the Employee ID from your HR onboarding email to connect your account to your employer&apos;s Webxact plan.
                    </p>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Employee ID *</label>
                        <input type="text" name="employeeId" required value={formData.employeeId} onChange={handleChange} placeholder={validEmployeeId}
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none font-mono tracking-wider"
                          style={{ borderColor: employeeIdError ? '#DC2626' : '#E2E8F0', color: '#101F3D' }} />
                        {employeeIdError ? (
                          <p className="text-xs text-red-600 mt-1">{employeeIdError}</p>
                        ) : (
                          <p className="text-xs mt-1" style={{ color: '#94A3B8' }}>Find your Employee ID in your HR onboarding email or ask your HR team.</p>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(0)}
                          className="px-5 py-3 rounded-xl text-sm font-semibold border transition-colors"
                          style={{ borderColor: '#E2E8F0', color: '#475569' }}>
                          Back
                        </button>
                        <button type="button" onClick={handleStep1}
                          className="flex-1 py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                          style={{ backgroundColor: '#3B82F6', opacity: formData.employeeId ? 1 : 0.5 }}>
                          Verify & Continue →
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3B82F6' }}>Step 3 of 3 — Activate Protection</p>
                    <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#101F3D', marginBottom: '0.75rem' }}>Almost there.</h1>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: '#475569' }}>Review your information and activate your Webxact identity protection.</p>

                    <div className="rounded-xl p-5 mb-6 border" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#3B82F6' }}>Account Summary</p>
                      <div className="space-y-2">
                        {[['Name', formData.name], ['Email', formData.email], ...(formData.company ? [['Company', formData.company]] : []), ['Employee ID', formData.employeeId]].map(([label, value]) => (
                          <div key={label} className="flex justify-between text-sm">
                            <span style={{ color: '#475569' }}>{label}</span>
                            <span className="font-semibold" style={{ color: '#101F3D', fontFamily: label === 'Employee ID' ? 'monospace' : 'inherit' }}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-6">
                      <input type="checkbox" id="termsAgreement" required className="mt-1 w-4 h-4 rounded flex-shrink-0" style={{ accentColor: '#3B82F6' }} />
                      <label htmlFor="termsAgreement" className="text-xs leading-relaxed" style={{ color: '#475569' }}>
                        I have read and agree to the{' '}
                        <Link href="/privacy" className="underline" style={{ color: '#3B82F6' }}>Privacy Policy</Link>
                        {' '}and{' '}
                        <Link href="/terms" className="underline" style={{ color: '#3B82F6' }}>Terms of Service</Link>. *
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)}
                        className="px-5 py-3 rounded-xl text-sm font-semibold border transition-colors"
                        style={{ borderColor: '#E2E8F0', color: '#475569' }}>
                        Back
                      </button>
                      <button type="submit" disabled={isSubmitting}
                        className="flex-1 py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                        style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#3B82F6', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                        {isSubmitting ? 'Activating…' : 'Activate My Protection →'}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
