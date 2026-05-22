"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import KidsFeatureSection from "@/components/kids/KidsFeatureSection";
import KidsWaveFeatureSection from "@/components/kids/KidsWaveFeatureSection";
import styles from './KidsPage.module.css';

const characterTabs = {
  ar: [
    {
      id: 0,
      name: "السيد توث",
      image: "/images/Mr. Tooth.svg",
      description: "السيد توث هو البطل الشجاع في عالم أسنان كيدز، يساعد الأطفال على كسر الخوف من زيارة طبيب الأسنان ويشجعهم على العناية اليومية بابتسامتهم.",
    },
    {
      id: 1,
      name: "فروشة",
      image: "/images/Brushy.svg",
      description: "فروشة صديقة الأطفال التي تعلمهم الطريقة الصحيحة لاستخدام الفرشاة بطريقة ممتعة، وتذكرهم بأهمية تنظيف الأسنان صباحاً ومساءً.",
    },
    {
      id: 2,
      name: "السيدة توث",
      image: "/images/Mrs. Tooth.svg",
      description: "السيدة توث تركز على العادات الصحية اليومية مثل تقليل السكريات والاهتمام بنظافة الفم، وتساعد الأطفال على بناء روتين صحي يدوم معهم.",
    },
    {
      id: 3,
      name: "سوبر معجون",
      image: "/images/Superpaste.svg",
      description: "سوبر معجون يعلم أطفالنا الطريقة الصحيحة لاستخدام المعجون بطريقة ممتعة، ويذكرهم بأهمية تنظيف الأسنان صباحاً ومساءً.",
    },
    {
      id: 4,
      name: "فلوسي",
      image: "/images/Flossy.svg",
      description: "فلوسي صديقة الأطفال الذكية التي تعلمهم أهمية تنظيف ما بين الأسنان بالخيط بطريقة بسيطة ومناسبة لأعمارهم.",
    },
  ],
  en: [
    {
      id: 0,
      name: "Mr. Tooth",
      image: "/images/Mr. Tooth.svg",
      description: "Mr. Tooth is the brave hero of Asnan Kids, helping children overcome dental anxiety and feel confident about every clinic visit.",
    },
    {
      id: 1,
      name: "Brushy",
      image: "/images/Brushy.svg",
      description: "Brushy is the friendly character who teaches kids the right brushing technique in a fun way and reminds them to brush every morning and night.",
    },
    {
      id: 2,
      name: "Mrs. Tooth",
      image: "/images/Mrs. Tooth.svg",
      description: "Mrs. Tooth focuses on healthy daily habits, from reducing sugar intake to proper oral care for stronger teeth.",
    },
    {
      id: 3,
      name: "Superpaste",
      image: "/images/Superpaste.svg",
      description: "Superpaste teaches kids the right toothpaste routine in a fun way and reminds them to keep their smiles clean every day.",
    },
    {
      id: 4,
      name: "Flossy",
      image: "/images/Flossy.svg",
      description: "Flossy helps children understand why cleaning between teeth matters and how to do it in a simple child-friendly way.",
    },
  ]
};

