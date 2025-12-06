"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "react-router";

const Bannar = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/cSz6dQkG/i-Phone-16-Plus-16-Pink-9850.webp",
      text: "iPhone 14 Pro",
      description:
        "  A mid-range smartphone with Super AMOLED display and long battery life.",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/k2x7k894/3501-05-500x500-500x500.jpg",
      text: "Dell Inspiron 15",
      description:
        "  A mid-range smartphone with Super AMOLED display and long battery life.",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/VWWwNtCr/1181459-samsung-32-smart-tv-class-hd-h5000f-2025.jpg",
      text: 'Samsung 32" Smart TV',
      description:
        "  A mid-range smartphone with Super AMOLED display and long battery life.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="h-[80vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero min-h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Optional overlay for blur/gradient */}
              <div className="absolute inset-0 bg-black/20 blur-sm"></div>

              <div className="hero-content flex-col lg:flex-row-reverse relative z-10 text-center text-white max-w-2xl px-6">
                <Image
                  src={slide.img}
                  width={400}
                  height={500}
                  alt={slide.text}
                  className="max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0"
                />
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.text}
                  </h1>
                  <p className="text-sm md:text-lg text-gray-200 mb-6">
                    {slide.description}
                  </p>
                  <div className="flex flex-row gap-3 justify-center lg:justify-start">
                    <Link href="/products">
                      <button className="btn btn-primary">View Products</button>
                    </Link>
                    <button className="btn btn-outline text-white w-fit">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bannar;
