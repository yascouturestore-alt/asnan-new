"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import KidsFeatureSection from "@/components/kids/KidsFeatureSection";
import PopularCategoriesSection, { PopularCategory } from "@/components/asnanopedia/PopularCategoriesSection";
import KidsWaveFeatureSection from "@/components/kids/KidsWaveFeatureSection";

const copy = {
  ar: {
    heroTitle: "اسنانوبيديا",
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
    /* DOM order: index 0 = rightmost in RTL */
    cats: ["الوقاية", "طوارئ الأسنان", "مشاكل الأسنان", "صحة الفم والجسم", "الأسئلة الأكثر شيوعاً"],
  },
  en: {
    heroTitle: "ASNANOPEDIA",
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
  },
};


const categoriesAr: PopularCategory[] = [
  {
    id: "prevention",
    label: "الوقاية",
    icon: "/images/Prevention-icon.svg",
    sideItems: ["خيطك للمعركة ومحاربة التسوس", "العمر والأسنان", "السلوك والعادات"],
    articles: [
      { title: "خيطك للمعركة، ومحاربة التسوس", count: 20, image: "/assets/asnanopedia/popular-categories/articles/mouth-thread.jpg" },
      { title: "نصائح لصحة الأسنان لموسم البرد والإنفلونزا", count: 6, image: "/assets/asnanopedia/popular-categories/articles/flu-woman.jpg" },
      { title: "إصابات الأسنان خلال الرياضات الصيفية", count: 0, image: "/assets/asnanopedia/popular-categories/articles/sports-injury.jpg" },
    ],
  },
  {
    id: "oral-body-health",
    label: "صحة الفم والجسم",
    icon: "/images/Dental-icon.svg",
    sideItems: ["صحة الفم والجسم"],
    articles: [
      { title: "كيف تحافظ على أسنانك صحية", count: 2, image: "/assets/asnanopedia/popular-categories/articles/healthy-tooth.jpg" },
      { title: "الزيارات الدورية لطبيب أسنانك", count: 0, image: "/assets/asnanopedia/popular-categories/articles/dentist-visit.jpg" },
      { title: "تنظيف اللثة العميق", count: 9, image: "/assets/asnanopedia/popular-categories/articles/deep-cleaning.jpg" },
    ],
  },
  {
    id: "dental-emergencies",
    label: "طوارئ الأسنان",
    icon: "/images/Dental-emergencies-icon.svg",
    sideItems: ["طوارئ الأسنان"],
    articles: [
      { title: "دخول مادة بين الأسنان", count: 0, image: "/assets/asnanopedia/popular-categories/articles/tooth-particles.jpg" },
      { title: "سقوط السن الدائم", count: 2, image: "/assets/asnanopedia/popular-categories/articles/fallen-tooth.jpg" },
      { title: "ألم الأسنان", count: 2, image: "/assets/asnanopedia/popular-categories/articles/toothache.jpg" },
    ],
  },
  {
    id: "dental-problems",
    label: "مشاكل الاسنان",
    icon: "/images/Dental-Problems-icon.svg",
    sideItems: ["مشاكل الاسنان"],
    articles: [
      { title: "أمراض اللثة", count: 4, image: "/assets/asnanopedia/popular-categories/articles/gum-disease.jpg" },
      { title: "عادات تهدد صحة فمك وأسنانك", count: 1, image: "/assets/asnanopedia/popular-categories/articles/dental-tools.jpg" },
      { title: "فطريات الفم", count: 31, image: "/assets/asnanopedia/popular-categories/articles/mouth-ulcer.jpg" },
    ],
  },
];

