"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "en" | "ar";

type DoctorCopy = {
  heroTitle: string;
  doctorName: string;
  specialty: string;
  readMore: string;
  profile: string;
  awards: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  stats: { value: string; label: string }[];
  beautyTitle: string;
  smileTitle: string;
  smileSmall: string;
  smileMadeBy: string;
  before: string;
  after: string;
  moreSmiles: string;
  educationTitle: string;
  educationSubtitle: string;
  accreditations: string;
  degree: string;
  university: string;
  celebrityTitle: string;
  celebrityTab: string;
  testimonialTab: string;
  lifeSmall: string;
  lifeTitle: string;
};

const copy: Record<Locale, DoctorCopy> = {
  ar: {
    heroTitle: "الابتسامة الكريستالية",
    doctorName: "د. محمد الحجي",
    specialty: "اختصاصي تجميل و طب الأسنان الشامل جامعة كولومبيا / الولايات المتحدة الأمريكية",
    readMore: "اقرأ المزيد",
    profile: "عرض الملف الشخصي",
    awards: "جوائزي",
    aboutTitle: "عن دكتور",
    aboutParagraphs: [
      "تخرج د. محمد عام 2008 في طب الأسنان – جامعة كريتون – الولايات المتحدة. حاصل على شهادة التخصص في طب الأسنان الشامل وتجميل الأسنان – جامعة كولومبيا – نيويورك عام 2015. حاصل على البورد الأمريكي في طب الأسنان الشامل.",
      "من خلال دراسته في نيويورك و سنوات خبرته في علاج و تجميل الأسنان، حرص أن يعطي مراجعيه أعلى مستوى في طب الأسنان التجميلي، خبرته ونظرته الفنية جعلته يعطي كل مريض ابتسامة تتناسق مع شكل وجهه وتتميز بالطبيعة.",
    ],
    stats: [
      { value: "40+", label: "مراجعات المرضى" },
      { value: "70+", label: "العمليات الجراحية التي تم إجراؤها" },
      { value: "150+", label: "الشهادات" },
      { value: "35+", label: "سنوات من الخبرة" },
    ],
    beautyTitle: "عالم الجمال",
    smileTitle: "الابتسامة الكريستالية",
    smileSmall: "هذه الإبتسامة صنعها",
    smileMadeBy: "د. محمد الحجي",
    before: "قبل",
    after: "بعد",
    moreSmiles: "مشاهدة المزيد من الإبتسامات",
    educationTitle: "التعليم والمؤهلات",
    educationSubtitle: "مؤهلات معترف بها وتدريب مهني.",
    accreditations: "الاعتمادات",
    degree: "درجة",
    university: "جامعة",
    celebrityTitle: "راح نغير حياتك",
    celebrityTab: "مشاهير أسنان",
    testimonialTab: "اراء المراجعين",
    lifeSmall: "حلمنا مو بس نغير اسنانك..",
    lifeTitle: "راح نغير حياتك",
  },
  en: {
    heroTitle: "Crystal Smile",
    doctorName: "Dr. Mohammed AlHajji",
    specialty: "Cosmetic and Comprehensive Dentistry Specialist, Columbia University / United States of America",
    readMore: "Read More",
    profile: "View Profile",
    awards: "Awards",
    aboutTitle: "About Doctor",
    aboutParagraphs: [
      "Dr. Mohammed graduated in dentistry in 2008 from Creighton University in the United States. He completed advanced training in comprehensive and cosmetic dentistry at Columbia University in New York in 2015 and is board certified in comprehensive dentistry.",
      "Through his studies in New York and years of experience in cosmetic dental care, he is committed to giving patients the highest level of aesthetic dentistry. His experience and artistic eye help him design natural smiles that harmonize with each patient’s face.",
    ],
    stats: [
      { value: "40+", label: "Patient Reviews" },
      { value: "70+", label: "Surgical Procedures" },
      { value: "150+", label: "Certificates" },
      { value: "35+", label: "Years of Experience" },
    ],
    beautyTitle: "World of Beauty",
    smileTitle: "Crystal Smile",
    smileSmall: "This smile was made by",
    smileMadeBy: "Dr. Mohammed AlHajji",
    before: "Before",
    after: "After",
    moreSmiles: "View More Smiles",
    educationTitle: "Education & Qualifications",
    educationSubtitle: "Recognized qualifications and professional training.",
    accreditations: "Accreditations",
    degree: "Degree",
    university: "University",
    celebrityTitle: "We Change Lives",
    celebrityTab: "Asnan Celebrities",
    testimonialTab: "Testimonials",
    lifeSmall: "Our dream is not only to change your teeth..",
    lifeTitle: "We Change Your Life",
  },
};



