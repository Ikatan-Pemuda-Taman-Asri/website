import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import First from "@/assets/placeholder/placeholder-1.jpg";
import Second from "@/assets/placeholder/placeholder-2.jpg";
import Third from "@/assets/placeholder/placeholder-3.jpg";
import Fourth from "@/assets/placeholder/placeholder-4.jpg";

const pictures = [First, Second, Third, Fourth];
export function Slideshow() {
	return (
		<Carousel
			opts={{
				align: "center",
				loop: true,
				duration: 50,
			}}
			plugins={[
				Autoplay({
					delay: 4000,
					stopOnInteraction: false,
					stopOnMouseEnter: false,
					stopOnFocusIn: false,
					stopOnLastSnap: false,
				}),
			]}
			className="w-full"
		>
			<CarouselContent className="-ml-6 xl:-ml-10">
				{pictures.map((picture) => (
					<CarouselItem
						key={picture.src}
						className="basis-full pl-6 lg:basis-5/6 xl:basis-3/4 xl:pl-10"
					>
						<img src={picture.src} alt="" loading="eager" decoding="async" />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
