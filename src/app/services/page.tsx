import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Private AI Deployment',
      icon: '🔒',
      description: 'Deploy AI models directly on your infrastructure. Keep all data processing local to your servers with no external API calls.',
      features: [
        'On-premises or private cloud deployment',
        'Custom model training and fine-tuning',
        'Complete data isolation',
        'No vendor lock-in',
        'Scalable architecture design',
        'Performance optimization'
      ],
      benefits: [
        '100% data privacy and security',
        'No per-API-call fees',
        'Faster response times',
        'Custom model fine-tuning',
        'Complete control over infrastructure'
      ]
    },
    {
      title: 'Enterprise AI Solutions',
      icon: '🏢',
      description: 'Build AI-powered applications tailored to your business needs. From chatbots to predictive analytics, we deliver enterprise-grade solutions.',
      features: [
        'Custom AI application development',
        'Integration with existing systems',
        'Scalable architecture design',
        '24/7 monitoring and support',
        'Real-time processing capabilities',
        'Multi-tenant architecture support'
      ],
      benefits: [
        'Industry-specific solutions',
        'Seamless system integration',
        'Enterprise-grade reliability',
        'Dedicated support team',
        'Continuous improvement'
      ]
    },
    {
      title: 'AI Infrastructure Setup',
      icon: '⚙️',
      description: 'We set up and configure your AI infrastructure from scratch, ensuring optimal performance, security, and scalability.',
      features: [
        'Infrastructure architecture design',
        'Hardware recommendations',
        'Deployment automation',
        'Performance optimization',
        'Load balancing and failover',
        'Monitoring and alerting systems'
      ],
      benefits: [
        'Optimized for your workload',
        'Cost-effective hardware selection',
        'Automated deployments',
        'High availability setup',
        'Proactive monitoring'
      ]
    },
    {
      title: 'Data Security & Compliance',
      icon: '🛡️',
      description: 'Ensure your AI solutions meet all regulatory requirements with our comprehensive security and compliance frameworks.',
      features: [
        'GDPR, HIPAA, SOC 2 compliance',
        'End-to-end encryption',
        'Access control and audit trails',
        'Regular security assessments',
        'Data retention policies',
        'Incident response planning'
      ],
      benefits: [
        'Regulatory compliance',
        'Enhanced data protection',
        'Comprehensive audit trails',
        'Reduced compliance risk',
        'Customer trust and confidence'
      ]
    },
    {
      title: 'AI Consulting',
      icon: '💡',
      description: 'Strategic guidance on how AI can transform your business processes while maintaining complete data control.',
      features: [
        'AI strategy development',
        'Use case identification',
        'ROI analysis and planning',
        'Technology roadmap',
        'Risk assessment',
        'Implementation planning'
      ],
      benefits: [
        'Clear AI strategy',
        'Prioritized use cases',
        'Investment justification',
        'Reduced implementation risk',
        'Expert guidance'
      ]
    },
    {
      title: 'Training & Support',
      icon: '📚',
      description: 'Comprehensive training programs and ongoing support to help your team maximize the value of your AI investments.',
      features: [
        'Technical team training',
        'Best practices workshops',
        'Documentation and knowledge base',
        'Ongoing technical support',
        'Performance tuning assistance',
        'Model maintenance and updates'
      ],
      benefits: [
        'Empowered team',
        'Best practice adoption',
        'Self-service capabilities',
        'Quick issue resolution',
        'Long-term success'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Comprehensive AI and software development services designed to keep your data secure 
              and your business competitive. From private AI deployment to enterprise solutions, 
              we provide end-to-end services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-green-600 mr-2 font-bold">→</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Private AI Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Private AI Over Public APIs?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Traditional AI APIs expose your sensitive business data to third parties. 
              With our private AI solutions, you maintain complete control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-lg mb-2">Complete Privacy</h3>
              <p className="text-blue-100 text-sm">Your data never leaves your infrastructure. No third-party access, ever.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Cost Control</h3>
              <p className="text-blue-100 text-sm">No per-API-call fees. Predictable costs with full infrastructure ownership.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Better Performance</h3>
              <p className="text-blue-100 text-sm">Faster response times without network latency to external APIs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Customization</h3>
              <p className="text-blue-100 text-sm">Fine-tune models specifically for your industry and use cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for deploying private AI solutions that deliver results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your needs, challenges, and objectives' },
              { step: '02', title: 'Design', description: 'Architect the solution and plan the implementation' },
              { step: '03', title: 'Deploy', description: 'Install, configure, and optimize the AI infrastructure' },
              { step: '04', title: 'Support', description: 'Ongoing monitoring, maintenance, and optimization' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you deploy private AI solutions for your business.
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
