import styles from "./KidsFeatureSection.module.css";

export type KidsFeatureSectionProps = {
  locale: string;
  image: string;
  icon: string;
  title: string;
  points: string[];
  imageAlt?: string;
  iconAlt?: string;
  variant?: "image-left" | "image-right";
};

export default function KidsFeatureSection({
  locale,
  image,
  title,
  points,
  imageAlt = "",
  variant = "image-left",
}: KidsFeatureSectionProps) {
  const isAr = locale === "ar";
  const isImageRight = variant === "image-right";

  return (
    <section
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr} ${
        isImageRight ? styles.imageRight : styles.imageLeft
      }`}
      dir={isAr ? "rtl" : "ltr"}
      aria-labelledby="kids-feature-title"
    >
      <div className={styles.inner}>
        <div className={styles.imagePanelWrap}>
          <div className={styles.imagePanel}>
            <img
              src={image}
              alt={imageAlt}
              sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 806px"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        <div className={styles.content}>
          <h2 id="kids-feature-title">{title}</h2>

          <div
            style={{
              display: "grid",
              gap: "26px",
            }}
          >
            {points.map((point) => (
              <p
                key={point}
                style={{
                  margin: 0,
                  color: "#50595c",
                  fontFamily: "Almarai, Tajawal, Arial, sans-serif",
                  fontSize: "clamp(15px, 0.938vw, 18px)",
                  fontWeight: 400,
                  lineHeight: 1.67,
                }}
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}