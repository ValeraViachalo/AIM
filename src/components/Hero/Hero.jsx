import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.logo}>
        <Image fill src="/full-logo.svg" alt="little logo" />
      </div>
      <div className={styles.bigLogo}>
        <Image fill src="/hero-logo.svg" alt="logo" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <p>Modernists:</p>
          <ul>
            <li>E01: Anatol Petrytskiy</li>
            <li>E02: Vasyl Ermilov</li>
            <li>E03: Oleksandr Khvostenko-Khvostov</li>
            <li>E04: Borys Kosarev</li>
            <li>E05: Vadym Meller</li>
          </ul>
          <span className={styles.line} />
        </div>
        <div className={styles.right}>
          <h1>
            AIM—
            <br />
            AI Modernism
            <br />
            Of Kharkiv
          </h1>
          <p>
            Scroll to Explore
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.58339 7.43363V0.333293H4.41672V7.43363L1.28772 4.30463L0.462891 5.12946L5.00006 9.66663L9.53722 5.12946L8.71239 4.30463L5.58339 7.43363Z"
                fill="#D9D9D9"
              />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
}
