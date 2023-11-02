import React from 'react'

export default function SocialLinks() {
  return (
    <div className="container mx-auto max-w-screen-lg flex flex-row flex-wrap justify-between items-center px-4 pt-5">
        <SocialLink platform='GitHub' url='https://github.com/Re4ch-Jay'/>
        <SocialLink platform='Facebook' url='https://www.facebook.com/profile.php?id=100054954846588' />
        <SocialLink platform='Twitter' url='https://twitter.com/panhareach_phat'/>
        <SocialLink platform='Instagram' url='https://www.instagram.com/re4ch_/'/>
        <SocialLink platform='Linkedin' url='https://www.linkedin.com/in/panhareach-phat-0a5897249/'/>
        <SocialLink platform='Reddit' url='https://www.reddit.com/user/phatpanhareach/'/>
    </div>
  )
}

function SocialLink({ platform, url }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <a
        target='_blank'
        href={url}
        className="p-3 px-5 md:px-8 lg:px-10 bg-black text-white text-center rounded shadow-lg hover:bg-slate-900 transition-all duration-300 block"
      >
        {platform}
      </a>
    </div>
  );
}
