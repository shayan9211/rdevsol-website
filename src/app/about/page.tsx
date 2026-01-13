import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      title: 'Security First',
      icon: '🛡️',
      description: 'We believe data privacy is a fundamental right. Every solution we build prioritizes security and compliance above all else.',
      details: [
        'End-to-end encryption for all data',
        'Regular security audits and assessments',
        'Compliance with international standards',
        'Zero-trust architecture principles'
      ]
    },
    {
      title: 'Client-Centric',
      icon: '🤝',
      description: 'Your success is our success. We work closely with you to understand your unique challenges and deliver tailored solutions.',
      details: [
        'Dedicated account management',
        'Customized solution design',
        'Flexible engagement models',
        'Continuous collaboration'
      ]
    },
    {
      title: 'Innovation Driven',
      icon: '💡',
      description: 'We stay at the forefront of AI technology to bring you the most advanced and efficient solutions available.',
      details: [
        'Research and development focus',
        'Cutting-edge technology adoption',
        'Continuous learning and improvement',
        'Industry best practices'
      ]
    },
    {
      title: 'Transparency',
      icon: '🔍',
      description: 'Clear communication, honest assessments, and transparent processes are at the core of how we operate.',
      details: [
        'Open and honest communication',
        'Clear project timelines and milestones',
        'Transparent pricing and billing',
        'Regular progress updates'
      ]
    },
    {
      title: 'Excellence',
      icon: '⭐',
      description: 'We strive for excellence in everything we do, from code quality to customer service.',
      details: [
        'Quality assurance processes',
        'Code review and testing',
        'Performance optimization',
        'Customer satisfaction focus'
      ]
    },
    {
      title: 'Integrity',
      icon: '✅',
      description: 'We operate with the highest ethical standards and build trust through our actions.',
      details: [
        'Ethical business practices',
        'Data privacy commitment',
        'Honest and fair dealings',
        'Long-term partnerships'
      ]
    }
  ]

  const stats = [
    { number: '3', label: 'Projects Delivered', description: 'Successful deployments to date' },
    { number: '3', label: 'Clients Served', description: 'Healthcare and legal organizations' },
    { number: '100%', label: 'Data Privacy', description: 'Zero data breaches or privacy incidents' },
    { number: '100%', label: 'Client Satisfaction', description: 'All clients satisfied with our solutions' },
    { number: '24/7', label: 'Support', description: 'Round-the-clock technical assistance' },
    { number: '2', label: 'Years Experience', description: 'Building expertise in private AI deployment' }
  ]

  const team = [
    { role: 'AI Engineers', description: 'Expert machine learning engineers with deep expertise in model deployment and optimization' },
    { role: 'Security Specialists', description: 'Certified security professionals ensuring compliance and data protection' },
    { role: 'Infrastructure Architects', description: 'Experienced architects designing scalable and reliable systems' },
    { role: 'DevOps Engineers', description: 'Automation specialists ensuring smooth deployments and operations' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About RDEVSOL
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Robust Development Solutions - Where cutting-edge AI meets uncompromising security. 
              We specialize in deploying private AI infrastructure that keeps your data secure 
              and your business competitive.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                To empower businesses with enterprise-grade AI capabilities while ensuring their data remains 
                completely private and secure. We believe that advanced AI technology and data privacy should 
                go hand in hand.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Every organization deserves access to cutting-edge AI technology without compromising on 
                security, privacy, or compliance. We make this possible through innovative private AI 
                deployment solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                A world where businesses can leverage the full power of AI without compromising on security, 
                privacy, or compliance. We're building the future of private, enterprise AI.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We envision a future where every organization has access to private AI infrastructure 
                that enables innovation while maintaining the highest standards of data protection and 
                regulatory compliance.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                RDEVSOL was founded on a simple but powerful principle: businesses shouldn't have to choose 
                between cutting-edge AI technology and data privacy. We recognized that while public AI APIs 
                offered convenience, they came with significant risks—data exposure, compliance challenges, 
                and lack of control.
              </p>
              <p>
                Our team of experienced engineers, security specialists, and AI researchers came together 
                to solve this challenge. We developed expertise in deploying private AI infrastructure that 
                delivers enterprise-grade capabilities while keeping all data processing local to the organization.
              </p>
              <p>
                We've successfully deployed private AI solutions for healthcare and legal organizations. 
                Each deployment is customized to meet specific requirements while maintaining the highest 
                standards of security and compliance.
              </p>
              <p>
                We continue to innovate, staying at the forefront of AI technology while remaining committed 
                to our core values: security first, client-centric approach, innovation, transparency, excellence, 
                and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{value.description}</p>
                <ul className="space-y-2">
                  {value.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A multidisciplinary team of experts dedicated to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{member.role}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you deploy private AI solutions for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
