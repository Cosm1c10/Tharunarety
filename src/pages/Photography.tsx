import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const photographyAlbums = {
  astro: [
    { src: "/lovable-uploads/Astro1.jpg", alt: "Astrophotography capture" },
    { src: "/lovable-uploads/Astro 2-.jpg", alt: "Night sky photography" },
    { src: "/lovable-uploads/Astro 3.jpg", alt: "Celestial photography" },
  ],
  automobiles: [
    { src: "/lovable-uploads/Automobile1.jpg", alt: "Automotive photography" },
    { src: "/lovable-uploads/Automobile2.jpg", alt: "Car photography" },
    { src: "/lovable-uploads/Automobile3.jpg", alt: "Vehicle photography" },
    { src: "/lovable-uploads/Automobile4.jpg", alt: "Automotive detail shot" },
    { src: "/lovable-uploads/Automobile5.jpg", alt: "Car photography session" },
    { src: "/lovable-uploads/Automobile6.jpg", alt: "Vehicle portrait" },
    { src: "/lovable-uploads/Automobile7.jpg", alt: "Automotive capture" },
    { src: "/lovable-uploads/Automobile8.jpg", alt: "Car detail photography" },
    { src: "/lovable-uploads/Automobile9.jpg", alt: "Vehicle photography" },
    { src: "/lovable-uploads/Automobile10.jpg", alt: "Automotive shot" },
    { src: "/lovable-uploads/Automobile11.jpg", alt: "Car photography" },
    { src: "/lovable-uploads/Automobile12.jpg", alt: "Vehicle capture" },
    { src: "/lovable-uploads/Automobile13.jpg", alt: "Automotive photography" },
    { src: "/lovable-uploads/Automobile14.jpg", alt: "Car detail shot" },
    { src: "/lovable-uploads/Automobile15.jpg", alt: "Vehicle photography" },
    { src: "/lovable-uploads/Automobile16.jpg", alt: "Automotive portrait" },
  ],
  cities: [
    { src: "/lovable-uploads/Cities&Architecture1.jpg", alt: "Urban architecture" },
    { src: "/lovable-uploads/Cities&Architecture2.jpg", alt: "City photography" },
    { src: "/lovable-uploads/Cities&Architecture3.jpg", alt: "Architectural detail" },
    { src: "/lovable-uploads/Cities&Architecture4.jpg", alt: "Urban landscape" },
    { src: "/lovable-uploads/Cities&Architecture5.jpg", alt: "City architecture" },
    { src: "/lovable-uploads/Cities&Architecture6.jpg", alt: "Building photography" },
    { src: "/lovable-uploads/Cities&Architecture7.jpg", alt: "Urban scene" },
    { src: "/lovable-uploads/Cities&Architecture8.jpg", alt: "Architectural photography" },
    { src: "/lovable-uploads/Cities&Architecture9.jpg", alt: "City view" },
    { src: "/lovable-uploads/Cities&Architecture10.jpg", alt: "Urban photography" },
    { src: "/lovable-uploads/Cities&Architecture11.jpg", alt: "Architectural capture" },
    { src: "/lovable-uploads/Cities&Architecture12.jpg", alt: "City landscape" },
    { src: "/lovable-uploads/Cities&Architecture13.jpg", alt: "Building detail" },
    { src: "/lovable-uploads/Cities&Architecture14.jpg", alt: "Urban architecture" },
    { src: "/lovable-uploads/Cities&Architecture15.jpg", alt: "City photography" },
    { src: "/lovable-uploads/Cities&Architecture16.jpg", alt: "Architectural view" },
    { src: "/lovable-uploads/Cities&Architecture17.jpg", alt: "Urban scene" },
    { src: "/lovable-uploads/Cities&Architecture18.jpg", alt: "City architecture" },
    { src: "/lovable-uploads/Cities&Architecture19.jpg", alt: "Building photography" },
    { src: "/lovable-uploads/Cities&Architecture20.jpg", alt: "Urban landscape" },
    { src: "/lovable-uploads/Cities&Architecture21.jpg", alt: "Architectural detail" },
    { src: "/lovable-uploads/Cities&Architecture22.jpg", alt: "City view" },
    { src: "/lovable-uploads/Cities&Architecture23.jpg", alt: "Urban photography" },
    { src: "/lovable-uploads/Cities&Architecture24.jpg", alt: "Building capture" },
    { src: "/lovable-uploads/Cities&Architecture25.jpg", alt: "Architectural photography" },
    { src: "/lovable-uploads/Cities&Architecture26.jpg", alt: "City landscape" },
    { src: "/lovable-uploads/Cities&Architecture27.jpg", alt: "Urban architecture" },
    { src: "/lovable-uploads/Cities&Architecture29.jpg", alt: "City photography" },
    { src: "/lovable-uploads/Cities&Architecture30.jpg", alt: "Architectural view" },
    { src: "/lovable-uploads/Cities&Architecture31.jpg", alt: "Urban scene" },
    { src: "/lovable-uploads/Cities&Architecture32.jpg", alt: "Building detail" },
    { src: "/lovable-uploads/Cities&Architecture33.jpg", alt: "City architecture" },
    { src: "/lovable-uploads/Cities&Architecture34.jpg", alt: "Urban photography" },
    { src: "/lovable-uploads/Cities&Architecture35.jpg", alt: "Architectural capture" },
    { src: "/lovable-uploads/Cities&Architecture36.jpg", alt: "City landscape" },
    { src: "/lovable-uploads/Cities&Architecture37.jpg", alt: "Building photography" },
    { src: "/lovable-uploads/Cities&Architecture38.jpg", alt: "Urban view" },
    { src: "/lovable-uploads/Cities&Architecture39.jpg", alt: "Architectural detail" },
  ],
  festivals: [
    { src: "/lovable-uploads/Festival1.jpg", alt: "Festival photography" },
    { src: "/lovable-uploads/Festival2.jpg", alt: "Cultural event capture" },
  ],
  landscapes: [
    { src: "/lovable-uploads/Landscapes1.jpg", alt: "Natural landscape" },
    { src: "/lovable-uploads/Landscapes2.jpg", alt: "Scenic photography" },
    { src: "/lovable-uploads/Landscapes3.jpg", alt: "Nature capture" },
    { src: "/lovable-uploads/Landscapes4.jpg", alt: "Landscape view" },
    { src: "/lovable-uploads/Landscapes5.jpg", alt: "Natural scenery" },
    { src: "/lovable-uploads/Landscapes6.jpg", alt: "Outdoor photography" },
    { src: "/lovable-uploads/Landscapes7.jpg", alt: "Landscape capture" },
    { src: "/lovable-uploads/Landscapes8.jpg", alt: "Nature photography" },
    { src: "/lovable-uploads/Landscapes9.jpg", alt: "Scenic view" },
    { src: "/lovable-uploads/Landscapes10.jpg", alt: "Natural landscape" },
    { src: "/lovable-uploads/Landscapes13.jpg", alt: "Landscape photography" },
    { src: "/lovable-uploads/Landscapes14.jpg", alt: "Nature scene" },
    { src: "/lovable-uploads/Landscapes15.jpg", alt: "Outdoor capture" },
    { src: "/lovable-uploads/Landscapes16.jpg", alt: "Scenic landscape" },
    { src: "/lovable-uploads/Landscapes17.jpg", alt: "Natural view" },
    { src: "/lovable-uploads/Landscapes18.jpg", alt: "Landscape shot" },
    { src: "/lovable-uploads/Landscapes19.jpg", alt: "Nature photography" },
    { src: "/lovable-uploads/Landscapes20.jpg", alt: "Scenic capture" },
    { src: "/lovable-uploads/Landscapes21.jpg", alt: "Natural scenery" },
    { src: "/lovable-uploads/Landscapes22.jpg", alt: "Landscape view" },
    { src: "/lovable-uploads/Landscapes23.jpg", alt: "Outdoor photography" },
    { src: "/lovable-uploads/Landscapes24.jpg", alt: "Nature landscape" },
    { src: "/lovable-uploads/Landscapes25.jpg", alt: "Scenic photography" },
    { src: "/lovable-uploads/Landscapes26.jpg", alt: "Natural capture" },
    { src: "/lovable-uploads/Landscapes27.jpg", alt: "Landscape scene" },
    { src: "/lovable-uploads/Landscapes28.jpg", alt: "Nature view" },
    { src: "/lovable-uploads/Landscapes29.jpg", alt: "Outdoor landscape" },
    { src: "/lovable-uploads/Landscapes30.jpg", alt: "Scenic nature" },
    { src: "/lovable-uploads/Landscapes31.jpg", alt: "Natural photography" },
  ],
  portraits: [
    { src: "/lovable-uploads/potrait1.jpg", alt: "Portrait photography" },
    { src: "/lovable-uploads/potrait2.jpg", alt: "Portrait session" },
    { src: "/lovable-uploads/potrait3.jpg", alt: "Portrait capture" },
    { src: "/lovable-uploads/potrait4.jpg", alt: "Portrait shot" },
    { src: "/lovable-uploads/potrait5.jpg", alt: "Portrait photography" },
    { src: "/lovable-uploads/potrait6.jpg", alt: "Portrait session" },
    { src: "/lovable-uploads/potrait7.jpg", alt: "Portrait capture" },
    { src: "/lovable-uploads/potrait8.jpg", alt: "Portrait shot" },
    { src: "/lovable-uploads/potrait9.jpg", alt: "Portrait photography" },
    { src: "/lovable-uploads/potrait10.jpg", alt: "Portrait session" },
    { src: "/lovable-uploads/potrait11.jpg", alt: "Portrait capture" },
    { src: "/lovable-uploads/potrait12.jpg", alt: "Portrait shot" },
    { src: "/lovable-uploads/potrait13.jpg", alt: "Portrait photography" },
    { src: "/lovable-uploads/potrait14.jpg", alt: "Portrait session" },
    { src: "/lovable-uploads/potrait15.jpg", alt: "Portrait capture" },
    { src: "/lovable-uploads/potrait16.jpg", alt: "Portrait shot" },
    { src: "/lovable-uploads/potrait17.jpg", alt: "Portrait photography" },
    { src: "/lovable-uploads/potrait18.jpg", alt: "Portrait session" },
    { src: "/lovable-uploads/potrait19.jpg", alt: "Portrait capture" },
    { src: "/lovable-uploads/potrait20.jpg", alt: "Portrait shot" },
    { src: "/lovable-uploads/potrait21.jpg", alt: "Portrait photography" },
    { src: "/lovable-uploads/potrait22.jpg", alt: "Portrait session" },
    { src: "/lovable-uploads/potrait23.jpg", alt: "Portrait capture" },
  ],
  street: [
    { src: "/lovable-uploads/Streetphotography1.jpg", alt: "Street photography" },
    { src: "/lovable-uploads/Streetphotography2.jpg", alt: "Urban street scene" },
    { src: "/lovable-uploads/Streetphotography3.jpg", alt: "Street capture" },
    { src: "/lovable-uploads/Streetphotography4.jpg", alt: "Street photography" },
    { src: "/lovable-uploads/Streetphotography5.jpg", alt: "Urban scene" },
    { src: "/lovable-uploads/Streetphotography6.jpg", alt: "Street shot" },
    { src: "/lovable-uploads/Streetphotography7.jpg", alt: "Street photography" },
    { src: "/lovable-uploads/Streetphotography8.jpg", alt: "Urban capture" },
    { src: "/lovable-uploads/Streetphotography9.jpg", alt: "Street scene" },
    { src: "/lovable-uploads/Streetphotography10.jpg", alt: "Street photography" },
    { src: "/lovable-uploads/Streetphotography11.jpg", alt: "Urban street" },
    { src: "/lovable-uploads/Streetphotography12.jpg", alt: "Street capture" },
    { src: "/lovable-uploads/Streetphotography13.jpg", alt: "Street photography" },
    { src: "/lovable-uploads/Streetphotography14.jpg", alt: "Urban scene" },
    { src: "/lovable-uploads/Streetphotography15.jpg", alt: "Street shot" },
    { src: "/lovable-uploads/Streetphotography16.jpg", alt: "Street photography" },
    { src: "/lovable-uploads/Streetphotography17.jpg", alt: "Urban capture" },
    { src: "/lovable-uploads/Streetphotography18.jpg", alt: "Street scene" },
    { src: "/lovable-uploads/Streetphotography19.jpg", alt: "Street photography" },
    { src: "/lovable-uploads/Streetphotography20.jpg", alt: "Urban street" },
    { src: "/lovable-uploads/Streetphotography21.jpg", alt: "Street capture" },
  ],
  wildlife: [
    { src: "/lovable-uploads/wildlife1.jpg", alt: "Wildlife photography" },
    { src: "/lovable-uploads/wildlife2.jpg", alt: "Wildlife capture" },
    { src: "/lovable-uploads/wildlife3.jpg", alt: "Wildlife shot" },
    { src: "/lovable-uploads/wildlife4.jpg", alt: "Wildlife photography" },
    { src: "/lovable-uploads/wildlife5.jpg", alt: "Wildlife capture" },
    { src: "/lovable-uploads/wildlife6.jpg", alt: "Wildlife shot" },
  ]
};

