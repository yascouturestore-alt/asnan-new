"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "ar" | "en";

type Copy = {
  heroTitle: string;
  doctor: string;
  doctorTitle: string;
  doctorUniversity: string;
  readMore: string;
  introTitle: string;
  introText: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  worldTitle: string;
  smileTitle: string;
  madeThis: string;
  madeBy: string;
  before: string;
  after: string;
  moreSmiles: string;
  faqTitle: string;
  faqs: { q: string; a?: string }[];
  journeyTitle: string;
  journeyText: string;
  bookButton: string;
};

const A = {
  heroBgBack: "https://www.figma.com/api/mcp/asset/255f5ec8-db40-4d79-930c-18d3855c000d",
  heroBgFront: "https://www.figma.com/api/mcp/asset/9b592104-2f1d-486f-866d-c3ee5c981ba0",
  heroMosaic: "https://www.figma.com/api/mcp/asset/77f0eee0-6cbd-43b9-a95e-645b4178f451",
  overviewMosaic: "https://www.figma.com/api/mcp/asset/bde3d23e-25ef-4c7b-bb9c-c7b08380f1e0",
  overviewCenter: "https://www.figma.com/api/mcp/asset/e62d664d-e822-47a1-bc35-b74664a0739e",
  benefitsBg: "/images/benefitsBg.png",
  doctor: "https://www.figma.com/api/mcp/asset/2886187b-84c5-4b2b-bb5d-2fd5ddc4d69b",
  asnanLogo: "https://www.figma.com/api/mcp/asset/40069f33-a55b-49da-8b77-1205935380b0",
  beforeMain: "https://www.figma.com/api/mcp/asset/b8134ceb-f667-46db-83ce-52381985ab10",
  afterMain: "https://www.figma.com/api/mcp/asset/287fd7a7-61a8-4c43-9f09-39af40e76972",
  beforeOne: "https://www.figma.com/api/mcp/asset/d34bd73e-e7e5-4567-840f-71e77882fb13",
  afterOne: "https://www.figma.com/api/mcp/asset/333301c6-a102-4aed-87be-2d6ab37ffb34",
  beforeTwo: "https://www.figma.com/api/mcp/asset/e45d0c84-241e-4bf1-b60e-2f85439e029e",
  afterTwo: "https://www.figma.com/api/mcp/asset/04d4c17c-49a1-4c6d-b8b4-2b18a29ecd19",
  moreSmilesShape: "https://www.figma.com/api/mcp/asset/dc3bab80-5af4-4abd-bb61-508cf1048fef",
  faqWave: "https://www.figma.com/api/mcp/asset/6e9c9340-8859-413e-af64-b88c033fbc5f",
  buttonIcon: "https://www.figma.com/api/mcp/asset/bcc2a950-6cfe-49eb-8a8f-5bd9ceb462f7",
};

const copy: Record<Locale, Copy> = {
  ar: {
    heroTitle: "الابتسامة الكريستالية",
    doctor: "د. محمد الحجي",
    doctorTitle: "اختصاصي تجميل و طب الأسنان الشامل",
    doctorUniversity: "جامعة كولومبيا / الولايات المتحدة الأمريكية",
    readMore: "اقرأ المزيد",
    introTitle: "ما هو تقويم الأسنان الشفاف؟",
    introText:
      "إن نظام إنفيزلاين هو نظام تقويم أسنان متطور طورته شركة إنفيزلاين، ويستخدم قوالب شفافة مصممة خصيصًا لتقويم الأسنان تدريجيًا. هذه القوالب قابلة للإزالة، ومريحة، وغير مرئية تقريبًا، مما يجعلها خيارًا شائعًا للبالغين والمراهقين.",
    benefitsTitle: "فوائد تقويم الأسنان الشفاف (إنفيزلاين)",
    benefits: [
      { title: "غير مرئية تقريبا", text: "واضح محاذاة التي بالكاد ملحوظ." },
      { title: "ملاءمة مريحة", text: "محاذاة البلاستيك السلس تقلل من تهيج." },
      { title: "قابلة للإزالة", text: "يمكنك إزالتها أثناء تناول الطعام." },
      { title: "نتائج أسرع", text: "تنتهي العديد من العلاجات في 12-18 شهرًا." },
    ],
    worldTitle: "عالم الجمال",
    smileTitle: "الابتسامة الكريستالية",
    madeThis: "هذه الإبتسامة",
    madeBy: "صنعها",
    before: "قبل",
    after: "بعد",
    moreSmiles: "مشاهدة المزيد من الإبتسامات",
    faqTitle: "علاجات تقويم الأسنان",
    faqs: [
      { q: "كم تستغرق مدة علاج إنفيزلاين؟", a: "عادة بين 12-18 شهر اعتمادا على القضية." },
      { q: "هل تقويم الأسنان الشفاف مؤلم؟" },
      { q: "هل يمكنني إزالة تقويم الأسنان الشفاف (Invisalign) أثناء تناول الطعام؟" },
    ],
    journeyTitle: "ابدأ رحلتك مع تقويم الأسنان الشفاف اليوم",
    journeyText: "احجز مشاورة مع أخصائيي تقويم الأسنان لدينا.",
    bookButton: "موعد الكتاب",
  },
  en: {
    heroTitle: "The Crystal Smile",
    doctor: "Dr. Mohammad Alhajji",
    doctorTitle: "Cosmetic & Comprehensive Dentist",
    doctorUniversity: "Columbia University / United States of America",
    readMore: "Read more",
    introTitle: "What are clear aligners?",
    introText:
      "Invisalign is an advanced orthodontic treatment that uses custom-made clear aligners to gradually straighten teeth. These aligners are removable, comfortable, and almost invisible, making them a popular choice for adults and teens.",
    benefitsTitle: "Benefits of clear aligners (Invisalign)",
    benefits: [
      { title: "Almost invisible", text: "Clear aligners are barely noticeable." },
      { title: "Comfortable fit", text: "Smooth plastic aligners reduce irritation." },
      { title: "Removable", text: "You can remove them while eating." },
      { title: "Faster results", text: "Many treatments finish within 12–18 months." },
    ],
    worldTitle: "World of Beauty",
    smileTitle: "The Crystal Smile",
    madeThis: "This smile",
    madeBy: "made by",
    before: "Before",
    after: "After",
    moreSmiles: "View more smiles",
    faqTitle: "Orthodontic Treatments",
    faqs: [
      { q: "How long does Invisalign treatment take?", a: "Usually between 12–18 months depending on the case." },
      { q: "Is clear aligner treatment painful?" },
      { q: "Can I remove Invisalign clear aligners while eating?" },
    ],
    journeyTitle: "Start your clear aligner journey today",
    journeyText: "Book a consultation with our orthodontic specialists.",
    bookButton: "Book Appointment",
  },
};

