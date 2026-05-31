"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FigmaOurTeam.module.css";

type FigmaOurTeamProps = {
  locale: string;
};

const doctors = {
  en: [
    {
      name: "Dr. Hashem Ghadanfari",
      subtitle: "Comprehensive and cosmetic dentistry specialist",
      education: "University of Missouri / United States of America",
      image: "dr-hashem.png",
      className: styles.hashem,
    },
    {
      name: "Dr. Khalid Alkhayat",
      subtitle: "Consultant orthodontist",
      education: "University at Buffalo, New York / United States of America",
      image: "dr-khalid.png",
      className: styles.khalid,
    },
    {
      name: "Dr. Amna Al Jassem",
      subtitle: "Advanced comprehensive and cosmetic dentistry specialist",
      education: "Royal College of Surgeons in Ireland",
      image: "dr-amna.png",
      className: styles.amna,
    },
  ],
  ar: [
    {
      name: "د. هاشم غضنفري",
      subtitle: "اختصاصي طب أسنان شامل و تجميل الأسنان",
      education: "جامعة ميسوري / الولايات المتحدة الأمريكية",
      image: "dr-hashem.png",
      className: styles.hashem,
    },
    {
      name: "د. خالد الخياط",
      subtitle: "استشاري تقويم الأسنان",
      education: "جامعة بافلو نيويورك / الولايات المتحدة الأمريكية",
      image: "dr-khalid.png",
      className: styles.khalid,
    },
    {
      name: "د. أمنية الجاسم",
      subtitle: "اختصاصي طب الأسنان الشامل المتقدم و تجميل الأسنان",
      education: "كلية الجراحين الملكية في إيرلندا",
      image: "dr-amna.png",
      className: styles.amna,
    },
  ],
};

const specialties = {
  en: [
    { icon: "icon-cosmetic.svg", label: "Cosmetic" },
    { icon: "icon-extraction-implant.svg", label: "Extraction & Implant" },
    { icon: "icon-gums.svg", label: "Gums" },
    { icon: "icon-cleaning-whitening.svg", label: "Cleaning & Whitening" },
    { icon: "icon-root-canal.svg", label: "Root Canal" },
    { icon: "icon-oral-surgery.svg", label: "Oral Surgery" },
    { icon: "icon-orthodontics.svg", label: "Orthodontics" },
  ],
  ar: [
    { icon: "icon-cosmetic.svg", label: "التجميل" },
    { icon: "icon-extraction-implant.svg", label: "الخلع والزراعة" },
    { icon: "icon-gums.svg", label: "اللثة" },
    { icon: "icon-cleaning-whitening.svg", label: "التنظيف و التبييض" },
    { icon: "icon-root-canal.svg", label: "علاج العصب" },
    { icon: "icon-oral-surgery.svg", label: "جراحة الفم والفكين" },
    { icon: "icon-orthodontics.svg", label: "التقويم" },
  ],
};

export default function FigmaOurTeam({ locale }: FigmaOurTeamProps) {
  const isAr = locale === "ar";

  const copy = {
    headline: isAr ? "نختارهم بعناية" : "We are Selective",
    watermark: "Our Team",
    cta: isAr ? "مشاهدة جميع الأطباء" : "View All Doctors",
  };

  const doctorList = isAr ? doctors.ar : doctors.en;
  const specialtyList = isAr ? specialties.ar : specialties.en;

  const [activeDoctorIndex, setActiveDoctorIndex] = useState(0);
  const totalDoctors = doctorList.length;
  const secondVisibleDoctorIndex = (activeDoctorIndex + 1) % totalDoctors;

  const getDoctorSlideStep = () => {
  if (typeof window === "undefined") return 1;

  const width = window.innerWidth;

  // 521px to 757px par 2 doctors ek sath change honge
  if (width >= 521 && width <= 757) {
    return 2;
  }

  // 520px se neeche old mobile behavior same rahega: 1 doctor change hoga
  return 1;
};

const goToPrevDoctor = () => {
  const step = getDoctorSlideStep();

  setActiveDoctorIndex((prev) => {
    return (prev - step + totalDoctors) % totalDoctors;
  });
};

const goToNextDoctor = () => {
  const step = getDoctorSlideStep();

  setActiveDoctorIndex((prev) => {
    return (prev + step) % totalDoctors;
  });
};

  return (
    <section
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <img
        className={styles.bgMain}
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/team-bg-main.png`}
        alt=""
        aria-hidden="true"
      />

      <div className={styles.bgOverlay} aria-hidden="true" />

      <img
        className={styles.bgPattern}
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/team-bg-pattern.png`}
        alt=""
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <p className={styles.headline}>{copy.headline}</p>

        <div className={styles.watermark} aria-hidden="true">
          {copy.watermark}
        </div>

        <img
          className={styles.doctorsCurveMask}
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/team-doctors-curve-mask.png`}
          alt=""
          aria-hidden="true"
        />

        <div className={styles.doctorsStage}>
          <button
            type="button"
            className={`${styles.sliderButton} ${styles.prevButton}`}
            onClick={goToPrevDoctor}
            aria-label={isAr ? "الطبيب السابق" : "Previous doctor"}
          >
            <img
              src="/images/next-arrow.svg"
              alt=""
            />
          </button>

          {doctorList.map((doctor, index) => (
            <article
              className={`${styles.doctor} ${doctor.className} ${
  index === activeDoctorIndex ? styles.activeDoctor : ""
} ${
  index === activeDoctorIndex || index === secondVisibleDoctorIndex
    ? styles.visibleDoctor
    : ""
}`}
              key={doctor.name}
            >
              <img
                className={styles.doctorPhoto}
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/${doctor.image}`}
                alt={doctor.name}
              />

              <div className={styles.doctorInfo}>
                <div className={styles.doctorText}>
                  <h3>{doctor.name}</h3>
                  <p className={styles.subtitle}>{doctor.subtitle}</p>
                  <p className={styles.education}>{doctor.education}</p>
                </div>

                <Link
                  className={styles.arrowLink}
                  href={`/${locale}/our-team`}
                  aria-label={doctor.name}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/arrow-yellow-left.svg`}
                    alt=""
                  />
                </Link>
              </div>
            </article>
          ))}

          <button
            type="button"
            className={`${styles.sliderButton} ${styles.nextButton}`}
            onClick={goToNextDoctor}
            aria-label={isAr ? "الطبيب التالي" : "Next doctor"}
          >
            <img
              src="/images/home/next-arrow.svg"
              alt=""
            />
          </button>
        </div>

        <ul
          className={styles.specialties}
          aria-label={isAr ? "التخصصات" : "Specialties"}
        >
          {specialtyList.map((specialty) => (
            <li className={styles.specialty} key={specialty.label}>
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/${specialty.icon}`}
                alt=""
              />
              <span>{specialty.label}</span>
            </li>
          ))}
        </ul>

        <div className={styles.ctaWrap}>
          <Link className={styles.cta} href={`/${locale}/our-team`}>
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}