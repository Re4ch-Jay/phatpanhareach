import './globals.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata  = {
  title: {
    default: "Portfolio | Phat Panhareach",
    template: "%s | Phat Panhareach",
  },
  description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  icons: "/phatpanhareach.png",
  openGraph: {
    title: {
      default: "Phat Panhareach",
      template: "%s | Phat Panhareach",
    },
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    images: '/banner.png',
    type: "website"
  }
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
