import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen'>
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 text-[10vw] -translate-x-[50%] -translate-y-[50%] tracking-tighter leading-none font-semibold'>Docs.</h1>
    </div>
  )
}

export default Background