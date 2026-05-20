"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./PopularCategoriesSection.module.css";
import popularCategoriesBg from "../../../public/assets/asnanopedia/popular-categories/popular-categories-bg.png";

export interface PopularArticle {
  title: string;
  count: number;
  image: string;
}

export interface PopularCategory {
  id: string;
  label: string;
  icon: string;
  sideItems: string[];
  articles: PopularArticle[];
}

interface Props {
  locale: string;
  title: string;
  subtitle: string;
  categories: PopularCategory[];
}

function ChevronLeft() {
  return (
    <svg
      className={styles.viewAllArrow}
      viewBox="0 0 26 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 6L8 20L18 34"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

export default function PopularCategoriesSection({
  locale,
  title,
  subtitle,
  categories,
}: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const selectedCategory = categories.find((c) => c.id === activeCategoryId)!;
  const dir = locale === "ar" ? "rtl" : "ltr";
  const isAr = locale === "ar";
  const learnMoreText = isAr ? "تعلم المزيد" : "Learn More";
  const viewAllText = isAr ? "عرض الكل" : "View All";

  return (
    <section
      className={styles.section}
      style={
        {
          "--popular-categories-bg": `url(${popularCategoriesBg.src})`,
        } as React.CSSProperties
      }
    >
      {/* Top white wave - creates smooth transition from white section above */}
      {/* <Image
        src="/images/asnan-white-curve-shape.svg"
        alt=""
        width={1920}
        height={80}
        className={styles.topWave}
        aria-hidden="true"
        style={{ transform: "scaleY(-1) scaleX(-1)" }}
      /> */}

      <div className={styles.inner} dir={dir}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setActiveCategoryId(cat.id)}
                type="button"
              >
                <div className={styles.tabIconWrap}>
                  <Image
                    src={cat.icon}
                    alt=""
                    width={120}
                    height={147}
                    className={styles.tabIconImg}
                  />
                </div>
                <div className={styles.tabLabelWrap}>
                  <span className={styles.tabLabel}>{cat.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content tray — direction forced ltr so columns never reorder */}
        <div className={styles.tray}>
          {/* View All button */}
          <button type="button" className={styles.viewAllBtn}>
            <ChevronLeft />
            <span className={styles.viewAllText}>{viewAllText}</span>
          </button>

          {/* 3 Article cards */}
          <div className={styles.cards} role="tabpanel">
            {selectedCategory.articles.map((article, i) => (
              <article key={i} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 262px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <p className={styles.cardTitle}>{article.title}</p>
                    <button type="button" className={styles.learnMoreBtn}>
                      {learnMoreText}
                    </button>
                  </div>
                  <div className={styles.countRow}>
                    <span>{article.count}</span>
                    <SmileIcon />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Side description box */}
          <div className={styles.sideBox}>
            {selectedCategory.sideItems.map((item, i) => (
              <p key={i} className={styles.sideBoxItem}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom white wave */}
      {/* <Image
        src="/images/asnan-white-curve-shape.svg"
        alt=""
        width={1920}
        height={80}
        className={styles.bottomWave}
        aria-hidden="true"
      /> */}
    </section>
  );
}
