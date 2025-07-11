import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.out",
    });

    timeline
      .from(titleSplit.words, {
        y: 100,
        opacity: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power1.out",
      })
      .from("#contact h3, #contact p, #contact .socials", {
        opacity: 0,
        yPercent: 20,
        stagger: 0.3,
        duration: 1,
        ease: "power1.out",
      }, "1")
      .from(
        "#f-right-leaf",
        {
          x: "100",
          y: "-100",
          duration: 1,
          ease: "power1.out",
        },
        "0"
      )
      .to(
        "#f-left-leaf",
        {
          x: "-100",
          y: "100",
          duration: 1,
          ease: "power1.out",
        },
        "0"
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="socials flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
