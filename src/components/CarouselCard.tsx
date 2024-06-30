"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselCardProps {
  imgUrls: string[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ imgUrls }) => {
  return (
    <Carousel showThumbs={false}>
      {imgUrls.map((image, index) => (
        <div key={index}>
          <img
            className="h-96 object-contain rounded-md"
            src={image}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCard;
