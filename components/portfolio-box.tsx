import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props
  const { title, image, urlGithub} = data
  return (
    <div className='p-4 border border-teal-50 rounded-xl'>
      <h3 className='mb-4 text-xl'>{title}</h3>
      <Image src={image} alt="Image product" width={200} height={200} className='w-full md:w[200px] rounded-2xl h-auto' />

      <div className='flex justify-center gap-5 mt-2'>
        <Link href={urlGithub} target='_blank' className='p-2 transition duration-150 rounded-lg bg-[var(--color-secondary)] hover:bg-[#e0c000] font-bold'>Github</Link>
      </div>
    </div>
  )
}

export default PortfolioBox
