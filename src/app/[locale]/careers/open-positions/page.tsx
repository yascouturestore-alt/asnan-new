"use client";

import { useParams } from "next/navigation";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "en" | "ar";

type JobItem = {
  id: string;
  title: Record<Locale, string>;
  category: "all" | "clinical" | "operations" | "customer" | "admin";
  tags: Record<Locale, string[]>;
};

const copy = {
  en: {
    heroTitle: "Open Positions",
    heroText:
      "Build your future at Kuwait’s leading dental center, where every day makes a real difference.",
    apply: "Apply Now",
    tabs: [
      { key: "all", label: "All" },
      { key: "clinical", label: "Clinical" },
      { key: "operations", label: "Operations" },
      { key: "customer", label: "Customer Experience" },
      { key: "admin", label: "Administration" },
    ],
  },
  ar: {
    heroTitle: "المراكز المفتوحة",
    heroText:
      "ابنِ مستقبلك في مركز طب الأسنان الرائد في الكويت، حيث تُحدث كل يوم فارقاً حقيقياً.",
    apply: "تقدم بطلبك الآن",
    tabs: [
      { key: "all", label: "الجميع" },
      { key: "clinical", label: "السريرية" },
      { key: "operations", label: "العمليات" },
      { key: "customer", label: "تجربة العملاء" },
      { key: "admin", label: "إدارة" },
    ],
  },
} satisfies Record<Locale, { heroTitle: string; heroText: string; apply: string; tabs: { key: string; label: string }[] }>;

const jobs: JobItem[] = [
  {
    id: "orthodontist",
    title: { en: "Orthodontist", ar: "أخصائي تقويم الأسنان" },
    category: "clinical",
    tags: {
      en: ["Salmiya", "Clinical", "Full Time"],
      ar: ["السالمية", "سريري", "دوام كامل"],
    },
  },
  {
    id: "general-dentist",
    title: { en: "General Dentist", ar: "طبيب أسنان عام" },
    category: "clinical",
    tags: {
      en: ["Salmiya", "Full Time"],
      ar: ["السالمية", "دوام كامل"],
    },
  },
  {
    id: "dental-nurse-assistant",
    title: { en: "Dental Nurse / Dental Assistant", ar: "ممرضة أسنان / مساعد طبيب أسنان" },
    category: "clinical",
    tags: {
      en: ["Salmiya", "Clinical", "Full Time"],
      ar: ["السالمية", "سريري", "دوام كامل"],
    },
  },
  {
    id: "patient-experience-coordinator",
    title: { en: "Patient Experience Coordinator", ar: "منسق تجربة المريض" },
    category: "customer",
    tags: {
      en: ["Customer Experience", "Salmiya", "Full Time"],
      ar: ["تجربة العملاء", "السالمية", "دوام كامل"],
    },
  },
  {
    id: "front-desk-receptionist",
    title: { en: "Front Desk Receptionist", ar: "موظف استقبال مكتب الاستقبال" },
    category: "customer",
    tags: {
      en: ["Reception", "Salmiya", "Full Time"],
      ar: ["الاستقبال", "السالمية", "دوام كامل"],
    },
  },
  {
    id: "hr-specialist",
    title: { en: "Human Resources Specialist", ar: "أخصائي الموارد البشرية" },
    category: "admin",
    tags: {
      en: ["Human Resources", "Full Time"],
      ar: ["الموارد البشرية", "دوام كامل"],
    },
  },
  {
    id: "operations-coordinator",
    title: { en: "Operations Coordinator", ar: "منسق العمليات" },
    category: "operations",
    tags: {
      en: ["Operations", "Salmiya", "Full Time"],
      ar: ["العمليات", "السالمية", "دوام كامل"],
    },
  },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <image
        href="/images/careers/location-icon.svg"
        width="12"
        height="12"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

function JobCard({ job, locale }: { job: JobItem; locale: Locale }) {
  return (
    <article className={styles.jobCard}>
      <div className={styles.jobContent}>
        <h2>{job.title[locale]}</h2>
        <div className={styles.tags} aria-label={locale === "ar" ? "تفاصيل الوظيفة" : "Job details"}>
          {job.tags[locale].map((tag, index) => (
            <span
  key={`${job.id}-${tag}`}
  className={styles.tag}
  style={index === 0 ? { backgroundColor: "#fff" } : undefined}
>
  {index === 0 ? <PinIcon /> : null}
  {tag}
</span>
          ))}
        </div>
      </div>
      <a className={styles.applyButton} href="#requestAppointment">
        {copy[locale].apply}
      </a>
    </article>
  );
}

export default function OpenPositionsPage() {
  const params = useParams();
  const locale = ((params?.locale as string) === "ar" ? "ar" : "en") as Locale;
  const isAr = locale === "ar";
  const t = copy[locale];

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <section className={styles.hero} aria-labelledby="open-positions-title">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <h1 id="open-positions-title">{t.heroTitle}</h1>
          <p>{t.heroText}</p>
        </div>
      </section>

      <section className={styles.tabsSection} aria-label={isAr ? "تصنيفات الوظائف" : "Job categories"}>
        <div className={styles.tabsWave} aria-hidden="true" />
        <nav className={styles.tabs}>
          {t.tabs.map((tab, index) => (
            <a key={tab.key} href="#positions" className={index === 0 ? styles.activeTab : undefined}>
              {tab.label}
            </a>
          ))}
        </nav>
      </section>

      <section id="positions" className={styles.positionsSection} aria-label={t.heroTitle}>
        <div className={styles.jobsList}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} locale={locale} />
          ))}
        </div>
      </section>

      <AppointmentSection locale={locale} />
    </main>
  );
}
