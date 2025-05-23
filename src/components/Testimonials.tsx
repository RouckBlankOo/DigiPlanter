
import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "This app has transformed how I care for my houseplants. The notifications are so helpful, and my plants have never looked healthier!",
      author: "Sarah Johnson",
      role: "Plant Enthusiast"
    },
    {
      quote: "As someone who always forgot to water my plants, this app has been a lifesaver. I love the detailed care instructions for each plant species.",
      author: "Michael Rodriguez",
      role: "Busy Professional"
    },
    {
      quote: "The analytics feature helps me understand exactly what my rare plants need. This is a must-have for any serious collector.",
      author: "Emma Chen",
      role: "Rare Plant Collector"
    }
  ];

  return (
    <section className="py-20 bg-primary-100/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of happy plant owners who have transformed their gardening experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col">
      <div className="text-primary mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.96.41-3.03.32-1.06.8-2.04 1.42-2.93.62-.9 1.24-1.65 1.87-2.24.71-.6 1.23-.89 1.56-.89.4 0 1.086.21 2.027.63.94.43 1.846.93 2.714 1.5.87.57 1.566 1.27 2.086 2.1.52.83.782 1.65.782 2.47 0 3.27-1.344 5.3-4.033 6.09-.93.27-1.94.41-3.05.41-1.2 0-1.97-.49-2.33-1.46-.23-.6-.34-1.25-.34-1.93 0-1.02.27-1.97.81-2.83.55-.87 1.27-1.61 2.18-2.22-.15.43-.52.82-1.11 1.18-.6.35-1.26.53-1.98.53-.7 0-1.33-.16-1.89-.5-.57-.33-.85-.8-.85-1.41 0-.43.1-.8.31-1.12.2-.32.48-.57.84-.75.36-.18.78-.27 1.26-.27.82 0 1.54.25 2.17.75.62.5.93 1.2.93 2.09 0 .64-.17 1.18-.51 1.63-.38.57-.94.92-1.67 1.05v.01zm8.622 1.48c.57.42.86.94.86 1.57 0 .55-.17 1-.5 1.34-.33.35-.83.62-1.47.8v-1.45c.28-.11.5-.29.64-.53.14-.24.23-.5.27-.78-.23.04-.5.05-.84.05-1.11 0-1.99-.35-2.63-1.04-.64-.68-.96-1.55-.96-2.6 0-1.19.42-2.22 1.28-3.1.85-.87 1.9-1.31 3.16-1.31.84 0 1.56.2 2.15.59.58.39 1.04.9 1.38 1.53.33.64.5 1.36.5 2.15 0 1.12-.32 2.15-.95 3.07-.64.93-1.66 1.6-3.06 2-.74.21-1.52.32-2.33.32-1.41 0-2.48-.58-3.23-1.76-.45-.71-.67-1.49-.67-2.35 0-.46.07-.93.22-1.42.16-.48.39-.94.71-1.37.39-.53.94-.96 1.66-1.27-.1.65.03 1.35.38 2.11.35.75.88 1.27 1.57 1.58.69.3 1.28.45 1.76.45.2 0 .44-.07.74-.21v.02z"/>
        </svg>
      </div>
      <p className="text-foreground/80 italic mb-6">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-foreground/60">{role}</p>
      </div>
    </div>
  );
};

export default Testimonials;
