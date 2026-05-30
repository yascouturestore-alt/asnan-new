"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "en" | "ar";

type CardItem = {
  icon: "check" | "bolt" | "star" | "heart" | "pulse" | "calendar" | "shield" | "bulb" | "clock" | "users" | "dollar";
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

const copy = {
  en: {
    heroEyebrow: "Career opportunities at Asnan Tower",
    heroTitle: "Build Your Future with Purpose.",
    heroText: "Our mission: Transforming the third world into the first world through dentistry.",
    directCall: "Direct Call",
    valuesTitle: "Our Values",
    showAll: "View All",
    benefitsTitle: "Benefits & Perks",
    lifeTitle: "Life at Asnan Tower",
    joinTitle: "Are you ready to join us?",
    joinText:
      "Take the next step in your career — explore our open positions and join a team working to raise the standard of dentistry in Kuwait.",
    openPositions: "View Open Positions",
  },
  ar: {
    heroEyebrow: "فرص العمل في برج أسنان",
    heroTitle: "ابنِ مستقبلك بهدف.",
    heroText: "مهمتنا: تحويل العالم الثالث إلى العالم الأول من خلال طب الأسنان.",
    directCall: "اتصال مباشر",
    valuesTitle: "قيمنا",
    showAll: "عرض الكل",
    benefitsTitle: "الفوائد والامتيازات",
    lifeTitle: "الحياة في برج أسنان",
    joinTitle: "هل أنت مستعد للانضمام إلينا؟",
    joinText:
      "اتخذ الخطوة التالية في مسيرتك المهنية - استكشف الوظائف الشاغرة لدينا وانضم إلى فريق يعمل على رفع مستوى طب الأسنان في الكويت.",
    openPositions: "عرض المراكز المفتوحة",
  },
};

const values: CardItem[] = [
  {
    icon: "heart",
    title: { en: "Integrity", ar: "نزاهة" },
    description: {
      en: "We say what we believe, and we do what we say.",
      ar: "نقول ما نؤمن به، ونفعل ما نقوله.",
    },
  },
  {
    icon: "star",
    title: { en: "Entrepreneurship", ar: "ريادة الأعمال" },
    description: {
      en: "We act like owners of Asnan Tower.",
      ar: "نحن نتصرف بصفتنا مالكي برج أسنان.",
    },
  },
  {
    icon: "bolt",
    title: { en: "Speed in Quality", ar: "السرعة في الجودة" },
    description: {
      en: "Delivering excellence faster is our competitive advantage.",
      ar: "إن تقديم التميز بشكل أسرع هو ميزتنا التنافسية.",
    },
  },
  {
    icon: "check",
    title: { en: "Creating Fans", ar: "خلق المشجعين" },
    description: {
      en: "Every guest becomes a lifelong fan of Asnan Tower.",
      ar: "كل ضيف يصبح من المعجبين الدائمين ببرج أسنان.",
    },
  },
];

const benefits: CardItem[] = [
  {
    icon: "bulb",
    title: { en: "Free Dental Treatment", ar: "علاج أسنان مجاني" },
    description: {
      en: "We care for our clinic family with free dental treatments and exclusive family discounts.",
      ar: "نحن نهتم بأفراد عيادتنا. نقدم لكم علاجات أسنان مجانية، وخصومات حصرية لعائلتكم.",
    },
  },
  {
    icon: "shield",
    title: { en: "Health & Life Insurance", ar: "التأمين الصحي والحياة" },
    description: {
      en: "Comprehensive health and life coverage for you and your loved ones at every step.",
      ar: "تغطية تأمينية شاملة على الصحة والحياة لك ولأحبائك - في كل خطوة على الطريق.",
    },
  },
  {
    icon: "calendar",
    title: { en: "Work-Life Balance", ar: "التوازن بين العمل والحياة" },
    description: {
      en: "Competitive annual leave in a supportive environment that respects your time.",
      ar: "إجازة سنوية تنافسية في بيئة داعمة تحترم وقتك.",
    },
  },
  {
    icon: "pulse",
    title: { en: "Earn & Learn", ar: "اكسب وتعلم" },
    description: {
      en: "Continuous training, certifications, and hands-on learning opportunities to help you reach your potential.",
      ar: "التدريب المستمر والشهادات وفرص التعلم العملي لمساعدتك على تحقيق إمكاناتك.",
    },
  },
  {
    icon: "dollar",
    title: { en: "Performance Rewards", ar: "مكافآت الأداء" },
    description: {
      en: "An attractive commission structure designed to reward high performance and dedication.",
      ar: "هيكل عمولات جذاب مصمم لمكافأة الأداء العالي والتفاني.",
    },
  },
  {
    icon: "users",
    title: { en: "Team Events & Experiences", ar: "الفعاليات وتجارب الفريق" },
    description: {
      en: "Team trips and celebrations throughout the year — moments that bring everyone together.",
      ar: "رحلات الفريق والاحتفالات على مدار العام - لحظات تجمع الجميع معًا.",
    },
  },
  {
    icon: "clock",
    title: { en: "Celebrations & Team Spirit", ar: "الاحتفالات وروح الفريق" },
    description: {
      en: "Birthdays, milestones, and wins — we celebrate it all. Recognition is part of our culture.",
      ar: "أعياد الميلاد، والمناسبات الهامة، والإنجازات - نحتفل بكل ذلك. التقدير جزء من ثقافتنا.",
    },
  },
  {
    icon: "heart",
    title: { en: "Family-Like Culture", ar: "ثقافة مثل الأسرة" },
    description: {
      en: "You are more than an employee. A supportive environment where teamwork and respect come first.",
      ar: "أنت أكثر من مجرد موظف. بيئة داعمة حيث يأتي العمل الجماعي والاحترام في المقام الأول.",
    },
  },
];

function LineIcon({ name }: { name: CardItem["icon"] }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  } as const;

  switch (name) {
    case "check":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12.5 20.7l4.9 4.8 10.4-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M22.8 3.5 10.8 22h9.4l-3 14.5L29.2 17h-9.1l2.7-13.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m20 5.2 4.5 9.1 10.1 1.5-7.3 7.1 1.7 10-9-4.7-9 4.7 1.7-10-7.3-7.1 10.1-1.5L20 5.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20 33.2S7 25.7 7 15.4C7 10.3 10.2 7 14.5 7c2.5 0 4.4 1.2 5.5 3.1C21.1 8.2 23 7 25.5 7 29.8 7 33 10.3 33 15.4 33 25.7 20 33.2 20 33.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path d="M4.8 22h8.1l3.2-12.5 6.1 22 3.4-9.5h9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="8" y="9" width="24" height="25" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M13 5.8v6.6M27 5.8v6.6M8 16.5h24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M20 5.7 31 9.8v8.4c0 7.2-4.5 13.4-11 16.1C13.5 31.6 9 25.4 9 18.2V9.8l11-4.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...common}>
          <path d="M14.2 28.3h11.6M16.1 33h7.8M20 5.7c-5.3 0-9.3 4-9.3 9.2 0 3.4 1.6 5.8 3.8 8 1.2 1.2 1.7 2.2 1.7 3.6h7.6c0-1.4.5-2.4 1.7-3.6 2.2-2.2 3.8-4.6 3.8-8 0-5.2-4-9.2-9.3-9.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.7" />
          <path d="M20 11.5V20l5.8 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="15.2" cy="14.8" r="5.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="26.7" cy="16.4" r="4.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.7 32.4c1.4-5.3 5-8.1 9.5-8.1s8.1 2.8 9.5 8.1M22.8 26.6c3.6.1 6.3 2.2 7.5 5.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "dollar":
      return (
        <svg {...common}>
          <path d="M20 5v30M27 11.5c-1.7-2-4.2-3-7-3-4.1 0-7 2.2-7 5.7 0 8 15 3.6 15 12 0 3.3-3 5.5-7.6 5.5-3.6 0-6.6-1.4-8.4-3.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function CareerCard({ item, locale }: { item: CardItem; locale: Locale }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardIcon}>
        <LineIcon name={item.icon} />
      </div>
      <h3>{item.title[locale]}</h3>
      <p>{item.description[locale]}</p>
    </article>
  );
}

export default function CareersPage() {
  const params = useParams();
  const locale = ((params?.locale as string) === "ar" ? "ar" : "en") as Locale;
  const isAr = locale === "ar";
  const t = copy[locale];

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <section className={styles.hero} aria-labelledby="careers-hero-title">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>{t.heroEyebrow}</p>
          <h1 id="careers-hero-title">{t.heroTitle}</h1>
          <p className={styles.heroText}>{t.heroText}</p>
          <div className="col-12 call-btn-container">
              <a
                href="tel:+9651896666"
                target="_blank"
                rel="noreferrer"
                className="call-btn phone-btn"
                id="hero-phone-call-btn"
              >
                <div className="call-btn-icon">
                  <img
                    src="/images/Icon-phone.svg"
                    alt="phone icon"
                    id="phone-icon"
                    height="50"
                  />
                </div>

                <div className="call-btn-txt">
                  <p className="call-desc">{t.directCall}</p>
                  <span className="phone-link">
                    965-189<span>6666</span>
                  </span>
                </div>
              </a>
            </div>
        </div>
      </section>

      <section className={styles.valuesSection} aria-labelledby="values-title">
        <h2 id="values-title" className={styles.sectionTitle}>{t.valuesTitle}</h2>
        <div className={styles.valuesGrid}>
          {values.map((item) => (
            <CareerCard key={item.title.en} item={item} locale={locale} />
          ))}
        </div>
        <a href="#open-positions" className={styles.blueButton}>{t.showAll}</a>
      </section>

      <section className={styles.benefitsSection} aria-labelledby="benefits-title">
        <div className={styles.benefitsBg} aria-hidden="true" />
        <div className={styles.benefitsInner}>
          <h2 id="benefits-title" className={styles.benefitsTitle}>{t.benefitsTitle}</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((item) => (
              <CareerCard key={item.title.en} item={item} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.lifeSection} aria-labelledby="life-title">
        <h2 id="life-title" className={styles.sectionTitle}>{t.lifeTitle}</h2>
        <a className={styles.videoCard} href="#" aria-label={t.lifeTitle}>
          <span className={styles.videoBg} aria-hidden="true" />
          <span className={styles.playButton} aria-hidden="true">
            <Image src="/images/play.svg" alt="" width={110} height={110} />
          </span>
        </a>
      </section>

      <section id="open-positions" className={styles.joinSection} aria-labelledby="join-title">
        <div className={styles.joinWave} aria-hidden="true" />
        <div className={styles.joinInner}>
          <h2 id="join-title" className={styles.joinTitle}>{t.joinTitle}</h2>
          <p>{t.joinText}</p>
          <a href="#requestAppointment" className={styles.blueButton}>{t.openPositions}</a>
        </div>
      </section>

      <AppointmentSection locale={locale} />
    </main>
  );
}
