'use client';

import { useState } from 'react';
import { FadeIn, GlassCard, GlassButton } from '@/components/ui/motion';
import { Send, CheckCircle, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    enterprise: '',
    scope: '',
    budget: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', enterprise: '', scope: '', budget: '', email: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <GlassCard className="p-12">
              <CheckCircle className="mx-auto h-16 w-16 text-white mb-6" />
              <h1 className="text-3xl font-bold mb-4 text-white">Systems Initialized.</h1>
              <p className="text-zinc-500 mb-6">
                Your architecture request has been received. We&apos;ll respond within 24 hours.
              </p>
              <GlassButton>
                <button onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </button>
              </GlassButton>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white">Initialize Systems.</h1>
            <p className="mt-4 text-lg text-zinc-500">
              VersaLabs handles select B2B engineering contracts, rapid MVP blitz-sprints, and enterprise architecture consulting.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/[0.08] bg-[#1C1C1F] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-white/[0.15] focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/[0.08] bg-[#1C1C1F] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-white/[0.15] focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enterprise" className="block text-sm font-medium mb-2 text-white">Enterprise / Company</label>
                <input
                  type="text"
                  id="enterprise"
                  name="enterprise"
                  value={formData.enterprise}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/[0.08] bg-[#1C1C1F] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-white/[0.15] focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="scope" className="block text-sm font-medium mb-2 text-white">Scope of Architecture *</label>
                <textarea
                  id="scope"
                  name="scope"
                  value={formData.scope}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-white/[0.08] bg-[#1C1C1F] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-white/[0.15] focus:outline-none resize-none"
                  placeholder="Describe the system you need built..."
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2 text-white">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/[0.08] bg-[#1C1C1F] px-4 py-3 text-sm text-white transition-colors focus:border-white/[0.15] focus:outline-none"
                >
                  <option value="" className="bg-[#0D0D0F]">Select budget range</option>
                  <option value="5k-15k" className="bg-[#0D0D0F]">$5,000 - $15,000</option>
                  <option value="15k-50k" className="bg-[#0D0D0F]">$15,000 - $50,000</option>
                  <option value="50k-100k" className="bg-[#0D0D0F]">$50,000 - $100,000</option>
                  <option value="100k+" className="bg-[#0D0D0F]">$100,000+</option>
                </select>
              </div>

              <GlassButton variant="primary" className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                      Initializing...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Initialize Contract
                    </>
                  )}
                </button>
              </GlassButton>
            </form>
          </GlassCard>
        </FadeIn>

        <FadeIn delay={0.2}>
          <GlassCard className="p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-5 w-5 text-white" />
              <h3 className="font-medium text-white">Direct Contact</h3>
            </div>
            <p className="text-sm text-zinc-500">
              Reach out directly at{' '}
              <a href="mailto:contact@versalabs.com" className="text-white hover:text-zinc-300 transition-colors">
                contact@versalabs.com
              </a>
            </p>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
}