const categoriesEn: PopularCategory[] = [
  {
    id: "prevention",
    label: "Prevention",
    icon: "/images/Prevention-icon.svg",
    sideItems: ["Flossing and Fighting Tooth Decay", "Age and Teeth", "Habits and Behavior"],
    articles: [
      { title: "Flossing and Fighting Tooth Decay", count: 20, image: "/assets/asnanopedia/popular-categories/articles/mouth-thread.jpg" },
      { title: "Dental Health Tips for Cold and Flu Season", count: 6, image: "/assets/asnanopedia/popular-categories/articles/flu-woman.jpg" },
      { title: "Dental Injuries During Summer Sports", count: 0, image: "/assets/asnanopedia/popular-categories/articles/sports-injury.jpg" },
    ],
  },
  {
    id: "oral-body-health",
    label: "Oral & Body Health",
    icon: "/images/Dental-icon.svg",
    sideItems: ["Oral & Body Health"],
    articles: [
      { title: "How to Keep Your Teeth Healthy", count: 2, image: "/assets/asnanopedia/popular-categories/articles/healthy-tooth.jpg" },
      { title: "Regular Visits to Your Dentist", count: 0, image: "/assets/asnanopedia/popular-categories/articles/dentist-visit.jpg" },
      { title: "Deep Gum Cleaning", count: 9, image: "/assets/asnanopedia/popular-categories/articles/deep-cleaning.jpg" },
    ],
  },
  {
    id: "dental-emergencies",
    label: "Dental Emergencies",
    icon: "/images/Dental-emergencies-icon.svg",
    sideItems: ["Dental Emergencies"],
    articles: [
      { title: "Object Stuck Between Teeth", count: 0, image: "/assets/asnanopedia/popular-categories/articles/tooth-particles.jpg" },
      { title: "Permanent Tooth Knocked Out", count: 2, image: "/assets/asnanopedia/popular-categories/articles/fallen-tooth.jpg" },
      { title: "Tooth Pain", count: 2, image: "/assets/asnanopedia/popular-categories/articles/toothache.jpg" },
    ],
  },
  {
    id: "dental-problems",
    label: "Dental Problems",
    icon: "/images/Dental-Problems-icon.svg",
    sideItems: ["Dental Problems"],
    articles: [
      { title: "Gum Disease", count: 4, image: "/assets/asnanopedia/popular-categories/articles/gum-disease.jpg" },
      { title: "Habits That Harm Your Teeth", count: 1, image: "/assets/asnanopedia/popular-categories/articles/dental-tools.jpg" },
      { title: "Mouth Fungus", count: 31, image: "/assets/asnanopedia/popular-categories/articles/mouth-ulcer.jpg" },
    ],
  },
];


