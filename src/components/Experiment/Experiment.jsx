import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const transition = {
  duration: 0.2,
  easing: [0,.93,.96,.28],
};

const countAnim = {
  
  initial: {
    transform: "translateY(100%)",
    transition,
  },
  animate: {
    transform: "translateY(0%)",
    transition,
  },
  exit: {
    transform: "translateY(-100%)",
    transition,
  },
};

export default function Experiment() {
  const description = useRef();
  const experiment = useRef();
  const images = useRef([]);

  const [index, setIndex] = useState(1);

  const handleAuthors = (i) => {
    return classNames(styles.authors, {
      [styles.active]: index === i,
    })
  }

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.to(experiment.current, {
    //   scrollTrigger: {
    //     start: "top top",
    //     end: "bottom bottom",
    //     pin: description.current,
    //     pinSpacing: false,
    //   },
    // });

    images.current.forEach((currImg, i) => {
      const index = i + 1;

      gsap.to(currImg, {
        backgroundSize: '120%',
        scrollTrigger: {
          trigger: currImg,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        
      })

      gsap.to(images.current[index], {
        opacity: 1,
        scrollTrigger: {
          trigger: currImg,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
          onEnter: () => setIndex(index),
          onLeaveBack: () => setIndex(index)
        }
      })
    })
  });

  return (
    <section className={styles.experiment} ref={experiment}>
      <div className={styles.description} ref={description}>
        <div className={styles.top}>
          <h1>Explore Experiment</h1>
          <span className={styles.counter}>
            <AnimatePresence mode="wait">
              <motion.span
                variants={countAnim}
                key={index}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {index}
              </motion.span>
            </AnimatePresence>
            —6
          </span>
        </div>
        <div className={styles.center}>
          <div className={styles.link}>
            <p>Learn more</p>
            <svg
              width="1vw"
              height="1vw"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6055 5L6.55588 0L4.78156 0L9.15438 4.37282L0 4.37282L0 5.62718L9.15438 5.62718L4.78156 10L6.55588 9.99933L11.6055 5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={styles.featured}>
            <p>[06] Featured:</p>
            <ul className={styles.featuredList}>
              <p>Name:</p>
              <li className={handleAuthors(1)}>Supermanista</li>
              <li className={handleAuthors(2)}>Buntesglas</li>
              <li className={handleAuthors(3)}>Vierensee</li>
              <li className={handleAuthors(4)}>Formen</li>
              <li className={handleAuthors(5)}>Sesselbaa</li>
              <li className={handleAuthors(6)}>Salzfeld</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Kharkiv Modernism + Obys + AI</p>
          <p>©2025</p>
        </div>
      </div>
      <div>
        {Array.from({ length: 6 }).map((_, i) => {
          const index = i + 1;

          return (
            <div
              key={index}
              className={styles.imageWrapper}
              style={{ zIndex: index, backgroundImage: `url(/images/experiment/${index}.webp)`}}
              ref={img => images.current.push(img)}
            >
              {/* <Image
                fill
                src={`/images/experiment/${index}.png`}
                alt="experiment"
              /> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
