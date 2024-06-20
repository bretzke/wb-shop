import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "../ProductCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useCallback, useEffect } from "react";

interface ProductCarouselProps {
  products: IProduct[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 0px)": {
        slides: { perView: 1, spacing: 5, origin: "center" },
      },
      "(min-width: 550px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 991px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  const nextSlide = useCallback(() => slider.current?.next(), [slider]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slider, nextSlide]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <div
          key={product.id}
          className="keen-slider__slide flex justify-center"
        >
          <ProductCard key={product.id} {...product} />
        </div>
      ))}
    </div>
  );
}
