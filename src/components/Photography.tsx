
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const photos = [
  { src: "/lovable-uploads/f7ebdad9-473e-4e45-987f-215d662e1c47.png", alt: "A person and a child walking down a long, ornate temple hallway" },
  { src: "/lovable-uploads/17bd82c2-e0e5-4600-a2dd-64b73e4a8b86.png", alt: "A white horse in a field of yellow flowers" },
  { src: "/lovable-uploads/68fb0042-4c44-4a77-a5f3-14ba2fc1898d.png", alt: "A tram on grassy tracks between rows of autumn trees" },
  { src: "/lovable-uploads/868314e2-5d2d-4b16-950d-6e89ca616144.png", alt: "A man holding a professional camera." },
  { src: "/lovable-uploads/90d240f7-5b0d-40b8-a20d-68997c0ed2f1.png", alt: "A person with a camera on a tripod facing a mountain range." },
  { src: "/lovable-uploads/fcab8905-96d4-4360-bdf7-0e93351d4af1.png", alt: "A scenic view of a lake and mountains" },
  { src: "/lovable-uploads/e9c3ea52-8366-41df-91ef-da26c4b8e32b.png", alt: "The milky way over a forest silhouette" },
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
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
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

