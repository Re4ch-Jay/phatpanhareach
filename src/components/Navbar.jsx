import React from 'react'

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 pt-5">
        <div className="flex flex-row justify-between items-center">
            <div className="text-white font-bold text-sm md:text-lg cursor-pointer">Phat Panhareach</div>
            <div className="flex flex-row justify-between items-center gap-2 md:gap-5">
                <div className="text-white text-xs md:text-base hover:underline cursor-pointer">Home</div>
                <div className="text-white text-xs md:text-base hover:underline cursor-pointer">Blog</div>
            </div>
        </div>
    </div>
  )
}
