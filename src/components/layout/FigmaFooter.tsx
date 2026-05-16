import Image from "next/image";
import styles from "./FigmaFooter.module.css";

type FigmaFooterProps = {
  locale?: string;
};

const copy = {
  en: {
    contacts: [
      { label: "Send Message", icon: "/images/footer/icon-email.svg", href: "mailto:info@asnan.com" },
      { label: "Direct Call", icon: "/images/footer/icon-phone.svg", href: "tel:+9651896666" },
      { label: "WhatsApp", icon: "/images/footer/icon-whatsapp.svg.svg", href: "https://wa.me/1896666" },
    ],
    departmentsHeading: "Our Departments",
    departments: [
      "Reception",
      "Dental Lab",
      "Asnan Kids",
      "Orthodontics",
      "Health Club & Consultation",
      "Cosmetic & Comprehensive Dentistry",
      "Gum Surgery & Dental Implants",
      "Oral & Dental Health",
      "Root Canal Treatment & Surgery",
      "Prosthodontics & Comprehensive Dentistry",
    ],
    quickHeading: "Quick Links",
    quickLinks: ["Testimonials", "Careers", "New Visitor"],
    legalHeading: "Legal",
    legal: ["Privacy Policy", "Terms & Conditions"],
    satThuLabel: "Working Hours (Saturday - Thursday)",
    satThuValue: "9:00 AM to 10:00 PM",
    fridayLabel: "Working Hours (Friday)",
    fridayValue: "4:00 PM to 10:00 PM",
    copyright: "© 2026 Asnan. All rights reserved.",
  },
  ar: {
    contacts: [
      { label: "إرسال رسالة", icon: "/images/footer/icon-email.svg", href: "mailto:info@asnan.com" },
      { label: "الاتصال المباشر", icon: "/images/footer/icon-phone.svg", href: "tel:+9651896666" },
      { label: "واتساب", icon: "/images/footer/icon-whatsapp.svg.svg", href: "https://wa.me/1896666" },
    ],
    departmentsHeading: "أقسامنا",
    departments: [
      "الاستقبال",
      "مختبر أسنان",
      "أسنان كيدز (طب أسنان الأطفال)",
      "تقويم الأسنان",
      "استشارات ونادي صحي",
      "التجميل و طب الأسنان الشامل",
      "جراحة اللثة و زراعة الأسنان",
      "صحة الفم و الأسنان",
      "علاج أقنية جذور الأسنان و جراحة (علاج عصب)",
      "التركيبات وطب الأسنان الشامل",
    ],
    quickHeading: "الروابط السريعة",
    quickLinks: ["آراء المراجعين", "وظائف", "مراجع جديد"],
    legalHeading: "القانونية",
    legal: ["سياسة الخصوصية", "الأحكام والشروط"],
    satThuLabel: "توقيت العمل (السبت - الخميس)",
    satThuValue: "٩:٠٠ صباحاً حتى ١٠:٠٠ مساءً",
    fridayLabel: "توقيت العمل (الجمعة)",
    fridayValue: "٤:٠٠ مساءً حتى ١٠:٠٠ مساءً",
    copyright: "© 2026 أسنان. جميع الحقوق محفوظة.",
  },
};

const socialLinks = [
  { label: "TikTok", icon: "/images/footer/social-tiktok.svg" },
  { label: "LinkedIn", icon: "/images/footer/social-linkedin.svg" },
  { label: "Facebook", icon: "/images/footer/social-facebook.svg" },
  { label: "X", icon: "/images/footer/social-x.svg" },
  { label: "Snapchat", icon: "/images/footer/social-snapchat.svg" },
  { label: "Instagram", icon: "/images/footer/social-instagram.svg" },
  { label: "YouTube", icon: "/images/footer/social-youtube.svg" },
];

function LinkList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className={styles.linkGroup}>
      <h3>{heading}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function FigmaFooter({ locale = "en" }: FigmaFooterProps) {
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  return (
    <footer id="contactUs" className={`${styles.footer} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <nav className={styles.contactNav} aria-label={isAr ? "روابط التواصل" : "Contact links"}>
            {t.contacts.map((item) => (
              <a key={item.label} href={item.href} className={styles.contactItem} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                <span className={styles.contactIcon}>
                  <Image src={item.icon} alt="" width={18} height={18} />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <Image className={styles.logo} src="/images/footer/footer-logo.svg" alt="Asnan Tower" width={99} height={70} priority={false} />
        </div>

        <div className={styles.divider} />

        <div className={styles.mainGrid}>
          <div className={styles.linksArea}>
            <LinkList heading={t.departmentsHeading} items={t.departments} />
            <div className={styles.stackedLinks}>
              <LinkList heading={t.quickHeading} items={t.quickLinks} />
              <LinkList heading={t.legalHeading} items={t.legal} />
            </div>
          </div>

          <section className={styles.phoneArea} aria-label={isAr ? "معلومات الاتصال وساعات العمل" : "Phone and working hours"}>
            <a href="tel:+9651896666" className={styles.phoneNumber} aria-label="1896666">
              189<span>6666</span>
            </a>

            <div className={styles.hours}>
              <p>{t.satThuLabel}</p>
              <p>{t.satThuValue}</p>
            </div>

            <div className={styles.hours}>
              <p>{t.fridayLabel}</p>
              <p>{t.fridayValue}</p>
            </div>

            <div className={styles.storeBadges}>
              <a href="https://play.google.com/store/apps/details?id=com.asnan" target="_blank" rel="noreferrer" aria-label="Google Play">
                <Image src="/images/footer/google-play.png" alt="Get it on Google Play" width={128} height={35} />
              </a>
              <a href="https://apps.apple.com/kw/app/asnan-tower/id1495283859" target="_blank" rel="noreferrer" aria-label="App Store">
                <Image src="/images/footer/app-store.png" alt="Download on the App Store" width={128} height={35} />
              </a>
            </div>
          </section>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <nav className={styles.socials} aria-label={isAr ? "روابط التواصل الاجتماعي" : "Social links"}>
            {socialLinks.map((item) => (
              <a key={item.label} href="#" aria-label={item.label}>
                <Image src={item.icon} alt="" width={24} height={24} />
              </a>
            ))}
          </nav>
          <p className={styles.copyright}>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
