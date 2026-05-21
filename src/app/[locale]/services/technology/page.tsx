"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";
import WhyAsnanFeatureSection from "@/components/why-asnan/WhyAsnanFeatureSection";

export default function TechnologyPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);
  const isAr = locale === "ar";

  const usaGraduateFeature = {
    title: isAr ? "جهاز الماسح الضوئي (iTero)" : "iTero Digital Scanner",
    points: isAr
      ? [
          "بصمة رقمية دقيقة للأسنان واللثة",
          "صور ثلاثية الأبعاد فائقة الدقة",
          "تخطيط للعلاج بدقة عالية",
        ]
      : [
          "Precise digital impressions of teeth and gums",
          "High-resolution three-dimensional images",
          "High-precision treatment planning",
        ],
  };

  return (
    <>
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">{t.world_of_beauty}</h1>
              <p className="hero-text">
                {t.we_dont} {t.we_change_lives}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-img">
          <img
            src="/images/technology/technology-bg.png"
            alt="background image"
          />
          <img
            src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_WOB_Cropped@3x.jpg"
            alt="background image"
          />
        </div>
      </div>

      {/* ───────────── DISCOVER HEADING ───────────── */}
      <div
        className={styles.discoverHeading}
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="container-fluid">
          <p className={styles.discoverText}>
            {isAr ? (
              <>
                اكتشف{" "}
                <span className={styles.discoverHighlight}>
                  في اسنان تاور
                </span>{" "}
                احدث التكنولوجيا المستخدمة{" "}
                <span className={styles.discoverYellow}>عالمياً</span>
              </>
            ) : (
              <>
                Discover{" "}
                <span className={styles.discoverHighlight}>
                  at Asnan Tower
                </span>{" "}
                the latest technology used{" "}
                <span className={styles.discoverYellow}>worldwide</span>
              </>
            )}
          </p>
        </div>
      </div>

      <WhyAsnanFeatureSection
  locale={locale}
  image="/images/technology/tech-sqaure-img.png"
  icon="/images/technology/technology-icon.svg"
  title={usaGraduateFeature.title}
  points={usaGraduateFeature.points}
  imageAlt={isAr ? "جهاز iTero" : "iTero device"}
  iconAlt={isAr ? "أيقونة iTero" : "iTero icon"}
  variant="image-left"
/>

      {/* ───────────── TECHNOLOGY SECTIONS ───────────── */}
      <div dir={isAr ? "rtl" : "ltr"}>

        {/* ── SECTION 1: iTero – image left, text right ── */}
        <section className={`${styles.techSection} ${styles.bgWhite}`}>
          <div className={`container-fluid ${styles.techContainer}`}>
            <div className={`row align-items-center ${styles.techRow}`}>

              {/* Image col */}
              <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                <div className={styles.imageWrap}>
                  <img
                    src="/images/technology/itero-device.png"
                    alt="iTero Scanner"
                    className={styles.techImg}
                  />
                </div>
              </div>

              {/* Text col */}
              <div className="col-12 col-lg-5">
                <div className={styles.techContent}>
                  <div className={styles.iconCircle}>
                    <img
                      src="/images/technology/icon-itero.png"
                      alt="iTero icon"
                    />
                  </div>
                  <h2 className={styles.techTitle}>
                    {isAr
                      ? "جهاز الماسح الضوئي (iTero)"
                      : "iTero Digital Scanner"}
                  </h2>
                  <p className={styles.techDesc}>
                    {isAr
                      ? "يُعدّ جهاز الماسح الضوئي iTero من أحدث التقنيات المستخدمة في طب الأسنان، إذ يتيح أخذ بصمة رقمية دقيقة للأسنان واللثة دون الحاجة إلى المواد التقليدية المزعجة. يوفر الجهاز صوراً ثلاثية الأبعاد فائقة الدقة تُمكّن الطبيب من التخطيط للعلاج بدقة عالية وتقديم نتائج مثالية للمريض."
                      : "The iTero digital scanner is one of the latest technologies used in dentistry, allowing for precise digital impressions of teeth and gums without the need for traditional uncomfortable materials. The device provides high-resolution three-dimensional images that enable the doctor to plan treatment with high precision."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Lab – text left, 2x2 grid right ── */}
        <section className={`${styles.techSection} ${styles.bgGrey}`}>
          <div className={`container-fluid ${styles.techContainer}`}>
            <div className={`row align-items-center ${styles.techRow}`}>

              {/* Text col – on RTL this appears on the right visually */}
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className={styles.techContent}>
                  <div className={styles.iconCircle}>
                    <img
                      src="/images/technology/icon-lab.png"
                      alt="Lab icon"
                    />
                  </div>
                  <h2 className={styles.techTitle}>
                    {isAr ? "مختبرنا الخاص" : "Our Private Laboratory"}
                  </h2>
                  <p className={styles.techDesc}>
                    {isAr
                      ? "يمتلك مركز أسنان تاور مختبراً متطوراً داخل المركز مجهزاً بأحدث الأجهزة والمعدات، مما يضمن تقديم أعمال تعويضية سنية بمستوى عالمي ودقة فائقة. يعمل في المختبر فريق من أمهر الفنيين المتخصصين."
                      : "Asnan Tower Center has an advanced in-house laboratory equipped with the latest devices and equipment, ensuring world-class prosthetic dental work with superior precision."}
                  </p>
                </div>
              </div>

              {/* 2x2 image grid col */}
              <div className="col-12 col-lg-7">
                <div className={styles.gridImages}>
                  <img src="/images/technology/lab-1.png" alt="Lab 1" />
                  <img src="/images/technology/lab-2.png" alt="Lab 2" />
                  <img src="/images/technology/lab-3.png" alt="Lab 3" />
                  <img src="/images/technology/lab-4.png" alt="Lab 4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: 3D Scanner – image left, text right ── */}
        <section className={`${styles.techSection} ${styles.bgWhite}`}>
          <div className={`container-fluid ${styles.techContainer}`}>
            <div className={`row align-items-center ${styles.techRow}`}>

              {/* Image col */}
              <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                <div className={styles.imageWrap}>
                  <img
                    src="/images/technology/scanner3d.png"
                    alt="3D Scanner"
                    className={styles.techImg}
                  />
                </div>
              </div>

              {/* Text col */}
              <div className="col-12 col-lg-5">
                <div className={styles.techContent}>
                  <div className={styles.iconCircle}>
                    <img
                      src="/images/technology/icon-scanner3d.png"
                      alt="3D Scanner icon"
                    />
                  </div>
                  <h2 className={styles.techTitle}>
                    {isAr
                      ? "جهاز الماسح الضوئي ثلاثي الابعاد"
                      : "3D Digital Scanner"}
                  </h2>
                  <p className={styles.techDesc}>
                    {isAr
                      ? "يُعدّ جهاز الماسح الضوئي ثلاثي الأبعاد من أحدث التقنيات المستخدمة في طب الأسنان، إذ يتيح أخذ بصمة رقمية دقيقة للأسنان واللثة دون الحاجة إلى المواد التقليدية المزعجة. يوفر الجهاز صوراً ثلاثية الأبعاد فائقة الدقة تُمكّن الطبيب من التخطيط للعلاج بدقة عالية."
                      : "The 3D digital scanner is one of the latest technologies used in dentistry, allowing for precise digital impressions of teeth and gums. The device provides high-resolution three-dimensional images that enable precise treatment planning."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VIDEO SECTION - FIGMA EXACT WITH VIDEO PLAYER ── */}
<section className={styles.videoSection}>
  <div className={styles.videoOuter}>
    <button
      className={`${styles.videoArrow} ${styles.videoArrowPrev}`}
      type="button"
      aria-label={isAr ? "السابق" : "Previous"}
    >
      <img src="/images/arrow-prev-yellow.svg" alt="" />
    </button>

    <div className={styles.videoWrapper}>
      <video
        className={styles.videoPlayer}
        poster="/images/technology/thumbnail-video.png"
        controls
        preload="metadata"
      >
        <source
          src="/videos/technology/technology-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className={styles.videoOverlay}></div>

      <button
        className={styles.playBtn}
        type="button"
        aria-label={isAr ? "تشغيل الفيديو" : "Play Video"}
        onClick={(e) => {
          const wrapper = e.currentTarget.closest("[data-video-wrapper]");
          const video = wrapper?.querySelector("video");

          if (video) {
            video.play();
            wrapper?.classList.add("video-is-playing");
          }
        }}
      >
        <img src="/images/play.svg" alt="" />
      </button>

      <div className={styles.videoLabel}>
        {isAr ? "تشغيل الفيديو" : "Play Video"}
      </div>
    </div>

    <button
      className={`${styles.videoArrow} ${styles.videoArrowNext}`}
      type="button"
      aria-label={isAr ? "التالي" : "Next"}
    >
      <img src="/images/arrow-next-yellow.svg" alt="" />
    </button>
  </div>
</section>

        {/* ── MICROSCOPE – Dark blue section ── */}
        <section className={styles.microscopeSection}>
            <div className="inner-microsection-container">
          <div className={`container-fluid ${styles.microscopeContainer}`}>
            <div className={styles.microscopeIcon}>
              <img
                src="/images/technology/microscope-icon.svg"
                alt="Microscope"
              />
            </div>
            <h2 className={styles.microscopeTitle}>
              {isAr ? "الميكروسكوب" : "The Microscope"}
            </h2>
            <p className={styles.microscopeDesc}>
              {isAr
                ? "يستخدم أطباء أسنان تاور الميكروسكوب الجراحي المتطور في عدد من الإجراءات التشخيصية والعلاجية الدقيقة، مما يُتيح رؤية واضحة ودقيقة للمنطقة المعالجة وضمان أعلى مستويات الدقة والجودة في الأداء. تُعدّ هذه التقنية من أحدث ما توصّل إليه طب الأسنان الحديث في مجال التشخيص والعلاج."
                : "Asnan Tower dentists use the advanced surgical microscope in a number of precise diagnostic and therapeutic procedures, allowing a clear and precise view of the treated area and ensuring the highest levels of accuracy and quality in performance. This technology is one of the latest advances in modern dentistry in the field of diagnosis and treatment."}
            </p>
          </div>
          </div>
        </section>
      </div>

      {/* ───────────── APPOINTMENT ───────────── */}
      <AppointmentSection locale={locale} />
    </>
  );
}
