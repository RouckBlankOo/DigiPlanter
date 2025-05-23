import React from "react";

const About: React.FC = () => (
  <section
    id="about"
    className="py-24 bg-gradient-to-b from-green-50 to-green-100"
  >
    <div className="container mx-auto max-w-3xl rounded-3xl shadow-xl bg-white px-8 py-14 flex flex-col items-center border border-green-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block w-2 h-8 bg-primary rounded-full"></span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
          About DigiPlanter
        </h2>
      </div>
      <p className="text-xl text-foreground/90 mb-6 text-center leading-relaxed">
        DigiPlanter is committed to revolutionizing plant care by blending smart
        technology with nature. Our mission is to empower plant owners with
        real-time insights, personalized notifications, and actionable
        tips—ensuring every plant not only survives, but thrives.
      </p>
      <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
      <p className="text-lg text-foreground/70 text-center">
        Whether you’re a beginner or a seasoned collector, DigiPlanter helps you
        connect with your plants and keep them healthy. Built with advanced
        sensors and intuitive technology, DigiPlanter brings your plant care
        routine into the digital age—making it simple, efficient, and enjoyable.
      </p>
    </div>
  </section>
);

export default About;