const videos = [
  { id: "0GjZr4VbDtw", title: "Videography Showcase 1" },
  { id: "-YJWSWVd6Hs", title: "Videography Showcase 2" },
  { id: "wKHAoi-3c1o", title: "Videography Showcase 3" },
  { id: "OVPgSBYB8Ok", title: "Videography Showcase 4" },
];

function getOptimizedImageUrl(path, width = 1200, quality = 80) {
  return `/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=${quality}`;
}

const Photography = () => {
  const [activeAlbum, setActiveAlbum] = useState('astro');
  
  // Create autoplay plugin with 5 second delay
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 5000, // Changed to 5 seconds
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true
    })
  );

  useEffect(() => {
    const plugin = autoplayPlugin.current;
    return () => {
      plugin.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-foreground font-sans min-h-screen relative">
      <Header />
      
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 opacity-0 animate-fade-in-up relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/lovable-uploads/XS20.png)',
                backgroundPosition: 'center right',
                transform: 'scale(1.1)',
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            {/* Gradient overlay for smooth text transition */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
          </div>
          
          <div className="container mx-auto text-center">
            <h1 className="font-light mb-4 opacity-0 animate-fade-in-up leading-tight relative z-10">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-2xl">Welcome</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mt-2 drop-shadow-2xl">to</div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary mt-2 drop-shadow-2xl font-medium">Tharun's Perspective</div>
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4 opacity-0 animate-fade-in-up animation-delay-200 relative z-10 drop-shadow-lg font-medium">Photography, Filmmaking & Cinematic Videos</p>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8 opacity-0 animate-fade-in-up animation-delay-400 relative z-10 drop-shadow-lg leading-relaxed px-4">
              Beyond the world of simulations and materials, I find immense joy and creative expression through visual storytelling. 
              Whether through the timeless art of photography or the dynamic narrative of filmmaking and cinematic videos, 
              I'm driven to observe the unseen, capture fleeting moments, and tell compelling stories through light, composition, and movement.
            </p>
          </div>
        </section>

        {/* Photography Albums Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 opacity-0 animate-fade-in-up animation-delay-600 bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-12 opacity-0 animate-fade-in-up">Photography Albums</h2>
            
            <Tabs value={activeAlbum} onValueChange={setActiveAlbum} className="w-full opacity-0 animate-scale-in animation-delay-200">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 mb-8 sm:mb-12 hover:shadow-lg transition-shadow duration-300 h-auto flex-wrap gap-1 p-2">
                <TabsTrigger value="astro" className="text-xs px-2 py-1">Astro</TabsTrigger>
                <TabsTrigger value="automobiles" className="text-xs px-2 py-1">Automobiles</TabsTrigger>
                <TabsTrigger value="cities" className="text-xs px-2 py-1">Cities & Architecture</TabsTrigger>
                <TabsTrigger value="festivals" className="text-xs px-2 py-1">Festivals</TabsTrigger>
                <TabsTrigger value="landscapes" className="text-xs px-2 py-1">Landscapes</TabsTrigger>
                <TabsTrigger value="portraits" className="text-xs px-2 py-1">Portrait's</TabsTrigger>
                <TabsTrigger value="street" className="text-xs px-2 py-1">Street Photography</TabsTrigger>
                <TabsTrigger value="wildlife" className="text-xs px-2 py-1">Wild Life</TabsTrigger>
              </TabsList>
              
              {Object.entries(photographyAlbums).map(([albumName, photos]) => (
                <TabsContent key={albumName} value={albumName}>
                  <Carousel
                    plugins={[autoplayPlugin.current as any]}
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full max-w-full sm:max-w-5xl lg:max-w-6xl mx-auto"
                  >
                    <CarouselContent>
                      {photos.map((photo, index) => (
                        <CarouselItem key={index} className="basis-full">
                          <div className="p-0 sm:p-1 md:p-2">
                            <Card className="hover:shadow-xl transition-shadow duration-300 group">
                              <CardContent className="p-0">
                                 <AspectRatio ratio={3 / 2} className="overflow-hidden rounded-lg shadow-lg">
                                   <img 
                                     src={photo.src} 
                                     alt={photo.alt} 
                                     loading="lazy"
                                     className="w-full h-full object-contain" 
                                   />
                                 </AspectRatio>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                  </Carousel>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Videography Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-black/95 backdrop-blur-sm opacity-0 animate-fade-in-up animation-delay-800">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-12 opacity-0 animate-fade-in-up">Videography Showcase</h2>
            <Carousel
              plugins={[autoplayPlugin.current as any]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-full sm:max-w-5xl lg:max-w-6xl mx-auto opacity-0 animate-scale-in animation-delay-200"
            >
              <CarouselContent>
                {videos.map((video) => (
                  <CarouselItem key={video.id} className="basis-full">
                    <div className="p-0 sm:p-1 md:p-2">
                      <Card className="hover:shadow-xl transition-shadow duration-300 group">
                        <CardContent className="p-0">
                          <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                            <iframe 
                              className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=0&mute=0&controls=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </AspectRatio>
                          <div className="p-3 text-center group-hover:bg-secondary/20 transition-colors duration-300">
                            <p className="text-xs text-muted-foreground">{video.title}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Photography;