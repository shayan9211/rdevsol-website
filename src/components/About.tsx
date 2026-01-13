export default function About() {
  const values = [
    {
      title: 'Security First',
      description: 'We believe data privacy is a fundamental right. Every solution we build prioritizes security and compliance.'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand your unique challenges and deliver tailored solutions.'
    },
    {
      title: 'Innovation Driven',
      description: 'We stay at the forefront of AI technology to bring you the most advanced and efficient solutions available.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication, honest assessments, and transparent processes are at the core of how we operate.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '100%', label: 'Data Privacy Guarantee' }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About RDEVSOL
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Robust Development Solutions - Where cutting-edge AI meets uncompromising security
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Private AI
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              At RDEVSOL, we specialize in deploying AI solutions that keep your data exactly where it belongs—within your infrastructure. 
              While other companies rely on external AI APIs that expose sensitive data to third parties, we build private AI systems 
              that give you complete control.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Our team of expert engineers and AI specialists understand that for many businesses, especially those in healthcare, 
              finance, legal, and other regulated industries, data privacy isn't optional—it's essential.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We combine deep technical expertise with a commitment to security and compliance, delivering solutions that are both 
              powerful and private. Every deployment is customized to your needs, ensuring optimal performance while maintaining 
              the highest standards of data protection.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              To empower businesses with enterprise-grade AI capabilities while ensuring their data remains completely private and secure. 
              We believe that advanced AI technology and data privacy should go hand in hand.
            </p>
            <h4 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Our Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              A world where businesses can leverage the full power of AI without compromising on security, privacy, or compliance. 
              We're building the future of private, enterprise AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
