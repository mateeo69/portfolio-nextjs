import SliderEducation from '@/components/slider-education'
import TransitionPage from '@/components/transition-page'
import React from 'react'

const EducationPage = () => {
  return (
    <>
    <TransitionPage />
    <div className='grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20'>
        <div className='max-w-[450px] mt-20'>
            <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>
                My
                <span className='font-bold text-secondary'> skills.</span>
            </h1>
            <p className='mb-3 text-xl text-gray-200'>I am a Fullstack Developer with experience in front-end and back-end technologies. I have worked with modern frameworks and tools to build scalable and efficient web applications, including database management and containerization.</p>
            
        </div>
{/* SLIDER */}
        <div>
            <SliderEducation />
        </div>
    </div>
    </>
  )
}

export default EducationPage
