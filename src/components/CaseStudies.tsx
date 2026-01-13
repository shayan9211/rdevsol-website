export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Healthcare Provider: Private Patient Data Analysis',
      client: 'Major Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Needed to analyze patient records for predictive health insights while maintaining strict HIPAA compliance. Public AI APIs were not an option due to data privacy regulations.',
      solution: 'Deployed a private AI infrastructure with on-premises servers, custom-trained models for medical data analysis, and comprehensive audit trails. All patient data remains completely within hospital infrastructure.',
      results: [
        '30% improvement in early disease detection rates',
        '100% HIPAA compliance maintained',
        'Zero data breaches or privacy incidents',
        'Reduced operational costs by 25% through better resource allocation'
      ],
      technologies: ['On-Premises AI Infrastructure', 'Custom Medical AI Models', 'HIPAA Compliance Framework', 'Real-time Analytics']
    },
    {
      title: 'Financial Institution: Fraud Detection System',
      client: 'Mid-Size Regional Bank',
      industry: 'Finance',
      challenge: 'Required real-time fraud detection capabilities but couldn\'t share transaction data with external AI services due to regulatory requirements and security concerns.',
      solution: 'Built a private AI fraud detection system with local deployment, real-time transaction analysis, and integration with existing banking systems. All financial data processed on internal infrastructure.',
      results: [
        '95% accuracy in fraud detection',
        '60% reduction in false positives',
        'Real-time processing with <100ms latency',
        'Complete regulatory compliance with banking standards'
      ],
      technologies: ['Private Cloud AI', 'Real-time Processing Engine', 'ML-based Fraud Detection', 'System Integration']
    },
    {
      title: 'Legal Firm: Document Analysis & Research',
      client: 'International Law Firm',
      industry: 'Legal',
      challenge: 'Needed AI-powered document analysis for case research, but client confidentiality and attorney-client privilege required absolute data privacy. Could not use public AI APIs.',
      solution: 'Implemented a secure, private AI document analysis system with encrypted data processing, access controls, and complete isolation from external services. Deployed on firm\'s private infrastructure.',
      results: [
        '80% faster document review process',
        'Enhanced case research accuracy',
        'Zero client data exposure risk',
        'Complete compliance with legal confidentiality requirements'
      ],
      technologies: ['Secure AI Deployment', 'Document Processing AI', 'Encryption at Rest & In Transit', 'Access Control Systems']
    },
    {
      title: 'Manufacturing Company: Predictive Maintenance',
      client: 'Industrial Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Wanted to implement AI for predictive maintenance of production equipment, but proprietary manufacturing data couldn\'t be shared with external AI services.',
      solution: 'Deployed private AI models for equipment monitoring and predictive analytics. All sensor data and manufacturing processes analyzed locally without any external data transmission.',
      results: [
        '40% reduction in unplanned downtime',
        '25% decrease in maintenance costs',
        'Improved production efficiency',
        'Protected proprietary manufacturing data'
      ],
      technologies: ['IoT Integration', 'Predictive Maintenance AI', 'Edge Computing', 'Manufacturing Analytics']
    },
    {
      title: 'Government Agency: Citizen Data Processing',
      client: 'Federal Agency',
      industry: 'Government',
      challenge: 'Required AI capabilities for processing citizen service requests while maintaining strict data sovereignty requirements. Public cloud AI services were prohibited.',
      solution: 'Built a completely private AI system on government-owned infrastructure with air-gapped deployment options. All citizen data processed within secure government facilities.',
      results: [
        '50% faster citizen service processing',
        '100% data sovereignty compliance',
        'Enhanced service quality',
        'Complete audit trail for compliance'
      ],
      technologies: ['Air-Gapped Deployment', 'Government-Grade Security', 'Citizen Service AI', 'Compliance Frameworks']
    },
    {
      title: 'Retail Chain: Customer Behavior Analytics',
      client: 'National Retail Corporation',
      industry: 'Retail',
      challenge: 'Wanted to leverage AI for personalized customer experiences but needed to keep customer purchase data private and avoid sharing with third-party AI providers.',
      solution: 'Implemented private AI recommendation and analytics systems. All customer data analyzed locally, enabling personalization without external data sharing.',
      results: [
        '35% increase in customer engagement',
        'Improved recommendation accuracy',
        'Protected customer privacy',
        'Competitive advantage through data exclusivity'
      ],
      technologies: ['Recommendation Systems', 'Customer Analytics AI', 'Privacy-Preserving ML', 'Personalization Engines']
    }
  ]

  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses deploy private AI solutions 
            while maintaining complete data privacy and security
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {study.industry}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-blue-700 font-semibold mb-6">Client: {study.client}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-600 mr-2">Results</span>
                </h4>
                <ul className="space-y-4">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 text-xl mr-3 font-bold">✓</span>
                      <span className="text-gray-700 text-lg leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Private AI Solution?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help you deploy AI that keeps your data secure and private.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
