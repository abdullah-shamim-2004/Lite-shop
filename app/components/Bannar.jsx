"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
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
      img: "https://i.ibb.co.com/cSz6dQkG/i-Phone-16-Plus-16-Pink-9850.webp",
      text: "iPhone 14 Pro",
      description:
        "  A mid-range smartphone with Super AMOLED display and long battery life.",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/cSz6dQkG/i-Phone-16-Plus-16-Pink-9850.webp",
      text: "iPhone 14 Pro",
      description:
        "  A mid-range smartphone with Super AMOLED display and long battery life.",
    },
    // {
    //   id: 2,
    //   img: "https://i.ibb.co.com/cSz6dQkG/i-Phone-16-Plus-16-Pink-9850.webp",
    //   text: "Healthy Meals for Happy Pets",
    //   description:
    //     "  Cozy winter care services for your furry friends — grooming,warm outfits, nutrition tips and more.",
    // },
    // {
    //   id: 3,
    //   img: "https://i.ibb.co.com/cSz6dQkG/i-Phone-16-Plus-16-Pink-9850.webp",
    //   text: "Find the Best Care from Our Vets",
    //   description:
    //     "  Cozy winter care services for your furry friends — grooming,warm outfits, nutrition tips and more.",
    // },
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
              className="relative h-[80vh] w-full bg-center bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="absolute inset-0 blur-sm bg-gradient-to-t from-white/50 to-black/50"></div>

              <div className="relative z-10 text-center text-white/90 max-w-2xl px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.text}
                </h1>
                <p className="text-sm md:text-lg text-gray-200 mb-6">
                  {slide.description}
                </p>
                <div className="flex flex-row gap-3 justify-center ">
                  <Link href="/products">
                    <button className="btn btn-primary">View Products</button>
                  </Link>
                  <button className="btn btn-outline text-white w-fit">
                    Contact Us
                  </button>
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
