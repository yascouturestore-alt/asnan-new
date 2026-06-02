"use client";
import { useParams } from "next/navigation";
import AppointmentSection from "@/components/home/AppointmentSection";
import SelectedArticlesSection, { SelectedArticle } from "@/components/asnanopedia/SelectedArticlesSection";
import PopularCategoriesSection, { PopularCategory } from "@/components/asnanopedia/PopularCategoriesSection";
import FaqSection, { FaqItem } from "@/components/asnanopedia/FaqSection";
import AsnanopediaHeroContent from "@/components/asnanopedia/AsnanopediaHeroContent";

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

const selectedArticlesAr: SelectedArticle[] = [
  { title: "خيطك للمعركة، ومحاربة التسوس", category: "الوقاية", count: 20, image: "/images/asnanopedia/articles/mouth-thread.png" },
  { title: "نصائح لصحة الأسنان لموسم البرد والإنفلونزا", category: "الوقاية", count: 6, image: "/images/asnanopedia/articles/flu-woman.png" },
  { title: "إصابات الأسنان خلال الرياضات الحركية", category: "الوقاية", count: 0, image: "/images/asnanopedia/articles/sports-injury.png" },
  { title: "الرضع وحديثي الولادة", category: "الوقاية", count: 1, image: "/images/asnanopedia/articles/newborn.png" },
  { title: "الاطفال", category: "الوقاية", count: 3, image: "/images/asnanopedia/articles/child.png" },
  { title: "المراهقون", category: "الوقاية", count: 219, image: "/images/asnanopedia/articles/students.png" },
  { title: "المراهقون", category: "الوقاية", count: 142, image: "/images/asnanopedia/articles/teenagers.png" },
  { title: "كبار السن", category: "الوقاية", count: 3, image: "/images/asnanopedia/articles/elderly.png" },
  { title: "الحوامل", category: "الوقاية", count: 0, image: "/images/asnanopedia/articles/pregnant.png" },
  { title: "المرضعات", category: "الوقاية", count: 15, image: "/images/asnanopedia/articles/breastfeeding.png" },
];

const selectedArticlesEn: SelectedArticle[] = [
  { title: "Your Floss in the Fight Against Tooth Decay", category: "Prevention", count: 20, image: "/images/asnanopedia/articles/mouth-thread.png" },
  { title: "Dental Health Tips for Cold and Flu Season", category: "Prevention", count: 6, image: "/images/asnanopedia/articles/flu-woman.png" },
  { title: "Dental Injuries During Contact Sports", category: "Prevention", count: 0, image: "/images/asnanopedia/articles/sports-injury.png" },
  { title: "Infants and Newborns", category: "Prevention", count: 1, image: "/images/asnanopedia/articles/newborn.png" },
  { title: "Children", category: "Prevention", count: 3, image: "/images/asnanopedia/articles/child.png" },
  { title: "Teenagers", category: "Prevention", count: 219, image: "/images/asnanopedia/articles/students.png" },
  { title: "Teenagers", category: "Prevention", count: 142, image: "/images/asnanopedia/articles/teenagers.png" },
  { title: "Older Adults", category: "Prevention", count: 3, image: "/images/asnanopedia/articles/elderly.png" },
  { title: "Pregnant Women", category: "Prevention", count: 0, image: "/images/asnanopedia/articles/pregnant.png" },
  { title: "Breastfeeding Mothers", category: "Prevention", count: 15, image: "/images/asnanopedia/articles/breastfeeding.png" },
];

