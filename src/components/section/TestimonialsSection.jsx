import React from "react";

const TestimonialSection = ({num=2}) => {
  // Using the specified image path for testimonials
  const imagePath = "/image/venue/5f1889814db54c54ce84efff_weddings.jpg";
  
  // Testimonial data array
  const allTestimonials = [
    {
      id: 1,
      name: "moke and sebli",
      rating: 5,
      image: "/image/cake/testimonial -1.jpg",
      imageAlt: "Wedding Rings",
      comment: "FENET transformed our dreams into a breathtaking reality. Their impeccable attention to detail and warm professionalism made our wedding day flawless. Every moment felt magical—thank you for making us feel like royalty!",
      borderColor: "border-purple-400"
    },
    {
      id: 2,
      name: "abel and nardi",
      rating: 5,
      image:"/image/cake/testimonial -2.jpg",
      imageAlt: "Groom and Friends",
      comment: "From the first meeting, FENET felt like family. They listened to every wish, calmed every fear, and delivered a day more beautiful than we could’ve imagined. Our hearts are full!",
      borderColor: "border-purple-400"
    },
    {
      id: 3,
      name: "mekdi and nahom",
      rating: 5,
      image: "/image/cake/testimonial -3.jpg",
      imageAlt: "Groom and Friends",
      comment: "Stress-free, stunning, and seamless! FENET nailed every detail. Best decision we made!",
      borderColor: "border-purple-400"
    },
  ];

  var testimonials = allTestimonials;

  if(num != 0) {
   testimonials = allTestimonials.slice(0, num);
  }

  return (
    <section className="py-12 md:py-16 px- md:px-16 lg:px-24 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
      Testimonial
      </h2>

      {/* Grid Layout */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
        {/* Left Panel - Review Text - Made bigger with centered text */}
        <div className="bg-gradient-to-r from-[#f5f1ec] to-[#f3ede8] p-8 md:p-12 rounded-lg shadow-lg 
                        max-w-sm md:max-w-lg w-full text-center z-10">
          {/* Changed to h1 and centered */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Client Review To Our Service
          </h1>
          
          {/* Changed to h3 and centered */}
          <h3 className="text-gray-600 text-base md:text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eleifend placerat velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eleifend placerat velit.
          </h3>
        </div>

        {/* Right Panel - Testimonials */}
        <div className="relative flex flex-col space-y-20 md:space-y-10 md:ml-16 w-full md:w-auto">
          {/* Map through testimonials array */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative flex flex-col md:flex-row items-center w-full">
              {/* Image container - Made bigger in PC mode */}
              <div className="w-full md:w-64 h-64 md:h-80 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Testimonial card - Increased height and adjusted positioning */}
              <div className={`absolute top-48 md:top-16 left-1/2 md:left-40 transform -translate-x-1/2 md:translate-x-0 
                              bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 ${testimonial.borderColor} 
                              w-[85%] md:w-72 max-w-xs min-h-[80px] md:min-h-[120px] flex flex-col justify-center`}>
                <h4 className="font-semibold text-base md:text-lg">{testimonial.name}</h4>
                <p className="text-yellow-500 text-base md:text-lg">{"★".repeat(testimonial.rating)}</p>
                <p className="text-gray-600 text-xs md:text-sm mt-2">
                  {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;