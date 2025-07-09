import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const photographyAlbums = {
  portraits: [
    { src: "/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png", alt: "Portrait photography" },
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Portrait in nature" },
  ],
  landscapes: [
    { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Misty mountain ranges at sunset" },
    { src: "/lovable-uploads/ac76c6d4-2412-4651-93d0-b074874c0ed2.png", alt: "A boat on a lake with a village and snow-capped mountains" },
    { src: "/lovable-uploads/ac62e9c6-0f11-49c8-8cc3-9bd6a009438f.png", alt: "A cityscape at dusk with a river and illuminated bridges" },
  ],
  street: [
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
  const [activeAlbum, setActiveAlbum] = useState('portraits');

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
                backgroundImage: 'url("/lovable-uploads/XS20.png")',
                backgroundPosition: 'center center',
                transform: 'scale(1.1)',
              }}
            />
            {/* Sophisticated layered overlays for text readability */}
            <div className="absolute inset-0 bg-black/75" />
            {/* Multi-directional gradients for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70" />
            {/* Center focus gradient */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black/80" />
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/60" />
          </div>
          
          <div className="container mx-auto text-center">
            <h1 className="font-light mb-4 opacity-0 animate-fade-in-up leading-tight relative z-10">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl filter backdrop-blur-sm">Welcome</div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 mt-2 drop-shadow-2xl filter backdrop-blur-sm">to</div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mt-2 drop-shadow-2xl font-medium filter backdrop-blur-sm">Tharun's Perspective</div>
            </h1>
            <p className="text-lg text-white/95 mb-4 opacity-0 animate-fade-in-up animation-delay-200 relative z-10 drop-shadow-xl font-medium filter backdrop-blur-sm">Photography, Filmmaking & Cinematic Videos</p>
            <p className="text-base text-white/90 max-w-4xl mx-auto mb-8 opacity-0 animate-fade-in-up animation-delay-400 relative z-10 drop-shadow-xl leading-relaxed filter backdrop-blur-sm">
              Beyond the world of simulations and materials, I find immense joy and creative expression through visual storytelling. 
              Whether through the timeless art of photography or the dynamic narrative of filmmaking and cinematic videos, 
              I'm driven to observe the unseen, capture fleeting moments, and tell compelling stories through light, composition, and movement.
            </p>
          </div>
        </section>

        {/* Photography Albums Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 opacity-0 animate-fade-in-up animation-delay-600 bg-background/98 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 opacity-0 animate-fade-in-up drop-shadow-lg">Photography Albums</h2>
            
            <Tabs value={activeAlbum} onValueChange={setActiveAlbum} className="w-full opacity-0 animate-scale-in animation-delay-200">
              <TabsList className="grid w-full grid-cols-3 mb-12 hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border border-white/10">
                <TabsTrigger value="portraits">Portraits</TabsTrigger>
                <TabsTrigger value="landscapes">Landscapes</TabsTrigger>
                <TabsTrigger value="street">Street Photography</TabsTrigger>
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
                            <Card className="hover:shadow-2xl transition-all duration-300 group bg-background/95 backdrop-blur-sm border border-white/10">
                              <CardContent className="p-0">
                                <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300">
                                  <img 
                                    src={photo.src} 
                                    alt={photo.alt} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                  />
                                </AspectRatio>
                                <div className="p-3 text-center group-hover:bg-secondary/30 transition-colors duration-300 backdrop-blur-sm">
                                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{photo.alt}</p>
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
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black/98 backdrop-blur-md border-t border-white/5 opacity-0 animate-fade-in-up animation-delay-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 opacity-0 animate-fade-in-up drop-shadow-xl">Videography Showcase</h2>
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
                      <Card className="hover:shadow-2xl transition-all duration-300 group bg-background/95 backdrop-blur-sm border border-white/10">
                        <CardContent className="p-0">
                          <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300">
                            <iframe 
                              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=0&mute=0&controls=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </AspectRatio>
                          <div className="p-3 text-center group-hover:bg-secondary/30 transition-colors duration-300 backdrop-blur-sm">
                            <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{video.title}</p>
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