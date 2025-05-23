import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle the form submission (e.g., send to API)
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-green-100 to-green-50"
    >
      <div className="container mx-auto max-w-2xl bg-white rounded-3xl shadow-xl px-8 py-14 border border-green-100">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="inline-block w-2 h-8 bg-primary rounded-full"></span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Contact Us
          </h2>
        </div>
        <p className="text-lg text-foreground/70 text-center mb-8">
          Have a question, suggestion, or just want to say hello? Fill out the
          form below and our team will get back to you soon!
        </p>
        {submitted ? (
          <div className="text-center text-green-700 font-semibold py-10">
            Thank you for reaching out! We’ll get back to you as soon as
            possible.
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-medium flex items-center gap-2"
              >
                <User className="w-4 h-4 text-primary" /> Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-medium flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-primary" /> Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                placeholder="you@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-medium flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-primary" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-700 text-white text-lg py-3 rounded-lg transition"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
