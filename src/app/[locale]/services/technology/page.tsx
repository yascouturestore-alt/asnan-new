"use client";

import React from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";
import WhyAsnanFeatureSection from "@/components/why-asnan/WhyAsnanFeatureSection";
import WhyAsnanWaveFeatureSection from "@/components/why-asnan/WhyAsnanWaveFeatureSection";

export default function TechnologyPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);
  const isAr = locale === "ar";

  const videoSliderRef = React.useRef<HTMLDivElement>(null);

  const slideVideoPrev = () => {
    if (videoSliderRef.current) {
      const card = videoSliderRef.current.children[0] as HTMLElement;
      const gap = parseFloat(window.getComputedStyle(videoSliderRef.current).gap) || 0;
      const scrollAmount = card ? card.offsetWidth + gap : 300;
      videoSliderRef.current.scrollBy({ left: isAr ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  const slideVideoNext = () => {
    if (videoSliderRef.current) {
      const card = videoSliderRef.current.children[0] as HTMLElement;
      const gap = parseFloat(window.getComputedStyle(videoSliderRef.current).gap) || 0;
      const scrollAmount = card ? card.offsetWidth + gap : 300;
      videoSliderRef.current.scrollBy({ left: isAr ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">{t.asnan_technology}</h1>
              <p className="hero-text">
                {t.asnan_technology_quote}
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
      <div className={styles.discoverHeading} dir={isAr ? "rtl" : "ltr"}>
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
                  Asnan Tower's
                </span>{" "}
                Most advanced technology{" "}
                <span className={styles.discoverYellow}>worldwide</span>
              </>
            )}
          </p>
        </div>
      </div>

      <WhyAsnanWaveFeatureSection
        locale={locale}
        image="/images/technology/tech-sqaure-img.png"
        icon="/images/technology/technology-icon.svg"
        title={isAr ? "جهاز الماسح الضوئي (iTero)" : "The iTero Device"}
        paragraphs={
          isAr
            ? [
              "بيانات مسح سريعة وعالية الدقة هذه كلها ميزات أوتوماتيكية بالكامل مع مستشعرات ثلاثية الأبعاد عالية الحساسية. استراتيجية حديثة تقلل من أوقات المسح الضوئي للنصف وتحافظ على التفاصيل الدقيقة للأسنان و تطابق الفكين.",
            ]
            : [
              "A fast high-resolution scanning data fully automatic feature with high-sensitivity 3D sensors. A state-of-the-art strategy that reduces half the scanning times and maintains the exact details of the teeth and the jaw symmetry.",
            ]
        }
        imageAlt={isAr ? "جهاز الماسح الضوئي iTero" : "iTero Digital Scanner"}
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
        backgroundImage="/images/technology/grey-bg-technology.png"
      />


      {/* ── OUR LABORATORY FEATURE SECTION - ABOVE WAVE ── */}
      <WhyAsnanFeatureSection
        locale={locale}
        image="/images/why-asnan/our-laboratory.png"
        icon="/images/laborattry-icon.svg"
        title={isAr ? "مختبرنا الخاص" : "Exclusive Laboratory"}
        paragraphs={
          isAr
            ? [
              "من خلال مختبرنا الحصري نقدم لمرضانا خدمات طب الأسنان بأعلى جودة. نحن قادرون على الإشراف الدقيق على تقدم الحالة وتعديلها فوراً، لدينا سيطرة كاملة على التقنيات والمواد والجودة.",
            ]
            : [
              "Through our exclusive laboratory we offer our patients the highest quality of dental services. We are able to closely oversee and adjust the progress of the treatment immediately.",
            ]
        }
        imageAlt={isAr ? "مختبر أسنان" : "Dental laboratory"}
        iconAlt={isAr ? "أيقونة المختبر" : "Laboratory icon"}
        variant="image-left"
      />

      {/* ── WHY ASNAN WAVE SECTION - ABOVE VIDEO ── */}
      <WhyAsnanWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/talent-experience.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={isAr ? "الطابعة ثلاثية الأبعاد" : "3D Printer"}
        paragraphs={
          isAr
            ? [
              "نمتلك أحدث الطابعات ثلاثية الأبعاد لإنتاج نماذج الأسنان عالية الدقة بشكل فوري. تتيح لنا هذه التقنية المتطورة إنتاج القوالب والمثبتات والأسنان المؤقتة بدقة فائقة، مما يضمن ملاءمة مثالية وراحة قصوى للمريض. تساعدنا الطباعة ثلاثية الأبعاد أيضاً في تخطيط العلاجات المعقدة مثل زراعة الأسنان وتقويم الأسنان، مما يمكننا من محاكاة النتائج النهائية قبل البدء في العلاج الفعلي.",
            ]
            : [
              "A fast high-resolution scanning data fully automatic feature with high-sensitivity 3D sensors. A state-of-the-art strategy that reduces half the scanning times and maintains the exact details of the teeth and the jaw symmetry.",
            ]
        }
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />

      {/* ── VIDEO SECTION ── */}
      <section className={styles.videoSection}>
        <div className={styles.videoOuter}>
          <button
            className={`${styles.videoArrow} ${styles.videoArrowPrev}`}
            type="button"
            aria-label={isAr ? "السابق" : "Previous"}
            onClick={slideVideoPrev}
          >
            <img src="/images/arrow-prev-yellow.svg" alt="" />
          </button>

          <div className={styles.videoSlider} ref={videoSliderRef}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.videoWrapper} data-video-wrapper>
                <video
                  className={styles.videoPlayer}
                  poster="/images/technology/thumbnail-video.png"
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
                    const wrapper = e.currentTarget.closest(
                      "[data-video-wrapper]"
                    );
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
            ))}
          </div>

          <button
            className={`${styles.videoArrow} ${styles.videoArrowNext}`}
            type="button"
            aria-label={isAr ? "التالي" : "Next"}
            onClick={slideVideoNext}
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

      {/* ───────────── APPOINTMENT ───────────── */}
      <AppointmentSection locale={locale} />
    </>
  );
}