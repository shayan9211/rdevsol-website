'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-sky-50 to-white border-b border-blue-100 pt-20 lg:pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Robust Development Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Private AI Infrastructure
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                That Never Leaves Your Control
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
              Deploy enterprise-grade AI models on your infrastructure. Process sensitive data 
              with complete privacy, regulatory compliance, and zero external dependencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center bg-white border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-blue-200">
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Deployed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">30+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">100%</div>
                <div className="text-sm text-gray-600">Data Privacy</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative lg:pl-8">
            <div className="relative bg-white rounded-2xl p-8 border-2 border-blue-100 shadow-xl">
              {/* Simple, clean visual representation */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Your Infrastructure</div>
                      <div className="text-sm text-gray-600">On-Premises Deployment</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium shadow-sm">
                    Secure
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-xs text-gray-600">Data Privacy</div>
                  </div>
                  <div className="text-center p-3 bg-sky-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700 mb-1">Zero</div>
                    <div className="text-xs text-gray-600">API Calls</div>
                  </div>
                  <div className="text-center p-3 bg-blue-100 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900 mb-1">Full</div>
                    <div className="text-xs text-gray-600">Control</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900 text-sm mb-1">HIPAA & GDPR Compliant</div>
                      <div className="text-xs text-gray-600">All data processed within your infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-200/30 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
