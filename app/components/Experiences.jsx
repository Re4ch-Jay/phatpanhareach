import React from 'react'

export default function Experiences() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-5">
        <p className="text-white text-2xl font-bold">Experiences</p>
        <Experience title='Owner of CADT Coding Club' year='2022 - Now' description='Write technology related content on Facebook and Digital Community of Cambodia.'  />
        <Experience title='Open Source Developer' year='2023 - Now' description='Develop packages, tools etc, for open source community such as NPM and GitHub.'  />
    </div>
  )
}


function Experience({title, year, description}) {
  return (
    <div className="my-5">
        <h1 className="text-lg text-white">{title}</h1>
        <h4 className="text-yellow-500">{year}</h4>
        <p className="text-white">{description}</p>
    </div>
  )
}

