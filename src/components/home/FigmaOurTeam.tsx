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
      image: "/images/team/dr-hashem.png",
      className: styles.hashem,
    },
    {
      name: "Dr. Khalid Alkhayat",
      subtitle: "Consultant orthodontist",
      education: "University at Buffalo, New York / United States of America",
      image: "/images/team/dr-khalid.png",
      className: styles.khalid,
    },
    {
      name: "Dr. Amna Al Jassem",
      subtitle: "Advanced comprehensive and cosmetic dentistry specialist",
      education: "Royal College of Surgeons in Ireland",
      image: "/images/team/dr-amna.png",
      className: styles.amna,
    },
  ],
  ar: [
    {
      name: "د. هاشم غضنفري",
      subtitle: "اختصاصي طب أسنان شامل و تجميل الأسنان",
      education: "جامعة ميسوري / الولايات المتحدة الأمريكية",
      image: "/images/team/dr-hashem.png",
      className: styles.hashem,
    },
    {
      name: "د. خالد الخياط",
      subtitle: "استشاري تقويم الأسنان",
      education: "جامعة بافلو نيويورك / الولايات المتحدة الأمريكية",
      image: "/images/team/dr-khalid.png",
      className: styles.khalid,
    },
    {
      name: "د. أمنية الجاسم",
      subtitle: "اختصاصي طب الأسنان الشامل المتقدم و تجميل الأسنان",
      education: "كلية الجراحين الملكية في إيرلندا",
      image: "/images/team/dr-amna.png",
      className: styles.amna,
    },
  ],
};

const specialties = {
  en: [
    { icon: "/images/team/icon-cosmetic.svg", label: "Cosmetic" },
    { icon: "/images/team/icon-extraction-implant.svg", label: "Extraction & Implant" },
    { icon: "/images/team/icon-gums.svg", label: "Gums" },
    { icon: "/images/team/icon-cleaning-whitening.svg", label: "Cleaning & Whitening" },
    { icon: "/images/team/icon-root-canal.svg", label: "Root Canal" },
    { icon: "/images/team/icon-oral-surgery.svg", label: "Oral Surgery" },
    { icon: "/images/team/icon-orthodontics.svg", label: "Orthodontics" },
  ],
  ar: [
    { icon: "/images/team/icon-cosmetic.svg", label: "التجميل" },
    { icon: "/images/team/icon-extraction-implant.svg", label: "الخلع والزراعة" },
    { icon: "/images/team/icon-gums.svg", label: "اللثة" },
    { icon: "/images/team/icon-cleaning-whitening.svg", label: "التنظيف و التبييض" },
    { icon: "/images/team/icon-root-canal.svg", label: "علاج العصب" },
    { icon: "/images/team/icon-oral-surgery.svg", label: "جراحة الفم والفكين" },
    { icon: "/images/team/icon-orthodontics.svg", label: "التقويم" },
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

  return (
    <section className={`${styles.section} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <img className={styles.bgMain} src="/images/team/team-bg-main.png" alt="" aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />
      <img className={styles.bgPattern} src="/images/team/team-bg-pattern.png" alt="" aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.headline}>{copy.headline}</p>
        <div className={styles.watermark} aria-hidden="true">{copy.watermark}</div>
        <img className={styles.doctorsCurveMask} src="/images/team/team-doctors-curve-mask.png" alt="" aria-hidden="true" />

        <div className={styles.doctorsStage}>
          {doctorList.map((doctor) => (
            <article className={`${styles.doctor} ${doctor.className}`} key={doctor.name}>
              <img className={styles.doctorPhoto} src={doctor.image} alt={doctor.name} />
              <div className={styles.doctorInfo}>
                <div className={styles.doctorText}>
                  <h3>{doctor.name}</h3>
                  <p className={styles.subtitle}>{doctor.subtitle}</p>
                  <p className={styles.education}>{doctor.education}</p>
                </div>
                <Link className={styles.arrowLink} href={`/${locale}/our-team`} aria-label={doctor.name}>
                  <img src="/images/team/arrow-yellow-left.svg" alt="" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <ul className={styles.specialties} aria-label={isAr ? "التخصصات" : "Specialties"}>
          {specialtyList.map((specialty) => (
            <li className={styles.specialty} key={specialty.label}>
              <img src={specialty.icon} alt="" />
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
