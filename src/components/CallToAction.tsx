
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-primary to-primary-400 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          Ready to Transform Your Plant Care Experience?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Download the app today and join thousands of plant lovers who have revolutionized their gardening journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Download Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