function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className={styles.hero} aria-labelledby="doctor-title">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroDoctor}>
          <Image src="/images/Dr Mohammed AlHajji.png" alt={t.doctorName} fill sizes="(max-width: 900px) 50vw, 508px" priority />
        </div>
        <div className={styles.heroCopy}>
          <h1 id="doctor-title">“{t.heroTitle}”</h1>
          <h2>{t.doctorName}</h2>
          <div className={styles.specialtyLine}>
            <p>{t.specialty}</p>
            <Image src="/images/dr-img-teeth-show.png" alt="" width={60} height={54} />
          </div>
          <Link href="#about" className={styles.whiteButton}>{t.readMore}</Link>
        </div>
      </div>
    </section>
  );
}

function Stats({ locale }: { locale: Locale }) {
  return (
    <section className={styles.statsSection} aria-label="Doctor statistics">
      <div className={styles.statsGrid}>
        {copy[locale].stats.map((stat) => (
          <article className={styles.statCard} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutDoctor({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section id="about" className={styles.aboutSection} aria-labelledby="about-title">
      <div className={styles.aboutWave} aria-hidden="true" />
      <div className={styles.aboutInner}>
        <div className={styles.aboutImageBox}>
  <Image
    src="/images/doctors/about-doc-sq.png"
    alt=""
    fill
    sizes="(max-width: 900px) 90vw, 806px"
    className={styles.aboutImage}
  />
</div>
        <div className={styles.aboutCopy}>
          <h2 id="about-title">{t.aboutTitle}</h2>
          {t.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className={styles.aboutActions}>
            <Link href="#education" className={styles.yellowButton}>{t.profile}</Link>
            <Link href="#education" className={styles.softButton}>{t.awards}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmileComparison({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div className="before-after-wrapper">
      <div className="before-after-img">
        <img className="image-before" src={before} alt={beforeLabel} />
        <img className="image-after" src={after} alt={afterLabel} />
      </div>
      <div className="before-text">{beforeLabel}</div>
      <div className="after-text">{afterLabel}</div>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        aria-label="Percentage of before photo shown"
        className="slider"
      />
      <div className="slider-line" aria-hidden="true" />
    </div>
  );
}

function BeautyWorld({ locale }: { locale: Locale }) {
  const t = copy[locale];

  useEffect(() => {
    const initWorldBeauty = () => {
      if (typeof window === "undefined") return;

      const containers = document.querySelectorAll<HTMLElement>(
        ".doctor-world-beauty .before-after-wrapper"
      );

      containers.forEach((container) => {
        const slider = container.querySelector<HTMLInputElement>(".slider");
        if (!slider || slider.dataset.doctorSliderBound === "true") return;

        slider.dataset.doctorSliderBound = "true";
        container.style.setProperty("--position", `${slider.value}%`);
        slider.addEventListener("input", (event) => {
          const target = event.target as HTMLInputElement;
          container.style.setProperty("--position", `${target.value}%`);
        });
      });

      const win = window as typeof window & { $?: any };
      const $ = win.$;

      if ($?.fn?.owlCarousel) {
        const $slider = $(".doctor-world-beauty .owl-carousel.world-beauty-slider");
        if ($slider.length && !$slider.hasClass("owl-loaded")) {
          $slider.owlCarousel({
            mouseDrag: false,
            touchDrag: false,
            loop: false,
            nav: true,
            navText: [
              `<img src="${process.env.NEXT_PUBLIC_CDN_URL}/home/arrow-prev-yellow.svg" alt="Prev">`,
              `<img src="${process.env.NEXT_PUBLIC_CDN_URL}/home/arrow-next-yellow.svg" alt="Next">`,
            ],
            dots: false,
            margin: 0,
            responsiveClass: true,
            responsive: { 0: { items: 1 } },
          });
        }
      }
    };

    const retryInit = () => {
      initWorldBeauty();
      const win = window as typeof window & { $?: any };
      const $slider = win.$?.(".doctor-world-beauty .owl-carousel.world-beauty-slider");
      if ($slider?.hasClass?.("owl-loaded")) return;
      window.setTimeout(initWorldBeauty, 250);
      window.setTimeout(initWorldBeauty, 700);
      window.setTimeout(initWorldBeauty, 1400);
    };

    retryInit();
  }, []);

  const mainSmiles = [
    {
      before: "/images/Smiles/Dr-hajji/Before1.PNG",
      after: "/images/Smiles/Dr-hajji/After1.PNG",
      doctorImage: "/images/doctors/Dr-Mohammed-AlHajji-.png",
      doctorName: t.smileMadeBy,
    },
    {
      before: "/images/Smiles/Dr-hajji/Before2.PNG",
      after: "/images/Smiles/Dr-hajji/After2.PNG",
      doctorImage: "/images/doctors/Dr-Mohammed-AlHajji-.png",
      doctorName: t.smileMadeBy,
    },
  ];

  const thumbSmiles = [
    { before: "/images/Smiles/Dr-hajji/Before2.PNG", after: "/images/Smiles/Dr-hajji/After2.PNG" },
    { before: "/images/Smiles/Dr-hajji/Before1.PNG", after: "/images/Smiles/Dr-hajji/After1.PNG" },
  ];

  return (
    <div className="world-beauty-wrapper doctor-world-beauty">
      <div className="world-beauty-title">{t.beautyTitle}</div>
      <div className="container-fluid">
        <div className="owl-carousel owl-theme world-beauty-slider">
          {mainSmiles.map((smile) => (
            <div className="item" key={`${smile.before}-${smile.after}`}>
              <div className="row align-items-center">
                <div className="col-12 col-lg-7">
                  <SmileComparison
                    before={smile.before}
                    after={smile.after}
                    beforeLabel={t.before}
                    afterLabel={t.after}
                  />
                </div>
                <div className="col-12 col-lg-5">
                  <div className="caption-wrapper">
                    <div className="caption-text">{t.smileTitle}</div>
                    <div className="made-by-wrapper">
                      <div className="made-by-title">
                        {t.smileSmall} <div>{locale === "ar" ? "صنعها" : "Made By"}</div>
                      </div>
                      <div className="doctor-small">
                        <div className="doctor-img">
                          <img src={smile.doctorImage} alt="" />
                        </div>
                      </div>
                      <div className="doctor-info">
                        <div className="doctor-name">{smile.doctorName}</div>
                        <div className="doctor-title">{locale === "ar" ? "اختصاصي تجميل الأسنان" : "Cosmetic Dentist"}</div>
                        <div className="doctor-title">{locale === "ar" ? "جامعة كولومبيا" : "Columbia University"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {thumbSmiles.map((smile) => (
            <div className="col-12 col-lg-4" key={`${smile.before}-${smile.after}`}>
              <SmileComparison
                before={smile.before}
                after={smile.after}
                beforeLabel={t.before}
                afterLabel={t.after}
              />
            </div>
          ))}

          <div className="col-12 col-lg-4">
            <a href={`/${locale}/services/world-of-beauty`} className="more-smiles-block">
              <div className="more-smiles-text">{t.moreSmiles}</div>
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Path%20774.svg`}
                alt=""
                className="more-smiles-shape"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/next-arrow.svg`}
                alt=""
                className="more-smiles-arrow"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <a href={`/${locale}/services/world-of-beauty`} className="more-smiles-block-responsive">
              <div className="more-smiles-text-responsive">{t.moreSmiles}</div>
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Path%20774.svg`}
                alt=""
                className="more-smiles-shape-responsive"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/next-arrow.svg`}
                alt=""
                className="more-smiles-arrow-responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

type EducationLine = {
  title: string;
  subtitle?: string;
};

function IconAsset({
  src,
  alt = "",
  size = 24,
  className,
}: {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}) {
  return <Image src={src} alt={alt} width={size} height={size} className={className} />;
}

function CredentialRow({ item, tickSrc }: { item: EducationLine; tickSrc: string }) {
  return (
    <li className={styles.credentialItem}>
      <div className={styles.credentialTitleRow}>
        <IconAsset src={tickSrc} size={16} className={styles.tickIcon} />
        <strong>{item.title}</strong>
      </div>
      {item.subtitle ? <span className={styles.credentialSub}>{item.subtitle}</span> : null}
    </li>
  );
}

function Education({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const accreditations: EducationLine[] =
    locale === "ar"
      ? [
          { title: "معتمد من البورد الأمريكي" },
          { title: "الجمعية الدولية للأمراض الجلدية" },
          { title: "اعتماد جراحة التجميل" },
        ]
      : [
          { title: "American Board Certified" },
          { title: "International Association of Dermatology" },
          { title: "Cosmetic Surgery Accreditation" },
        ];

  const degreeItems: EducationLine[] =
    locale === "ar"
      ? [
          { title: "دكتور في الطب (MD)", subtitle: "كلية الطب بجامعة هارفارد" },
          { title: "ماجستير في طب الأمراض الجلدية", subtitle: "جامعة كاليفورنيا" },
        ]
      : [
          { title: "Doctor of Dental Medicine", subtitle: "Creighton University School of Dentistry" },
          { title: "Advanced Cosmetic Dentistry", subtitle: "Columbia University" },
        ];

  const universityItems: EducationLine[] =
    locale === "ar"
      ? [{ title: "جامعة هارفارد الطبية", subtitle: "كلية الطب بجامعة ستانفورد" }]
      : [{ title: "Columbia University", subtitle: "Creighton University" }];

  return (
    <section id="education" className={styles.educationSection} aria-labelledby="education-title">
      <div className={styles.educationBg} aria-hidden="true" />
      <div className={styles.educationInner}>
        <h2 id="education-title">{t.educationTitle}</h2>
        <p>{t.educationSubtitle}</p>

        <div className={styles.educationGrid}>
          <div className={styles.gradPhoto}>
            <Image
              src="/images/doctors/e&d-man-image.png"
              alt={t.doctorName}
              fill
              sizes="(max-width: 900px) 90vw, 674px"
            />
          </div>

          <div className={styles.qualificationCards}>
            <article className={styles.accreditationCard}>
              <div className={styles.cardHeading}>
                <IconAsset src="/images/doctors/medal-icon.svg" size={24} className={styles.cardIcon} />
                <h3>{t.accreditations}</h3>
              </div>

              <ul className={styles.credentialList}>
                {accreditations.map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/white-tick.svg" />
                ))}
              </ul>
            </article>

            <article className={styles.degreeCard}>
              <div className={styles.cardHeading}>
                <IconAsset src="/images/doctors/grad-cap.svg" size={24} className={styles.cardIcon} />
                <h3>{t.degree}</h3>
              </div>

              <ul className={styles.credentialList}>
                {degreeItems.slice(0, 1).map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/black-tick.svg" />
                ))}
              </ul>

              <hr className={styles.degreeDivider} />

              <ul className={styles.credentialList}>
                {degreeItems.slice(1).map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/black-tick.svg" />
                ))}
              </ul>

              <hr className={styles.degreeDivider} />

              <div className={styles.cardHeading}>
                <IconAsset src="/images/doctors/build-icon.svg" size={24} className={styles.cardIcon} />
                <h3>{t.university}</h3>
              </div>

              <ul className={styles.credentialList}>
                {universityItems.map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/black-tick.svg" />
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}


function HomeLivesGallery({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const galleryCopy = {
    title: isAr ? "راح نغير حياتك" : "We Change Lives",
    celebrities: isAr ? "مشاهير أسنان" : "Celebrities",
    testimonials: isAr ? "آراء المراجعين" : "Testimonials",
    ctaSmall: isAr ? "حلمنا مو بس نغير اسنانك.." : "We don’t just change smiles ..",
    ctaMain: isAr ? "راح نغير حياتك" : "We Change Lives",
    names: {
      yagoob: isAr ? "يعقوب بوشهري" : "Yagoob Boushehri",
      huda: isAr ? "هدى حسين" : "Huda Hussain",
      ghadeer: isAr ? "غدير سلطان" : "Ghadeer Sultan",
      zainab: isAr ? "زينب خفيف" : "Zainab Khaff",
      salman: isAr ? "سلمان النجادي" : "Salman Alnajadi",
      maya: isAr ? "ميار مودل" : "Maya Model",
      halima: isAr ? "حليمة بولند" : "Halima Boland",
    },
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .gallery-row .gallery-column .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            padding: 2px;
        }
        .home-figma-gallery {
            position: relative;
            padding-top: 2vw;
            overflow: visible;
            z-index: 1;
            background: transparent;
        }
        .home-figma-gallery:before {
            display: block;
            top: -11vw;
            background: url("/images/Mask Group 140.png") center no-repeat;
            background-size: contain;
            width: 100%;
            height: 34vw;
            z-index: 0;
        }
        .home-figma-gallery .change-lives {
            color: #043f84;
            font-size: clamp(26px, 2.2vw, 42px);
            font-weight: 800;
            line-height: 1;
            letter-spacing: 0 !important;
            margin: 0;
            padding-top: 0.9vw;
            z-index: 3;
        }
        .home-figma-gallery .nav-tabs {
            margin: 1.5vw auto 1.25vw;
        }
        .home-figma-gallery .nav-tabs .nav-link {
            color: rgba(255, 255, 255, 0.96);
            font-size: clamp(14px, 0.98vw, 19px);
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0 !important;
            padding: 0 0 0.48vw;
            margin: 0 1.55vw;
        }
        .home-figma-gallery .nav-tabs .nav-link.active,
        .home-figma-gallery .nav-tabs.show .nav-link {
            color: #243746;
        }
        .home-figma-gallery .nav-tabs .nav-link:after {
            bottom: 0;
            height: 0.22vw;
            min-height: 2px;
            border-radius: 999px;
            background: var(--color-secondary);
        }
        .home-figma-gallery .nav-tabs .nav-link.active:after,
        .home-figma-gallery .nav-tabs.show .nav-link:after {
            width: 112%;
        }
        .home-figma-gallery .figma-celeb-gallery {
            position: relative;
            display: grid;
            grid-template-columns: 45.55% 54.45%;
            width: 100%;
            direction: ltr;
            z-index: 3;
        }
        .home-figma-gallery-ltr .figma-celeb-gallery {
            grid-template-columns: 54.45% 45.55%;
        }
        .home-figma-gallery .tab-content {
            position: relative;
            z-index: 3;
        }
        .home-figma-gallery .figma-celeb-left,
        .home-figma-gallery .figma-celeb-right {
            display: flex;
            flex-direction: column;
        }
        .home-figma-gallery-ltr .figma-celeb-left {
            order: 2;
        }
        .home-figma-gallery-ltr .figma-celeb-right {
            order: 1;
        }
        .home-figma-gallery .figma-split-row {
            display: grid;
            grid-template-columns: 36.8% 63.2%;
            width: 100%;
        }
        .home-figma-gallery .figma-gallery-tile {
            position: relative;
            display: block;
            width: 100%;
            overflow: hidden;
            border: 1px solid #fff;
            background: #0c1824;
            z-index: 1;
        }
        .home-figma-gallery .figma-gallery-tile:before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.62) 100%);
            z-index: 1;
        }
        .home-figma-gallery .figma-gallery-tile img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            padding: 0 !important;
        }
        .home-figma-gallery .figma-gallery-title {
            position: absolute;
            right: clamp(22px, 3.2vw, 62px);
            bottom: clamp(18px, 2.2vw, 42px);
            display: inline-block;
            color: #fff;
            font-size: clamp(13px, 1.05vw, 20px);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0 !important;
            text-align: right;
            direction: rtl;
            z-index: 2;
        }
        .home-figma-gallery .figma-gallery-title:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -0.5vw;
            width: clamp(22px, 2.4vw, 40px);
            height: 0.18vw;
            min-height: 2px;
            border-radius: 999px;
            background: var(--color-secondary);
        }
        .home-figma-gallery-ltr .figma-gallery-title {
            left: clamp(22px, 3.2vw, 62px);
            right: auto;
            direction: ltr;
            text-align: left;
        }
        .home-figma-gallery-ltr .figma-gallery-title:after {
            left: 0;
            right: auto;
        }
        .home-figma-gallery .figma-tile-yagoob,
        .home-figma-gallery .figma-tile-huda {
            height: 25.72vw;
        }
        .home-figma-gallery .figma-left-portraits {
            height: 31.03vw;
        }
        .home-figma-gallery .figma-left-bottom {
            height: 16.05vw;
        }
        .home-figma-gallery .figma-tile-maya {
            height: 36.36vw;
        }
        .home-figma-gallery .figma-tile-halima {
            height: 31.17vw;
        }
        .home-figma-gallery .figma-tile-maya img,
        .home-figma-gallery .figma-tile-ghadeer img,
        .home-figma-gallery .figma-tile-zainab img {
            object-position: center top;
        }
        .home-figma-gallery .figma-gallery-cta {
            position: relative;
            height: 41.6vw;
            overflow: hidden;
            border: 1px solid #fff;
            background: #fff;
        }
        .home-figma-gallery .figma-gallery-cta-bg {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            padding: 0 !important;
            z-index: 0;
        }
        .home-figma-gallery-ltr .figma-gallery-cta-bg {
            transform: scaleX(-1);
        }
        .home-figma-gallery .figma-gallery-cta-content {
            position: relative;
            z-index: 2;
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2vw 3vw 8vw;
            color: #fff;
            text-align: center;
            direction: rtl;
            transform: translateY(-2%);
        }
        .home-figma-gallery-ltr .figma-gallery-cta-content {
            direction: ltr;
        }
        .home-figma-gallery .figma-cta-small {
            display: block;
            font-size: clamp(22px, 2.1vw, 40px);
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0 !important;
            margin-bottom: 1.25vw;
        }
        .home-figma-gallery .figma-cta-large {
            display: block;
            font-size: clamp(40px, 5vw, 88px);
            font-weight: 800;
            line-height: 1.05;
            letter-spacing: 0 !important;
        }
        @media screen and (max-width: 991px) {
            .home-figma-gallery {
                padding-top: 65px;
            }
            .home-figma-gallery:before {
                top: 0;
                height: 220px;
                background-size: cover;
                background-position: top;
            }
            .home-figma-gallery .change-lives {
                padding-top: 48px;
            }
            .home-figma-gallery .nav-tabs {
                margin: 18px auto 36px;
            }
            .home-figma-gallery .nav-tabs .nav-link {
                padding-bottom: 8px;
                margin: 0 14px;
            }
            .home-figma-gallery .nav-tabs .nav-link:after {
                height: 3px;
            }
            .home-figma-gallery .figma-celeb-gallery {
                grid-template-columns: 1fr;
            }
            .home-figma-gallery .figma-tile-yagoob,
            .home-figma-gallery .figma-tile-huda,
            .home-figma-gallery .figma-tile-maya,
            .home-figma-gallery .figma-tile-halima {
                height: auto;
                aspect-ratio: 16 / 9;
            }
            .home-figma-gallery .figma-left-portraits {
                height: 260px;
            }
            .home-figma-gallery .figma-left-bottom {
                height: 190px;
            }
            .home-figma-gallery .figma-gallery-cta {
                height: 360px;
            }
            .home-figma-gallery .figma-gallery-title {
                right: 24px;
                bottom: 24px;
            }
            .home-figma-gallery .figma-gallery-title:after {
                bottom: -8px;
                height: 2px;
            }
        }
        @media screen and (max-width: 575px) {
            .home-figma-gallery {
                padding-top: 50px;
            }
            .home-figma-gallery:before {
                height: 233px;
                background-position: top center;
            }
            .home-figma-gallery .change-lives {
                font-size: 30px;
                padding-top: 38px;
            }
            .home-figma-gallery .nav-tabs {
                margin: 18px auto 26px;
            }
            .home-figma-gallery .nav-tabs .nav-link {
                font-size: 17px;
                padding-bottom: 10px;
                margin: 0 11px;
            }
            .home-figma-gallery .figma-celeb-gallery {
                display: grid;
                grid-template-columns: 45.5% 54.5%;
                grid-template-rows: 220px 220px 235px 245px 170px 360px;
                grid-template-areas:
                    "yagoob maya"
                    "huda maya"
                    "ghadeer halima"
                    "zainab salman"
                    "logo logo"
                    "cta cta";
                align-items: stretch;
                width: 100%;
            }
            .home-figma-gallery .figma-celeb-left,
            .home-figma-gallery .figma-celeb-right,
            .home-figma-gallery .figma-left-portraits,
            .home-figma-gallery .figma-left-bottom {
                display: contents;
            }
            .home-figma-gallery .figma-tile-yagoob { grid-area: yagoob; }
            .home-figma-gallery .figma-tile-huda { grid-area: huda; }
            .home-figma-gallery .figma-tile-ghadeer { grid-area: ghadeer; }
            .home-figma-gallery .figma-tile-zainab { grid-area: zainab; }
            .home-figma-gallery .figma-tile-salman { grid-area: salman; }
            .home-figma-gallery .figma-tile-maya { grid-area: maya; }
            .home-figma-gallery .figma-tile-halima { grid-area: halima; }
            .home-figma-gallery .figma-logo-tile { grid-area: logo; }
            .home-figma-gallery .figma-gallery-cta { grid-area: cta; }
            .home-figma-gallery .figma-gallery-tile,
            .home-figma-gallery .figma-gallery-cta,
            .home-figma-gallery .figma-left-portraits .figma-gallery-tile,
            .home-figma-gallery .figma-left-bottom .figma-gallery-tile {
                height: 100% !important;
                aspect-ratio: auto;
            }
            .home-figma-gallery .figma-gallery-title {
                right: 22px;
                bottom: 28px;
                font-size: 14px;
            }
            .home-figma-gallery-ltr .figma-gallery-title {
                left: 22px;
                right: auto;
            }
            .home-figma-gallery .figma-gallery-title:after {
                bottom: -7px;
            }
            .home-figma-gallery .figma-tile-yagoob img,
            .home-figma-gallery .figma-tile-huda img,
            .home-figma-gallery .figma-tile-salman img {
                object-position: center;
            }
            .home-figma-gallery .figma-tile-ghadeer img,
            .home-figma-gallery .figma-tile-zainab img,
            .home-figma-gallery .figma-tile-maya img,
            .home-figma-gallery .figma-tile-halima img {
                object-position: center top;
            }
            .home-figma-gallery .figma-gallery-cta-content {
                padding: 34px 24px 78px;
                transform: none;
            }
            .home-figma-gallery .figma-cta-small {
                font-size: 22px;
                margin-bottom: 14px;
            }
            .home-figma-gallery .figma-cta-large {
                font-size: 46px;
                line-height: 1.15;
            }
        }`,
        }}
      />

      <section className={`gallery-wrapper home-figma-gallery ${isAr ? "home-figma-gallery-rtl" : "home-figma-gallery-ltr"}`} aria-labelledby="lives-title">
        <div id="lives-title" className="change-lives">{galleryCopy.title}</div>

        <ul className="nav nav-tabs" id="doctorLivesTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-toggle="tab"
              data-target="#doctor-tab-celebrities"
              type="button"
              role="tab"
              aria-controls="doctor-tab-celebrities"
              aria-selected="true"
            >
              {galleryCopy.celebrities}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-toggle="tab"
              data-target="#doctor-tab-testimonials"
              type="button"
              role="tab"
              aria-controls="doctor-tab-testimonials"
              aria-selected="false"
            >
              {galleryCopy.testimonials}
            </button>
          </li>
        </ul>

        <div className="tab-content" id="doctorLivesTabContent">
          <div className="tab-pane fade show active" id="doctor-tab-celebrities" role="tabpanel">
            <div className="figma-celeb-gallery">
              <div className="figma-celeb-left">
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/yagoob-boushehri.png`} className="gallery-item figma-gallery-tile figma-tile-yagoob image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/yagoob-boushehri.png`} alt={galleryCopy.names.yagoob} />
                  <div className="figma-gallery-title">{galleryCopy.names.yagoob}</div>
                </a>

                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/huda-hussain.png`} className="gallery-item figma-gallery-tile figma-tile-huda image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/huda-hussain.png`} alt={galleryCopy.names.huda} />
                  <div className="figma-gallery-title">{galleryCopy.names.huda}</div>
                </a>

                <div className="figma-split-row figma-left-portraits">
                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/ghadeer-sultan.png`} className="gallery-item figma-gallery-tile figma-tile-ghadeer image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/ghadeer-sultan.png`} alt={galleryCopy.names.ghadeer} />
                    <div className="figma-gallery-title">{galleryCopy.names.ghadeer}</div>
                  </a>

                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/zainab-khafif.png`} className="gallery-item figma-gallery-tile figma-tile-zainab image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/zainab-khafif.png`} alt={galleryCopy.names.zainab} />
                    <div className="figma-gallery-title">{galleryCopy.names.zainab}</div>
                  </a>
                </div>

                <div className="figma-split-row figma-left-bottom">
                  <div className="gallery-item figma-gallery-tile figma-logo-tile">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Group%2035316.png`} alt="" />
                  </div>

                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/salman-alnajadi.png`} className="gallery-item figma-gallery-tile figma-tile-salman image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/salman-alnajadi.png`} alt={galleryCopy.names.salman} />
                    <div className="figma-gallery-title">{galleryCopy.names.salman}</div>
                  </a>
                </div>
              </div>

              <div className="figma-celeb-right">
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/maya-model.png`} className="gallery-item figma-gallery-tile figma-tile-maya image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/maya-model.png`} alt={galleryCopy.names.maya} />
                  <div className="figma-gallery-title">{galleryCopy.names.maya}</div>
                </a>

                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/halima-boland.png`} className="gallery-item figma-gallery-tile figma-tile-halima image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/halima-boland.png`} alt={galleryCopy.names.halima} />
                  <div className="figma-gallery-title">{galleryCopy.names.halima}</div>
                </a>

                <div className="figma-gallery-cta">
                  <img className="figma-gallery-cta-bg" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/orthodontist%201.png`} alt="" aria-hidden="true" />
                  <div className="figma-gallery-cta-content">
                    <span className="figma-cta-small">{galleryCopy.ctaSmall}</span>
                    <span className="figma-cta-large">{galleryCopy.ctaMain}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="doctor-tab-testimonials" role="tabpanel" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}

export default function DoctorDetailsPage() {
  const params = useParams();
  const locale = ((params?.locale as string) === "ar" ? "ar" : "en") as Locale;
  const isAr = locale === "ar";

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <Hero locale={locale} />
      <Stats locale={locale} />
      <AboutDoctor locale={locale} />
      <BeautyWorld locale={locale} />
      <Education locale={locale} />
      <HomeLivesGallery locale={locale} />
      <AppointmentSection locale={locale} />
    </main>
  );
}
