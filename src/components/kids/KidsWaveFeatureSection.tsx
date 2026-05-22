import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./KidsWaveFeatureSection.module.css";

export type KidsWaveFeatureSectionProps = {
  locale: string;
  image: string;
  icon: string;
  title: string;
  paragraphs: string[];
  imageAlt?: string;
  iconAlt?: string;
  variant?: "image-left" | "image-right";
  backgroundImage?: string;
};

export default function WhyAsnanWaveFeatureSection({
  locale,
  image,
  icon,
  title,
  paragraphs,
  imageAlt = "",
  iconAlt = "",
  variant = "image-right",
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
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 860px) calc(100vw - 32px), 806px"
              priority={false}
            />
          </div>

          <div
            className={styles.iconBadge}
            aria-hidden={iconAlt ? undefined : "true"}
          >
            <Image src={icon} alt={iconAlt} width={150} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
}