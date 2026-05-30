import styles from "./KidsFeatureSection.module.css";

export type KidsFeatureSectionProps = {
  locale: string;
  image: string;
  icon?: string;
  title: string;
  points?: string[];
  paragraphs?: string[];
  imageAlt?: string;
  iconAlt?: string;
  variant?: "image-left" | "image-right";
};

export default function KidsFeatureSection({
  locale,
  image,
  title,
  points,
  paragraphs,
  imageAlt = "",
  variant = "image-left",
}: KidsFeatureSectionProps) {
  const isAr = locale === "ar";
  const isImageRight = variant === "image-right";
  const text = paragraphs?.length ? paragraphs : points || [];

  return (
    <section
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr} ${
        isImageRight ? styles.imageRight : styles.imageLeft
      }`}
      dir={isAr ? "rtl" : "ltr"}
      aria-label={title}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>{title}</h2>

          <div className={styles.paragraphText}>
            {text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={styles.imagePanelWrap}>
          <div className={styles.imagePanel}>
            <img
              src={image}
              alt={imageAlt}
              sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 806px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
