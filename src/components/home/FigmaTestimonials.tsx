"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FigmaTestimonials.module.css";

type FigmaTestimonialsProps = {
  locale: string;
};

const testimonialSlides = {
  en: [
    {
      text: "Asnan Tower is the only dental clinic in Kuwait with specialists trained in the United States and the United Kingdom across every dental specialty.",
      user: "Salman Alnajadi",
      image: "/home/testimonial-user-salman.png",
    },
    {
      text: "The doctors and staff were very professional, friendly, and made the whole dental experience smooth and comfortable.",
      user: "Asnan Client",
      image: "/home/testimonial-user-salman.png",
    },
    {
      text: "A premium dental experience with excellent care, modern technology, and trusted specialists for every treatment.",
      user: "Happy Patient",
      image: "/home/testimonial-user-salman.png",
    },
  ],
  ar: [
    {
      text: "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والمملكة المتحدة في كل تخصص من تخصصات طب الأسنان.",
      user: "سلمان النجادي",
      image: "/home/testimonial-user-salman.png",
    },
    {
      text: "الأطباء والطاقم كانوا محترفين جداً، والتجربة كانت مريحة وسلسة من البداية إلى النهاية.",
      user: "عميل أسنان",
      image: "/home/testimonial-user-salman.png",
    },
    {
      text: "تجربة علاج أسنان راقية مع عناية ممتازة وتقنيات حديثة وأطباء متخصصين في كل مجال.",
      user: "مراجع سعيد",
      image: "/home/testimonial-user-salman.png",
    },
  ],
};

const copy = {
  en: {
    title: "Discover What Our Clients Say About Us",
    readMore: "Read More",
    previous: "Previous testimonial",
    next: "Next testimonial",
  },
  ar: {
    title: "تعرف على آراء مستخدمينا حولنا",
    readMore: "اقرأ المزيد",
    previous: "التقييم السابق",
    next: "التقييم التالي",
  },
};

export default function FigmaTestimonials({ locale }: FigmaTestimonialsProps) {
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;
  const slides = isAr ? testimonialSlides.ar : testimonialSlides.en;

  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const currentSlide = slides[activeSlide];

  const handleNext = () => {
    setDirection("next");
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr}`}
      dir={isAr ? "rtl" : "ltr"}
      aria-labelledby="home-testimonials-title"
    >
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
            <button
              className={styles.control}
              type="button"
              aria-label={t.next}
              onClick={handleNext}
            >
              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/testimonials-arrow-blue-left.svg`} alt="" />
            </button>

            <article className={styles.cardFrame}>
              <div className={styles.largecard}>
                <div
                  key={`${locale}-${activeSlide}`}
                  className={`${styles.card} ${
                    direction === "next" ? styles.slideNext : styles.slidePrev
                  }`}
                >
                  <p className={styles.quoteText}>{currentSlide.text}</p>

                  <div className={styles.user}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}${currentSlide.image}`}
                      alt=""
                    />
                    <span>{currentSlide.user}</span>
                  </div>
                </div>
              </div>
            </article>

            <button
              className={styles.control}
              type="button"
              aria-label={t.previous}
              onClick={handlePrev}
            >
              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/testimonials-arrow-blue-right.svg`} alt="" />
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