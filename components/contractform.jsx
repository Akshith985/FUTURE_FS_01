"use client";

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

// Initialize Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // 1. Get data from the form
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // 2. Send to Supabase
    try {
      const { error: supabaseError } = await supabase
        .from('contacts') // Make sure this matches your table name
        .insert([data]);

      if (supabaseError) throw supabaseError;

      setIsSuccess(true);
      e.target.reset(); // Clear the form
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  // --- Success View ---
  if (isSuccess) {
    return (
      <section className="w-full max-w-xl mx-auto py-16 px-6 text-center">
        <div className="bg-green-100 dark:bg-green-900/30 p-8 rounded-2xl border border-green-200 dark:border-green-800">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-300">Message Sent!</h2>
          <p className="text-green-700 dark:text-green-400">
            Thanks for reaching out. I've recieved your response.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-6 text-sm font-medium underline text-green-700 hover:text-green-800"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  // --- Form View ---
  return (
    <section id="contact" className="w-full max-w-xl mx-auto py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-slate-500 dark:text-slate-400">
          Wanna say hi? Send a message directly to me.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me more.."
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
            />
          </div>
        </div>

        {/* Error Message Display */}
        {error && (
          <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && <Send size={18} />}
        </button>
      </form>
    </section>
  );
}