const categoriesAr: PopularCategory[] = [
  {
    id: "prevention",
    label: "الوقاية",
    icon: "/images/Prevention-icon.svg",
    sideItems: ["خيطك للمعركة ومحاربة التسوس", "العمر والأسنان", "السلوك والعادات"],
    articles: [
      { title: "خيطك للمعركة، ومحاربة التسوس", count: 20, image: "/images/asnanopedia/articles/mouth-thread.png" },
      { title: "نصائح لصحة الأسنان لموسم البرد والإنفلونزا", count: 6, image: "/images/asnanopedia/articles/flu-woman.png" },
      { title: "إصابات الأسنان خلال الرياضات الصيفية", count: 0, image: "/images/asnanopedia/articles/sports-injury.png" },
    ],
  },
  {
    id: "oral-body-health",
    label: "صحة الفم والجسم",
    icon: "/images/Dental-icon.svg",
    sideItems: ["صحة الفم والجسم"],
    articles: [
      { title: "كيف تحافظ على أسنانك صحية", count: 2, image: "/images/asnanopedia/popular-categories/articles/healthy-tooth.png" },
      { title: "الزيارات الدورية لطبيب أسنانك", count: 0, image: "/images/asnanopedia/popular-categories/articles/dentist-visit.png" },
      { title: "تنظيف اللثة العميق", count: 9, image: "/images/asnanopedia/popular-categories/articles/deep-cleaning.png" },
    ],
  },
  {
    id: "dental-emergencies",
    label: "طوارئ الأسنان",
    icon: "/images/Dental-emergencies-icon.svg",
    sideItems: ["طوارئ الأسنان"],
    articles: [
      { title: "دخول مادة بين الأسنان", count: 0, image: "/images/asnanopedia/popular-categories/articles/tooth-particles.png" },
      { title: "سقوط السن الدائم", count: 2, image: "/images/asnanopedia/popular-categories/articles/fallen-tooth.png" },
      { title: "ألم الأسنان", count: 2, image: "/images/asnanopedia/popular-categories/articles/toothache.png" },
    ],
  },
  {
    id: "dental-problems",
    label: "مشاكل الاسنان",
    icon: "/images/Dental-Problems-icon.svg",
    sideItems: ["مشاكل الاسنان"],
    articles: [
      { title: "أمراض اللثة", count: 4, image: "/images/asnanopedia/popular-categories/articles/gum-disease.png" },
      { title: "عادات تهدد صحة فمك وأسنانك", count: 1, image: "/images/asnanopedia/popular-categories/articles/dental-tools.png" },
      { title: "فطريات الفم", count: 31, image: "/images/asnanopedia/popular-categories/articles/mouth-ulcer.png" },
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
      { title: "Flossing and Fighting Tooth Decay", count: 20, image: "/images/asnanopedia/articles/mouth-thread.png" },
      { title: "Dental Health Tips for Cold and Flu Season", count: 6, image: "/images/asnanopedia/articles/flu-woman.png" },
      { title: "Dental Injuries During Summer Sports", count: 0, image: "/images/asnanopedia/articles/sports-injury.png" },
    ],
  },
  {
    id: "oral-body-health",
    label: "Oral & Body Health",
    icon: "/images/Dental-icon.svg",
    sideItems: ["Oral & Body Health"],
    articles: [
      { title: "How to Keep Your Teeth Healthy", count: 2, image: "/images/asnanopedia/articles/healthy-tooth.jpg" },
      { title: "Regular Visits to Your Dentist", count: 0, image: "/images/asnanopedia/articles/dentist-visit.jpg" },
      { title: "Deep Gum Cleaning", count: 9, image: "/images/asnanopedia/articles/deep-cleaning.jpg" },
    ],
  },
  {
    id: "dental-emergencies",
    label: "Dental Emergencies",
    icon: "/images/Dental-emergencies-icon.svg",
    sideItems: ["Dental Emergencies"],
    articles: [
      { title: "Object Stuck Between Teeth", count: 0, image: "/images/asnanopedia/articles/tooth-particles.jpg" },
      { title: "Permanent Tooth Knocked Out", count: 2, image: "/images/asnanopedia/articles/fallen-tooth.jpg" },
      { title: "Tooth Pain", count: 2, image: "/images/asnanopedia/articles/toothache.jpg" },
    ],
  },
  {
    id: "dental-problems",
    label: "Dental Problems",
    icon: "/images/Dental-Problems-icon.svg",
    sideItems: ["Dental Problems"],
    articles: [
      { title: "Gum Disease", count: 4, image: "/images/asnanopedia/articles/gum-disease.jpg" },
      { title: "Habits That Harm Your Teeth", count: 1, image: "/images/asnanopedia/articles/habiits-that-treathen-yout-teeth.jpg" },
      { title: "Mouth Fungus", count: 31, image: "/images/asnanopedia/articles/oral-fungus.jpg" },
    ],
  },
];

