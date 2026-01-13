'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-4 block hover:text-blue-400 transition-colors">
              RDEVSOL
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Robust Development Solutions - Your trusted partner for private AI deployment and enterprise software development.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`text-gray-400 hover:text-white transition-colors ${
                    pathname === '/' ? 'text-blue-400' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`text-gray-400 hover:text-white transition-colors ${
                    pathname === '/services' ? 'text-blue-400' : ''
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-gray-400 hover:text-white transition-colors ${
                    pathname === '/about' ? 'text-blue-400' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className={`text-gray-400 hover:text-white transition-colors ${
                    pathname?.startsWith('/case-studies') ? 'text-blue-400' : ''
                  }`}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-gray-400 hover:text-white transition-colors ${
                    pathname === '/contact' ? 'text-blue-400' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Private AI Deployment</li>
              <li>Enterprise AI Solutions</li>
              <li>AI Infrastructure Setup</li>
              <li>Data Security & Compliance</li>
              <li>AI Consulting</li>
              <li>Training & Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contact@rdevsol.com" className="hover:text-white transition-colors">
                  contact@rdevsol.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="pt-2">
                123 Business Avenue<br />
                Suite 400<br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} RDEVSOL (Robust Development Solutions). All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
