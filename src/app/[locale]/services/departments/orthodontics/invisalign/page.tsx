"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  benefitsBg: "https://www.figma.com/api/mcp/asset/02185ed8-d535-42be-9700-872e157b3252",
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

function BeforeAfter({ before, after, labels, compact = false }: { before: string; after: string; labels: { before: string; after: string }; compact?: boolean }) {
  return (
    <div className={`${styles.beforeAfter} ${compact ? styles.compactSmile : ""}`}>
      <div className={styles.afterImage}>
        <img src={after} alt={labels.after} />
      </div>
      <div className={styles.beforeImage}>
        <img src={before} alt={labels.before} />
      </div>
      <span className={`${styles.smileLabel} ${styles.beforeLabel}`}>{labels.before}</span>
      <span className={`${styles.smileLabel} ${styles.afterLabel}`}>{labels.after}</span>
      <span className={styles.sliderLine} aria-hidden="true" />
      <img className={styles.smileLogo} src={A.asnanLogo} alt="" aria-hidden="true" />
    </div>
  );
}

function DoctorSignature({ t }: { t: Copy }) {
  return (
    <div className={styles.doctorSignature}>
      <div className={styles.signatureCopy}>
        <span>{t.madeThis}</span>
        <strong>{t.madeBy}</strong>
      </div>
      <div className={styles.doctorPhoto}>
        <img src={A.doctor} alt={t.doctor} />
      </div>
      <div className={styles.doctorInfo}>
        <b>{t.doctor}</b>
        <span>{t.doctorTitle}</span>
        <span>{t.doctorUniversity}</span>
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
                <p>
                  <b>{t.doctorTitle}</b>
                  <span>{t.doctorUniversity}</span>
                </p>
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

      <section className={styles.beauty} aria-labelledby="beauty-title">
        <h2 id="beauty-title" className={styles.beautyWatermark}>{t.worldTitle}</h2>
        <div className={styles.beautySlider}>
          <button className={`${styles.sliderArrow} ${styles.prevArrow}`} aria-label={isAr ? "السابق" : "Previous"} type="button">‹</button>
          <button className={`${styles.sliderArrow} ${styles.nextArrow}`} aria-label={isAr ? "التالي" : "Next"} type="button">›</button>
          <div className={styles.beautyIntro}>
            <h3>{t.smileTitle}</h3>
            <DoctorSignature t={t} />
          </div>
          <div className={styles.mainSmile}>
            <BeforeAfter before={A.beforeMain} after={A.afterMain} labels={{ before: t.before, after: t.after }} />
          </div>
        </div>
        <div className={styles.smileThumbs}>
          <Link href={`/${locale}/services/world-of-beauty`} className={styles.moreSmiles}>
            <img src={A.moreSmilesShape} alt="" aria-hidden="true" />
            <span>{t.moreSmiles}</span>
            <b>‹</b>
          </Link>
          <BeforeAfter before={A.beforeOne} after={A.afterOne} labels={{ before: t.before, after: t.after }} compact />
          <BeforeAfter before={A.beforeTwo} after={A.afterTwo} labels={{ before: t.before, after: t.after }} compact />
        </div>
      </section>

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
          <img src={A.buttonIcon} alt="" aria-hidden="true" />
          <span>{t.bookButton}</span>
        </Link>
      </section>

      <AppointmentSection locale={locale} />
    </main>
  );
}