export default function KidsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  const usaGraduateFeature = {
    title: isAr
      ? "لماذا تختار طبيب متخرج من أمريكا؟"
      : "Why Choose an American Graduate Dentist?",
    points: isAr
      ? [
        "أكثر دولة تستثمر في الأبحاث والتطوير في مجال طب الأسنان.",
        "اكثر دولة تقدم اختراعات في العالم",
        "أقوى جامعات طب الاسنان في العالم.",
        "اقدم جامعة لطب الاسنان في العالم كانت في أمريكا(ماريلاند-بالتيمور)",
        "تخصصات طب الأسنان بدأت على مستوى العالم في أمريكا(بوستن)",
        "الشعب الأمريكي لديه أجمل إبتسامة.",
      ]
      : [
        "The United States invests heavily in dental research and development.",
        "The United States leads the world in innovation.",
        "It is home to some of the strongest dental universities in the world.",
        "The oldest dental school in the world was founded in America, in Maryland, Baltimore.",
        "Dental specialties began at a global level in America, in Boston.",
        "Americans are known for beautiful smiles.",
      ],
  };

  const talentExperienceFeature = {
    title: isAr
      ? "المزج الصحيح بين الموهبة والخبرة"
      : "The Right Mix Between Talent and Experience",
    paragraphs: isAr
      ? [
        "منذ افتتاح أسنان في عام 2008، كرّسنا أنفسنا لتوفير بيئة مريحة حيث يشعر المرضى فور دخولهم باهتمام خاص وخدمة سبع نجوم. موظفات الاستقبال مدرّبين على خدمة الضيوف بأعلى المستويات تجعل المريض يتحرر من قلقه من الألم والخوف.",
        "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والمملكة المتحدة في كل تخصص من تخصصات طب الأسنان.",
        "هدفنا أن تكون تجربتكم لا تُنسى على كافة الأصعدة، حتى قبل أن يراكم طبيب الأسنان. نحن نعتبر ضيوفنا جزء من عائلتنا. من أول اتصال لكم ستشعرون بالفرق.",
        "ملتزمون بتقديم خدمات طب الأسنان بجودة عالية لحماية أسنانكم والحفاظ عليها بيضاء جميلة، ونحلم دائماً أن نغير حياتكم وليس أسنانكم فقط.",
      ]
      : [
        "Since opening Asnan in 2008, we have dedicated ourselves to creating a comfortable environment where patients feel special from the moment they enter, with attentive care and a seven-star service experience.",
        "Asnan Tower is the only dental clinic in Kuwait with specialists graduated from the United States and the United Kingdom across every dental specialty.",
        "Our goal is to make your experience memorable at every level, even before you meet your dentist. We consider our guests part of our family, and from the first call you will feel the difference.",
        "We are committed to providing high-quality dental services to protect your teeth and keep them healthy and beautiful, because we aim to change your life, not only your smile.",
      ],
  };

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="hero-title">
                {locale === 'ar' ? "أسنان" : "Asnan"}
                <img className="kids-img img-fluid ms-3" src="/images/kids.png" alt="Kids section" style={{ width: '100px' }} />
              </h1>
            </div>
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" target="_blank" rel="noreferrer" className="call-btn phone-btn">
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone icon" height="50" />
                </div>
                <div className="call-btn-txt">
                  <p className="call-desc">Call</p>
                  <span className="phone-link">965-189<span>6666</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/Backgrounds/Asnan_Kids_Cover_Image2x.jpg" alt="background image" />
          <img src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_Kids_Cropped@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Welcome Kids */}
      <div className="welcome-kids py-5" >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h3 className="welcome-kids-title h2 mb-4">
                {locale === 'ar' ? "مرحبا بكم في" : "Welcome To"}
                <span className="text-secondary"> {locale === 'ar' ? "اسنان كيدز" : "Asnan Kids"}</span>
              </h3>
              <p className="welcome-kids-text text-muted lead">
                {locale === 'ar' ? "تقدم عيادة أسنان تاور في الكويت رعاية أسنان عالية الجودة وشاملة للرضع والأطفال." : "Asnan Tower in Kuwait provides high-quality and comprehensive dental care for infants and children."}
              </p>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img src="/images/Kids/kids-charcters-02.png" alt="kids characters" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>


      {/*POPULAR CATEGORIES*/}
      <PopularCategoriesSection
        locale={locale}
        title={t.categoriesTitle}
        subtitle={t.categoriesSubtitle}
        categories={isAr ? categoriesAr : categoriesEn}
      />

      {/* Treatments */}
      <div className="container-fluid py-5">
        <div className="category-header mb-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-8">
              <div className="category-block d-flex align-items-center">
                <div className="category-icon me-4">
                  <img src="/images/Prevention-icon-3.svg" alt="prevention icon" style={{ width: '60px' }} />
                </div>
                <div className="category-info">
                  <div className="category-title h3">{locale === 'ar' ? "العلاجات" : "Treatments"}</div>
                  <div className="category-text text-muted">
                    {locale === 'ar' ? "دع خبراء طب الأسنان لدينا يستعيدون ابتسامتك بأحدث التقنيات." : "Let our dental experts restore your child's smile with the latest techniques."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/usa-graduate-building.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 2 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/talent-experience.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
      {/* Section 3 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/our-guarantee.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 4 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/sterialization.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
      {/* Section 5 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/international-medical.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 6 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/advanced-technology.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
      {/* Section 7 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/treatment-of-fear.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 8 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/dental-drilling.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
      {/* Section 9 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/digital-radiology.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 10 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/electronic-anesthesia.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
      {/* Section 11 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/zeiss-pro.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 12 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/digital-scanner.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
      {/* Section 13 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/digital-printing.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 14 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/x-ray-image.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
      {/* Section 15 */}
      <KidsFeatureSection
        locale={locale}
        image="/images/why-asnan/our-laboratory.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 16 */}
      <KidsWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/compilemtary-valet.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
    </>
  );
}