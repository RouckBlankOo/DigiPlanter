import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <div className="text-primary uppercase font-medium tracking-wide mb-4">
            Smart Plant Monitoring Solution
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Transform your <span className="text-primary">Plants</span> into
            Smart Living Companions
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl">
            Monitor your plants in real-time and receive notifications about
            their needs. Your plants communicate with you directly with our
            smart sensors - making plant care simple and efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary-600 text-white text-lg py-6 px-8">
              Get Started Now
            </Button>
            <Button
              variant="outline"
              className="group text-lg py-6 px-8 border-primary/30 text-primary hover:text-primary hover:bg-primary-100"
            >
              See Pricing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-gradient-radial from-primary-200/70 to-transparent rounded-full w-[500px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50"></div>
          <div className="relative -z-0 animate-float">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneMockup: React.FC = () => (
  <div className="relative mx-auto w-[280px] md:w-[320px]">
    <div className="rounded-[36px] overflow-hidden border-8 border-gray-800 shadow-xl">
      <div className="bg-gray-800 absolute top-0 left-0 right-0 z-10 h-6 w-full">
        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
      </div>
      <div className="pt-6 bg-primary-100 h-[580px] overflow-hidden">
        <img
          src="/image.png"
          alt="DigiPlanter app interface"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default Hero;
