import './globals.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider, themeInitScript } from './components/ThemeProvider'
import { defaultImage, homeUrl } from './util'

export const metadata  = {
  title: {
    default: "Portfolio | Panhareach Phat",
    template: "%s | Panhareach Phat",
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
      default: "Portfolio | Panhareach Phat",
      template: "%s | Panhareach Phat",
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
        height: 627,
        alt: 'Panhareach Phat',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panhareach_phat',
    title: {
      default: "Portfolio | Panhareach Phat",
      template: "%s | Panhareach Phat",
    },
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Panhareach Phat',
    }
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning={true} className="bg-bg text-primary">
        <ThemeProvider>
          <div className="relative min-h-screen">
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 top-0 h-[480px] bg-hero-glow"
            />
            <div className="relative">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}