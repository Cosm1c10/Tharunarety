import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const photos = [
  { src: "/lovable-uploads/7aa43e64-683d-4f49-b13b-88b789fe91a1.png", alt: "Boats on a river in front of a city waterfront" },
  { src: "/lovable-uploads/68dc8ba2-bd19-4edc-8f22-a3733f916f19.png", alt: "Misty mountain ranges at sunset" },
  { src: "/lovable-uploads/ac76c6d4-2412-4651-93d0-b074874c0ed2.png", alt: "A boat on a lake with a village and snow-capped mountains" },
  { src: "/lovable-uploads/b13c8b7a-aa51-4246-8c47-c5762a87f93c.png", alt: "A bustling Christmas market at night with snow falling" },
  { src: "/lovable-uploads/ac62e9c6-0f11-49c8-8cc3-9bd6a009438f.png", alt: "A cityscape at dusk with a river and illuminated bridges" },
];

const Photography3D = () => {
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

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    const totalSlides = photos.length;
    
    // Normalize the difference to be between -totalSlides/2 and totalSlides/2
    let normalizedDiff = diff;
    if (normalizedDiff > totalSlides / 2) {
      normalizedDiff -= totalSlides;
    } else if (normalizedDiff < -totalSlides / 2) {
      normalizedDiff += totalSlides;
    }
    
    return normalizedDiff;
  };

  const getSlideStyles = (position: number) => {
    const absPosition = Math.abs(position);
    
    if (position === 0) {
      // Center slide
      return {
        transform: 'translateX(-50%) translateZ(0) scale(1)',
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1)',
      };
    } else if (absPosition === 1) {
      // Adjacent slides
      const translateX = position > 0 ? '20%' : '-120%';
      return {
        transform: `translateX(${translateX}) translateZ(-200px) scale(0.8) rotateY(${position > 0 ? '-25deg' : '25deg'})`,
        opacity: 0.7,
        zIndex: 5,
        filter: 'brightness(0.6)',
      };
    } else if (absPosition === 2) {
      // Second level slides
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
    <section className="py-20 md:py-32 px-8 md:px-12 bg-black overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2">Photography Showcase</h2>
          <p className="text-lg text-muted-foreground">Explore my visual storytelling</p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] mb-8" style={{ perspective: '1000px' }}>
          <div className="relative w-full h-full">
            {photos.map((photo, index) => {
              const position = getSlidePosition(index);
              const styles = getSlideStyles(position);
              
              return (
                <div
                  key={index}
                  className={`absolute left-1/2 top-1/2 w-[300px] md:w-[400px] h-[200px] md:h-[300px] cursor-pointer transition-all duration-600 ease-in-out transform -translate-y-1/2 ${
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-white/20 text-white hover:bg-white/20"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-white/20 text-white hover:bg-white/20"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Photography3D;