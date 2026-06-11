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
    searchPlaceholder: "Type here example: How to keep my teeth healthy?",
    searchBtn: "Search",
    articlesTitle: "Handpicked articles",
    articlesSubtitle: "Useful articles handpicked by Asnan Tower.",
    bookNow: "Book Now",
    learnMore: "Learn More",
    categoriesTitle: "Popular Categories",
    categoriesSubtitle: "Browse the different available categories in the knowledge base.",
    faqTitle: "FAQs",
    faqSubtitle: "Find a quick answer for an issue or a how-to-do question.",
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
  { title: "Your Plan For Battle, Fight Against Decay", category: "Prevention", count: 20, image: "/images/asnanopedia/articles/mouth-thread.png" },
  { title: "Dental Tips for Cold and Flu Season", category: "Prevention", count: 6, image: "/images/asnanopedia/articles/flu-woman.png" },
  { title: "Avoid Dental Injuries During Summer Sports", category: "Prevention", count: 0, image: "/images/asnanopedia/articles/sports-injury.png" },
  { title: "Infants and Newborns", category: "Prevention", count: 1, image: "/images/asnanopedia/articles/newborn.png" },
  { title: "Children", category: "Prevention", count: 3, image: "/images/asnanopedia/articles/child.png" },
  { title: "Adolescents", category: "Prevention", count: 219, image: "/images/asnanopedia/articles/students.png" },
  { title: "Adults", category: "Prevention", count: 142, image: "/images/asnanopedia/articles/teenagers.png" },
  { title: "Elders", category: "Prevention", count: 3, image: "/images/asnanopedia/articles/elderly.png" },
  { title: "Pregnant", category: "Prevention", count: 0, image: "/images/asnanopedia/articles/pregnant.png" },
  { title: "Nursing mothers", category: "Prevention", count: 15, image: "/images/asnanopedia/articles/breastfeeding.png" },
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
    sideItems: ["Your Plan for Battle Fight Against Decay", "Age and Teeth", "Behavior and Habits"],
    articles: [
      { title: "Your Plan For Battle, Fight Against Decay", count: 20, image: "/images/asnanopedia/articles/mouth-thread.png" },
      { title: "Dental Tips for Cold and Flu Season", count: 6, image: "/images/asnanopedia/articles/flu-woman.png" },
      { title: "Avoid Dental Injuries During Summer Sports", count: 0, image: "/images/asnanopedia/articles/sports-injury.png" },
    ],
  },
  {
    id: "oral-body-health",
    label: "Physical Health And Dentistry",
    icon: "/images/Dental-icon.svg",
    sideItems: ["Oral and Physical Health"],
    articles: [
      { title: "How to keep your teeth healthy?", count: 2, image: "/images/asnanopedia/articles/healthy-tooth.jpg" },
      { title: "Regular visits to your dentist", count: 0, image: "/images/asnanopedia/articles/dentist-visit.jpg" },
      { title: "Deep Dental Cleaning", count: 9, image: "/images/asnanopedia/articles/deep-cleaning.jpg" },
    ],
  },
  {
    id: "dental-emergencies",
    label: "Dental Emergencies",
    icon: "/images/Dental-emergencies-icon.svg",
    sideItems: ["Dental Emergencies"],
    articles: [
      { title: "Interdental Material", count: 0, image: "/images/asnanopedia/articles/tooth-particles.jpg" },
      { title: "Fall Off Permanent Teeth", count: 2, image: "/images/asnanopedia/articles/fallen-tooth.jpg" },
      { title: "Toothache", count: 2, image: "/images/asnanopedia/articles/toothache.jpg" },
    ],
  },
  {
    id: "dental-problems",
    label: "Dental Problems",
    icon: "/images/Dental-Problems-icon.svg",
    sideItems: ["Dental Problems"],
    articles: [
      { title: "Gum Disease", count: 4, image: "/images/asnanopedia/articles/gum-disease.jpg" },
      { title: "Habits That Threaten Your Mouth and Teeth", count: 1, image: "/images/asnanopedia/articles/habiits-that-treathen-yout-teeth.jpg" },
      { title: "Oral Fungus", count: 31, image: "/images/asnanopedia/articles/oral-fungus.jpg" },
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
  { id: 1, title: "Dental Treatment Cost", image: "/images/faq-1.png", count: 31 },
  { id: 2, title: "Do Cosmetic Teeth Last a Lifetime", image: "/images/faq-2.png", count: 31 },
  { id: 3, title: "Electric Toothbrush", image: "/images/faq-3.png", count: 31 },
  { id: 4, title: "What is the appropriate time to have braces?", image: "/images/faq-4.png", count: 31 },
  { id: 5, title: "Pregnant Woman & Dental Visit", image: "/images/faq-5.png", count: 31 },
  { id: 6, title: "The Best Type of Toothpaste", image: "/images/faq-6.png", count: 31 },
  { id: 7, title: "What is fluoride?", image: "/images/faq-7.png", count: 31 },
  { id: 8, title: "How do I use dental floss?", image: "/images/faq-8.png", count: 31 },
];

export default function AsnanopediaPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "ar";
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  return (
    <>
      <div className="hero-wrapper hero-home asnanopedia-hero" style={{minHeight:"unset", paddingBottom: "70px"}}>
        <div className="container-fluid">
          <div className="row justify-content-center">
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
