"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "en" | "ar";
type ValueItem = {
  number: string;
  title: Record<Locale, string>;
  description: Record<Locale, string[]>;
  bullets?: Record<Locale, string[]>;
  image: string;
  variant: "image-left" | "image-right";
  wave?: boolean;
  playAlt: Record<Locale, string>;
};

const copy = {
  en: {
    heroTitle: "Our Values",
    speakerName: "Dr. Essa Al Essa",
    speakerRole: "Chief Executive Officer of Asnan Tower",
  },
  ar: {
    heroTitle: "قيمنا",
    speakerName: "الدكتور عيسى العيسى",
    speakerRole: "الرئيس التنفيذي لبرج أسنان",
  },
} satisfies Record<Locale, Record<string, string>>;

const values: ValueItem[] = [
  {
    number: "01",
    title: { en: "Integrity", ar: "نزاهة" },
    description: {
      en: [
        "We say what we believe, and we do what we say. We are trusted because we are honest and reliable. We strive, personally, collectively, and institutionally, to align our words with our actions.",
      ],
      ar: [
        "نقول ما نؤمن به، ونفعل ما نقول. نحظى بالثقة لأننا صادقون وجديرون بالثقة. نسعى جاهدين، على الصعيد الشخصي والجماعي والمؤسسي، إلى تحقيق التوافق بين أقوالنا وأفعالنا.",
      ],
    },
    image: "/images/careers/d1.png",
    variant: "image-left",
    playAlt: { en: "Play integrity video", ar: "تشغيل فيديو نزاهة" },
  },
  {
    number: "02",
    title: { en: "Entrepreneurship", ar: "ريادة الأعمال" },
    description: {
      en: [
        "We act like owners of Asnan Tower. We commit to the discipline, responsibility, wisdom, initiative, and critical thinking needed to make the greatest contribution to Asnan and the community. We welcome change, look to the future, challenge the status quo, and encourage creativity to increase profitability and reduce waste.",
      ],
      ar: [
        "نحن نتصرف بصفتنا مالكي برج أسنان. نلتزم بالانضباط والمسؤولية والحكمة والمبادرة والتفكير النقدي اللازم لتحقيق أقصى إسهام لأسنان والمجتمع. نرحب بالتغيير، ونتطلع إلى المستقبل، ونتحدى الوضع الراهن، ونشجع الإبداع لزيادة الأرباح والحد من الهدر.",
      ],
    },
    image: "/images/careers/d1.png",
    variant: "image-right",
    wave: true,
    playAlt: { en: "Play entrepreneurship video", ar: "تشغيل فيديو ريادة الأعمال" },
  },
  {
    number: "03",
    title: { en: "Speed in Quality", ar: "السرعة في الجودة" },
    description: {
      en: [
        "Time is gold. We believe that delivering high-quality service faster is a competitive advantage. We seek to learn, think, discuss, execute, and improve at a faster pace, always aiming to apply the 48-hour rule.",
      ],
      ar: [
        "الوقت من ذهب. نؤمن بأن تقديم خدمة عالية الجودة بسرعة أكبر يُعد ميزة تنافسية. نسعى إلى التعلم والتفكير والنقاش والتنفيذ والتحسين بوتيرة أسرع، بهدف تطبيق قاعدة الـ 48 ساعة دائمًا.",
      ],
    },
    image: "/images/careers/d3.png",
    variant: "image-left",
    playAlt: { en: "Play speed in quality video", ar: "تشغيل فيديو السرعة في الجودة" },
  },
  {
    number: "04",
    title: { en: "Creating Fans, Not Guests", ar: "خلق معجبين، لا ضيوفاً" },
    description: {
      en: ["The shortest path to victory is making every guest a fan of Asnan Tower."],
      ar: ["أقصر طريق للنصر هو جعل كل ضيف \"معجبًا\" ببرج أسنان."],
    },
    bullets: {
      en: [
        "Fans continue to trust us with their oral health needs.",
        "Fans recommend their loved ones to us through word of mouth.",
        "Fans forgive us if they notice any shortcomings.",
      ],
      ar: [
        "يواصل المعجبون الوثوق بنا لتلبية احتياجاتهم المتعلقة بصحة الفم.",
        "يقوم المعجبون بترشيح أحبائهم لنا (عن طريق التوصية الشفهية).",
        "يسامحنا المشجعون إن لاحظوا أي قصور.",
      ],
    },
    image: "/images/careers/d4.png",
    variant: "image-right",
    wave: true,
    playAlt: { en: "Play creating fans video", ar: "تشغيل فيديو خلق المعجبين" },
  },
  {
    number: "05",
    title: { en: "Development Through Learning", ar: "التطور من خلال التعلم" },
    description: {
      en: [
        "We continually seek to gain and use the best knowledge to improve ourselves and everything around us. We proactively share knowledge with each other to build never-ending learning processes and ongoing development.",
      ],
      ar: [
        "نسعى باستمرار إلى اكتساب أفضل المعارف واستخدامها لتحسين أنفسنا وكل ما يحيط بنا. كما نتبادل معارفنا فيما بيننا بشكل استباقي لتطوير عمليات تعلم لا تنتهي ومواصلة التطور.",
      ],
    },
    image: "/images/careers/d5.png",
    variant: "image-left",
    playAlt: { en: "Play learning video", ar: "تشغيل فيديو التطور من خلال التعلم" },
  },
  {
    number: "06",
    title: { en: "Humility with Teamwork", ar: "التواضع مع العمل الجماعي" },
    description: {
      en: [
        "One for all, and all for one. We work together as one team, sharing a common purpose, culture, and goals. We treat others as they would like to be treated, practice intellectual honesty, value diversity, and genuinely care for everyone we work alongside in pursuit of our mission.",
      ],
      ar: [
        "واحد للجميع، والجميع للواحد. نعمل معًا بروح الفريق الواحد، متشاركين هدفًا وثقافةً وأهدافًا مشتركة. نعامل الآخرين كما يحبون أن يُعاملوا، ونمارس النزاهة الفكرية، ونُقدّر التنوع. نهتم بصدق بحماية ودعم كل من نعمل معهم جنبًا إلى جنب، سعيًا لتحقيق رسالتنا.",
      ],
    },
    image: "/images/careers/d6.png",
    variant: "image-right",
    wave: true,
    playAlt: { en: "Play teamwork video", ar: "تشغيل فيديو التواضع مع العمل الجماعي" },
  },
  {
    number: "07",
    title: { en: "Discuss Then Commit", ar: "ناقش ثم امتثل" },
    description: {
      en: [
        "We strive to discuss, understand, and fully commit every time to ensure excellence. Every voice has the right to be heard, but once a decision is made, we move as one team without compromise.",
      ],
      ar: [
        "نسعى جاهدين للمناقشة والفهم والامتثال التام في كل مرة لضمان التميز. لكل صوت الحق في أن يُسمع، ولكن بمجرد اتخاذ القرار، نتحرك كفريق واحد، دون أي تنازلات.",
      ],
    },
    image: "/images/careers/d7.png",
    variant: "image-left",
    playAlt: { en: "Play discuss then commit video", ar: "تشغيل فيديو ناقش ثم امتثل" },
  },
  {
    number: "08",
    title: { en: "Positivity and Fun", ar: "الإيجابية والمرح" },
    description: {
      en: [
        "We enjoy our work. Dentistry demands great effort, but hard work can also be fun. We take our work seriously and believe that an enjoyable workplace helps us provide better care for our patients and a better environment for our team. We strive for excellence and enjoy achieving it.",
      ],
      ar: [
        "نستمتع بعملنا. العمل في طب الأسنان يتطلب جهدًا كبيرًا، لكن العمل الشاق قد يكون ممتعًا أيضًا. نأخذ عملنا على محمل الجد، ونؤمن بأن بيئة العمل الممتعة تُسهم في تقديم رعاية أفضل لمرضانا وتوفير بيئة عمل أفضل لفريقنا. نسعى جاهدين للتميز، ونستمتع بتحقيقه.",
      ],
    },
    image: "/images/careers/d7.png",
    variant: "image-right",
    wave: true,
    playAlt: { en: "Play positivity and fun video", ar: "تشغيل فيديو الإيجابية والمرح" },
  },
];

