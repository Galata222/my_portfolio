'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export function PhotoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const photos = [
    {
      src: 'grad.png',
      alt: 'Graduated in 2024',
      caption: 'Graduated in 2024',
    },
    {
      src: 'gold.jpg',
      alt: 'Honored with Gold Medal',
      caption: 'Honored with Gold Medal',
    },
    {
      src: 'gold_grad.jpg',
      alt: 'Honored with Gold Medal',
      caption: 'Honored with Gold Medal',
    },
    {
      src: 'competition.jpg',
      alt: 'Won 1st Place in Huawei ICT Competition 2023',
      caption: 'Won 1st Place in Huawei ICT Competition 2023',
    },
    {
      src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Creative problem solving',
      caption: 'Creative problem solving',
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]); // ✅ fixed: removed photos.length

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 group">
        <CardContent className="p-0 relative">
          <div className="relative h-80 overflow-hidden">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 transform translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 transform -translate-x-full'
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Play/Pause Button */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlayPause}
              className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm rounded-full"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-600 scale-110'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center">
        <span className="text-sm text-foreground/60">
          {currentSlide + 1} of {photos.length}
        </span>
      </div>
    </div>
  );
}
