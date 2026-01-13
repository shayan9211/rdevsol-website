import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LegalCorporateCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 mb-4 inline-flex items-center">
            ← Back to Case Studies
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contract Analysis System
            </h1>
            <p className="text-xl text-gray-600 mb-6">Boutique Corporate Law Firm</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our second legal deployment. Deployed private AI system for contract analysis and legal document 
              processing. All sensitive client contracts analyzed locally with complete data sovereignty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A boutique corporate law firm specializing in contract law needed AI capabilities for analyzing 
              and reviewing client contracts. With a focus on corporate clients, they handle hundreds of 
              contracts monthly and needed a solution that would speed up review while maintaining absolute 
              confidentiality of client agreements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Building on our experience from our first legal deployment, we refined our approach to better 
              serve corporate law firms. The system achieved 60% faster contract review while maintaining 
              complete client data privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Contract Confidentiality:</strong> Corporate contracts contain sensitive business terms that must remain private</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Volume:</strong> Process hundreds of contracts per month efficiently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Accuracy:</strong> Identify risks and key terms with high precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Scalability:</strong> Solution must grow with the firm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Deployed a specialized contract analysis system using AI models trained on legal contract data. 
                All contract processing occurs locally within the firm's infrastructure, ensuring complete 
                confidentiality of client agreements.
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Contract risk identification and flagging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Key term extraction and summarization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Comparison with standard contract templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Complete audit trail for compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { metric: '60%', label: 'Faster Contract Review', description: 'Reduced time to review and analyze contracts' },
                { metric: '95%', label: 'Accuracy in Risk Identification', description: 'High precision in identifying contract risks' },
                { metric: '100%', label: 'Client Data Privacy', description: 'Zero client data exposure' },
                { metric: '500+', label: 'Contracts Processed', description: 'Successfully processed hundreds of contracts' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                  <div className="text-gray-600 text-sm">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
              <p className="text-lg italic mb-4">
                "RDEVSOL's contract analysis system has transformed how we handle contract reviews. We can 
                process more contracts in less time while maintaining complete confidence that our clients' 
                sensitive agreements never leave our infrastructure."
              </p>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full w-12 h-12 mr-4 flex items-center justify-center font-bold">
                  JW
                </div>
                <div>
                  <div className="font-bold">Jennifer Walsh</div>
                  <div className="text-blue-100 text-sm">Managing Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Deploy Private AI for Your Law Firm?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you implement secure contract analysis systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <Link
              href="/case-studies"
              className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View Other Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
