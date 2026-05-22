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
  paragraph: string;
}

interface Props {
  locale: string;
  title: string;
  subtitle: string;
  categories: PopularCategory[];
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

  return (
    <section
      className={styles.section}
      style={
        {
          "--popular-categories-bg": `url(${popularCategoriesBg.src})`,
        } as React.CSSProperties
      }
    >

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
        <div className={styles.tray}>
          <div className={styles.cards} role="tabpanel">
            {selectedCategory.paragraph}
          </div>
        </div>
      </div>
    </section>
  );
}
