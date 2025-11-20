import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GreenLeaf Landscapes | Local Landscape Gardener',
  description: 'Award-winning local landscape gardener. Patios, turfing, garden design, maintenance. Free quotes and fast, friendly service.',
  openGraph: {
    title: 'GreenLeaf Landscapes',
    description: 'Modern, sustainable landscaping and garden care in your area.',
    url: 'https://agentic-5b969ff2.vercel.app',
    siteName: 'GreenLeaf Landscapes',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523419409543-a9f42137f2b4?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Beautiful landscaped garden'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  metadataBase: new URL('https://agentic-5b969ff2.vercel.app'),
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
