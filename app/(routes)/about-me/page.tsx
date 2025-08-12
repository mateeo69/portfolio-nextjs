import ContainerPage from '@/components/container'
import TimeLine from '@/components/time-line'
import TransitionPage from '@/components/transition-page'
import React from 'react'

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10'>My professional{' '}
            <span className='font-bold text-secondary'> career</span>
        </h1>
        <TimeLine />
      </ContainerPage>
      
    </>
  )
}

export default PageAboutMe
