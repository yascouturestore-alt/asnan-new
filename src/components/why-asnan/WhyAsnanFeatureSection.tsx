import Image from "next/image";
import styles from "./WhyAsnanFeatureSection.module.css";

export type WhyAsnanFeatureSectionProps = {
  locale: string;
  image: string;
  icon: string;
  title: string;
  points: string[];
  imageAlt?: string;
  iconAlt?: string;
  variant?: "image-left" | "image-right";
};

export default function WhyAsnanFeatureSection({
  locale,
  image,
  icon,
  title,
  points,
  imageAlt = "",
  iconAlt = "",
  variant = "image-left",
}: WhyAsnanFeatureSectionProps) {
  const isAr = locale === "ar";
  const isImageRight = variant === "image-right";

  return (
    <section
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr} ${
        isImageRight ? styles.imageRight : styles.imageLeft
      }`}
      dir={isAr ? "rtl" : "ltr"}
      aria-labelledby="why-asnan-feature-title"
    >
      <div className={styles.inner}>
        <div className={styles.imagePanelWrap}>
          <div className={styles.imagePanel}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 806px"
              priority={false}
            />
          </div>

          <div
            className={styles.iconBadge}
            aria-hidden={iconAlt ? undefined : "true"}
          >
            <Image src={icon} alt={iconAlt} width={152} height={152} />
          </div>
        </div>

        <div className={styles.content}>
          <h2 id="why-asnan-feature-title">{title}</h2>
          <ul>
            {points.map((point) => (
              <li key={point}>
                <span className={styles.marker} aria-hidden="true">
                  <Image
                    src="/images/why-asnan/icon-bullet-circle.svg"
                    alt=""
                    width={26}
                    height={26}
                  />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
