import styles from "./styles.module.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Index() {
  const container = useRef(null);
  const paralax = useRef(null);
  const image = useRef([]);
  const wrappers = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    image.current.forEach((currI) => {
      gsap.to(currI, {
        backgroundPositionY: `${gsap.utils.random(60, 90)}%`,
        stagger: 0.5,
        scrollTrigger: {
          trigger: paralax.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    wrappers.current.forEach((currW, i) => {
      gsap.to(currW, {
        scale: pictures[i].scale,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      }, 0.5)
    })
  });

  const pictures = [
    {
      src: "/images/Scroll/1.webp",
      scale: 4,
    },
    {
      src: "/images/Scroll/2.webp",
      scale: 5,
    },
    {
      src: "/images/Scroll/3.webp",
      scale: 6,
    },
    {
      src: "/images/Scroll/4.webp",
      scale: 5,
    },
    {
      src: "/images/Scroll/5.webp",
      scale: 6,
    },
    {
      src: "/images/Scroll/6.webp",
      scale: 8,
    },
    {
      src: "/images/Scroll/7.webp",
      scale: 9,
    },
  ];

  return (
    <div className={styles.zoomParalax} ref={paralax}>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <div
                key={index}
                className={styles.el}
                ref={(pic) => wrappers.current.push(pic)}
              >
                <div className={styles.imageContainer}
                >
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${src})` }}
                    ref={(i) => image.current.push(i)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