const treatmentsContent = {
  ar: {
    generalAnesthesia: {
      title: "التخدير العام",
      subTitle: "لماذا تختار طبيب متخرج من أمريكا؟",
      paragraph: "نوفّر التخدير العام للأطفال في الحالات التي تتطلب علاجاً شاملاً أو عندما يصعب إتمام العلاج بالطرق التقليدية. تتم جميع الإجراءات تحت إشراف فريق طبي متخصص لضمان أعلى درجات الأمان والراحة لطفلك."
    },
    laughingGas: {
      title: "الغاز الضاحك",
      subTitle: "أكسيد النايتروس لراحة طفلك",
      paragraph: "يساعد الأطفال الذين لديهم نسبة عالية من الخوف والتوتر أثناء العلاج على الاسترخاء. فهو مهدئ للأعصاب يعطي احساساً لطيفاً بالراحة والسعادة."
    },
    prevention: {
      title: "درهم وقاية خير من قنطار علاج",
      subTitle: "المحافظة على ابتسامة طفلك",
      paragraph: "يتكون البلاك في الغالب من البكتيريا التي تتغذى على السكر. يوصى بزيارة طبيب أسنان الأطفال كل ستة أشهر من عيد ميلاد الطفل الأول."
    },
    preventiveFillings: {
      title: "الحشوات الوقائية",
      subTitle: "حماية الطواحن الدائمة",
      paragraph: "توضع على تجاويف الطواحن الدائمة عند اكتمال ظهورها بالفم وتقلل نسبة التسوس. انها الأفضل من حيث الوقاية ولا تتطلب برد الاسنان."
    },
    cosmeticFillings: {
      title: "الحشوات التجميلية العلاجية",
      subTitle: "علاج التسوس والمحافظة على السن",
      paragraph: "توضع هذه الحشوات على الاسنان الدائمة لعلاج التسوس وسد التجويف الناتج عن التسوس والمحافظة على السن الطبيعي."
    },
    rootCanal: {
      title: "علاج العصب والتلبيس",
      subTitle: "الحفاظ على الأسنان اللبنية",
      paragraph: "عدم علاج التهاب عصب السن اللبني ممكن ان يؤثر سلباً على لون، شكل وبنية السن الدائم. الضرس اللبني له عصبه الخاص."
    },
    crowns: {
      title: "التاج للأسنان اللبنية الخلفية",
      subTitle: "وظيفة الأسنان اللبنية",
      paragraph: "يوضع التاج على السن اللبني بعد علاج العصب. وظيفتها المحافظة على المسافة لبزوغ الاسنان الدائمة وتسهيل المضغ."
    },
    extraction: {
      title: "خلع الاسنان اللبنية",
      subTitle: "متى يكون الخلع ضرورياً؟",
      paragraph: "يعدّ هذا الإجراء ضرورياً في بعض الأحيان لتحسين صحة طفلك بشكل عام، في حالات تسوس الأسنان الشديد."
    },
    earlyOrtho: {
      title: "التقويم المبكر",
      subTitle: "تعديل نمو الفك",
      paragraph: "يستخدم للأطفال الذين يعانون من بروز بالفك مما يسبب تراجم الاسنان. يبدأ التدخل لمساعدة الفك على النمو بطريقة صحيحة."
    },
    removableAppliance: {
      title: "الأجهزة المتحركة لتقويم الأسنان",
      subTitle: "حالات استخدام الأجهزة",
      paragraph: "تستعمل في حالات سوء اطباق الفكين، صعوبة المضغ، أو فقد احد الاسنان المبكر."
    },
    spaceMaintainer: {
      title: "حافظ المسافة",
      subTitle: "منع تراكم الأسنان",
      paragraph: "في حال الخلع المبكر للاسنان اللبنية، يقوم بتثبيت باقي الاسنان والمحافظة على المسافات للأسنان التي ستظهر لاحقاً."
    }
  },
  en: {
    generalAnesthesia: {
      title: "General Anesthesia",
      subTitle: "Why Choose an American Graduate Dentist?",
      paragraph: "We provide general anesthesia for children when comprehensive treatment is needed or when regular chair-side care is not suitable."
    },
    laughingGas: {
      title: "Laughing Gas",
      subTitle: "Nitrous Oxide for Comfort",
      paragraph: "Scientifically known as Nitrous Oxide, it helps children who have a high level of fear and anxiety during treatment to relax."
    },
    prevention: {
      title: "Prevention is Better Than Cure",
      subTitle: "Maintaining Your Child's Smile",
      paragraph: "Plaque is mostly bacteria that feeds on sugar. It's recommended to visit the pediatric dentist every six months from the first birthday."
    },
    preventiveFillings: {
      title: "Preventive Fillings",
      subTitle: "Protecting Permanent Molars",
      paragraph: "They are placed on the grooves of permanent molars to reduce the rate of cavities without requiring tooth filing."
    },
    cosmeticFillings: {
      title: "Cosmetic Therapeutic Fillings",
      subTitle: "Treating Decay and Preserving Teeth",
      paragraph: "These fillings are placed on permanent teeth to treat cavities and preserve the natural tooth structure."
    },
    rootCanal: {
      title: "Root Canal Treatment and Crowns",
      subTitle: "Preserving Primary Teeth",
      paragraph: "Not treating an inflamed nerve in a primary tooth can negatively affect the color and structure of the permanent tooth."
    },
    crowns: {
      title: "Crown for Primary Back Teeth",
      subTitle: "Function of Primary Teeth",
      paragraph: "The crown is placed after nerve treatment to maintain space for permanent teeth and facilitate proper chewing."
    },
    extraction: {
      title: "Primary Teeth Extraction",
      subTitle: "When is Extraction Necessary?",
      paragraph: "This procedure is sometimes necessary for overall health in cases of severe decay or as part of orthodontic treatment."
    },
    earlyOrtho: {
      title: "Early Orthodontics",
      subTitle: "Jaw Growth Correction",
      paragraph: "Used for children with jaw protrusion or crowding. Medical intervention helps the jaw grow correctly and avoids future surgery."
    },
    removableAppliance: {
      title: "Removable Orthodontic Appliances",
      subTitle: "Cases for Appliance Use",
      paragraph: "Used for jaw malocclusion, difficulty chewing, or early loss of a tooth resulting in crowding."
    },
    spaceMaintainer: {
      title: "Space Maintainer",
      subTitle: "Preventing Tooth Crowding",
      paragraph: "In case of early extraction of primary teeth, it holds remaining teeth in place and preserves spaces for future teeth."
    }
  }
};

