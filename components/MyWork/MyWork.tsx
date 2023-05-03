import Image from 'next/image'
import React from 'react';
import {Card} from '@/components'
import { projects } from '@/data/data';

const MyWork = () => {
  return (
    <div id='my-work' className='primary-bg w-full space-x-4 px-4 lg:px-10 h-full'>
        <h1 className='text-[55px] font-bold text-white text-left'>My Work</h1>
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center items-center content-center">
          {projects.map((item, index) => (
            <Card key={item.id} item={item} />
          ))}
                    


        </div>
     </div>
  )
}

export default MyWork