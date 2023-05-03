import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='primary-bg h-screen w-Screen flex flex-col justify-center content-center items-center z-50'>
        <Image src={"/loading.svg"} width={100} height={100} alt='loading' />
        <h1 className='text-center text-white text-2xl font-bold'>Loading...</h1>
    </div>
  )
}

export default Loading