const copy = {
  ar: {
    heroTitle: "أسنان",
    heroCount: "٤٧ مقالة من قبل أسنان تاور",
    searchPlaceholder: "اكتب هنا على سبيل المثال: كيف أحافظ على صحة أسناني؟",
    searchBtn: "البحث",
    articlesTitle: "مقالات مختارة بعناية",
    articlesSubtitle: "مقالات مفيدة مختارة من قبل أسنان تاور",
    bookNow: "احجز الآن",
    learnMore: "تعلم المزيد",
    categoriesTitle: "المجالات المطلوبة",
    categoriesSubtitle: "تصفح الفئات المختلفة المتاحة في قاعدة المعرفة.",
    faqTitle: "أسئلة وأجوبة",
    faqSubtitle: "إبحث عن إجابة سريعة لمشكلة أو سؤال عن كيفية القيام به.",
    cats: ["الوقاية", "طوارئ الأسنان", "مشاكل الأسنان", "صحة الفم والجسم", "الأسئلة الأكثر شيوعاً"],
    welcomeTitle: "مرحباً بكم في",
    welcomeTitleSpan: "أسنان كيدز",
    charactersTitle: "شخصياتنا",
    charactersSubtitle: "تصفح الشخصيات المختلفة في قسم الأطفال.",
    treatmentsTitle: "العلاجات",
    treatmentsSubtitle: "دع خبراء طب الأسنان لدينا يستعيدون ابتسامتك بأحدث التقنيات للأسنان المفقودة أو المتضررة وأمراض اللثة وأي مشاكل تسبب لك الانزعاج أو القلق.",
  },
  en: {
    heroTitle: "Asnan",
    heroCount: "47 articles by Asnan Tower",
    searchPlaceholder: "Type here e.g: How to keep my teeth healthy?",
    searchBtn: "Search",
    articlesTitle: "Carefully Selected Articles",
    articlesSubtitle: "Useful articles selected by Asnan Tower",
    bookNow: "Book Now",
    learnMore: "Learn More",
    categoriesTitle: "Popular Categories",
    categoriesSubtitle: "Browse the different categories available in the knowledge base.",
    faqTitle: "Questions & Answers",
    faqSubtitle: "Find a quick answer to a problem or question about how to do something.",
    cats: ["Prevention", "Dental Emergencies", "Dental Problems", "Oral & Body Health", "Most Asked Questions"],
    welcomeTitle: "Welcome to",
    welcomeTitleSpan: "Asnan Kids",
    charactersTitle: "Our Characters",
    charactersSubtitle: "Browse the different characters in the kids section.",
    treatmentsTitle: "Treatments",
    treatmentsSubtitle: "Let our dental experts restore your smile with the latest technologies for missing or damaged teeth, gum disease, and any issues causing you discomfort or concern.",
  },
};


