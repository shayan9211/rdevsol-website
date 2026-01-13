import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HealthcareCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 mb-4 inline-flex items-center">
            ← Back to Case Studies
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Healthcare
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Private Patient Data Analysis System
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Regional Community Hospital
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our first healthcare deployment. Deployed private AI infrastructure for patient data analysis 
              while maintaining strict HIPAA compliance. All patient records processed locally without external API exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                A regional community hospital with 200+ beds and approximately 50,000 patient records needed 
                to implement AI-powered predictive health analytics to improve early disease detection and 
                optimize resource allocation. As a mid-sized facility, they had limited IT resources but 
                strict HIPAA requirements that prohibited the use of public AI APIs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This was one of our early deployments in the healthcare sector. We worked closely with the 
                hospital's IT team to deploy a private AI infrastructure within their existing data center, 
                enabling predictive analytics while ensuring 100% HIPAA compliance. The solution processed 
                all patient data locally, achieving a 25% improvement in early disease detection rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-red-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-red-600 mb-4">Key Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>HIPAA Compliance:</strong> Zero patient data exposure to external services, complete audit trails, and access controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Cost-Effective Solution:</strong> Limited budget for infrastructure expansion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Integration:</strong> Seamless integration with existing Epic EMR system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">•</span>
                  <span><strong>Data Sovereignty:</strong> All data processing must occur within hospital infrastructure</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-800 font-semibold mb-2">Why Public AI APIs Were Not an Option:</p>
              <p className="text-red-700">
                Using services like OpenAI, Google Cloud AI, or AWS Bedrock would require sending PHI to external 
                servers, violating HIPAA regulations. Even with Business Associate Agreements (BAAs), the hospital 
                could not risk exposing sensitive patient data to third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Architecture Overview</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We deployed a private AI infrastructure within the hospital's existing data center, consisting of:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>On-Premises GPU Cluster:</strong> 4x NVIDIA A100 GPUs for model inference</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Custom Medical AI Models:</strong> Fine-tuned BERT-based models for medical text analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>HIPAA-Compliant Data Pipeline:</strong> Encrypted data processing with comprehensive audit trails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Integration Layer:</strong> REST API connecting to Epic EMR system</span>
                </li>
              </ul>
            </div>

            {/* Code Snippet */}
            <div className="bg-gray-900 p-6 rounded-xl mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Python - Model Inference Service</span>
                <span className="text-green-400 text-xs">HIPAA Compliant</span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
{`from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import logging

class MedicalAIModel:
    def __init__(self, model_path: str):
        # Load model from local storage (no external API calls)
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_path)
        self.model.eval()
    
    def predict(self, patient_note: str, user_id: str) -> dict:
        """
        Process patient note locally with full audit trail
        
        All processing happens locally - no external API calls
        """
        inputs = self.tokenizer(
            patient_note, 
            return_tensors="pt", 
            truncation=True, 
            max_length=512
        )
        
        with torch.no_grad():
            outputs = self.model(**inputs)
            predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
        
        # Log access for HIPAA compliance
        logging.info(f"AUDIT: {user_id} | prediction_access")
        
        return {
            "risk_score": predictions[0][1].item(),
            "confidence": predictions.max().item(),
            "processed_locally": True,
            "hipaa_compliant": True
        }
`}
              </pre>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Key Implementation Details</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Model Training:</strong> Fine-tuned on de-identified medical records with hospital approval, processed entirely on-premises</li>
                <li><strong>Data Encryption:</strong> AES-256 encryption at rest, TLS 1.3 for all data in transit</li>
                <li><strong>Access Control:</strong> Role-based access control (RBAC) integrated with hospital's Active Directory</li>
                <li><strong>Audit Trails:</strong> Complete logging of all data access, stored for 6 years per HIPAA requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { metric: '25%', label: 'Improvement in Early Disease Detection', description: 'AI models identified high-risk patients more effectively than traditional screening' },
                { metric: '100%', label: 'HIPAA Compliance', description: 'Zero violations, complete audit trail, passed all compliance audits' },
                { metric: '0', label: 'Data Breaches', description: 'Zero security incidents, no patient data exposure' },
                { metric: '20%', label: 'Cost Reduction', description: 'Reduced operational costs through better resource allocation' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                  <div className="text-gray-600 text-sm">{item.description}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
              <p className="text-lg italic mb-4">
                "As one of RDEVSOL's early healthcare clients, we were impressed by their attention to detail 
                and commitment to HIPAA compliance. The private AI solution has helped us identify high-risk 
                patients earlier while ensuring our patient data never leaves our infrastructure."
              </p>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full w-12 h-12 mr-4 flex items-center justify-center font-bold">
                  CM
                </div>
                <div>
                  <div className="font-bold">Dr. Christopher Martinez</div>
                  <div className="text-blue-100 text-sm">Chief Medical Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'PyTorch', 'Transformers', 'NVIDIA A100', 'Kubernetes',
                'FastAPI', 'PostgreSQL', 'Docker', 'Epic FHIR API'
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-gray-700 border border-gray-200">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Deploy Private AI for Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you implement HIPAA-compliant AI solutions.
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
