import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import LazyLoad from 'react-lazyload'

const Art = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#art",
          start: "top 20%%",
          scrub: 1,
          pin: true,
        },
      })
      .to(
        ".will-fade",
        {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
          display: "none",
        },
        0
      )
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 2.5,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <section id="art" className="relative">
      <div className="container mx-auto h-full md:pt-20 relative">
        <h2 className="will-fade">The ART</h2>
        <div className="absolute flex flex-col justify-between items-center top-0 left-1/2 -translate-x-1/2 md:top-1/3 md:-translate-y-1/2 w-full masked-container md:pt-20">
          <div className="h-2/3 overflow-hidden">
              <img
                src="/images/under-img.jpg"
                alt="cocktail"
                className="masked-img size-full object-contain"
              />
            {/* <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="masked-img size-full object-contain"
            /> */}
          </div>

          <h2 className="will-fade h-1/3 opacity-100 text-white text-3xl md:text-6xl px-5">
            Sip-Worthy Perfection
          </h2>

          <div id="masked-content" className="opacity-0 text-center p-5">
            <h3 className="text-3xl md:text-6xl font-modern-negra">
              Made with Craft - Poured with Passion
            </h3>
            <p className="text-lg">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>

        <div className="absolute w-full top-1/2 flex md:flex-row flex-col justify-between p-5">
          <ul className="space-y-2 md:space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 md:space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Art;
