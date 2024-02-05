"use client";
import styles from "./page.module.scss";
import ZoomParallax from "../components/ZoomParallax/index";
import About from '../components/About';
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/Hero/Hero";
import Experiment from "@/components/Experiment/Experiment";
import Footer from "@/components/Footer/Footer";
import LogoAnim from "@/components/LogoAnim/LogoAnim";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      <ZoomParallax />
      <About />
      <Experiment />
      <Footer />
    </main>
  );
}
