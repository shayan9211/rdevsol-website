import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Problem & Solution Overview */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                The Growing Privacy Crisis in AI
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As businesses increasingly adopt AI capabilities, they face an impossible choice: 
                leverage powerful AI models that require exposing sensitive data to third-party 
                providers, or forego AI capabilities entirely.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This isn't just a compliance issue—it's a fundamental risk to your business. 
                When you send customer data, financial records, or proprietary information to 
                external AI APIs, you lose control. You can't audit what happens to your data, 
                you can't guarantee it won't be used to train competing models, and you can't 
                ensure it meets your regulatory requirements.
              </p>
              <div className="space-y-3 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">×</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Data Exposure Risk</p>
                    <p className="text-gray-600 text-sm">Your sensitive data travels through multiple third-party systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">×</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Compliance Challenges</p>
                    <p className="text-gray-600 text-sm">GDPR, HIPAA, and other regulations require data sovereignty</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">×</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Vendor Lock-in</p>
                    <p className="text-gray-600 text-sm">Dependency on external APIs creates ongoing cost and control issues</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100/50 rounded-2xl p-8 border-2 border-blue-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Solve This</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">On-Premises Deployment</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We deploy AI models directly on your infrastructure. Your servers, your data centers, 
                      your control. Zero external data transmission.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Enterprise-Grade Security</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Bank-level encryption, comprehensive audit trails, and complete regulatory compliance 
                      built into every deployment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Superior Performance</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      No network latency, no API rate limits, no per-request fees. Process data at 
                      the speed of your infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Leading Organizations Choose RDEVSOL
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped healthcare providers, financial institutions, legal firms, and government 
              agencies deploy private AI infrastructure that meets their unique security and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl border-2 border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Data Sovereignty</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your data never leaves your infrastructure. Not during training, not during inference, 
                not ever. Complete control over where and how your data is processed.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Perfect for:</p>
                <p className="text-sm font-medium text-blue-600 mt-1">Healthcare, Finance, Government, Legal</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance Built-In</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every deployment includes comprehensive audit trails, access controls, and security 
                measures designed to meet GDPR, HIPAA, SOC 2, and other regulatory requirements.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Compliance frameworks:</p>
                <p className="text-sm font-medium text-blue-700 mt-1">GDPR, HIPAA, SOC 2, PCI DSS, ISO 27001</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-blue-300 shadow-sm hover:shadow-md hover:border-blue-400 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Performance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Process millions of requests per day with sub-100ms latency. Scale on your own 
                infrastructure without worrying about API rate limits or external dependencies.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Performance metrics:</p>
                <p className="text-sm font-medium text-blue-800 mt-1">99.9% uptime SLA, &lt;100ms latency, unlimited scale</p>
              </div>
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-12 border-2 border-blue-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Proven Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Assessment', description: 'We analyze your infrastructure, compliance requirements, and AI use cases to design the optimal solution.', colorClass: 'text-blue-600' },
                { number: '02', title: 'Architecture', description: 'Our team designs a custom architecture tailored to your specific security and performance needs.', colorClass: 'text-blue-700' },
                { number: '03', title: 'Deployment', description: 'We deploy and configure your private AI infrastructure with minimal disruption to your operations.', colorClass: 'text-blue-800' },
                { number: '04', title: 'Optimization', description: 'Continuous monitoring and optimization ensure your system performs at peak efficiency.', colorClass: 'text-blue-900' }
              ].map((step, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 transform translate-x-4" />
                  )}
                  <div className={`text-3xl font-bold ${step.colorClass} mb-3`}>{step.number}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our private AI solutions power critical applications where data privacy and security 
              are non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { industry: 'Healthcare', clients: 'Hospitals', useCase: 'Patient data analysis, predictive diagnostics, HIPAA-compliant AI', bgClass: 'bg-blue-100', textClass: 'text-blue-700' },
              { industry: 'Legal', clients: 'Law Firms', useCase: 'Document analysis, contract review, privileged data processing', bgClass: 'bg-sky-100', textClass: 'text-blue-700' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-md">
                <div className={`inline-block px-3 py-1 ${item.bgClass} ${item.textClass} rounded-full text-xs font-semibold mb-3`}>
                  {item.industry}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.industry}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.clients}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.useCase}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Explore detailed case studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Deploy Private AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule a consultation with our team to discuss how we can help you deploy 
            private AI infrastructure that meets your security and compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
