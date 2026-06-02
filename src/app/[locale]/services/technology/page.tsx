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

  const talentExperienceFeature = {
    title: isAr
      ? "المزج الصحيح بين الموهبة والخبرة"
      : "The Right Mix Between Talent and Experience",
    paragraphs: isAr
      ? [
          "منذ افتتاح أسنان في عام 2008، كرّسنا أنفسنا لتوفير بيئة مريحة حيث يشعر المرضى فور دخولهم باهتمام خاص وخدمة سبع نجوم. موظفات الاستقبال مدرّبين على خدمة الضيوف بأعلى المستويات تجعل المريض يتحرر من قلقه من الألم والخوف.",
          "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والمملكة المتحدة في كل تخصص من تخصصات طب الأسنان.",
          "هدفنا أن تكون تجربتكم لا تُنسى على كافة الأصعدة، حتى قبل أن يراكم طبيب الأسنان. نحن نعتبر ضيوفنا جزء من عائلتنا. من أول اتصال لكم ستشعرون بالفرق.",
          "ملتزمون بتقديم خدمات طب الأسنان بجودة عالية لحماية أسنانكم والحفاظ عليها بيضاء جميلة، ونحلم دائماً أن نغير حياتكم وليس أسنانكم فقط.",
        ]
      : [
          "Since opening Asnan in 2008, we have dedicated ourselves to creating a comfortable environment where patients feel special from the moment they enter, with attentive care and a seven-star service experience.",
          "Asnan Tower is the only dental clinic in Kuwait with specialists graduated from the United States and the United Kingdom across every dental specialty.",
          "Our goal is to make your experience memorable at every level, even before you meet your dentist. We consider our guests part of our family, and from the first call you will feel the difference.",
          "We are committed to providing high-quality dental services to protect your teeth and keep them healthy and beautiful, because we aim to change your life, not only your smile.",
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
                  at Asnan Tower
                </span>{" "}
                the latest technology used{" "}
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
  title={isAr ? "جهاز الماسح الضوئي (iTero)" : "iTero Digital Scanner"}
  paragraphs={
    isAr
      ? [
          "بيانات مسح سريعة وعالية الدقة هذه كلها ميزات أوتوماتيكية بالكامل مع مستشعرات ثلاثية الأبعاد عالية الحساسية. استراتيجية حديثة تقلل من أوقات المسح الضوئي للنصف وتحافظ على التفاصيل الدقيقة للأسنان و تطابق الفكين.",
        ]
      : [
          "Fast and highly accurate scanning data with fully automated features and highly sensitive 3D sensors. A modern strategy reduces scanning times by half and preserves the precise details of the teeth and jaw alignment.",
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

{/* <WhyAsnanWaveFeatureSection
          locale={locale}
          image="/images/why-asnan/talent-experience.png"
          icon="/images/why-asnan/icon-talent-experience.svg"
          title={isAr ? "جهاز الماسح الضوئي (iTero)" : "iTero Digital Scanner"}
          paragraphs={
    isAr
      ? [
          "بيانات مسح سريعة وعالية الدقة هذه كلها ميزات أوتوماتيكية بالكامل مع مستشعرات ثلاثية الأبعاد عالية الحساسية. استراتيجية حديثة تقلل من أوقات المسح الضوئي للنصف وتحافظ على التفاصيل الدقيقة للأسنان و تطابق الفكين.",
        ]
      : [
          "Fast and highly accurate scanning data with fully automated features and highly sensitive 3D sensors. A modern strategy reduces scanning times by half and preserves the precise details of the teeth and jaw alignment.",
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
        /> */}

        {/* ── OUR LABORATORY FEATURE SECTION - ABOVE WAVE ── */}
<WhyAsnanFeatureSection
  locale={locale}
  image="/images/why-asnan/our-laboratory.png"
  icon="/images/laborattry-icon.svg"
  title={isAr ? "مختبرنا الخاص" : "Our Laboratory"}
  paragraphs={
    isAr
      ? [
          "من خلال مختبرنا الحصري نقدم لمرضانا خدمات طب الأسنان بأعلى جودة. نحن قادرون على الإشراف الدقيق على تقدم الحالة وتعديلها فوراً، لدينا سيطرة كاملة على التقنيات والمواد والجودة.",
        ]
      : [
          "Through our exclusive laboratory, we provide our patients with the highest quality dental services. We are able to closely supervise each case and make immediate adjustments, giving us full control over techniques, materials, and quality.",
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
          title={talentExperienceFeature.title}
          paragraphs={talentExperienceFeature.paragraphs}
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