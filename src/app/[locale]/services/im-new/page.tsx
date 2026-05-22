"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "en" | "ar";

type StepItem = {
  id: string;
  image: string;
  title: Record<Locale, string>;
};

const copy = {
  en: {
    heroTitle: "I’m a New Patient",
    heroTextBefore: "Live a ",
    heroTextHighlight: "unique",
    heroTextAfter: " experience with Asnan Tower",
    beliefBefore: "We ",
    beliefHighlight: "believe",
    beliefAfter: " that treatment quality is the most important element for owning",
    beliefYellow: "the smile of a lifetime",
    paymentTitle: "Payment Methods",
    paymentText:
      "To make every patient comfortable, we provide monthly payment options for dental treatments such as orthodontics and cosmetic procedures with 0% profit.",
    paymentPlanLine1: "Monthly",
    paymentPlanLine2: "payment plans at",
    paymentProfit: "profit.",
    internationalTitle: "Patients outside Kuwait",
    internationalParagraphs: [
      "At Asnan Tower, we welcome many patients who travel from abroad to receive dental treatment from our specialists. We guarantee the highest level of dental care and provide guarantees on all treatments.",
      "To make your holiday more comfortable with dental treatment, our clinic team will gladly help with your travel needs by arranging booking and transportation from Kuwait Airport to Jumeirah Hotel, one of the finest hotels in Kuwait.",
      "Please contact us if you would like help arranging your travel.",
    ],
    travelButton: "Request travel arrangement",
    firstVisitTitle: "Your First Visit",
    firstVisitParagraphs: [
      "Our doctors and team are committed to providing the highest quality dental treatment for you and your family in a professional and welcoming environment.",
      "We understand that many patients are nervous about visiting the dentist. You will feel a different atmosphere from the moment you enter, and our doctors are trained to handle fear and dental phobia.",
      "Our goal is to make sure every patient feels safe and understands all treatment options.",
      "Your first visit is all about you — your dental needs, comfort, and satisfaction.",
    ],
    stepsHeadingBefore: "On your ",
    stepsHeadingHighlight: "first visit",
    stepsHeadingAfter: ", we will do the following",
  },
  ar: {
    heroTitle: "انا مراجع جديد",
    heroTextBefore: "عش تجربة ",
    heroTextHighlight: "فريدة",
    heroTextAfter: " مع اسنان تاور",
    beliefBefore: "نحن ",
    beliefHighlight: "نؤمن",
    beliefAfter: " بأن جودة العلاج هي العنصر الاهم لامتلاك",
    beliefYellow: "ابتسامة العمر",
    paymentTitle: "طرق الدفع",
    paymentText:
      "للتأكد من راحة المراجع نحن نقدم آليات دفع شهرية لعلاجات الأسنان مثل تقويم الأسنان والعمليات التجميلية مع 0٪ ارباح.",
    paymentPlanLine1: "خطط دفع",
    paymentPlanLine2: "شهرية  بـ",
    paymentProfit: "أرباح.",
    internationalTitle: "المراجعين من خارج الكويت",
    internationalParagraphs: [
      "في عيادة أسنان تاور، نستقبل العديد من المرضى الذين يأتون من الخارج لتلقي علاج الأسنان من قبل المتخصصين لدينا. نضمن لك أعلى مستوى من رعاية الأسنان ونقدم لك ضمانات على جميع العلاجات.",
      "لتسهيل عطلة أكثر راحة مع علاج الأسنان، سيكون موظفو عيادتنا سعداء لمساعدتك في احتياجات السفر الخاصة بك عن طريق ترتيب الحجز والنقل خلال فترة علاجك من مطار الكويت إلى فندق الجميرة الذي يعد من أفضل الفنادق في الكويت.",
      "يرجى الاتصال بنا إذا كنت ترغب في المساعدة في ترتيبات السفر الخاصة بك.",
    ],
    travelButton: "طلب ترتيب السفر",
    firstVisitTitle: "زيارتك الأولى",
    firstVisitParagraphs: [
      "يلتزم أطباءنا وموظفينا بتقديم أعلى جودة في علاج الأسنان لك ولعائلتك ضمن بيئة مهنية وعائلية عالية.",
      "نحن نفهم أن العديد من المرضى يخافون من زيارة طبيب الأسنان، ستشعر بجو مختلف فور دخولك من الدور الأرضي، بالإضافة الى أطبائنا المدربون على علاج الخوف والفوبيا.",
      "هدفنا هو التأكد من أن كل مريض يزورنا يشعر بالأمان ويطَلع على جميع خيارات العلاج.",
      "زيارتك الأولى هي كل شيء عنك – احتياجات أسنانك، راحتك ورضاك.",
    ],
    stepsHeadingBefore: "في ",
    stepsHeadingHighlight: "زيارتك الأولى",
    stepsHeadingAfter: "، سنقوم بما يلي",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

const firstVisitSteps: StepItem[] = [
  {
    id: "01",
    image: "/images/im-new/Review_medical_history-min.jpg",
    title: {
      en: "Review your medical history and dental health",
      ar: "مراجعة تاريخك الطبي وصحة الأسنان",
    },
  },
  {
    id: "02",
    image: "/images/im-new/address_dental_care-min.jpg",
    title: {
      en: "Address your concerns about dental treatment",
      ar: "معالجة مخاوفك المتعلقة بعلاج الأسنان",
    },
  },
  {
    id: "03",
    image: "/images/im-new/examination-min.jpg",
    title: {
      en: "We will perform a complete examination of your teeth and gums to check for cavities or gum disease",
      ar: "سنقوم بإجراء فحص شامل لأسنانك ولثتك للتحقق من وجود أي تسوسات أو أمراض اللثة",
    },
  },
  {
    id: "04",
    image: "/images/im-new/panoramic_xray-min.jpg",
    title: {
      en: "Take CT and panoramic X-rays to diagnose any hidden issues",
      ar: "أخذ الأشعة المقطعية و البانورامية لتشخيص أي مشاكل خفية",
    },
  },
  {
    id: "05",
    image: "/images/im-new/dental_treatment-min.jpg",
    title: {
      en: "We will create a dental treatment plan with different options and discuss it with you",
      ar: "سنضع خطة علاج الأسنان بخيارات مختلفة، والتي سيتم مناقشتها معك",
    },
  },
  {
    id: "06",
    image: "/images/im-new/payment_plan_and_explaining-min.jpg",
    title: {
      en: "We will explain the payment plans we offer and answer any questions about your dental needs",
      ar: "نخبرك بخطط الدفع التي نقدمها والإجابة على أي أسئلة قد تكون لديك بشأن احتياجات أسنانك",
    },
  },
];

export default function ImNewPage() {
  const params = useParams();
  const locale = ((params?.locale as string) === "ar" ? "ar" : "en") as Locale;
  const isAr = locale === "ar";
  const t = copy[locale];

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <section className={styles.hero} aria-labelledby="im-new-title">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <h1 id="im-new-title">{t.heroTitle as string}</h1>
          <p>
            {t.heroTextBefore as string}
            <span>{t.heroTextHighlight as string}</span>
            {t.heroTextAfter as string}
          </p>
        </div>
      </section>

      <section className={styles.beliefSection} aria-label={isAr ? "رسالة أسنان" : "Asnan message"}>
        <h2>
          {t.beliefBefore as string}
          <span className={styles.blue}>{t.beliefHighlight as string}</span>
          {t.beliefAfter as string}
          <br />
          <span className={styles.yellow}>{t.beliefYellow as string}</span>
          <span>.</span>
        </h2>
      </section>

      <section className={styles.paymentSection} aria-labelledby="payment-title">
        <div className={styles.paymentWave} aria-hidden="true" />
        <div className={styles.paymentInner}>
          <div className={styles.paymentCopy}>
            <h2 id="payment-title">{t.paymentTitle as string}</h2>
            <p>{t.paymentText as string}</p>
          </div>

          <div className={styles.paymentPlan} aria-label={isAr ? "خطط دفع شهرية بنسبة صفر بالمئة" : "Monthly plans at zero percent"}>
            <p>{t.paymentPlanLine1 as string}</p>
            <p>{t.paymentPlanLine2 as string}</p>
            <strong>0%</strong>
            <span>{t.paymentProfit as string}</span>
          </div>

          <div className={styles.paymentIcon}>
            <Image src="/images/payment-plan-icon.svg" alt="" width={226} height={174} />
          </div>
        </div>
      </section>

      <section className={styles.internationalSection} aria-labelledby="international-title">
        <div className={styles.internationalBg} aria-hidden="true" />
        <div className={styles.internationalInner}>
          <div className={styles.jumeirahBrand} aria-hidden="true">
            <Image className={styles.planeIcon} src="/images/international-patients-icon.svg" alt="" width={315} height={252} />
            <Image className={styles.jumeirahLogo} src="/images/jumeirah-icon.svg" alt="" width={388} height={131} />
          </div>

          <div className={styles.internationalCopy}>
            <h2 id="international-title">{t.internationalTitle as string}</h2>
            {(t.internationalParagraphs as string[]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a href="#requestAppointment" className={styles.travelButton}>
              {t.travelButton as string}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.firstVisitSection} aria-labelledby="first-visit-title">
        <div className={styles.firstVisitWave} aria-hidden="true" />
        <div className={styles.firstVisitInner}>
          <div className={styles.firstVisitCopy}>
            <h2 id="first-visit-title">{t.firstVisitTitle as string}</h2>
            {(t.firstVisitParagraphs as string[]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.firstVisitIcon} aria-hidden="true">
            <Image src="/images/first-visit-icon.svg" alt="" width={268} height={261} />
          </div>
        </div>
      </section>

      <section className={styles.stepsSection} aria-labelledby="first-visit-steps-title">
        <h2 id="first-visit-steps-title" className={styles.stepsTitle}>
          {t.stepsHeadingBefore as string}
          <span>{t.stepsHeadingHighlight as string}</span>
          {t.stepsHeadingAfter as string}
        </h2>

        <div className={styles.stepsGrid}>
          {firstVisitSteps.map((step) => (
            <article className={styles.stepCard} key={step.id}>
              <div className={styles.stepImageWrap}>
                <Image
                  src={step.image}
                  alt={step.title[locale]}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 991px) 50vw, 517px"
                  className={styles.stepImage}
                />
              </div>
              <strong className={styles.stepNumber}>{step.id}</strong>
              <h3>{step.title[locale]}</h3>
            </article>
          ))}
        </div>
      </section>

      <AppointmentSection locale={locale} />
    </main>
  );
}
