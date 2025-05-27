import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-white" id="aboutus">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-16">
        About Us
      </h2>

      {/* About Fenet Section - Image on Left */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-12 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* Image Container - Left Side */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-300 rounded-lg"></div>
            <img 
              src="/image/about-3.jpg" 
              alt="Fenet Decor Team" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-[Playwrite US Trad] text-purple-800 mb-4">
            About Fenet
          </h3>
          <p className="text-gray-600 mb-4">
            Fenet Decor is a trusted name in the event decoration and wedding planning industry, proudly serving clients since 2008. Founded by three friends, Fenet Decor has evolved from organizing small celebrations to specializing in large-scale wedding planning and custom event design. 
          </p>
          <p className="text-gray-600 mb-4">
            With a strong reputation for quality, attention to detail, and customer satisfaction, we now offer full-service wedding planning and event organization tailored to your vision.
          </p>
          <p className="text-gray-600">
            Our journey is fueled by aspiration—reflected in the very meaning of our name, "Fenet"
 our mission is to transform your special day into an unforgettable celebration.
          </p>
        </div>
      </motion.div>

      {/* Our Philosophy Section - Image on Right */}
      <motion.div 
        className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* Image Container - Right Side */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-purple-300 rounded-lg"></div>
            <img 
              src="/image/decor/platinium.jpg" 
              alt="Wedding Philosophy" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Content - Left Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-[Playwrite US Trad] text-purple-800 mb-4">
            Our Philosophy
          </h3>
          <p className="text-gray-600 mb-4">
            At Fenet Decor, we believe that every celebration is a story waiting to be told—a reflection of love, joy, and meaningful connection. Our philosophy is rooted in the idea that events should not only be beautiful but also deeply personal and thoughtfully curated.
          </p>
          <p className="text-gray-600 mb-4">
            we strive to transform moments into memories by blending artistry with precision. For us, it’s not just about planning an event—it’s about crafting an experience that lingers in the hearts of all who attend.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence means that we pay attention to every detail, from the grandest decorations to the smallest accents, ensuring a cohesive and beautiful experience for you and your guests.
          </p>
        </div>
      </motion.div>

      {/* Our Facility Section - Image on Left */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* Image Container - Left Side */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-300 rounded-lg"></div>
            <img 
              src="/image/venue/aboutus.jpg" 
              alt="Fenet Decor Facility" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-[Playwrite US Trad] text-purple-800 mb-4">
            Our Facility
          </h3>
          <p className="text-gray-600 mb-4">
we provide end-to-end wedding planning and event organization services designed to bring your vision to life with elegance and ease. From creative event design and customized decorations to professional vendor coordination and on-site management,
 our facilities are tailored to ensure a seamless and unforgettable experience.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're planning an intimate ceremony or a grand celebration, we offer expert guidance, budget-friendly packages, and a dedicated team committed to perfection—so you can relax and enjoy every moment of your special day.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;