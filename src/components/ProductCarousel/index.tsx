import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "../ProductCard";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface ProductCarouselProps {
  products: IProduct[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        duration: 25,
      }}
      plugins={[Autoplay({ playOnInit: true, delay: 3000 })]}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="flex justify-center md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <ProductCard key={product.id} {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