const faqArticlesAr: FaqItem[] = [
  { id: 1, title: "ما هو الوقت المناسب لاستعمال جهاز تقويم الأسنان؟", image: "/images/faq-1.png", count: 31 },
  { id: 2, title: "فرشاة الأسنان الكهربائية", image: "/images/faq-2.png", count: 31 },
  { id: 3, title: "هل تدوم الأسنان التجميلية مدى الحياة", image: "/images/faq-3.png", count: 31 },
  { id: 4, title: "تكلفة علاج الاسنان", image: "/images/faq-4.png", count: 31 },
  { id: 5, title: "كيف استخدم خيط الاسنان؟", image: "/images/faq-5.png", count: 31 },
  { id: 6, title: "ما هو الفلورايد؟", image: "/images/faq-6.png", count: 31 },
  { id: 7, title: "ما هو أفضل نوع معجون", image: "/images/faq-7.png", count: 31 },
  { id: 8, title: "المرأة الحامل وزيارة طبيب الأسنان؟", image: "/images/faq-8.png", count: 31 },
];

const faqArticlesEn: FaqItem[] = [
  { id: 1, title: "What is the Right Time to Use Braces?", image: "/images/faq-1.png", count: 31 },
  { id: 2, title: "Electric Toothbrush", image: "/images/faq-2.png", count: 31 },
  { id: 3, title: "Do Cosmetic Teeth Last a Lifetime?", image: "/images/faq-3.png", count: 31 },
  { id: 4, title: "Cost of Dental Treatment", image: "/images/faq-4.png", count: 31 },
  { id: 5, title: "How Do I Use Dental Floss?", image: "/images/faq-5.png", count: 31 },
  { id: 6, title: "What is Fluoride?", image: "/images/faq-6.png", count: 31 },
  { id: 7, title: "What is the Best Type of Toothpaste?", image: "/images/faq-7.png", count: 31 },
  { id: 8, title: "Pregnant Women and Visiting the Dentist", image: "/images/faq-8.png", count: 31 },
];

export default function AsnanopediaPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "ar";
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;
  const dir = isAr ? "rtl" : "ltr";

  return (
    <>
      <div className="hero-wrapper hero-home asnanopedia-hero" style={{minHeight:"unset", paddingBottom: "70px"}}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {/* <div className="col-12 col-lg-12 mb-2">
              <h1 className="hero-title">
                {t.asnanopedia_heading}
              </h1>
            </div>
            <div className={styles.heroSearchBar}>
            {isAr ? (
              <>
                <button className={styles.heroSearchBtn}>{t.searchBtn}</button>
                <input
                  type="text"
                  className={styles.heroSearchInput}
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchPlaceholder}
                />
                <span className={styles.heroSearchIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="#aaa" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" stroke="#aaa" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </>
            ) : (
              <>
                <span className={styles.heroSearchIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="#aaa" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" stroke="#aaa" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  type="text"
                  className={styles.heroSearchInput}
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchPlaceholder}
                />
                <button className={styles.heroSearchBtn}>{t.searchBtn}</button>
              </>
            )}
          </div>
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" target="_blank" rel="noreferrer" className="call-btn phone-btn" id="hero-phone-call-btn">
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone icon" id="phone-icon" height="50" />
                </div>
                <div className="call-btn-txt">
                  <p className="call-desc">{t.direct_call}</p>
                  <span className="phone-link">965-189<span>6666</span></span>
                </div>
              </a>
            </div> */}
            <AsnanopediaHeroContent locale={locale} />
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/bg-hero-blank-3.png" alt="background image" />
          <img src="/images/bg-hero-blank-3.png" alt="background image" />
        </div>
      </div>

      {/* ── SELECTED ARTICLES ────────────────────────────────────── */}
      <SelectedArticlesSection
        locale={locale}
        title={t.articlesTitle}
        subtitle={t.articlesSubtitle}
        buttonText={t.bookNow}
        articles={isAr ? selectedArticlesAr : selectedArticlesEn}
      />

      {/* ── POPULAR CATEGORIES ───────────────────────────────────── */}
      <PopularCategoriesSection
        locale={locale}
        title={t.categoriesTitle}
        subtitle={t.categoriesSubtitle}
        categories={isAr ? categoriesAr : categoriesEn}
      />

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <FaqSection
        locale={locale}
        title={t.faqTitle}
        subtitle={t.faqSubtitle}
        articles={isAr ? faqArticlesAr : faqArticlesEn}
      />

      {/* ── APPOINTMENT ─────────────────────────────────────────── */}
      <AppointmentSection locale={locale} />
    </>
  );
}
