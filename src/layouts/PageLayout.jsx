import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PageLayout({children}) {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-gray-500 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}
