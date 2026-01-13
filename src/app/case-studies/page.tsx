import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'healthcare',
      title: 'Mid-Size Hospital: Private Patient Data Analysis',
      client: 'Regional Community Hospital',
      industry: 'Healthcare',
      overview: 'Deployed private AI infrastructure for patient data analysis while maintaining strict HIPAA compliance. All patient records processed locally without external API exposure.',
      results: [
        '25% improvement in early disease detection rates',
        '100% HIPAA compliance maintained',
        'Zero data breaches or privacy incidents',
        '20% reduction in operational costs'
      ],
      image: '🏥',
      color: 'from-blue-50 to-sky-50'
    },
    {
      slug: 'legal',
      title: 'Law Firm: Document Analysis & Research',
      client: 'Regional Law Firm',
      industry: 'Legal',
      overview: 'Implemented secure private AI document analysis system with encrypted data processing. Maintained absolute data privacy and attorney-client privilege compliance.',
      results: [
        '75% faster document review process',
        'Enhanced case research accuracy',
        'Zero client data exposure risk',
        'Complete legal confidentiality compliance'
      ],
      image: '⚖️',
      color: 'from-blue-50 to-gray-50'
    },
    {
      slug: 'legal-corporate',
      title: 'Corporate Law Firm: Contract Analysis System',
      client: 'Boutique Corporate Law Firm',
      industry: 'Legal',
      overview: 'Deployed private AI system for contract analysis and legal document processing. All sensitive client contracts analyzed locally with complete data sovereignty.',
      results: [
        '60% faster contract review',
        'Improved accuracy in risk identification',
        'Complete client data privacy',
        'Scalable solution for growing practice'
      ],
      image: '📋',
      color: 'from-sky-50 to-blue-50'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Early success stories from our deployments. Explore how we've helped organizations 
              deploy private AI solutions while maintaining complete data privacy and security.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href={`/case-studies/${study.slug}`}
                className="group bg-white border-2 border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-300"
              >
                <div className={`text-6xl mb-4 inline-block bg-gradient-to-br ${study.color} p-4 rounded-xl`}>
                  {study.image}
                </div>
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {study.industry}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h2>
                <p className="text-blue-700 font-semibold mb-4 text-sm">Client: {study.client}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{study.overview}</p>
                
                <div className="space-y-2 mb-6">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                  View Full Case Study →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're committed to delivering exceptional results while maintaining the highest standards of security and compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">3</div>
              <div className="text-blue-100">Successful Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Privacy Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">0</div>
              <div className="text-blue-100">Data Breaches</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Your Private AI Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you deploy AI that keeps your data secure and private.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
