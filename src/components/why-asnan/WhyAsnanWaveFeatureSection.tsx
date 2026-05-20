import Image from "next/image";
import styles from "./WhyAsnanWaveFeatureSection.module.css";

export type WhyAsnanWaveFeatureSectionProps = {
  locale: string;
  image: string;
  icon: string;
  title: string;
  paragraphs: string[];
  imageAlt?: string;
  iconAlt?: string;
  variant?: "image-left" | "image-right";
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
}: WhyAsnanWaveFeatureSectionProps) {
  const isAr = locale === "ar";
  const isImageRight = variant === "image-right";

  return (
    <section
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr} ${
        isImageRight ? styles.imageRight : styles.imageLeft
      }`}
      dir={isAr ? "rtl" : "ltr"}
      aria-label={title}
    >
      <div className={styles.waveBg} aria-hidden="true">
        <img src="/images/why-asnan/bg-wave-grey.svg" alt="" />
      </div>

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

          <div className={styles.iconBadge} aria-hidden={iconAlt ? undefined : "true"}>
            <Image src={icon} alt={iconAlt} width={152} height={152} />
          </div>
        </div>
      </div>
    </section>
  );
}