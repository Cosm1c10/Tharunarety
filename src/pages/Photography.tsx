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

        {/* Photography Albums Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Photography Albums</h2>
            
            <Tabs value={activeAlbum} onValueChange={setActiveAlbum} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
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
                    className="w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
                  >
                    <CarouselContent>
                      {photos.map((photo, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <Card>
                              <CardContent className="p-0">
                                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                                  <img 
                                    src={photo.src} 
                                    alt={photo.alt} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                  />
                                </AspectRatio>
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
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Videography Showcase</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="relative h-0 pb-[56.25%]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg" 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Photography;