import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

type FooterProps = {
  locale?: string;
};

const copy = {
  en: {
    contacts: [
      { label: "Send Message", icon: "/images/footer/icon-email.svg", href: "mailto:info@asnan.com" },
      { label: "Direct Call", icon: "/images/footer/icon-phone.svg", href: "tel:+9651896666" },
      { label: "WhatsApp", icon: "/images/footer/icon-whatsapp.svg", href: "https://wa.me/1896666" },
    ],
    departmentsHeading: "Our Departments",
    departments: [
      { label: "Reception", href: "/services/departments" },
      { label: "Dental Lab", href: "/services/departments" },
      { label: "Asnan Kids", href: "/kids" },
      { label: "Orthodontics", href: "/services/departments/orthodontics" },
      { label: "Health Club & Consultation", href: "/services/departments" },
      { label: "Cosmetic & Comprehensive Dentistry", href: "/services/departments" },
      { label: "Gum Surgery & Dental Implants", href: "/services/departments" },
      { label: "Oral & Dental Health", href: "/services/departments" },
      { label: "Root Canal Treatment & Surgery", href: "/services/departments" },
      { label: "Prosthodontics & Comprehensive Dentistry", href: "/services/departments" },
    ],
    quickHeading: "Quick Links",
    quickLinks: [
      { label: "Testimonials", href: "/services/testimonials" },
      { label: "Careers", href: "/careers" },
      { label: "New Visitor", href: "/services/im-new" },
    ],
    legalHeading: "Legal",
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
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
      { label: "واتس اب", icon: "/images/footer/icon-whatsapp.svg", href: "https://wa.me/1896666" },
    ],
    departmentsHeading: "أقسامنا",
    departments: [
      { label: "الاستقبال", href: "/services/departments" },
      { label: "مختبر اسنان", href: "/services/departments" },
      { label: "اسنان كيدز (طب اسنان الأطفال)", href: "/kids" },
      { label: "تقويم الاسنان", href: "/services/departments/orthodontics" },
      { label: "استراحات ونادي صحي", href: "/services/departments" },
      { label: "التجميل و طب الاسنان الشامل", href: "/services/departments" },
      { label: "جراحه اللثه و زراعه الاسنان", href: "/services/departments" },
      { label: "صحه الفم و الاسنان", href: "/services/departments" },
      { label: "علاج أقنيه جذور الاسنان و جراحة ( علاج عصب )", href: "/services/departments" },
      { label: "التركيبات وطب الاسنان الشامل", href: "/services/departments" },
    ],
    quickHeading: "الروابط السريعة",
    quickLinks: [
      { label: "اراء المراجعين", href: "/services/testimonials" },
      { label: "وظائف", href: "/careers" },
      { label: "مراجع جديد", href: "/services/im-new" },
    ],
    legalHeading: "القانونية",
    legal: [
      { label: "سياسة الخصوصية", href: "/privacy-policy" },
      { label: "الأحكام والشروط", href: "/terms-and-conditions" },
    ],
    satThuLabel: "توقيت العمل (السبت - الخميس)",
    satThuValue: "٩:٠٠ صباحاً حتى ١٠:٠٠ مساءً",
    fridayLabel: "توقيت العمل (الجمعة)",
    fridayValue: "٤:٠٠ مساءً حتى ١٠:٠٠ مساءً",
    copyright: "© 2026 أسنان. جميع الحقوق محفوظة.",
  },
};

const socialLinks = [
  { label: "TikTok", icon: "/images/footer/social-tiktok.svg", href: "#" },
  { label: "LinkedIn", icon: "/images/footer/social-linkedin.svg", href: "#" },
  { label: "Facebook", icon: "/images/footer/social-facebook.svg", href: "#" },
  { label: "X", icon: "/images/footer/social-x.svg", href: "#" },
  { label: "Snapchat", icon: "/images/footer/social-snapchat.svg", href: "#" },
  { label: "Instagram", icon: "/images/footer/social-instagram.svg", href: "#" },
  { label: "YouTube", icon: "/images/footer/social-youtube.svg", href: "#" },
];

function withLocale(locale: string, href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href === "#") {
    return href;
  }
  return `/${locale}${href}`;
}

function LinkList({
  locale,
  heading,
  items,
}: {
  locale: string;
  heading: string;
  items: { label: string; href: string }[];
}) {
  return (
    <section className={styles.linkGroup}>
      <h3>{heading}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <Link href={withLocale(locale, item.href)}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Footer({ locale = "en" }: FooterProps) {
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  return (
    <footer id="contactUs" className={`${styles.footer} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <nav className={styles.contactNav} aria-label={isAr ? "روابط التواصل" : "Contact links"}>
            {t.contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.contactItem}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className={styles.contactIcon}>
                  <img src={item.icon} alt="" />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <Link href={`/${locale}`} className={styles.logoLink} aria-label="Asnan Tower">
            <img className={styles.logo} src="/images/footer/footer-logo.svg" alt="Asnan Tower" />
          </Link>
        </div>

        <div className={styles.divider} />

        <div className={styles.mainGrid}>
          <div className={styles.linksArea}>
            <LinkList locale={locale} heading={t.departmentsHeading} items={t.departments} />
            <div className={styles.stackedLinks}>
              <LinkList locale={locale} heading={t.quickHeading} items={t.quickLinks} />
              <LinkList locale={locale} heading={t.legalHeading} items={t.legal} />
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
                <img src="/images/footer/Asnan-Google-Play.svg" alt="Get it on Google Play" />
              </a>
              <a href="https://apps.apple.com/kw/app/asnan-tower/id1495283859" target="_blank" rel="noreferrer" aria-label="App Store">
                <img src="/images/footer/Asnan-App-Store.svg" alt="Download on the App Store" />
              </a>
            </div>
          </section>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <nav className={styles.socials} aria-label={isAr ? "روابط التواصل الاجتماعي" : "Social links"}>
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                <img src={item.icon} alt="" />
              </a>
            ))}
          </nav>

          <p className={styles.copyright}>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
