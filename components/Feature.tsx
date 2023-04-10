import React from 'react'
import { FontAwesomeIcon } from './FontAwesomeIcon';

function Feature({title, description, fontAwesomeIconName}) {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-72 shadow-lg rounded-md px-6 py-14 hover:bg-gradient-to-r from-sky-500 from-10% via-sky-600 via-70% to-sky-700 hover:text-white cursor-pointer">
        <div className="flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={fontAwesomeIconName} color='text-base-500' />
            <h3 className="text-base py-8">{title}</h3>
            <p className="text-sm text-center">{description}</p>
        </div>
    </div>
  )
}

export default Feature