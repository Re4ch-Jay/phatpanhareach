import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 pt-5">
        <div className="flex flex-row justify-between items-center">
            <NavLink to='/' className="text-white font-bold text-sm md:text-lg cursor-pointer">Phat Panhareach</NavLink>
            <div className="flex flex-row justify-between items-center gap-2 md:gap-5">
                <NavLink to='/' className="text-white text-xs md:text-base hover:underline cursor-pointer">Home</NavLink>
                <NavLink to='blogs'  className="text-white text-xs md:text-base hover:underline cursor-pointer">Blog</NavLink>
            </div>
        </div>
    </div>
  )
}
