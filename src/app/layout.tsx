import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RDEVSOL - Robust Development Solutions | Private AI for Business',
  description: 'Leading software development company specializing in private AI solutions. Deploy local AI infrastructure that keeps your data secure within your company. Enterprise-grade AI without the API risks.',
  keywords: 'private AI, enterprise AI, local AI, secure AI, software development, AI infrastructure, data privacy, business AI solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
