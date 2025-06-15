
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const photos = [
  { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Boats on a river in front of a city waterfront" },
  { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Misty mountain ranges at sunset" },
  { src: "/lovable-uploads/ac76c6d4-2412-4651-93d0-b074874c0ed2.png", alt: "A boat on a lake with a village and snow-capped mountains" },
  { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "A bustling Christmas market at night with snow falling" },
  { src: "/lovable-uploads/ac62e9c6-0f11-49c8-8cc3-9bd6a009438f.png", alt: "A cityscape at dusk with a river and illuminated bridges" },
];

const Photography = () => {
  return (
    <section id="photography" className="py-20 md:py-32 px-8 md:px-12 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2">Tharun's Perspective</h2>
          <p className="text-lg text-muted-foreground">Photography & Videography</p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-center mb-8">Photography Showcase</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img src={photo.src} alt={photo.alt} className="w-full h-auto object-contain rounded-lg shadow-md" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Video Gallery */}
        <div>
          <h3 className="text-2xl font-light text-center mb-8">Videography Showcase</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-0 pb-[56.25%]">
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/0GjZr4VbDtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="relative h-0 pb-[56.25%]">
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/-YJWSWVd6Hs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Photography;
