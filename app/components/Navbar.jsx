"use client"

import React from 'react'
import Link from 'next/link'
import Audio from './Audio'

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 pt-5">
        <div className="flex flex-row justify-between items-center">
            <Link href='/' className="text-white font-bold text-sm md:text-lg cursor-pointer">Phat Panhareach</Link>
            <Audio/>
            <div className="flex flex-row justify-between items-center gap-2 md:gap-5">
                <Link href='/' className="text-white text-xs md:text-base hover:underline cursor-pointer">Home</Link>
                <Link href='/blogs'  className="text-white text-xs md:text-base hover:underline cursor-pointer">Blogs</Link>
                <Link href='/statistics'  className="text-white text-xs md:text-base hover:underline cursor-pointer">Statistics</Link>
                <Link href='/projects'  className="text-white text-xs md:text-base hover:underline cursor-pointer">Projects</Link>
            </div>
        </div>
    </div>
  )
}
