import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    username: "Jawad Saleem",
    comment:
      "Rank BPO is a professional digital marketing agency based in Lahore, Pakistan. They helped me market my product through Facebook and Google Ads in Karachi, Lahore, and Islamabad. ",
  },
  {
    username: "Jibran Aslam ",
    comment:
      "Professional SEOs! I am getting consistent rankings after I gave them the SEO project of my business website. My web organic traffic is cumulative every day. ",
  },
  {
    username: "Zahid Shahzad",
    comment:
      "I have worked with Rank BPO on several projects previously. Right now, my two websites are under contract with the SEO department, and the rankings are constantly getting better. ",
  },
  {
    username: "Sidra Ghaffar",
    comment: "As far as local social marketing agencies in Pakistan are concerned, Rank BPO stands at the top.  Thank you for managing our social media pages. ",
  },
];

export function TestimonialCarousel() {
  return (
    <div className="w-full h-full px-6 md:px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="flex"
      >
        <CarouselContent className="flex space-x-2">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex-none w-full md:w-1/3 cursor-grab select-none "
            >
              <div className="p-4 h-full">
                <Card className="bg-blue-600 text-white rounded-3xl h-full flex flex-col">
                  <CardContent className="flex flex-col items-center justify-center p-6 py-12 flex-1 ">
                    <p className="text-lg italic mb-4 text-center">
                      {testimonial.comment}
                    </p>
                    <span className="text-xl font-semibold">
                      - {testimonial.username}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-blue-500 text-white border-0 hover:bg-red-600 hover:text-white" />
        <CarouselNext className="bg-blue-500 text-white border-0 hover:bg-red-600 hover:text-white" />
      </Carousel>
    </div>
  );
}
