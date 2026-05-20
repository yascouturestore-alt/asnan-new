"use client";
import React from "react";
import Image from "next/image";
import styles from "./FaqSection.module.css";
import greyFaqBg from "../../../public/assets/asnanopedia/faq/grey-bg-product-asnanopedia.png";

export interface FaqItem {
  id: number;
  title: string;
  image: string;
  count: number;
}

interface Props {
  locale: string;
  title: string;
  subtitle: string;
  articles: FaqItem[];
}

function SmileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#838F91" strokeWidth="1.5" />
      <path
        d="M8.5 14.5C8.5 14.5 9.5 16 12 16C14.5 16 15.5 14.5 15.5 14.5"
        stroke="#838F91"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="10.5" r="1" fill="#838F91" />
      <circle cx="14.5" cy="10.5" r="1" fill="#838F91" />
    </svg>
  );
}

export default function FaqSection({ locale, title, subtitle, articles }: Props) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const isAr = locale === "ar";
  const learnMoreText = isAr ? "تعلم المزيد" : "Learn More";

  return (
    <section
      className={styles.section}
      dir={dir}
      style={
        {
          "--faq-bg": `url(${greyFaqBg.src})`,
        } as React.CSSProperties
      }
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card} dir={dir}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 383px"
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{article.title}</h3>

                <button type="button" className={styles.button}>
                  {learnMoreText}
                </button>

                <div className={styles.countRow}>
                  <span>{article.count}</span>
                  <SmileIcon />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}