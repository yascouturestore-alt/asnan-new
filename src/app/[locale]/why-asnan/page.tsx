"use client";

import React from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import WhyAsnanFeatureSection from "@/components/why-asnan/WhyAsnanFeatureSection";
import WhyAsnanWaveFeatureSection from "@/components/why-asnan/WhyAsnanWaveFeatureSection";

type SectionItem = {
  component: "feature" | "wave";
  image: string;
  icon: string;
  variant: "image-left" | "image-right";
  title: {
    ar: string;
    en: string;
  };
  points?: {
    ar: string[];
    en: string[];
  };
  paragraphs?: {
    ar: string[];
    en: string[];
  };
  imageAlt: {
    ar: string;
    en: string;
  };
  iconAlt: {
    ar: string;
    en: string;
  };
};

export default function WhyAsnanPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);
  const isAr = locale === "ar";

  const sections: SectionItem[] = [
    {
      component: "feature",
      image: "/images/why-asnan/usa-graduate-building.png",
      icon: "/images/why-asnan/icon-university.svg",
      variant: "image-left",
      title: {
        ar: "لماذا تختار طبيب متخرج من أمريكا؟",
        en: "Why Choose an American Graduate Dentist?",
      },
      points: {
        ar: [
          "أكثر دولة تستثمر في الأبحاث والتطوير في مجال طب الأسنان.",
          "أكثر دولة تقدم اختراعات في العالم.",
          "أقوى جامعات طب الأسنان في العالم.",
          "أقدم جامعة لطب الأسنان في العالم كانت في أمريكا، في ماريلاند - بالتيمور.",
          "تخصصات طب الأسنان بدأت على مستوى العالم في أمريكا، في بوسطن.",
          "الشعب الأمريكي لديه أجمل ابتسامة.",
        ],
        en: [
          "The United States invests heavily in dental research and development.",
          "The United States leads the world in innovation.",
          "It is home to some of the strongest dental universities in the world.",
          "The oldest dental school in the world was founded in America, in Maryland, Baltimore.",
          "Dental specialties began at a global level in America, in Boston.",
          "Americans are known for beautiful smiles.",
        ],
      },
      imageAlt: {
        ar: "مبنى جامعة أمريكية",
        en: "American university building",
      },
      iconAlt: {
        ar: "أيقونة جامعة",
        en: "University icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/talent-experience.png",
      icon: "/images/why-asnan/icon-talent-experience.svg",
      variant: "image-right",
      title: {
        ar: "المزج الصحيح بين الموهبة والخبرة",
        en: "The Right Mix Between Talent and Experience",
      },
      paragraphs: {
        ar: [
          "منذ افتتاح أسنان في عام 2008، كرّسنا أنفسنا لتوفير بيئة مريحة حيث يشعر المرضى فور دخولهم باهتمام خاص وخدمة سبع نجوم. موظفات الاستقبال مدرّبين على خدمة الضيوف بأعلى المستويات تجعل المريض يتحرر من قلقه من الألم والخوف.",
          "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والمملكة المتحدة في كل تخصص من تخصصات طب الأسنان.",
          "هدفنا أن تكون تجربتكم لا تُنسى على كافة الأصعدة، حتى قبل أن يراكم طبيب الأسنان. نحن نعتبر ضيوفنا جزء من عائلتنا. من أول اتصال لكم ستشعرون بالفرق.",
          "ملتزمون بتقديم خدمات طب الأسنان بجودة عالية لحماية أسنانكم والحفاظ عليها بيضاء جميلة، ونحلم دائماً أن نغير حياتكم وليس أسنانكم فقط.",
        ],
        en: [
          "Since opening Asnan in 2008, we have dedicated ourselves to creating a comfortable environment where patients feel special from the moment they enter, with attentive care and a seven-star service experience.",
          "Asnan Tower is the only dental clinic in Kuwait with specialists graduated from the United States and the United Kingdom across every dental specialty.",
          "Our goal is to make your experience memorable at every level, even before you meet your dentist. We consider our guests part of our family, and from the first call you will feel the difference.",
          "We are committed to providing high-quality dental services to protect your teeth and keep them healthy and beautiful, because we aim to change your life, not only your smile.",
        ],
      },
      imageAlt: {
        ar: "طبيب أسنان يشرح العلاج",
        en: "Dentist explaining dental treatment",
      },
      iconAlt: {
        ar: "أيقونة الموهبة والخبرة",
        en: "Talent and experience icon",
      },
    },
    {
      component: "feature",
      image: "/images/why-asnan/our-guarantee.png",
      icon: "/images/gurantee-icon.svg",
      variant: "image-left",
      title: {
        ar: "ضماننا",
        en: "Our Guarantee",
      },
      paragraphs: {
        ar: [
          "في أسنان تاور نؤمن بأن ثقة المريض تبدأ من وضوح الخطة العلاجية وجودة التنفيذ. لذلك نحرص على تقديم علاج دقيق باستخدام مواد عالية الجودة وتقنيات حديثة تمنحك راحة أكبر ونتائج يمكن الاعتماد عليها.",
          "كل حالة يتم تقييمها بعناية من قبل الفريق المختص، ويتم شرح الخيارات العلاجية بوضوح قبل البدء، حتى تكون مطمئناً في كل خطوة من رحلتك العلاجية.",
        ],
        en: [
          "At Asnan Tower, we believe patient trust begins with a clear treatment plan and high-quality execution. That is why we provide precise dental care using premium materials and modern technology for dependable results.",
          "Every case is carefully evaluated by the right specialist, and all treatment options are explained clearly before starting, so you feel confident at every step of your journey.",
        ],
      },
      imageAlt: {
        ar: "ضمان أسنان",
        en: "Asnan guarantee",
      },
      iconAlt: {
        ar: "أيقونة الضمان",
        en: "Guarantee icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/sterialization.png",
      icon: "/images/sterlization-icon.svg",
      variant: "image-right",
      title: {
        ar: "التعقيم",
        en: "Sterilization",
      },
      paragraphs: {
        ar: [
          "نلتزم في أسنان تاور بأعلى معايير التعقيم ومكافحة العدوى لضمان بيئة علاجية آمنة ومريحة لجميع المراجعين.",
          "يتم تعقيم الأدوات والمعدات وفق إجراءات دقيقة، مع متابعة مستمرة لكل خطوة لضمان سلامة المريض والفريق الطبي.",
        ],
        en: [
          "At Asnan Tower, we follow the highest sterilization and infection-control standards to provide a safe and comfortable treatment environment for every patient.",
          "All instruments and equipment are sterilized through strict procedures, with continuous monitoring to protect both patients and the clinical team.",
        ],
      },
      imageAlt: {
        ar: "تعقيم أدوات الأسنان",
        en: "Dental sterilization",
      },
      iconAlt: {
        ar: "أيقونة التعقيم",
        en: "Sterilization icon",
      },
    },
    {
      component: "feature",
      image: "/images/why-asnan/international-medical.png",
      icon: "/images/international-patients-icon.svg",
      variant: "image-left",
      title: {
        ar: "تجهيزاتنا بأحدث معايير العمل",
        en: "Prepared with Modern Clinical Standards",
      },
      paragraphs: {
        ar: [
          "صُممت بيئة العمل في أسنان تاور لتجمع بين الراحة، التنظيم، والاحترافية، مع تجهيزات طبية تساعد الأطباء على تقديم علاج أكثر دقة وكفاءة.",
          "نحرص على توفير تجربة متكاملة تبدأ من الاستقبال وحتى انتهاء العلاج، بحيث يشعر المراجع بالاهتمام والراحة في كل مرحلة.",
        ],
        en: [
          "The clinical environment at Asnan Tower is designed to combine comfort, organization, and professionalism, with advanced medical setup that helps our doctors deliver accurate and efficient care.",
          "We focus on a complete experience from reception to the end of treatment, ensuring patients feel cared for and comfortable throughout every stage.",
        ],
      },
      imageAlt: {
        ar: "تجهيزات طبية حديثة",
        en: "Modern medical setup",
      },
      iconAlt: {
        ar: "أيقونة المعايير العالمية",
        en: "International standards icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/advanced-technology.png",
      icon: "/images/technology-Icon.svg",
      variant: "image-right",
      title: {
        ar: "التقنيات المتقدمة في طب الأسنان",
        en: "Advanced Dental Technology",
      },
      paragraphs: {
        ar: [
          "نستخدم في أسنان تاور أحدث التقنيات الرقمية لمساعدة الأطباء على التشخيص الدقيق، تخطيط العلاج، وتنفيذ الإجراءات بمستوى أعلى من الجودة.",
          "تسهم التكنولوجيا الحديثة في تقليل الوقت، تحسين الراحة، ورفع دقة النتائج بما يتناسب مع احتياجات كل مراجع.",
        ],
        en: [
          "At Asnan Tower, we use advanced digital technologies to support accurate diagnosis, treatment planning, and high-quality clinical procedures.",
          "Modern technology helps reduce treatment time, improve comfort, and enhance the precision of results according to each patient’s needs.",
        ],
      },
      imageAlt: {
        ar: "تقنيات طب الأسنان",
        en: "Dental technology",
      },
      iconAlt: {
        ar: "أيقونة التكنولوجيا",
        en: "Technology icon",
      },
    },
    {
      component: "feature",
      image: "/images/why-asnan/treatment-of-fear.png",
      icon: "/images/dentophobia-Icon.svg",
      variant: "image-left",
      title: {
        ar: "علاج الخوف والقلق من طبيب الأسنان",
        en: "Treatment of Dental Fear",
      },
      paragraphs: {
        ar: [
          "ندرك أن زيارة طبيب الأسنان قد تكون مصدر قلق لبعض المرضى، لذلك نحرص على تقديم تجربة مريحة وهادئة تساعدك على الشعور بالأمان.",
          "فريقنا يتعامل مع كل حالة بلطف واهتمام، مع شرح الخطوات قبل البدء حتى يكون العلاج أكثر وضوحاً وراحة.",
        ],
        en: [
          "We understand that visiting the dentist can cause anxiety for some patients, so we focus on creating a calm and reassuring experience.",
          "Our team handles every case with care and patience, explaining each step before treatment so the experience feels clearer and more comfortable.",
        ],
      },
      imageAlt: {
        ar: "علاج الخوف من طبيب الأسنان",
        en: "Treatment of dental fear",
      },
      iconAlt: {
        ar: "أيقونة علاج الخوف",
        en: "Dental fear icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/dental-drilling.png",
      icon: "/images/drilling-tool-Icon.svg",
      variant: "image-right",
      title: {
        ar: "حفر الأسنان بدون ألم",
        en: "Painless Dental Drilling",
      },
      paragraphs: {
        ar: [
          "نستخدم تقنيات حديثة تساعد على تقليل الألم والانزعاج أثناء الإجراءات العلاجية، مما يجعل تجربة العلاج أكثر راحة.",
          "هدفنا أن يشعر المراجع بالاطمئنان خلال العلاج، مع الحفاظ على أعلى مستوى من الدقة والجودة.",
        ],
        en: [
          "We use modern techniques that help reduce pain and discomfort during dental procedures, making treatment more comfortable.",
          "Our goal is to help patients feel reassured throughout treatment while maintaining a high level of precision and quality.",
        ],
      },
      imageAlt: {
        ar: "حفر الأسنان",
        en: "Dental drilling",
      },
      iconAlt: {
        ar: "أيقونة حفر الأسنان",
        en: "Dental drilling icon",
      },
    },
    {
      component: "feature",
      image: "/images/why-asnan/digital-radiology.png",
      icon: "/images/digital-radiology-Icon.svg",
      variant: "image-left",
      title: {
        ar: "الأشعة الرقمية",
        en: "Digital Radiology",
      },
      paragraphs: {
        ar: [
          "تساعد الأشعة الرقمية على الحصول على صور واضحة وسريعة للأسنان والفكين، مما يدعم التشخيص الدقيق ووضع خطة علاج مناسبة.",
          "تتميز هذه التقنية بسرعة ظهور النتائج وتقليل التعرض غير الضروري، مع توفير تفاصيل مهمة للطبيب أثناء الفحص.",
        ],
        en: [
          "Digital radiology provides clear and fast images of the teeth and jaws, supporting accurate diagnosis and suitable treatment planning.",
          "This technology offers quick results and helps reduce unnecessary exposure while giving the doctor important details during examination.",
        ],
      },
      imageAlt: {
        ar: "الأشعة الرقمية",
        en: "Digital radiology",
      },
      iconAlt: {
        ar: "أيقونة الأشعة الرقمية",
        en: "Digital radiology icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/electronic-anesthesia.png",
      icon: "/images/anesthesia-Icon.svg",
      variant: "image-right",
      title: {
        ar: "التخدير الإلكتروني",
        en: "Electronic Anesthesia",
      },
      paragraphs: {
        ar: [
          "يُستخدم التخدير الإلكتروني لتقديم تجربة أكثر راحة ودقة، حيث يساعد على التحكم بطريقة إعطاء التخدير وتقليل الإحساس بالانزعاج.",
          "هذه التقنية مناسبة للمرضى الذين يشعرون بالخوف من الإبر أو التخدير التقليدي، وتساعدهم على خوض العلاج بهدوء أكبر.",
        ],
        en: [
          "Electronic anesthesia provides a more comfortable and precise experience by helping control the delivery of anesthesia and reducing discomfort.",
          "This technology is especially helpful for patients who feel anxious about needles or traditional anesthesia, allowing them to receive treatment more calmly.",
        ],
      },
      imageAlt: {
        ar: "التخدير الإلكتروني",
        en: "Electronic anesthesia",
      },
      iconAlt: {
        ar: "أيقونة التخدير الإلكتروني",
        en: "Electronic anesthesia icon",
      },
    },
    {
      component: "feature",
      image: "/images/why-asnan/zeiss-pro.png",
      icon: "/images/mcroscope-Icon.svg",
      variant: "image-left",
      title: {
        ar: "نظام PRO ERGO 2015 من ZEISS",
        en: "ZEISS PRO ERGO 2015 System",
      },
      paragraphs: {
        ar: [
          "يُعد نظام ZEISS PRO ERGO من الأجهزة المتقدمة التي تساعد الطبيب على رؤية التفاصيل الدقيقة أثناء العلاج، خصوصاً في الإجراءات التي تحتاج إلى دقة عالية.",
          "يساهم التكبير الواضح والإضاءة المناسبة في تحسين جودة العمل والوصول إلى نتائج أكثر دقة واحترافية.",
        ],
        en: [
          "The ZEISS PRO ERGO system is an advanced device that helps the doctor see fine details during treatment, especially in procedures that require high precision.",
          "Clear magnification and proper illumination support better clinical quality and help achieve more accurate professional results.",
        ],
      },
      imageAlt: {
        ar: "نظام ZEISS PRO ERGO",
        en: "ZEISS PRO ERGO system",
      },
      iconAlt: {
        ar: "أيقونة الميكروسكوب",
        en: "Microscope icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/digital-scanner.png",
      icon: "/images/digital-scanne-icon.svg",
      variant: "image-right",
      title: {
        ar: "جهاز الماسح الضوئي الرقمي",
        en: "Digital Scanner",
      },
      paragraphs: {
        ar: [
          "يساعد جهاز الماسح الضوئي الرقمي على أخذ قياسات دقيقة للأسنان دون الحاجة إلى الطرق التقليدية المزعجة.",
          "يوفر الجهاز صوراً رقمية واضحة تساعد الطبيب على تخطيط العلاج وتصميم التركيبات بدقة أعلى.",
        ],
        en: [
          "The digital scanner helps capture accurate measurements of the teeth without relying on uncomfortable traditional impressions.",
          "It provides clear digital images that support treatment planning and allow restorations to be designed with greater precision.",
        ],
      },
      imageAlt: {
        ar: "جهاز الماسح الضوئي الرقمي",
        en: "Digital scanner",
      },
      iconAlt: {
        ar: "أيقونة الماسح الرقمي",
        en: "Digital scanner icon",
      },
    },
    {
      component: "feature",
      image: "/images/why-asnan/digital-printing.png",
      icon: "/images/3D-dental-ico.svg",
      variant: "image-left",
      title: {
        ar: "طباعة التركيبات الرقمية",
        en: "Digital Dental Printing",
      },
      paragraphs: {
        ar: [
          "تساعد تقنيات الطباعة الرقمية في تجهيز التركيبات والنماذج بدقة عالية وسرعة أكبر، مما يساهم في تحسين تجربة المراجع.",
          "باستخدام هذه التقنية يمكن الوصول إلى نتائج متناسقة ومناسبة لكل حالة مع الحفاظ على جودة التفاصيل.",
        ],
        en: [
          "Digital printing technology helps create restorations and models with high accuracy and faster turnaround, improving the overall patient experience.",
          "With this technology, we can achieve consistent results tailored to each case while maintaining fine detail and quality.",
        ],
      },
      imageAlt: {
        ar: "طباعة التركيبات الرقمية",
        en: "Digital dental printing",
      },
      iconAlt: {
        ar: "أيقونة الطباعة الرقمية",
        en: "Digital printing icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/x-ray-image.png",
      icon: "/images/3D-Xray-icon.svg",
      variant: "image-right",
      title: {
        ar: "الأشعة ثلاثية الأبعاد",
        en: "3D X-Ray Imaging",
      },
      paragraphs: {
        ar: [
          "تمنح الأشعة ثلاثية الأبعاد الطبيب رؤية أوضح لتفاصيل الأسنان، العظم، والفكين، مما يساعد على تشخيص أدق وخطة علاج أفضل.",
          "تُستخدم هذه التقنية في الحالات التي تحتاج إلى تقييم متقدم مثل الزراعة، الجراحة، وعلاج الجذور.",
        ],
        en: [
          "3D X-ray imaging gives the doctor a clearer view of the teeth, bone, and jaws, supporting more accurate diagnosis and better treatment planning.",
          "This technology is used in cases that require advanced assessment, such as implants, surgery, and root canal treatment.",
        ],
      },
      imageAlt: {
        ar: "الأشعة ثلاثية الأبعاد",
        en: "3D X-ray imaging",
      },
      iconAlt: {
        ar: "أيقونة الأشعة ثلاثية الأبعاد",
        en: "3D X-ray icon",
      },
    },
    {
      component: "feature",
      image: "/images/why-asnan/our-laboratory.png",
      icon: "/images/laborattry-icon.svg",
      variant: "image-left",
      title: {
        ar: "مختبرنا الخاص",
        en: "Our Laboratory",
      },
      paragraphs: {
        ar: [
          "يمتلك أسنان تاور مختبراً خاصاً يساعد على إنجاز الأعمال المخبرية بدقة وسرعة، مع متابعة مباشرة من الفريق الطبي.",
          "وجود المختبر داخل المنظومة العلاجية يمنحنا قدرة أكبر على التحكم في الجودة، التفاصيل، والنتيجة النهائية.",
        ],
        en: [
          "Asnan Tower has its own laboratory, helping complete dental lab work with accuracy and speed under direct supervision from the clinical team.",
          "Having the laboratory within the treatment workflow gives us greater control over quality, details, and final results.",
        ],
      },
      imageAlt: {
        ar: "مختبر أسنان",
        en: "Dental laboratory",
      },
      iconAlt: {
        ar: "أيقونة المختبر",
        en: "Laboratory icon",
      },
    },
    {
      component: "wave",
      image: "/images/why-asnan/compilemtary-valet.png",
      icon: "/images/Velet-service-icon.svg",
      variant: "image-right",
      title: {
        ar: "خدمة صف السيارات المجانية",
        en: "Complimentary Valet Parking",
      },
      paragraphs: {
        ar: [
          "نوفر خدمة صف السيارات المجانية لتسهيل زيارتكم وجعل تجربتكم أكثر راحة من لحظة الوصول إلى أسنان تاور.",
          "نهتم بكل التفاصيل الصغيرة التي تجعل زيارتكم أسهل، لأن راحتكم جزء أساسي من تجربة العلاج لدينا.",
        ],
        en: [
          "We provide complimentary valet parking to make your visit easier and more comfortable from the moment you arrive at Asnan Tower.",
          "We care about the small details that make your visit smoother, because your comfort is an essential part of our treatment experience.",
        ],
      },
      imageAlt: {
        ar: "خدمة صف السيارات",
        en: "Valet parking service",
      },
      iconAlt: {
        ar: "أيقونة خدمة صف السيارات",
        en: "Valet service icon",
      },
    },
  ];

  return (
    <>
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">
                {isAr ? "ليش اسنان؟" : "Why Asnan Tower?"}
              </h1>

              <p className="hero-text">
                {isAr
                  ? "أسنان تاور هي عيادة الأسنان الوحيدة في الكويت التي يوجد بها خريج واحد على الأقل من خريجي رابطة Ivy League والمتوفر في كل تخصص."
                  : "Asnan Tower is the only dental clinic in Kuwait with at least one Ivy League Alumni who’s available in each specialty."}
              </p>
            </div>

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
                  <p className="call-desc">{t.direct_call}</p>
                  <span className="phone-link">
                    965-189<span>6666</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-img">
          <img src="/images/bg-why.png" alt="background image" />
          <img src="/images/bg-why-mob.png" alt="background image" />
        </div>
      </div>

      {sections.map((section, index) => {
        const title = isAr ? section.title.ar : section.title.en;
        const imageAlt = isAr ? section.imageAlt.ar : section.imageAlt.en;
        const iconAlt = isAr ? section.iconAlt.ar : section.iconAlt.en;

        if (section.component === "wave") {
          return (
            <WhyAsnanWaveFeatureSection
              key={`${section.component}-${index}`}
              locale={locale}
              image={section.image}
              icon={section.icon}
              title={title}
              paragraphs={
                section.paragraphs
                  ? isAr
                    ? section.paragraphs.ar
                    : section.paragraphs.en
                  : []
              }
              imageAlt={imageAlt}
              iconAlt={iconAlt}
              variant={section.variant}
            />
          );
        }

        return (
          <WhyAsnanFeatureSection
            key={`${section.component}-${index}`}
            locale={locale}
            image={section.image}
            icon={section.icon}
            title={title}
            points={
              section.points
                ? isAr
                  ? section.points.ar
                  : section.points.en
                : undefined
            }
            paragraphs={
              section.paragraphs
                ? isAr
                  ? section.paragraphs.ar
                  : section.paragraphs.en
                : undefined
            }
            imageAlt={imageAlt}
            iconAlt={iconAlt}
            variant={section.variant}
          />
        );
      })}
    </>
  );
}