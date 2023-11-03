import React from 'react';
import Image from "next/image";

type ImageWithTextProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    imageOnLeft: boolean;
  };

const ImageWithText = (props: ImageWithTextProps) => {
    const { imageSrc, imageAlt, title, text, imageOnLeft } = props;
    const imagePositionClass = imageOnLeft ? 'order-1' : 'order-2';

    return (
        <div className="container flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-8 lg:px-16 mx-auto">
            <div className={`w-full md:w-1/2 ${imagePositionClass} md:pr-8 lg:pr-16`}>
              <Image width={200} height={160}className="w-full h-auto" src={imageSrc} alt={imageAlt} />
            </div>
            <div className={`w-full md:w-1/2 order-2 md:order-1 ${imageOnLeft ? 'pl-0' : 'pr-16'}`}>
              <h4 className="text-2xl py-4 text-base-600">{title}</h4>
              <p className="text-left">{text}</p>
            </div>
        </div>
  );
};

export default ImageWithText;