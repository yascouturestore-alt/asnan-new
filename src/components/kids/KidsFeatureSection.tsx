import Image from "next/image";
import styles from "./KidsFeatureSection.module.css";

export type KidsFeatureSectionProps = {
  locale: string;
  image: string;
  title: string;
  subTitle: string
  paragraph: string;
  imageAlt?: string;
  variant?: "image-left" | "image-right";
};

export default function WhyAsnanFeatureSection({
  locale,
  image,
  title,
  subTitle,
  paragraph,
  imageAlt = "",
  variant = "image-left",
}: KidsFeatureSectionProps) {
  const isAr = locale === "ar";
  const isImageRight = variant === "image-right";

  return (
    <section
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr} ${isImageRight ? styles.imageRight : styles.imageLeft
        }`}
      dir={isAr ? "rtl" : "ltr"}
      aria-labelledby="why-asnan-feature-title"
    >
      <div className={styles.inner}>
        <div className={styles.imagePanelWrap}>
          <div className={styles.imagePanel}>
            <img
              src={image}
              alt={imageAlt}
              sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 806px"
            />
          </div>
        </div>

        <div className={styles.content}>
          <h2 id="why-asnan-feature-title">{title}</h2>
          <h4>{subTitle}</h4>
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
