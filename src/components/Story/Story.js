import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Import GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

// Import SASS file
import styles from "./Story.module.scss";

function Story() {
  // Refs
  let section = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline({ delay: 0.3 });

  // GSAP animation
  useEffect(() => {
    // Section Animation
    tl.from(
      section.children,
      {
        scrollTrigger: {
          trigger: section.children,
          start: "top 80%",
          end: "+=500", // end after scrolling 500px beyond the start
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
      },
      0.2
    );
  }, [tl]);

  return (
    <section className={styles.container} ref={(e) => (section = e)}>
      <h2 className={styles.mainHeader}>The ultimate Dining Experience</h2>
      <hr className={styles.divider} />
      <div className={styles.medContainer}>
        <Image
          src="/img/5.jpg"
          width={600}
          height={400}
          objectFit="contain"
          alt="Our Story Image"
          priority
          placeholder="blur"
          blurDataURL="/img/5.jpg"
          className={styles.storyImg}
        />

        <div className={styles.textContainer}>
          <h3>What makes us a delectable choice?</h3>
          <p>
            The Pier Restaurant & Lounge has built its reputation over the past
            10 years. It is one of the city’s most iconic dining destinations.
            Consistently delivering excellent Nigerian food, an innovative wine
            list and faultless services. Join us for lunch, dinner and anytime
            in between.
          </p>
          <Link href="/our-story" passHref>
            <button className={styles.btnDark}>Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Story;
