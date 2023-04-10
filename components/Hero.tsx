import React from 'react'

type Props = {}

const Hero = ({details}) => {
  const backgroundImage = details.heroImage.url;

  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]" /> {/* This is the overlay div */}
        <div className="max-w-lg md:ml-[-50%]">
          <h2 className="text-white text-4xl z-[3] flex flex-wrap leading-normal">{details.title}</h2>
          <p className="text-white mt-8">{details.description}</p>
        </div>
    </div>
  )
}

export default Hero