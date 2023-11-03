import React from 'react'
import Feature from './Feature'

function Features({details}) {
  return (
    <section id="about-features">
      <div className="container mx-auto px-8 py-40">
          <div className="mx-auto">
            <div className="flex flex-col justify-center items-center mx-auto">
              <h2 className="flex flex-row justify-center text-2xl">{details.title}</h2>
              <p className="flex flex-row justify-center text-center py-8">{details.description}</p>
            </div>
              <div className="flex flex-wrap justify-between mt-20">
                {details.features.map((item, index) => {
                  return (
                    <Feature
                      key={index}
                      title={item.title}
                      description={item.description}
                      fontAwesomeIconName={item.fontAwesomeIconName}
                    />
                  )
                })}
              </div>
          </div>
      </div>
    </section>
  )
}

export default Features