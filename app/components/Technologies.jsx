import React from 'react'
import Card from './Card'

export default function Technologies() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-5">
        <p className="text-white text-2xl font-bold">Technologies</p> <br />
        <p className="text-white text-center">As a developer, I embrace the philosophy of continuous learning and versatility. I find joy in exploring and mastering various technologies. Here are some of the technologies I've had the pleasure of working with.</p>
        <div className="flex flex-row flex-wrap items-center gap-4">
            <Technology name='PHP' img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"/>
            <Technology name='JavaScript' img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png "/>
            <Technology name='C# .NET' img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"/>
            <Technology name='Java' img="https://upload.wikimedia.org/wikipedia/de/thumb/e/e1/Java-Logo.svg/1200px-Java-Logo.svg.png"/>
            <Technology name='Dart' img="https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png"/>
            <Technology name='Laravel' img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"/>
            <Technology name='React' img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"/>
            <Technology name='NextJs' img="https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp"/>
            <Technology name='ASP.Net' img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png"/>
            <Technology name='Spring Boot' img="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png"/>
            <Technology name='Node' img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"/>
            <Technology name='Flutter' img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"/>
            <Technology name='Tailwind' img="https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu"/>
            <Technology name='MySQL' img="https://aety.io/wp-content/uploads/2016/11/mysql-logo.png"/>
            <Technology name='SQLServer' img="https://cyclr.com/wp-content/uploads/2022/03/ext-550.png"/>
        </div>
    </div>
  )
}



function Technology({name, img }) {
  return (
    <Card className="flex flex-row justify-between items-center text-center gap-2 mt-2">
      <img className="w-8 h-8" src={img} alt={name} />
      <p className="text-sm">{name}</p>
    </Card>
  )
}
