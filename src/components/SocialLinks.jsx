import React from 'react'

export default function SocialLinks() {
  return (
    <div className="container mx-auto max-w-screen-lg flex flex-row flex-wrap justify-between items-center px-4 pt-5">
        <SocialLink platform='GitHub' url=''/>
        <SocialLink platform='Facebook' url='' />
        <SocialLink platform='Twitter' url=''/>
        <SocialLink platform='Instagram' url=''/>
        <SocialLink platform='Linkedin' url=''/>
        <SocialLink platform='Reddit' url=''/>
    </div>
  )
}

function SocialLink({ platform, url }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <a
        href={url}
        className="p-3 px-5 md:px-8 lg:px-10 bg-black text-white text-center rounded shadow-lg hover:bg-slate-900 transition-all duration-300 block"
      >
        {platform}
      </a>
    </div>
  );
}
