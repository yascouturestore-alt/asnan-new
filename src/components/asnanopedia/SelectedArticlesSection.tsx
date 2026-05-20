"use client";
import React from "react";
import Image from "next/image";
import styles from "./SelectedArticlesSection.module.css";

export interface SelectedArticle {
  title: string;
  category: string;
  count: number;
  image: string;
}

interface Props {
  locale: string;
  title: string;
  subtitle: string;
  buttonText: string;
  articles: SelectedArticle[];
}

export default function SelectedArticlesSection({
  locale,
  title,
  subtitle,
  buttonText,
  articles,
}: Props) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className={styles.section} dir={dir}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {articles.map((article, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 383px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.category}>{article.category}</span>
                <button type="button" className={styles.button}>
                  {buttonText}
                </button>
                  <span className={styles.count}>
                    <span>{article.count}</span>
                    <Image
                      src="/images/reaction-icon.svg"
                      alt=""
                      width={16}
                      height={16}
                      className={styles.icon}
                    />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
