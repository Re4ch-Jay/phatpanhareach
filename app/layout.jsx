import './globals.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { defaultImage, homeUrl } from './util'

export const metadata  = {
  title: {
    default: "Portfolio | Phat Panhareach",
    template: "%s | Phat Panhareach",
  },
  description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  icons: {
    icon: "/phatpanhareach.png"
  },
  type: "website",
  url: homeUrl,
  alternates: {
    canonical: homeUrl,
  },
  openGraph: {
    title: {
      default: "Portfolio | Phat Panhareach",
      template: "%s | Phat Panhareach",
    },
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    type: "website",
    url: homeUrl,
    alternates: {
      canonical: homeUrl,
    },
    images: [
      {
        url: defaultImage,
        secureUrl: defaultImage,
        width: 1200,
        height: 630,
        alt: 'Phat Panhareach',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panhareach_phat',
    title: {
      default: "Portfolio | Phat Panhareach",
      template: "%s | Phat Panhareach",
    },
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Phat Panhareach',
    }
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-500 min-h-screen">
            <Navbar/>
            {children}
            <Footer/>
          </div>
      </body>
    </html>
  )
}
