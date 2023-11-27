import Link from "next/link";
import Card from "../components/Card";
import React from "react";

export default function BlogCard({title, description, technologies, link, ...props}) {
    return (
      <Link href={link} {...props}>
      <Card className="sm:h-28 md:h-36">
        <>
          <p className="text-xl font-bold">{title}</p>
          <p className="text-base">{description}</p>
          <div className="flex flex-row flex-wrap mt-3 gap-1">
            {technologies.map((technology, index) => (
              <p key={index} className="px-8 text-center bg-gray-800 text-white text-sm rounded">
                {technology}
              </p>
            ))}
          </div>
        </>
      </Card>
      </Link>
    )
  }