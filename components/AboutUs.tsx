import React from 'react'
import ImageWithText from '../components/ImageWithText';

function AboutUs({details}) {
  return (
    <section id="about-us" className=" bg-dark-blue-900 text-gray-400 py-36">
      <div className="container mx-auto flex flex-col justify-center">       
          <h2 className="text-4xl font-extrabold flex flex-row justify-center items-center text-center text-white py-12">{details.title}</h2>
          <div className="flex flex-col justify-center items-center">  
            <p className="max-w-4xl text-center">{details.introText}</p>
            <div className="flex flex-col justify-between items-center">
				{details.aboutUsTextAndImage.map((item, index) => {
					return (
						<ImageWithText
							key={index}
							imageSrc={item.image.url}
							imageAlt={item.title}
							text={item.text}
							imageOnLeft={item.imageLeftAligned}
						/>
					)
				})
				}
            </div>
          </div>
      </div>
    </section>
  )
}

export default AboutUs