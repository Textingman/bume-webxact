'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Shield } from 'lucide-react';

export default function TalkToSalesPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', size: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

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
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Book a Meeting</p>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: 'white', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Talk to our sales team.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '340px' }}>
              Learn how Webxact identity protection can be added to your employee benefits package. Our team will walk you through everything.
            </p>
          </div>
          <div className="relative z-10 space-y-4">
            {[
              'Personalized demo for your organization',
              'Learn about the employee enrollment flow',
              'Understand pricing and implementation',
              'Get answers from our benefits specialists',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#3B82F6' }} />
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16 bg-white">
          <div className="max-w-md w-full mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#EFF6FF' }}>
                  <CheckCircle className="w-10 h-10" style={{ color: '#3B82F6' }} />
                </div>
                <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#101F3D', marginBottom: '1rem' }}>
                  We&apos;ll be in touch!
                </h2>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Thank you for your interest in Webxact. Our team will reach out within 1–2 business days to schedule your meeting.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#3B82F6' }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3B82F6' }}>Book a Meeting</p>
                <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#101F3D', marginBottom: '0.75rem' }}>
                  Request a proposal.
                </h1>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#475569' }}>
                  Tell us about your organization and we&apos;ll set up a personalized meeting with our sales team.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: '#E2E8F0', color: '#101F3D' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Work Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: '#E2E8F0', color: '#101F3D' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Company Name *</label>
                    <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: '#E2E8F0', color: '#101F3D' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Company Size</label>
                    <select name="size" value={formData.size} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: '#E2E8F0', color: '#101F3D' }}>
                      <option value="">Select company size...</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501-1000">501–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>What are you looking for?</label>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your team&apos;s identity protection needs..."
                      className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none" style={{ borderColor: '#E2E8F0', color: '#101F3D' }} />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full py-3.5 rounded-xl text-white font-semibold transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: submitting ? '#9CA3AF' : '#3B82F6', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                    {submitting ? 'Submitting...' : (<>Book a Meeting <ArrowRight className="w-4 h-4" /></>)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
