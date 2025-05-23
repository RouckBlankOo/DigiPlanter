import React from "react";
import { Button } from "@/components/ui/button";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Lifetime Subscription
        </h2>
        <p className="text-lg text-foreground/70 mb-8">
          Get unlimited access to all DigiPlanter features with a one-time
          payment.
        </p>
        <div className="inline-block bg-primary-100 rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-5xl font-bold text-primary mb-2">$99</div>
          <div className="text-foreground/70 mb-6">
            One-time payment, all features included forever.
          </div>
          <Button className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4">
            Get Lifetime Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
