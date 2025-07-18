import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const photographyAlbums = {
  astro: [
    { src: "/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png", alt: "Portrait photography" },
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Portrait in nature" },
  ],
  automobiles: [
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Misty mountain ranges at sunset" },
    { src: "/lovable-uploads/ac76c6d4-2412-4651-93d0-b074874c0ed2.png", alt: "A boat on a lake with a village and snow-capped mountains" },
    { src: "/lovable-uploads/ac62e9c6-0f11-49c8-8cc3-9bd6a009438f.png", alt: "A cityscape at dusk with a river and illuminated bridges" },
  ],
  cities: [
    { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Boats on a river in front of a city waterfront" },
    { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "A bustling Christmas market at night with snow falling" },
  ],
  festivals: [
    { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Boats on a river in front of a city waterfront" },
    { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "A bustling Christmas market at night with snow falling" },
  ],
  landscapes: [
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Misty mountain ranges at sunset" },
    { src: "/lovable-uploads/ac76c6d4-2412-4651-93d0-b074874c0ed2.png", alt: "A boat on a lake with a village and snow-capped mountains" },
    { src: "/lovable-uploads/ac62e9c6-0f11-49c8-8cc3-9bd6a009438f.png", alt: "A cityscape at dusk with a river and illuminated bridges" },
  ],
  portraits: [
    { src: "/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png", alt: "Portrait photography" },
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Portrait in nature" },
  ],
  street: [
    { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Boats on a river in front of a city waterfront" },
    { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "A bustling Christmas market at night with snow falling" },
  ],
  wildlife: [
    { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Boats on a river in front of a city waterfront" },
    { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "A bustling Christmas market at night with snow falling" },
  ]
};

const videos = [
  { id: "0GjZr4VbDtw", title: "Videography Showcase 1" },
  { id: "-YJWSWVd6Hs", title: "Videography Showcase 2" },
  { id: "wKHAoi-3c1o", title: "Videography Showcase 3" },
  { id: "OVPgSBYB8Ok", title: "Videography Showcase 4" },
];

const Photography = () => {
  const [activeAlbum, setActiveAlbum] = useState('astro');

  return (
    <div className="bg-background text-foreground font-sans min-h-screen relative">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 opacity-0 animate-fade-in-up relative overflow-hidden">
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
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">Welcome</div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2 drop-shadow-2xl">to</div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mt-2 drop-shadow-2xl font-medium">Tharun's Perspective</div>
            </h1>
            <p className="text-lg text-white/90 mb-4 opacity-0 animate-fade-in-up animation-delay-200 relative z-10 drop-shadow-lg font-medium">Photography, Filmmaking & Cinematic Videos</p>
            <p className="text-base text-white/80 max-w-4xl mx-auto mb-8 opacity-0 animate-fade-in-up animation-delay-400 relative z-10 drop-shadow-lg leading-relaxed">
              Beyond the world of simulations and materials, I find immense joy and creative expression through visual storytelling. 
              Whether through the timeless art of photography or the dynamic narrative of filmmaking and cinematic videos, 
              I'm driven to observe the unseen, capture fleeting moments, and tell compelling stories through light, composition, and movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600 relative z-10">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Photography Albums Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 opacity-0 animate-fade-in-up animation-delay-600 bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 opacity-0 animate-fade-in-up">Photography Albums</h2>
            
            <Tabs value={activeAlbum} onValueChange={setActiveAlbum} className="w-full opacity-0 animate-scale-in animation-delay-200">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-12 hover:shadow-lg transition-shadow duration-300 h-auto flex-wrap gap-1 p-2">
                <TabsTrigger value="astro" className="text-xs px-2 py-1">Astro</TabsTrigger>
                <TabsTrigger value="automobiles" className="text-xs px-2 py-1">Automobiles</TabsTrigger>
                <TabsTrigger value="cities" className="text-xs px-2 py-1">Cities & Architecture</TabsTrigger>
                <TabsTrigger value="festivals" className="text-xs px-2 py-1">Festivals</TabsTrigger>
                <TabsTrigger value="landscapes">Landscapes</TabsTrigger>
                <TabsTrigger value="portraits">Portrait's</TabsTrigger>
                <TabsTrigger value="street" className="text-xs px-2 py-1">Street Photography</TabsTrigger>
                <TabsTrigger value="wildlife" className="text-xs px-2 py-1">Wild Life</TabsTrigger>
              </TabsList>
              
              {Object.entries(photographyAlbums).map(([albumName, photos]) => (
                <TabsContent key={albumName} value={albumName}>
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                  >
                    <CarouselContent>
                      {photos.map((photo, index) => (
                        <CarouselItem key={index} className="basis-full">
                          <div className="p-2">
                            <Card className="hover:shadow-xl transition-shadow duration-300 group">
                              <CardContent className="p-0">
                                <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                  <img 
                                    src={photo.src} 
                                    alt={photo.alt} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                  />
                                </AspectRatio>
                                <div className="p-3 text-center group-hover:bg-secondary/20 transition-colors duration-300">
                                  <p className="text-xs text-muted-foreground">{photo.alt}</p>
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
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Videography Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black/95 backdrop-blur-sm opacity-0 animate-fade-in-up animation-delay-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 opacity-0 animate-fade-in-up">Videography Showcase</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto opacity-0 animate-scale-in animation-delay-200"
            >
              <CarouselContent>
                {videos.map((video) => (
                  <CarouselItem key={video.id} className="basis-full">
                    <div className="p-2">
                      <Card className="hover:shadow-xl transition-shadow duration-300 group">
                        <CardContent className="p-0">
                          <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
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