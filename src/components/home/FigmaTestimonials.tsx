import Link from "next/link";
import styles from "./FigmaTestimonials.module.css";

type FigmaTestimonialsProps = {
  locale: string;
};

const copy = {
  en: {
    title: "Discover What Our Clients Say About Us",
    text: "Asnan Tower is the only dental clinic in Kuwait with specialists trained in the United States and the United Kingdom across every dental specialty.",
    user: "Salman Alnajadi",
    readMore: "Read More",
    previous: "Previous testimonial",
    next: "Next testimonial",
  },
  ar: {
    title: "تعرف على آراء مستخدمينا حولنا",
    text: "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والمملكة المتحدة في كل تخصص من تخصصات طب الأسنان.",
    user: "سلمان النجادي",
    readMore: "اقرأ المزيد",
    previous: "التقييم السابق",
    next: "التقييم التالي",
  },
};

export default function FigmaTestimonials({ locale }: FigmaTestimonialsProps) {
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  return (
    <section className={`${styles.section} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"} aria-labelledby="home-testimonials-title">
      <div className={styles.panel}>
        <div className={styles.inner}>
          <h2 id="home-testimonials-title" className={styles.title}>
            {t.title}
          </h2>

          <div className={styles.divider} aria-hidden="true">
            <span />
            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/testimonials-quote.svg`} alt="" />
            <span />
          </div>

          <div className={styles.testimonialRow}>
            <button className={styles.control} type="button" aria-label={t.next}>
              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/testimonials-arrow-blue-right.svg`} alt="" />
            </button>

            <article className={styles.cardFrame}>
              <div className={styles.largecard}>
              <div className={styles.card}>
                <p className={styles.quoteText}>{t.text}</p>
                <div className={styles.user}>
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/testimonial-user-salman.png`} alt="" />
                  <span>{t.user}</span>
                </div>
              </div>
              </div>
            </article>

            <button className={styles.control} type="button" aria-label={t.previous}>
              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/testimonials-arrow-blue-left.svg`} alt="" />
            </button>
          </div>

          <Link className={styles.readMore} href={`/${locale}/services/testimonials`}>
            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/testimonials-arrow-white.svg`} alt="" />
            <span>{t.readMore}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
