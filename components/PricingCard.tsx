import React from 'react'
import { Link } from 'react-scroll'

function PricingCard({title, details, points, price, priceSuffix, priceCurrency, featured, buttonText}) {
  return (
    <div className="flex flex-col items-center justify-center w-full md:max-w-sm shadow-lg rounded-md">
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-base py-12 rounded-t-md bg-gradient-to-r from-sky-500 from-10% via-sky-600 via-70% to-sky-700 text-white w-full text-center uppercase tracking-widest">{title}</h3>
            <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto">
                <p className="text-sm text-center">{details}</p>
                <ul className="my-6">
                    {points.split('*').map((item, index) => (
                        <li key={index} className="text-xs m-4 text-base-600">{item}</li>
                    ))}
                </ul>
                <p className="text-sm text-center text-base-600 font-bold">{price}/{priceSuffix}</p><span className="text-[8px] text-base-600 px-2">{priceCurrency}</span>
                <Link className="cursor-pointer text-base-600 border border-base-600 rounded-full w-24 text-center m-8 hover:text-white hover:bg-base-600 hover:cursor-pointer text-xs font-bold px-4 py-1" to="contact-us" smooth={true} duration={500}>{buttonText}</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard