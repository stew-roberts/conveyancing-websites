import React from 'react'
import PricingCard from './PricingCard'

function PricingSection({details}) {
  return (
    <section id="our-pricing">
      <div className="container mx-auto px-8 py-40">
          <div className="mx-auto">
            <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
              <h2 className="flex flex-row justify-center text-2xl">{details.title}</h2>
              <p className="flex flex-row justify-center text-center py-8">{details.description}</p>
            </div>
              
              <div className="flex flex-wrap justify-between mt-20">
                {details.pricingCard.map((item, index) => {
                  return (
                    <PricingCard
                        key={index}
                        title={item.title}
                        details={item.details}
                        points={item.points}
                        price={item.price}
                        priceSuffix={item.priceSuffix}
                        priceCurrency={item.priceCurrency}
                        featured={item.featured}
                        buttonText={item.buttonText}
                    />
                  )
                })}
              </div>
          </div>
      </div>
    </section>
  )
}

export default PricingSection