function HomeWorldBeautySection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  useEffect(() => {
    const initWorldBeauty = () => {
      if (typeof window === "undefined") return;

      const containers = document.querySelectorAll(
        ".orthodontics-world-beauty .before-after-wrapper"
      );

      containers.forEach((container) => {
        const slider = container.querySelector(".slider") as HTMLInputElement | null;
        if (!slider || slider.dataset.asnanOrthoBound === "true") return;

        slider.dataset.asnanOrthoBound = "true";

        const setPosition = () => {
          (container as HTMLElement).style.setProperty(
            "--position",
            `${slider.value}%`
          );
        };

        setPosition();
        slider.addEventListener("input", setPosition);
      });

      const $ = (window as any).$;

      if ($?.fn?.owlCarousel) {
        const $worldBeautySlider = $(
          ".orthodontics-world-beauty .owl-carousel.world-beauty-slider"
        );

        if (
          $worldBeautySlider.length &&
          !$worldBeautySlider.hasClass("owl-loaded")
        ) {
          $worldBeautySlider.owlCarousel({
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

    const tryInit = () => {
      const $ = typeof window !== "undefined" ? (window as any).$ : undefined;

      if ($?.fn?.owlCarousel) {
        initWorldBeauty();
      } else {
        window.setTimeout(tryInit, 200);
      }
    };

    tryInit();
  }, []);

  return (
    <div className="world-beauty-wrapper orthodontics-world-beauty">
      <div className="world-beauty-title">{t.world_of_beauty}</div>
      <div className="container-fluid">
        <div className="owl-carousel owl-theme world-beauty-slider">
          <div className="item">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <div className="before-after-wrapper">
                  <div className="before-after-img">
                    <img
                      className="image-before"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before.png`}
                      alt="Before"
                    />
                    <img
                      className="image-after"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after.png`}
                      alt="After"
                    />
                  </div>
                  <div className="before-text">{t.before}</div>
                  <div className="after-text">{t.after}</div>
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
              </div>

              <div className="col-12 col-lg-5">
                <div className="caption-wrapper">
                  <div className="caption-text">{t.beautiful_smile}</div>
                  <div className="made-by-wrapper">
                    <div className="made-by-title">
                      {t.this_smile} <div>{t.made_by}</div>
                    </div>

                    <div className="doctor-small">
                      <div className="doctor-img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/dr-img-teeth-show.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="doctor-info">
                      <div className="doctor-name">{t.dr_border_img}</div>
                      <div className="doctor-title">{t.prosthodontist}</div>
                      <div className="doctor-title">{t.kuwait_university}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <div className="before-after-wrapper">
                  <div className="before-after-img">
                    <img
                      className="image-before"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-2.png`}
                      alt="Before"
                    />
                    <img
                      className="image-after"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-2.png`}
                      alt="After"
                    />
                  </div>
                  <div className="before-text">{t.before}</div>
                  <div className="after-text">{t.after}</div>
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
              </div>

              <div className="col-12 col-lg-5">
                <div className="caption-wrapper">
                  <div className="caption-text">{t.beautiful_smile}</div>
                  <div className="made-by-wrapper">
                    <div className="made-by-title">
                      {t.this_smile} <div>{t.made_by_female}</div>
                    </div>

                    <div className="doctor-small">
                      <div className="doctor-img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Dr.-Amnah-(1).png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="doctor-info">
                      <div className="doctor-name">Dr. Amnah</div>
                      <div className="doctor-title">{t.orthodontist}</div>
                      <div className="doctor-title">{t.kuwait_university}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="before-after-wrapper">
              <div className="before-after-img">
                <img
                  className="image-before"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-3-1.png`}
                  alt="Before"
                />
                <img
                  className="image-after"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-3-1.png`}
                  alt="After"
                />
              </div>
              <div className="before-text">{t.before}</div>
              <div className="after-text">{t.after}</div>
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
          </div>

          <div className="col-12 col-lg-4">
            <div className="before-after-wrapper">
              <div className="before-after-img">
                <img
                  className="image-before"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-2.png`}
                  alt="Before"
                />
                <img
                  className="image-after"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-2.png`}
                  alt="After"
                />
              </div>
              <div className="before-text">{t.before}</div>
              <div className="after-text">{t.after}</div>
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
          </div>

          <div className="col-12 col-lg-4">
            <a
              href={`/${locale}/services/world-of-beauty`}
              className="more-smiles-block"
            >
              <div className="more-smiles-text">{t.view_more}</div>
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
            <a
              href={`/${locale}/services/world-of-beauty`}
              className="more-smiles-block-responsive"
            >
              <div className="more-smiles-text-responsive">{t.view_more}</div>
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


export default function InvisalignDetailPage() {
  const params = useParams();
  const locale = ((params?.locale as string) || "ar") as Locale;
  const isAr = locale === "ar";
  const t = copy[isAr ? "ar" : "en"];
  const bookHref = `/${locale}/book-appointment`;

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <section className={styles.hero} aria-labelledby="service-detail-title">
        <img className={styles.heroBgBack} src={A.heroBgBack} alt="" aria-hidden="true" />
        <img className={styles.heroBgFront} src={A.heroBgFront} alt="" aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroVisual}>
            <img src={A.heroMosaic} alt="" aria-hidden="true" />
          </div>
          <div className={styles.heroContent}>
            <h1 id="service-detail-title">
              <span>“</span>{t.heroTitle}<span>”</span>
            </h1>
            <div className={styles.heroDoctorRow}>
              <div>
                <h2>{t.doctor}</h2>
                <div className="d-flex align-items-center gap-2">
                  <img src="/images/teeth-icon.svg" alt="teethicon" />
                <p>
                  <b>{t.doctorTitle}</b>
                  <span>{t.doctorUniversity}</span>
                </p>
                </div>
              </div>
            </div>
            <Link href={bookHref} className={styles.whitePill}>{t.readMore}</Link>
          </div>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="clear-aligners-title">
        <div className={styles.introInner}>
          <div className={styles.introVisual}>
            <img className={styles.introMosaic} src={A.overviewMosaic} alt="" aria-hidden="true" />
            <span className={styles.introCircle}>
              <img src={A.overviewCenter} alt="" aria-hidden="true" />
            </span>
          </div>
          <div className={styles.introText}>
            <h2 id="clear-aligners-title">{t.introTitle}</h2>
            <p>{t.introText}</p>
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="benefits-title">
        <img className={styles.benefitsBg} src={A.benefitsBg} alt="" aria-hidden="true" />
        <div className={styles.benefitsInner}>
          <h2 id="benefits-title">{t.benefitsTitle}</h2>
          <div className={styles.benefitsGrid}>
            {t.benefits.map((item) => (
              <article className={styles.benefitCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeWorldBeautySection locale={locale} />

      <section className={styles.faq} aria-labelledby="faq-title">
        <img className={styles.faqWave} src={A.faqWave} alt="" aria-hidden="true" />
        <div className={styles.faqInner}>
          <h2 id="faq-title">{t.faqTitle}</h2>
          <div className={styles.faqList}>
            {t.faqs.map((item) => (
              <article className={styles.faqItem} key={item.q}>
                <h3>{item.q}</h3>
                {item.a ? <p>{item.a}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.journey} aria-labelledby="journey-title">
        <div className={styles.journeyCopy}>
          <h2 id="journey-title">{t.journeyTitle}</h2>
          <p>{t.journeyText}</p>
        </div>
        <Link href={bookHref} className={styles.blueButton}>
          <span>{t.bookButton}</span>
          <img src={A.buttonIcon} alt="" aria-hidden="true" />
        </Link>
      </section>

      <AppointmentSection locale={locale} />
    </main>
  );
}
