import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrase1 = [
  "This AI experiment delves into a",
  "contemporary reimagining of the Kharkiv",
  "Modernism[*] movement from 1910 to 1930.",
  "Drawing inspiration from the avant- garde",
  "artists and intellectuals of that era, we employ",
  "cutting-edge artificial[**]intelligence techniques",
  "to reinterpret and garde artists and",
  "intellectuals of that era, revive their visionary ideas.",
];

const phase2 = [
  "By leveraging modern technology, we[***]aim to",
  "uncover new perspectives on the artistic,",
  "architectural, and cultural legacy of Kharkiv",
  "Modernism.",
];

const postScript = [
  "[*] — Collective name 1910-30 Kharkiv’s artists",
  "[**] — Main visual AI tool is Midjourney",
  "[***] — Experiment produced by Obys",
];

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        {/* This AI experiment delves into a contemporary reimagining of the Kharkiv
        Modernism<span className="small-text">[*]</span> movement from 1910 to
        1930. Drawing inspiration from the avant- garde artists and
        intellectuals of that era, we employ cutting-edge artificial
        <span className="small-text">[**]</span>
        intelligence techniques to reinterpret and garde artists and
        intellectuals of that era, revive their visionary ideas. */}

        <MaskText phrase={phrase1} />
      </h1>
      <h1 className={styles.title}>
        {/* By leveraging modern technology, we
        <span className="small-text">[***]</span>
        aim to uncover new perspectives on the artistic, architectural, and
        cultural legacy of Kharkiv Modernism. */}
        <MaskText phrase={phase2} />
      </h1>
      <div className={styles.postScript}>
        {/* <p>[*] — Collective name 1910-30 Kharkiv’s artists</p>
        <p>[**] — Main visual AI tool is Midjourney</p>
        <p>[***] — Experiment produced by Obys</p>
         */}
        <MaskText phrase={postScript} />
      </div>
    </section>
  );
}

function MaskText({ phrase }) {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrase &&
        phrase.map((p, index) => {
          return (
            <div key={index} className={styles.lineMask}>
              <motion.p
                custom={index}
                variants={animation}
                initial="initial"
                animate={inView ? "enter" : ""}
              >
                {p}
              </motion.p>
            </div>
          );
        })}
    </div>
  );
}
