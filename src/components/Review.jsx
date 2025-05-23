"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

import { testimonials } from "@/data"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"



export default function Reviews() {


  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Clients Say</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Here's what some of my clients have to say about working with me.
          </p>
        </div>

        <Carousel>
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-background shadow-lg dark:bg-background/50 dark:backdrop-blur-sm w-full h-full mx-auto">
                  <CardContent className="p-6 relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
                    <div className="pl-8 pt-4">
                      <p className="text-muted-foreground mb-6 italic">"{t.content}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar size="lg" className="h-12 w-12">
                          <AvatarImage src={t.avatar} alt={t.name} />
                          <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold">{t.name}</h4>
                          <p className="text-sm text-muted-foreground">{t.position}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* <div className="relative mt-12">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
         
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div> */}
      </div>
    </section>
  )
}
