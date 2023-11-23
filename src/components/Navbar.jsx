import React from 'react'
import { NavLink } from "react-router-dom"
import Audio from './Audio'

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 pt-5">
        <div className="flex flex-row justify-between items-center">
            <NavLink to='/' className="text-white font-bold text-sm md:text-lg cursor-pointer">Phat Panhareach</NavLink>
            <Audio/>
            <div className="flex flex-row justify-between items-center gap-2 md:gap-5">
                <NavLink to='/' className="text-white text-xs md:text-base hover:underline cursor-pointer">Home</NavLink>
                <NavLink to='blogs'  className="text-white text-xs md:text-base hover:underline cursor-pointer">Blog</NavLink>
                <NavLink to='statistics'  className="text-white text-xs md:text-base hover:underline cursor-pointer">Statistics</NavLink>
                <NavLink to='projects'  className="text-white text-xs md:text-base hover:underline cursor-pointer">Projects</NavLink>
            </div>
        </div>
    </div>
  )
}