export default function KidsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;
  const content = isAr ? treatmentsContent.ar : treatmentsContent.en;
  const characters = isAr ? characterTabs.ar : characterTabs.en;

  const [activeChar, setActiveChar] = useState(0);

  return (
    <div className={styles.kidsPage} dir={isAr ? "rtl" : "ltr"}>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="hero-title">
                {t.heroTitle}
                <img className="kids-img img-fluid ms-3" src="/images/kids.png" alt="Kids" style={{ width: '100px' }} />
              </h1>
            </div>
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" className="call-btn phone-btn">
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone" height="50" />
                </div>
                <div className="call-btn-txt">
                  <p className="call-desc">{isAr ? "اتصل" : "Call"}</p>
                  <span className="phone-link">965-189<span>6666</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/Backgrounds/Asnan_Kids_Cover_Image2x.jpg" alt="background" />
          <img src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_Kids_Cropped@3x.jpg" alt="background mobile" />
        </div>
      </div>

      {/* Welcome Section */}
      <section className={styles.welcome}>
        <div className={styles.welcomeInner}>
          <div className={styles.welcomeContent}>
            <h2 className={styles.welcomeTitle}>
              {t.welcomeTitle}
              <span>{t.welcomeTitleSpan}</span>
            </h2>
            <p className={styles.welcomeText}>
              {isAr
                ? "تقدم عيادة أسنان تاور في الكويت رعاية أسنان عالية الجودة وشاملة للرضع والأطفال بما في ذلك ذوي الاحتياجات الخاصة برعاية استشاري أطباء أسنان الأطفال المعتمدون لدينا."
                : "Asnan Tower Clinic in Kuwait provides high-quality, comprehensive dental care for infants and children, including those with special needs, under the care of our certified pediatric dental consultants."}
            </p>
            <p className={styles.welcomeText}>
              {isAr
                ? "تم تصميم أسنان كيدز بطريقة محببة لطفلك تجعله يقضي الوقت داخل العيادة في بيئة مريحة حيث نقدم له كل الرعاية الصحية للفم وذلك للوقاية الأولية من لحظة الولادة و حتى سن المراهقة."
                : "Asnan Kids is designed in a child-friendly way that allows your child to spend time in the clinic in a comfortable environment where we provide complete oral health care for primary prevention from birth through adolescence."}
            </p>
            <p className={styles.welcomeText}>
              {isAr
                ? "الجو الآمن والمريح يجعل زيارة طفلك ممتعة وتعليمية من البداية وحتى النهاية."
                : "The safe and comfortable atmosphere makes your child's visit enjoyable and educational from start to finish."}
            </p>
          </div>
          <div className={styles.welcomeImgWrap}>
            <img src="/images/kids character image.png" alt="Welcome to Asnan Kids" />
          </div>
        </div>
      </section>

      {/* Our Characters */}
      <section className={styles.characters} style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_CDN_URL}/kids/kids-welcome-bg.png)` }}>
        <div className={styles.charactersBox}>
          <h2 className={styles.charactersTitle}>
            {isAr ? "شخصياتنا" : "Our Characters"}
          </h2>
          <p className={styles.charactersText}>
            {isAr ? "تصفح الشخصيات المختلفة في قسم الأطفال" : "Browse the different characters in the kids section"}
          </p>
        </div>
        <div className={styles.tabsBar}>
          <ul className={styles.tabsList}>
            {characters.map((char) => (
              <li
                key={char.id}
                className={`${styles.tabItem} ${activeChar === char.id ? styles.tabItemActive : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => setActiveChar(char.id)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveChar(char.id)}
              >
                <div className={styles.charImgWrap}>
                  <img src={char.image} alt={char.name} />
                </div>
                <span className={styles.tabLabel}>{char.name}</span>
              </li>
            ))}
          </ul>
          <div className={styles.tabDescription}>
            <p>{characters[activeChar].description}</p>
          </div>
        </div>
      </section>


      {/* Treatments Header */}
      <div className={styles.treatmentsHeader}>
        <div className={styles.treatmentsHeaderText}>
          <h3>{t.treatmentsTitle}</h3>
          <p>{t.treatmentsSubtitle}</p>
        </div>
        <img src="/images/security.svg" alt="Security" className={styles.securityIcon} />
      </div>

      {/* Treatment Sections */}
      <KidsFeatureSection
        locale={locale}
        image="/images/frame1.png"
        title={content.generalAnesthesia.title}
        subTitle={content.generalAnesthesia.subTitle}
        paragraph={content.generalAnesthesia.paragraph}
        variant="image-left"
      />

      <KidsWaveFeatureSection
        locale={locale}
        image="/images/frame2.png"
        title={content.laughingGas.title}
        subTitle={content.laughingGas.subTitle}
        paragraph={content.laughingGas.paragraph}
        variant="image-right"
      />

      <KidsFeatureSection
        locale={locale}
        image="/images/frame3.png"
        title={content.prevention.title}
        subTitle={content.prevention.subTitle}
        paragraph={content.prevention.paragraph}
        variant="image-left"
      />

      <KidsWaveFeatureSection
        locale={locale}
        image="/images/frame4.png"
        title={content.preventiveFillings.title}
        subTitle={content.preventiveFillings.subTitle}
        paragraph={content.preventiveFillings.paragraph}
        variant="image-right"
      />

      <KidsFeatureSection
        locale={locale}
        image="/images/frame5.png"
        title={content.cosmeticFillings.title}
        subTitle={content.cosmeticFillings.subTitle}
        paragraph={content.cosmeticFillings.paragraph}
        variant="image-left"
      />

      <KidsWaveFeatureSection
        locale={locale}
        image="/images/frame7.png"
        title={content.rootCanal.title}
        subTitle={content.rootCanal.subTitle}
        paragraph={content.rootCanal.paragraph}
        variant="image-right"
      />

      <KidsFeatureSection
        locale={locale}
        image="/images/frame4.png"
        title={content.crowns.title}
        subTitle={content.crowns.subTitle}
        paragraph={content.crowns.paragraph}
        variant="image-left"
      />

      <KidsWaveFeatureSection
        locale={locale}
        image="/images/frame6.png"
        title={content.extraction.title}
        subTitle={content.extraction.subTitle}
        paragraph={content.extraction.paragraph}
        variant="image-right"
      />

      <KidsFeatureSection
        locale={locale}
        image="/images/frame8.png"
        title={content.earlyOrtho.title}
        subTitle={content.earlyOrtho.subTitle}
        paragraph={content.earlyOrtho.paragraph}
        variant="image-left"
      />

      <KidsWaveFeatureSection
        locale={locale}
        image="/images/frame10.png"
        title={content.removableAppliance.title}
        subTitle={content.removableAppliance.subTitle}
        paragraph={content.removableAppliance.paragraph}
        variant="image-right"
      />

      <KidsFeatureSection
        locale={locale}
        image="/images/frame11.png"
        title={content.spaceMaintainer.title}
        subTitle={content.spaceMaintainer.subTitle}
        paragraph={content.spaceMaintainer.paragraph}
        variant="image-left"
      />
    </div>
  );
}