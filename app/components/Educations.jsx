import React from 'react'

export default function Educations() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-5">
        <p className="text-white text-2xl font-bold">Educations</p>
        <Education title='Phnom Penh Thmey High School' year='2015 - 2021' description='My high school life was the most amazing time in my life. I made so many friends and enjoyed that time so much. At the end of my high school life, I got grade B.'  />
        <Education title='Western Internation School' year='2018 - 2020' description='I studied GEP.'  />
        <Education title='Australian Center of Education' year='2020 - 2021' description='I studied GEP and preparation for IELTS, I got 5.5 bands..'  />
        <Education title='Cambodia Academy of Digital Technology' year='2021 - Now' description='My Software Development career start here.'  />
    </div>
  )
}


function Education({title, year, description}) {
  return (
    <div className="my-5">
        <h1 className="text-lg text-white">{title}</h1>
        <h4 className="text-yellow-500">{year}</h4>
        <p className="text-white">{description}</p>
    </div>
  )
}

