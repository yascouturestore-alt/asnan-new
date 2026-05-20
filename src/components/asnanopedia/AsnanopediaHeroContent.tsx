"use client";

import React from "react";
import Image from "next/image";
import styles from "./AsnanopediaHeroContent.module.css";

type AsnanopediaHeroContentProps = {
  locale: string;
};

const copy = {
  ar: {
    title: "اسنانوبيديا",
    searchBtn: "البحث",
    searchPlaceholder: "اكتب هنا على سبيل المثال: كيف أحافظ على صحة أسناني؟",
    categories: [
      { label: "الأسئلة الأكثر شيوعاً", icon: "/images/FAQ-icon.svg", link: "faq" },
      { label: "صحة الفم والجسم", icon: "/images/Dental-icon.svg", link: "oral-body-health" },
      { label: "مشاكل الأسنان", icon: "/images/Dental-Problems-icon.svg", link: "dental-problems" },
      { label: "طوارئ الأسنان", icon: "/images/Dental-emergencies-icon.svg", link: "dental-emergencies" },
      { label: "الوقاية", icon: "/images/Prevention-icon.svg", link: "prevention" },
    ],
  },
  en: {
    title: "ASNANOPEDIA",
    searchBtn: "Search",
    searchPlaceholder: "Type here e.g: How to keep my teeth healthy?",
    categories: [
      { label: "Most Asked Questions", icon: "/images/FAQ-icon.svg", link: "faq" },
      { label: "Oral & Body Health", icon: "/images/Dental-icon.svg", link: "oral-body-health" },
      { label: "Dental Problems", icon: "/images/Dental-Problems-icon.svg", link: "dental-problems" },
      { label: "Dental Emergencies", icon: "/images/Dental-emergencies-icon.svg", link: "dental-emergencies" },
      { label: "Prevention", icon: "/images/Prevention-icon.svg", link: "prevention" },
    ],
  },
};

export default function AsnanopediaHeroContent({
  locale,
}: AsnanopediaHeroContentProps) {
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  return (
    <div className={styles.heroContent} dir={isAr ? "rtl" : "ltr"}>
      <h1 className={styles.heroTitle}>{t.title}</h1>

      <div className={styles.searchRow}>
        <button type="button" className={styles.searchBtn}>
          {t.searchBtn}
        </button>

        <div className={styles.searchField}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
          />

          <span className={styles.searchIcon} aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <circle cx="18" cy="18" r="13" stroke="white" strokeWidth="4" />
              <path
                d="M28 28L38 38"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className={styles.categoryGrid}>
        {t.categories.map((cat) => (
          <a
            key={cat.link}
            href={`/${locale}/asnanopedia/${cat.link}`}
            className={styles.categoryCard}
            dir={isAr ? "rtl" : "ltr"}
          >
            <Image
              src={cat.icon}
              alt=""
              width={68}
              height={68}
              className={styles.categoryIcon}
            />
            <span className={styles.categoryLabel}>{cat.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}