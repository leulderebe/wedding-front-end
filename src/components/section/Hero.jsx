import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax and Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{
          backgroundImage: 'url("/image/heroImage.jpg")',
          backgroundPosition: "center",
          transform: `scale(1.1) translateY(${scrollPosition * 0.05}px)`,
          filter: "brightness(0.55) blur(6px)",
        }}
      />

      {/* Stronger, Modern Gradient Overlay with more pink tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#3f1a54]/60 to-[#2d0735]/40"></div>

      {/* Habesha Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImhhYmVzaGFHcmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0zMCw1IEwzNSwzMCBMNTUsMzAgTDQwLDQ1IEw0NSw2MCBMMzAsNTAgTDE1LDYwIEwyMCw0NSBMNSwzMCBMMjUsMzAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTAsMzAgTDMwLDAgTDYwLDMwIEwzMCw2MCBaIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJNMzAsMTUgTDMyLDMwIEw0NSwzMCBMMzUsMzggTDM4LDQ1IEwzMCw0MCBMMjIsNDUgTDI1LDM4IEwxNSwzMCBMMjgsMzAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDciIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoYWJlc2hhR3JpZCkiLz48L3N2Zz4=')] opacity-80"></div>

      {/* Content Area - Centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 h-full">
        {/* Content Wrapper */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center py-12">
          {/* Decorative Habesha Cross Element */}
          <div
            className={`relative w-16 h-16 mb-6
                         transition-all duration-1000 ease-out
                         ${
                           isVisible
                             ? "opacity-70 rotate-0"
                             : "opacity-0 rotate-45"
                         }`}
          >
            <div className="absolute inset-0 bg-[#c27bff]/30 rounded-full"></div>
            <svg
              className="absolute inset-0"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50,5 L60,50 L95,50 L65,75 L75,95 L50,80 L25,95 L35,75 L5,50 L40,50 Z"
                stroke="#fff"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Hero Title - Larger and more elegant */}
          <h1
            className={`text-3xl md:text-2xl lg:text-3xl text-white font-light tracking-tight mb-4 leading-tight
                       transition-all duration-1000 ease-out
                       ${
                         isVisible
                           ? "opacity-100 translate-y-0"
                           : "opacity-0 translate-y-10"
                       }`}
            style={{ textShadow: "0 2px 15px rgba(0, 0, 0, 0.8)" }}
          >
            <span className="text-[#ffccf9]">Celebrate</span>{" "}
            <span className="font-medium "> Your Special Day</span>
          </h1>

          {/* Elegant Habesha-inspired Divider */}
          <div
            className={`relative w-32 h-4 my-8
                         transition-all duration-1000 delay-200 ease-out
                         ${
                           isVisible
                             ? "opacity-90 scale-x-100"
                             : "opacity-0 scale-x-0"
                         }`}
          >
            <div className="absolute inset-y-0 left-0 w-1/3 h-[1px] bg-[#c27bff] top-[50%]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 transform rotate-45 bg-[#c27bff]"></div>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/3 h-[1px] bg-[#c27bff] top-[50%]"></div>
          </div>

          {/* Subtitle - Using light pink theme color */}
          <p
            className={`text-xl md:text-xl lg:text-2xl text-[#ffccf9] font-light leading-relaxed mb-4
                        transition-all duration-1000 delay-300 ease-out
                        ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
            style={{ textShadow: "0 1px 8px rgba(0, 0, 0, 0.7)" }}
          >
            We craft timeless Ethiopian wedding experiences honoring tradition
            with modern elegance
          </p>

          {/* Key Features - With Habesha-inspired borders and hover effect */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-10
                          transition-all duration-1000 delay-400 ease-out
                          ${
                            isVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-10"
                          }`}
          >
            <div
              className="group flex flex-col items-center text-center p-4 hover:scale-105 transform transition-all duration-300 ease-out
                          border border-[#c27bff]/20 hover:border-[#c27bff]/70 rounded-lg backdrop-blur-sm bg-black/10"
            >
              <span className="text-4xl mb-3 text-white opacity-90">✨</span>
              <h3 className="text-xl md:text-2xl text-white font-medium mb-2">
                Cultural Venues
              </h3>
              <p className="text-base md:text-lg text-[#ffccf9] opacity-90">
                Authentic locations blending Ethiopian heritage with luxury
              </p>
            </div>
            <div
              className="group flex flex-col items-center text-center p-4 hover:scale-105 transform transition-all duration-300 ease-out
                          border border-[#c27bff]/20 hover:border-[#c27bff]/70 rounded-lg backdrop-blur-sm bg-black/10"
            >
              <span className="text-4xl mb-3 text-white opacity-90">🥂</span>
              <h3 className="text-xl md:text-2xl text-white font-medium mb-2">
                Full Service
              </h3>
              <p className="text-base md:text-lg text-[#ffccf9] opacity-90">
                Traditional ceremonies to modern celebrations, expertly crafted
              </p>
            </div>
            <div
              className="group flex flex-col items-center text-center p-4 hover:scale-105 transform transition-all duration-300 ease-out
                          border border-[#c27bff]/20 hover:border-[#c27bff]/70 rounded-lg backdrop-blur-sm bg-black/10"
            >
              <span className="text-4xl mb-3 text-white opacity-90">📸</span>
              <h3 className="text-xl md:text-2xl text-white font-medium mb-2">
                Timeless Memories
              </h3>
              <p className="text-base md:text-lg text-[#ffccf9] opacity-90">
                Capturing your special moments with artistic vision
              </p>
            </div>
          </div>

          {/* Book Now Button - Enhanced with Habesha-inspired accent */}
          <div
            className={`mt-10 flex justify-center transition-all duration-1000 delay-600 ease-out
                            ${
                              isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
          >
            <div className="relative group">
              {/* Glowing background effect */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#c27bff] via-[#9c4dff] to-[#c27bff] opacity-70 rounded-full blur-lg
                            group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-pulse"
              ></div>

              {/* Main button */}
              <button
                onClick={() => {
                  window.location.href = "#services";
                }}
                className=" mb-20 relative flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#c27bff] to-[#9c4dff]
                          text-white font-semibold text-lg rounded-full shadow-2xl
                          hover:from-[#a964e6] hover:to-[#8b3dd9] transform hover:scale-105
                          transition-all duration-300 border-2 border-white/20 hover:border-white/40
                          backdrop-blur-sm group-hover:shadow-[0_0_30px_rgba(194,123,255,0.6)]"
                aria-label="Book your wedding consultation now"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent
                               transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Button content */}
                <div className=" relative flex items-center space-x-3">
                  {/* Ethiopian cross icon */}
                  <svg
                    className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,2 L14,10 L22,10 L16,14 L18,22 L12,18 L6,22 L8,14 L2,10 L10,10 Z" />
                  </svg>

                  <span className="font-bold tracking-wide">Book Now</span>

                  {/* Arrow icon */}
                  <svg
                    className="w-5 m h-5 text-white group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
