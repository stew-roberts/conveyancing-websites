import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function Carousel({details}) {
    const slides = details.carouselItems;
    let [currentSlide, setCurrentSlide] = useState(0);
    let previousSlide = () => {
        currentSlide === 0 ? setCurrentSlide(slides.length - 1) : setCurrentSlide(currentSlide - 1);
    }
    let nextSlide = () => {
        currentSlide === slides.length-1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    }
    return (
        <div className="container mx-auto py-8 px-8">
            <div className="flex flex-col justify-center items-center mx-auto">
              <h2 className="flex flex-row justify-center text-center text-2xl">{details.title}</h2>
              <p className="flex flex-row justify-center text-center py-8">{details.description}</p>
            </div>
            <div id="default-carousel" className='w-full lg:w-[50%] m-auto p-4'>
                <div className="overflow-hidden relative">
                    <div className="carousel-inner flex transition ease-out duration-40" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                        {slides.map((slide, index) => {
                            return <img src={slide.image.url} alt={slide.image.alt} key={index} width="100%" />
                        })}
                    </div>
                    <div className="absolute top-0 h-full w-full justify-between items-center flex text-base-500 lg:px-5 text-2xl">
                        <button onClick={previousSlide}>
                            <FaArrowCircleLeft />
                        </button>
                        <button onClick={nextSlide}>
                            <FaArrowCircleRight />
                        </button>
                    </div>
                    <div>
                        <ol className="carousel-indicators absolute bottom-0 py-4 gap-5 w-full flex justify-center">
                            {slides.map((slide, index) => {
                                return (
                                    <li key={index} className={`carousel-indicator rounded-full cursor-pointer w-3 h-3 ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setCurrentSlide(index)}></li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
