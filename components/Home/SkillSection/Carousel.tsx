// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarrosselDinamico = () => {
  const slides = [
    { id: 1, image: "https://placehold.co/600x400", alt: "Slide 1" },
    { id: 2, image: "https://placehold.co/600x400", alt: "Slide 2" },
    { id: 3, image: "https://placehold.co/600x400", alt: "Slide 3" },
    { id: 4, image: "https://placehold.co/600x400", alt: "Slide 4" },
    { id: 5, image: "https://placehold.co/600x400", alt: "Slide 5" },
    { id: 6, image: "https://placehold.co/600x400", alt: "Slide 6" },
    // Adicione mais slides conforme necessário
  ];

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="h-[500px] w-full 2xl:h-[700px]"
    >
      {slides.map((slide) => (
        <>
          <SwiperSlide
            key={slide.id}
            className="flex justify-center items-center"
          >
            <motion.img
              src={slide.image}
              alt={slide.alt}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              loading="lazy"
              transition={{ duration: 0.3 }}
            />
          </SwiperSlide>
          <SwiperSlide
            key={slide.alt}
            className="flex flex-col justify-center items-center h-full "
          >
            <motion.img
              src={slide.image}
              alt={slide.alt}
              className="object-cover w-full h-1/2"
              whileHover={{ scale: 1.05 }}
              loading="lazy"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={slide.image}
              alt={slide.alt}
              className="object-cover w-full h-1/2 mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              loading="lazy"
              transition={{ duration: 0.3 }}
            />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default CarrosselDinamico;
