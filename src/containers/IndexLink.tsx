import React from 'react';
import Link from 'next/link';

interface IIndexLinks {
  link: string,
  title: string,
  description: string,
}


function IndexLink({ link, title, description }: IIndexLinks): JSX.Element {
  return (
    <Link href={link} className='w-full h-full' target='_blank'>
      <div className='w-full h-full bg-black bg-opacity-40 rounded-xl border   hover:scale-105 transition-all duration-100'>
        <p className='glow h-auto py-1 px-4 text-lg rounded-t-xl bg-black bg-opacity-25'>{title}</p>
        <p className='p-2 px-4 text-md'>{description}</p>
      </div>
    </Link>
  )
}

export { IndexLink }