import React, { useEffect, useRef, useState } from "react";

const Sponsors = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  const showSlide = (i) => {
    const slides = carouselRef.current.children.length;
    const newIndex = (i + slides) % slides;
    setIndex(newIndex);
    carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  const nextSlide = () => showSlide(index + 1);
  const prevSlide = () => showSlide(index - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
     <h1 className="text-3xl font-bold text-black mb-8 text-center">
        <span className=" text-rose-600">CONFIARON EN</span>{' '}
  <span className=" text-teal-800">NOSOTROS</span>
      </h1>

      <div className="relative w-full overflow-hidden bg-white py-4">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-700 ease-in-out"
        >
          
          <div className="flex-shrink-0 w-full flex justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 px-2 sm:px-4">
            <img
              src="\img\2c7ea5a3-4b84-493d-a49a-7c3fe8388ff1-removebg-preview.png"
              className="w-[100px] sm:w-[140px] md:w-[180px] object-contain shadow-lg rounded-lg bg-sky-900 p-2"
              alt="Logo 1"
            />
            <img
              src="/img/3e3d6540-637a-4886-a03f-787f423c5643.webp"
              className="w-[100px] sm:w-[140px] md:w-[180px] object-contain shadow-lg rounded-lg bg-white p-2"
              alt="Logo 2"
            />
          </div>

          
          <div className="flex-shrink-0 w-full flex justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 px-2 sm:px-4">
            <img
              src="/img/6697959e-ef47-480d-bddf-fe7262513fd4.webp"
              className="w-[100px] sm:w-[140px] md:w-[180px] object-contain shadow-lg rounded-lg bg-stone-100 p-2"
              alt="Logo 3"
            />
 <img
  src="\img\5efed091-9ab4-4aeb-9459-7747a6d4e15a-removebg-preview.png"
  className="h-[180px] max-w-[185px] object-contain shadow-lg rounded-lg bg-rose-200 p-2"
  alt="Logo 4"
/>


          </div>

          
          <div className="flex-shrink-0 w-full flex justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 px-2 sm:px-4">
            <img
              src="/img/e2a81497-516d-4200-b3df-37d0e90be13c.webp"
              className="w-[100px] sm:w-[140px] md:w-[180px] object-contain shadow-lg rounded-lg bg-gray-300 p-2"
              alt="Logo 5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
