import React, { useContext } from 'react';
import Link from 'next/link';
import { OpenModalContext } from '@/pages/_app';

export default function CTASection() {
  const { setIsModalOpen } = useContext(OpenModalContext);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-primary/90 to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-white/90">
              Take the first step towards academic excellence. Book your free demo session today with no commitment required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Book Free Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link
              href="/browse/All"
              className="px-8 py-4 bg-white/20 text-white font-bold border-2 border-white rounded-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Explore All Tutors
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
            <div className="py-4">
              <div className="text-white/80 text-sm font-semibold">No Hidden Fees</div>
            </div>
            <div className="py-4">
              <div className="text-white/80 text-sm font-semibold">Secure & Private</div>
            </div>
            <div className="py-4">
              <div className="text-white/80 text-sm font-semibold">Free Cancellation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
