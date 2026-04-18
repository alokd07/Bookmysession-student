import React, { useContext } from 'react';
import Link from 'next/link';
import { OpenModalContext } from '@/pages/_app';

export default function HeroSection() {
  const { setIsModalOpen } = useContext(OpenModalContext);

  return (
    <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-semibold text-primary">Your Learning Journey Starts Here</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Perfect <span className="text-primary">Tutor</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Connect with expert educators tailored to your learning goals. Get personalized one-on-one sessions from the comfort of your home.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-gray-600">Active Tutors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Book Free Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <Link
                href="/browse/All"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Browse Tutors
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-96 h-96">
              <img
                src="/girl.svg"
                alt="Student learning"
                className="w-full h-full object-contain"
              />
              {/* Floating badges */}
              <div className="absolute top-20 -right-10 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-pulse">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Verified Tutors</div>
                  <div className="text-xs text-gray-600">100% screened</div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-10 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">4.9/5 Rating</div>
                  <div className="text-xs text-gray-600">From 25K+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
