import { ScrollParallax } from "react-just-parallax";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Section from "../Section.js";
import CompanyLogos from "./CompanyLogos.js";
import Icons from "./Icons.jsx";
import Notification from "./Notification.jsx";
import Button from "../../ui/Button.js";
import Generating from "../../ui/Generating.js";

import { curve, heroBackground, robot } from "../../assets/index.js";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/Hero.js";

function Hero() {
  useGSAP(() => {
    // Animation for main title
    gsap.from(".hero-title", { opacity: 0, y: 50, duration: 0.75, delay: 0.2 });

    // Animation for subtitle
    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 50,
      duration: 0.75,
      delay: 0.5,
    });

    // Animation for main button
    gsap.from(".hero-btn", {
      opacity: 0,
      scale: 2,
      duration: 0.3,
      delay: 1,
      ease: "power2.in",
    });
  });

  // Returned JSX
  return (
    <Section
      className="pt-[4rem] md:pt-[5rem] lg:pt-[7rem] -mt-[4.75rem] md:-mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 hero-title">
          Real results. <span className="inline-block relative">
              Smart AI{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span> solutions. Built for ambitious brands.{" "}
            
          </h1>
          {/* <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 hero-subtitle">
            Unleash the power of AI with Cryenx. Upgrade your productivity with
            Cryenx.
          </p> */}
          <div className="hero-btn">
            <Button href="#about" white>
              Know More
            </Button>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-22">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem]" /> */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* Robot image */}
                <div className="absolute inset-0 overflow-hidden rounded-b-[0.9rem] rounded-t-[0.9rem]">
                  <video
                    src={robot}
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>

                {/* Generating Line */}
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {/* Left modal with icons */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Icons className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex" />
                </ScrollParallax>

                {/* Right modal with images */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Video Generation"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
          <Gradient />
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="Hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
}

export default Hero;
