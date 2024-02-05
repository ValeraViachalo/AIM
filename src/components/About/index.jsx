import React from 'react';
import styles from './styles.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        This AI experiment delves into a
        contemporary reimagining of the Kharkiv
        Modernism<span className="small-text">[*]</span>  movement from 1910 to
        1930. Drawing inspiration from the avant-
        garde artists and intellectuals of that era,
        we employ cutting-edge artificial<span className="small-text">[**]</span>
        intelligence techniques to reinterpret and
        garde artists and intellectuals of that era,
        revive their visionary ideas.
      </h1>
      <h1 className={styles.title}>
        By leveraging modern technology, we<span className="small-text">[***]</span>
        aim to uncover new perspectives on the
        artistic, architectural, and cultural legacy
        of Kharkiv Modernism.
      </h1>
      </section>
  )
}