function PlayIcon() {
  return (
    <span className={styles.playIcon} aria-hidden="true">
      <Image src="/images/play.svg" alt="" width={110} height={110} />
    </span>
  );
}

function ValueSection({ item, locale }: { item: ValueItem; locale: Locale }) {
  const reverse = item.variant === "image-right";

  return (
    <section className={`${styles.valueSection} ${item.wave ? styles.waveSection : ""}`} aria-labelledby={`value-${item.number}`}>
      {item.wave ? <div className={styles.waveBg} aria-hidden="true" /> : null}
      <div className={`${styles.valueInner} ${reverse ? styles.reverse : ""}`}>
        <a className={styles.videoPanel} href="#" aria-label={item.playAlt[locale]}>
          <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 806px" className={styles.videoImage} />
          <span className={styles.videoShade} aria-hidden="true" />
          <PlayIcon />
          <span className={styles.videoCaption}>
            <strong>{copy[locale].speakerName}</strong>
            <span>{copy[locale].speakerRole}</span>
          </span>
        </a>

        <div className={styles.valueContent}>
          <p className={styles.valueNumber}>{locale === "ar" ? `القيمة ${item.number}` : `Value ${item.number}`}</p>
          <h2 id={`value-${item.number}`}>{item.title[locale]}</h2>
          {item.description[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {item.bullets ? (
            <ul>
              {item.bullets[locale].map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function CareerValuesPage() {
  const params = useParams();
  const locale = ((params?.locale as string) === "ar" ? "ar" : "en") as Locale;
  const isAr = locale === "ar";

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <section className={styles.hero} aria-labelledby="career-values-title">
        <div className={styles.heroBg} aria-hidden="true" />
        <h1 id="career-values-title">{copy[locale].heroTitle}</h1>
      </section>

      <div className={styles.valuesList}>
        {values.map((item) => (
          <ValueSection key={item.number} item={item} locale={locale} />
        ))}
      </div>

      <AppointmentSection locale={locale} />
    </main>
  );
}
