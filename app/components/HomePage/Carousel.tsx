import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel opts={{loop: true}} className="w-full max-w-3xl">
      <CarouselContent>
        <CarouselItem>
            <div className="flex justify-center items-center">
                <img alt={"Image"} src={"/c1.jpg"} className="object-cover w-11/12 h-full rounded-2xl shadow-lg" />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
                <img alt={"Image"} src={"/c2.jpg"} className="object-cover w-11/12 h-full rounded-2xl shadow-lg" />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
                <img alt={"Image"} src={"/c3.jpg"} className="object-cover w-11/12 h-full rounded-2xl shadow-lg" />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
                <img alt={"Image"} src={"/c4.jpg"} className="object-cover w-11/12 h-full rounded-2xl shadow-lg" />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
                <img alt={"Image"} src={"/c5.jpg"} className="object-cover w-11/12 h-full rounded-2xl shadow-lg" />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
                <img alt={"Image"} src={"/c6.jpg"} className="object-cover w-11/12 h-full rounded-2xl shadow-lg" />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex justify-center items-center">
                <img alt={"Image"} src={"/c7.jpg"} className="object-cover w-11/12 h-full rounded-2xl shadow-lg" />
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
