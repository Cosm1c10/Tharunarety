import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const photographyAlbums = {
  portraits: [
    { src: "/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png", alt: "Portrait photography" },
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Portrait in nature" },
    { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Portrait session" },
  ],
  landscapes: [
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Misty mountain ranges at sunset" },
    { src: "/lovable-uploads/ac76c6d4-2412-4651-93d0-b074874c0ed2.png", alt: "A boat on a lake with a village and snow-capped mountains" },
    { src: "/lovable-uploads/ac62e9c6-0f11-49c8-8cc3-9bd6a009438f.png", alt: "A cityscape at dusk with a river and illuminated bridges" },
    { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "Winter landscape" },
  ],
  street: [
    { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Boats on a river in front of a city waterfront" },
    { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "A bustling Christmas market at night with snow falling" },
    { src: "/lovable-uploads/ac62e9c6-0f11-49c8-8cc3-9bd6a009438f.png", alt: "Urban evening scene" },
  ]
};

const videos = [
  { id: "0GjZr4VbDtw", title: "Videography Showcase 1" },
  { id: "-YJWSWVd6Hs", title: "Videography Showcase 2" },
  { id: "wKHAoi-3c1o", title: "Videography Showcase 3" },
  { id: "OVPgSBYB8Ok", title: "Videography Showcase 4" },
];

const Photography3DAlbum = ({ photos, albumName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const totalSlides = photos.length;
    
    let normalizedDiff = diff;
    if (normalizedDiff > totalSlides / 2) {
      normalizedDiff -= totalSlides;
    } else if (normalizedDiff < -totalSlides / 2) {
      normalizedDiff += totalSlides;
    }
    
    return normalizedDiff;
  };

  const getSlideStyles = (position) => {
    const absPosition = Math.abs(position);
    
    if (position === 0) {
      // Center slide - front
      return {
        transform: 'translateX(-50%) translateZ(0) scale(1)',
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1)',
      };
    } else if (absPosition === 1) {
      // Adjacent slides - behind and to the sides
      const translateX = position > 0 ? '20%' : '-120%';
      return {
        transform: `translateX(${translateX}) translateZ(-200px) scale(0.8) rotateY(${position > 0 ? '-25deg' : '25deg'})`,
        opacity: 0.7,
        zIndex: 5,
        filter: 'brightness(0.6)',
      };
    } else if (absPosition === 2) {
      // Second level slides - further behind
      const translateX = position > 0 ? '60%' : '-160%';
      return {
        transform: `translateX(${translateX}) translateZ(-400px) scale(0.6) rotateY(${position > 0 ? '-45deg' : '45deg'})`,
        opacity: 0.4,
        zIndex: 2,
        filter: 'brightness(0.4)',
      };
    } else {
      // Hidden slides
      return {
        transform: `translateX(${position > 0 ? '100%' : '-200%'}) translateZ(-600px) scale(0.4)`,
        opacity: 0,
        zIndex: 1,
        filter: 'brightness(0.2)',
      };
    }
  };

  return (
    <div className="w-full">
      {/* 3D Carousel Container */}
      <div className="relative h-[300px] md:h-[400px] mb-8 flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
        <div className="relative w-full h-full">
          {photos.map((photo, index) => {
            const position = getSlidePosition(index);
            const styles = getSlideStyles(position);
            
            return (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 w-[320px] md:w-[480px] h-[180px] md:h-[270px] cursor-pointer transition-all duration-300 ease-in-out transform -translate-y-1/2 ${
                  position === 0 ? 'cursor-default' : 'hover:scale-105'
                }`}
                style={styles}
                onClick={() => goToSlide(index)}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-white">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {position === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{photo.alt}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-white/20 text-white hover:bg-white/20 w-12 h-12"
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-white/20 text-white hover:bg-white/20 w-12 h-12"
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Photography = () => {
  const [activeAlbum, setActiveAlbum] = useState('portraits');

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-4">Tharun's Perspective</h1>
            <p className="text-xl text-muted-foreground mb-8">Capturing moments through photography and videography</p>
          </div>
        </section>

        {/* Photography Albums Section with 3D Animation */}
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Photography Albums</h2>
            
            <Tabs value={activeAlbum} onValueChange={setActiveAlbum} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/10 border-white/20">
                <TabsTrigger value="portraits" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Portraits</TabsTrigger>
                <TabsTrigger value="landscapes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Landscapes</TabsTrigger>
                <TabsTrigger value="street" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Street Photography</TabsTrigger>
              </TabsList>
              
              {Object.entries(photographyAlbums).map(([albumName, photos]) => (
                <TabsContent key={albumName} value={albumName}>
                  <Photography3DAlbum photos={photos} albumName={albumName} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Videography Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Videography Showcase</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {videos.map((video) => (
                  <CarouselItem key={video.id} className="basis-full">
                    <div className="p-2">
                      <Card>
                        <CardContent className="p-0">
                          <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg shadow-lg">
                            <iframe 
                              className="w-full h-full"
                              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=0&mute=0&controls=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </AspectRatio>
                          <div className="p-3 text-center">
                            <p className="text-sm text-muted-foreground">{video.title}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Photography;