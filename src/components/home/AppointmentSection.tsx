import type { CSSProperties } from "react";
import Image from "next/image";
import styles from "./AppointmentSection.module.css";
import appointmentBg from "../../../public/images/appointment_home/booking-section-bg.png";

type AppointmentSectionProps = {
  locale: string;
};

const copy = {
  en: {
    title: "Book an Appointment",
    fullName: "Full Name",
    phone: "Phone Number",
    reason: "Reason for visit",
    submit: "Send Request",
    consent: "By clicking send request, you agree to Asnan's terms and conditions.",
    locationLabel: "Location",
    addressLine1: "Asnan Tower Center, Salmiya Block 1,",
    addressLine2: "Street 1, Blue Bay Tower, Kuwait",
    directions: "Get directions on Google Maps",
  },
  ar: {
    title: "احجز موعد",
    fullName: "الإسم الكامل",
    phone: "رقم الهاتف",
    reason: "سبب الزيارة",
    submit: "ارسل طلب",
    consent: "بالضغط على زر إرسال الطلب، فإنك توافق على شروط وأحكام أسنان.",
    locationLabel: "الموقع",
    addressLine1: "مركز اسنان تاور السالمية قطعة ١،",
    addressLine2: "شارع ١ عمارة بلو بي الكويت",
    directions: "احصل على الاتجاهات على خرائط جوجل",
  },
};

export default function AppointmentSection({ locale }: AppointmentSectionProps) {
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  return (
    <section
      id="requestAppointment"
      className={`${styles.section} ${isAr ? styles.rtl : styles.ltr}`}
      dir={isAr ? "rtl" : "ltr"}
      aria-labelledby="appointment-title"
      style={
        {
          "--appointment-bg": `url(${appointmentBg.src})`,
        } as CSSProperties
      }
    >
      <div className={styles.inner}>
        <div className={styles.formColumn}>
          <h2 id="appointment-title" className={styles.title}>
            {t.title}
          </h2>

          <form id="requestAppointmentForm" className={styles.formCard}>
            <label className={styles.field}>
              <span className={styles.srOnly}>{t.fullName}</span>
              <input
                type="text"
                name="fullname"
                required
                placeholder={t.fullName}
                autoComplete="name"
              />
            </label>

            <label className={`${styles.field} ${styles.phoneField}`}>
              <span className={styles.srOnly}>{t.phone}</span>

              <span className={styles.countrySelector} aria-hidden="true">
                <Image
                  src="/images/appointment_home/kuwait-flag.svg"
                  alt=""
                  width={20}
                  height={10}
                />
                <span>+965</span>
                <Image
                  src="/images/appointment_home/down-arrow.svg"
                  alt=""
                  width={6}
                  height={4}
                />
              </span>

              <input
                type="tel"
                name="phone"
                required
                placeholder={t.phone}
                autoComplete="tel"
              />
            </label>

            <label className={`${styles.field} ${styles.textareaField}`}>
              <span className={styles.srOnly}>{t.reason}</span>
              <textarea
                name="message"
                required
                placeholder={t.reason}
                rows={4}
              />
            </label>

            <div className={styles.formFooter}>
              <button type="submit" className={styles.submitButton}>
                {t.submit}
              </button>
              <p>{t.consent}</p>
            </div>
          </form>
        </div>

        <div className={styles.locationColumn}>
          <p className={styles.locationLabel}>{t.locationLabel}</p>

          <address className={styles.address}>
            {t.addressLine1}
            <br />
            {t.addressLine2}
          </address>

          <a
            className={styles.directionsButton}
            href="https://goo.gl/maps/tAkP2nQGtYx67U7d9"
            target="_blank"
            rel="noreferrer"
          >
            {t.directions}
          </a>
        </div>
      </div>
    </section>
  );
}