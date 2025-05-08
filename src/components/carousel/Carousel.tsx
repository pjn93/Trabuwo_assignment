import { Box, Stack } from "@mui/material";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { style } from "./Category.style";
import { useState } from "react";
import { CircularProgress } from "@mui/material";



interface ImageCarouselProps {
  images: string[];
  autoplayDelay?: number;
  loading?: boolean;
}

export default function ImageCarousel({
  images,
  autoplayDelay = 3000,
  loading = false,
}: ImageCarouselProps) {
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  const handleImageLoad = (index: number) => {
    setLoadedIndexes((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
  };
  
  return (
    <Box sx={style.root}>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 24 },
          1024: { slidesPerView: 1, spaceBetween: 24 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Stack sx={style.slide}>
            {loading && (
                <CircularProgress
                  size={48}
                  sx={{ position: "absolute", zIndex: 2 }}
                />
              )}
              <img
                src={image}
                alt={`slide-${index + 1}`}
                onLoad={() => handleImageLoad(index)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  display: loadedIndexes.includes(index) ? "block" : "none",
                }}
                
              />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
