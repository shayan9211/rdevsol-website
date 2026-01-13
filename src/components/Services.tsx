export default function Services() {
  const services = [
    {
      title: 'Private AI Deployment',
      icon: '🔒',
      description: 'Deploy AI models directly on your infrastructure. Keep all data processing local to your servers with no external API calls.',
      features: [
        'On-premises or private cloud deployment',
        'Custom model training and fine-tuning',
        'Complete data isolation',
        'No vendor lock-in'
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
        '24/7 monitoring and support'
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
        'Performance optimization'
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
        'Regular security assessments'
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
        'Technology roadmap'
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
        'Ongoing technical support'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and software development services designed to keep your data secure 
            and your business competitive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Private AI Over Public APIs?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Traditional AI APIs expose your sensitive business data to third parties. 
              With our private AI solutions, you maintain complete control.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🔒 Complete Privacy</h4>
                <p className="text-blue-100">Your data never leaves your infrastructure. No third-party access, ever.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">💰 Cost Control</h4>
                <p className="text-blue-100">No per-API-call fees. Predictable costs with full infrastructure ownership.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">⚡ Better Performance</h4>
                <p className="text-blue-100">Faster response times without network latency to external APIs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🎯 Customization</h4>
                <p className="text-blue-100">Fine-tune models specifically for your industry and use cases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
