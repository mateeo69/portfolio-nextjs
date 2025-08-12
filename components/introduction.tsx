"use client"

import React from 'react'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
        <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
            <Image src="/hombre.png" priority width="800" height="800" alt="Profile pic" />
            <div className='flex flex-col justify-center max-w-md'>
            <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>If you can think it, <br />
                <TypeAnimation 
                    sequence={["you can code it", 1000, "you can optimise it", 1000, "you can implement it", 1000, "you can develop it", 1000]} 
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    className='block font-bold text-secondary'
                    />
            </h1>
            <p className='mx-auto mb-2 text-l md:mx-0 md:mb-8'> As a full-stack developer, I specialise in combining design, functionality, and performance to create efficient, scalable web and mobile applications using modern technologies across both the front-end and back-end, ensuring complete and seamlessly integrated solutions.</p>
            <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
                <Link href="/projects" className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                    My projects
                </Link>
            </div>
            </div>
        </div>

        
    </div>
  )
}

export default Introduction
