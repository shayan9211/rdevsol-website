import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LegalCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 mb-4 inline-flex items-center">
            ← Back to Case Studies
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Private Document Analysis System
            </h1>
            <p className="text-xl text-gray-600 mb-6">Regional Law Firm</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our first legal sector deployment. Implemented secure private AI document analysis system 
              with encrypted data processing. Maintained absolute data privacy and attorney-client privilege compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A regional law firm with 25+ attorneys needed AI-powered document analysis for case research 
              and discovery. Attorney-client privilege and client confidentiality requirements prohibited using 
              public AI services. As one of our early legal sector clients, we worked closely with the firm 
              to deploy a private AI system processing all legal documents locally, achieving 75% faster 
              document review and zero client data exposure risk.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This deployment demonstrated our commitment to understanding the unique requirements of legal 
              professionals and the absolute necessity of data privacy in legal practice.
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
                  <span><strong>Attorney-Client Privilege:</strong> Absolute data privacy required, zero client data exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Document Volume:</strong> Process thousands of pages across multiple cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Security:</strong> End-to-end encryption, access controls, audit trails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Integration:</strong> Work with existing document management systems</span>
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
                Deployed private document analysis system using transformer models fine-tuned on legal documents. 
                All processing occurs within the firm's secure infrastructure with encryption at rest and in transit.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl mb-6">
              <div className="text-gray-400 text-sm mb-4">Python - Document Analysis Service</div>
              <pre className="text-blue-400 text-sm overflow-x-auto">
{`from transformers import AutoTokenizer, AutoModelForQuestionAnswering
from cryptography.fernet import Fernet
import hashlib

class LegalDocumentAnalyzer:
    def __init__(self, model_path: str, encryption_key: bytes):
        # All models loaded locally
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForQuestionAnswering.from_pretrained(model_path)
        self.encryptor = Fernet(encryption_key)
    
    def analyze_document(self, document: str, user_id: str) -> dict:
        """
        Analyze legal document - all processing local
        
        All encryption/decryption happens locally
        """
        document_text = self._decrypt(document)
        
        # Document analysis (local AI inference)
        analysis = {
            'entities': self._extract_entities(document_text),
            'key_points': self._extract_key_points(document_text),
            'summary': self._generate_summary(document_text)
        }
        
        # Log access for compliance
        self._audit_log(user_id, document_hash=hashlib.sha256(document_text.encode()).hexdigest())
        
        return {
            **analysis,
            'processed_locally': True,
            'encrypted': True
        }
`}
              </pre>
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
                { metric: '75%', label: 'Faster Document Review', description: 'Reduced document review time by 75%' },
                { metric: '0', label: 'Client Data Exposure', description: 'Zero incidents of client data exposure' },
                { metric: '100%', label: 'Privilege Compliance', description: 'Complete attorney-client privilege compliance' },
                { metric: '1000+', label: 'Documents Processed', description: 'Successfully processed thousands of legal documents' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                  <div className="text-gray-600 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Deploy Private AI for Legal?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you implement secure document analysis systems.
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
