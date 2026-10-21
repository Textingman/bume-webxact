'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
            style={{
              backgroundColor: i < current ? '#1A3A6B' : i === current ? '#1A3A6B' : '#E5E7EB',
              color: i <= current ? 'white' : '#9CA3AF',
              opacity: i < current ? 0.7 : 1,
            }}
          >
            {i < current ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : i + 1}
          </div>
          {i < total - 1 && (
            <div className="w-8 h-px" style={{ backgroundColor: i < current ? '#1A3A6B' : '#E5E7EB' }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', employeeId: '' });
  const [emailError, setEmailError] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState('');
  const [validEmployeeId, setValidEmployeeId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setValidEmployeeId(generateEmployeeId());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') setEmailError('');
    if (name === 'employeeId') setEmployeeIdError('');
  };

  const handleStep0 = () => {
    if (!formData.name) return;
    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid work email address.');
      return;
    }
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const steps = [
    { label: 'Your Info', desc: 'Name & work email' },
    { label: 'Employee ID', desc: 'Verify your access' },
    { label: 'Confirm', desc: 'Complete setup' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="min-h-screen grid md:grid-cols-2">
        {/* Left Panel */}
        <div className="relative hidden md:flex flex-col justify-between p-12 pt-28" style={{ backgroundColor: '#1A3A6B' }}>
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 70%, white, transparent)' }} />
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-8 opacity-60 text-white">Employee Access</p>
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-6">
              Defend your identity. Protect what matters most.
            </h2>
            <p className="text-white opacity-70 text-base leading-relaxed max-w-xs">
              Connect your employee account to access your Webxact benefits — provided by your employer.
            </p>
          </div>
          <div className="relative z-10 space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{
                    backgroundColor: i < step ? 'rgba(255,255,255,0.9)' : i === step ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                    color: i < step ? '#1A3A6B' : 'white',
                    border: i === step ? '1px solid rgba(255,255,255,0.5)' : 'none',
                  }}
                >
                  {i < step ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1A3A6B" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : i + 1}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: i <= step ? 'white' : 'rgba(255,255,255,0.45)' }}>{s.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex flex-col justify-center px-6 py-24 md:px-12 lg:px-16 bg-white">
          <div className="max-w-md w-full mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-10 h-10" style={{ color: '#1A3A6B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold mb-4" style={{ color: '#1A3A6B' }}>You're all set!</h2>
                <p className="text-lg mb-8 text-gray-500">Your Webxact protection is now active. Check your email for your monitoring dashboard access.</p>
                <Link href="/" className="inline-block text-white font-bold px-8 py-3 rounded-xl transition-opacity hover:opacity-90" style={{ backgroundColor: '#1A3A6B' }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <StepDots current={step} total={3} />

                {/* Step 0: Personal Info */}
                {step === 0 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1A3A6B' }}>Step 1 of 3 — Your Information</p>
                    <h1 className="text-3xl font-extrabold mb-2 text-gray-900">Let's get started.</h1>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">Enter your name and work email to begin setting up your account.</p>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Full Name *</label>
                        <input
                          type="text" name="name" required value={formData.name} onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none"
                          style={{ borderColor: '#E5E7EB', color: '#111827' }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Work Email *</label>
                        <input
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none"
                          style={{ borderColor: emailError ? '#DC2626' : '#E5E7EB', color: '#111827' }}
                        />
                        {emailError && <p className="text-xs text-red-600 mt-1">{emailError}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Company Name</label>
                        <input
                          type="text" name="company" value={formData.company} onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none"
                          style={{ borderColor: '#E5E7EB', color: '#111827' }}
                        />
                      </div>
                      <button
                        type="button" onClick={handleStep0}
                        className="w-full py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                        style={{ backgroundColor: '#1A3A6B', opacity: formData.name && formData.email ? 1 : 0.5 }}
                      >
                        Continue →
                      </button>
                    </div>
                  </>
                )}

                {/* Step 1: Employee ID */}
                {step === 1 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1A3A6B' }}>Step 2 of 3 — Employee Verification</p>
                    <h1 className="text-3xl font-extrabold mb-2 text-gray-900">Verify your access.</h1>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      Enter the Employee ID from your HR onboarding email to connect your account to your employer's Webxact plan.
                    </p>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Employee ID *</label>
                        <input
                          type="text" name="employeeId" required value={formData.employeeId} onChange={handleChange}
                          placeholder={validEmployeeId}
                          className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none font-mono tracking-wider"
                          style={{ borderColor: employeeIdError ? '#DC2626' : '#E5E7EB', color: '#111827' }}
                        />
                        {employeeIdError ? (
                          <p className="text-xs text-red-600 mt-1">{employeeIdError}</p>
                        ) : (
                          <p className="text-xs text-gray-400 mt-1">Find your Employee ID in your HR onboarding email or ask your HR team.</p>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button" onClick={() => setStep(0)}
                          className="px-5 py-3 rounded-xl text-sm font-semibold border transition-colors"
                          style={{ borderColor: '#E5E7EB', color: '#374151' }}
                        >
                          Back
                        </button>
                        <button
                          type="button" onClick={handleStep1}
                          className="flex-1 py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                          style={{ backgroundColor: '#1A3A6B', opacity: formData.employeeId ? 1 : 0.5 }}
                        >
                          Verify & Continue →
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Confirm */}
                {step === 2 && (
                  <form onSubmit={handleSubmit}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1A3A6B' }}>Step 3 of 3 — Confirm & Activate</p>
                    <h1 className="text-3xl font-extrabold mb-2 text-gray-900">Almost there.</h1>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      Review your information and activate your Webxact account.
                    </p>

                    {/* Summary card */}
                    <div className="rounded-xl p-5 mb-6 border" style={{ backgroundColor: '#DBEAFE', borderColor: '#1A3A6B33' }}>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#1A3A6B' }}>Account Summary</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Name</span>
                          <span className="font-semibold text-gray-900">{formData.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Email</span>
                          <span className="font-semibold text-gray-900">{formData.email}</span>
                        </div>
                        {formData.company && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Company</span>
                            <span className="font-semibold text-gray-900">{formData.company}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Employee ID</span>
                          <span className="font-mono font-semibold text-gray-900">{formData.employeeId}</span>
                        </div>
                      </div>
                    </div>

                    {/* Terms only — no SMS */}
                    <div className="flex items-start gap-3 mb-6">
                      <input
                        type="checkbox" id="termsAgreement" required
                        className="mt-1 w-4 h-4 rounded flex-shrink-0"
                        style={{ accentColor: '#1A3A6B' }}
                      />
                      <label htmlFor="termsAgreement" className="text-xs text-gray-500 leading-relaxed">
                        I have read and agree to the{' '}
                        <Link href="/privacy" className="underline" style={{ color: '#1A3A6B' }}>Privacy Policy</Link>
                        {' '}and{' '}
                        <Link href="/terms" className="underline" style={{ color: '#1A3A6B' }}>Terms of Service</Link>. *
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button" onClick={() => setStep(1)}
                        className="px-5 py-3 rounded-xl text-sm font-semibold border transition-colors"
                        style={{ borderColor: '#E5E7EB', color: '#374151' }}
                      >
                        Back
                      </button>
                      <button
                        type="submit" disabled={isSubmitting}
                        className="flex-1 py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                        style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#1A3A6B', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                      >
                        {isSubmitting ? 'Activating…' : 'Activate My Account →'}
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
