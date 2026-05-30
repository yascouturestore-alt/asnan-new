import type { CSSProperties } from "react";
import styles from "./KidsWaveFeatureSection.module.css";

export type KidsWaveFeatureSectionProps = {
  locale: string;
  image: string;
  icon?: string;
  title: string;
  paragraphs: string[];
  imageAlt?: string;
  iconAlt?: string;
  variant?: "image-left" | "image-right";
  backgroundImage?: string;
};

export default function KidsWaveFeatureSection({
  locale,
  image,
  title,
  paragraphs,
  imageAlt = "",
  variant = "image-left",
  backgroundImage = "/images/why-asnan/bg-wave-grey.svg",
}: KidsWaveFeatureSectionProps) {
  const isAr = locale === "ar";
  const isImageRight = variant === "image-right";

  const sectionStyle = {
    "--wave-bg-image": `url(${backgroundImage})`,
  } as CSSProperties;

  return (
    <section
      className={`${styles.section} ${styles.hasWaveBg} ${
        isAr ? styles.rtl : styles.ltr
      } ${isImageRight ? styles.imageRight : styles.imageLeft}`}
      style={sectionStyle}
      dir={isAr ? "rtl" : "ltr"}
      aria-label={title}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>{title}</h2>

          <div className={styles.text}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imagePanel}>
            <img
              src={image}
              alt={imageAlt}
              sizes="(max-width: 860px) calc(100vw - 32px), 806px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
