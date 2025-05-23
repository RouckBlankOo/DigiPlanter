import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// If you're using Next.js, use 'next/image' instead of 'img' for <Image />
// If not, replace <Image ... /> with <img ... /> and remove the import.

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
          </div>
        </div>
        {/* Right Side: Simple Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/Sign in-left.png"
            alt="DigiPlanter app interface"
            width={320}
            height={580}
            className="rounded-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
