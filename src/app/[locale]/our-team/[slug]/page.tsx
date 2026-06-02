"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "en" | "ar";

type DoctorCopy = {
  heroTitle: string;
  doctorName: string;
  specialty: string;
  readMore: string;
  profile: string;
  awards: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  stats: { value: string; label: string }[];
  beautyTitle: string;
  smileTitle: string;
  smileSmall: string;
  smileMadeBy: string;
  before: string;
  after: string;
  moreSmiles: string;
  educationTitle: string;
  educationSubtitle: string;
  accreditations: string;
  degree: string;
  university: string;
  celebrityTitle: string;
  celebrityTab: string;
  testimonialTab: string;
  lifeSmall: string;
  lifeTitle: string;
};


const DOCTOR_INFO_MAP: Record<string, Record<Locale, Partial<DoctorCopy>>> = {
  "dr-essa-al-essa": {
    ar: {
      doctorName: "د. عيسى العيسى",
      specialty: "استشاري طب اسنان شامل وتجميل الاسنان، جامعة بتسبرغ / الولايات المتحدة الامريكية",
      smileMadeBy: "د. عيسى العيسى",
    },
    en: {
      doctorName: "Dr. Essa Al Essa",
      specialty: "Comprehensive & Cosmetic Dental Consultant, University of Pittsburgh / USA",
      smileMadeBy: "Dr. Essa Al Essa",
    },
  },
  "dr-mohammed-al-hajji": {
    ar: {
      doctorName: "د. محمد الحجي",
      specialty: "اختصاصي تجميل و طب الأسنان الشامل جامعة كولومبيا / الولايات المتحدة الأمريكية",
      smileMadeBy: "د. محمد الحجي",
    },
    en: {
      doctorName: "Dr. Mohammed Al-Hajji",
      specialty: "General & Cosmetic Dentist DDS ,MS, ABGD, Columbia University, New York / USA",
      smileMadeBy: "Dr. Mohammed Al-Hajji",
    },
  },
  "dr-amina-al-jassem": {
    ar: {
      doctorName: "د. أمينة الجاسم",
      specialty: "اختصاصي طب الأسنان الشامل المتقدم وتجميل الأسنان، كلية الجراحيين الملكية في إيرلندا.",
      smileMadeBy: "د. أمينة الجاسم",
    },
    en: {
      doctorName: "Dr. Amina Al-Jassem",
      specialty: "Comprehensive & Cosmetic Dentist, Royal college of surgeons / Ireland",
      smileMadeBy: "Dr. Amina Al-Jassem",
    },
  },
  "dr-tareq-burezq": {
    ar: {
      doctorName: "د. طارق بــورزق",
      specialty: "استشـــاري تركيبات وتجميـل وزراعـة أسنـان، جامعة هارفارد / الولايات المتحـدة الأمريكية.",
      smileMadeBy: "د. طارق بــورزق",
    },
    en: {
      doctorName: "Dr. Tareq Burezq",
      specialty: "Prosthodontist Consultant, Harvard University / USA",
      smileMadeBy: "Dr. Tareq Burezq",
    },
  },
  "dr-amna-al-mutawaa": {
    ar: {
      doctorName: "د. امنه المطوع",
      specialty: "أخصائية تقويم الاسنان والفكين، كلية لندن الجامعية",
      smileMadeBy: "د. امنه المطوع",
    },
    en: {
      doctorName: "Dr. Amna Al Mutawaa",
      specialty: "Orthodontist Consultant, Kings College / London",
      smileMadeBy: "Dr. Amna Al Mutawaa",
    },
  },
  "dr-talal-al-reyahi": {
    ar: {
      doctorName: "د. طلال الرياحي",
      specialty: "طــب الاسنــــان التحفظي و تجميــل اسنــــان، جامعة دانـــــدي / المملكــــة المتحــــدة.",
      smileMadeBy: "د. طلال الرياحي",
    },
    en: {
      doctorName: "Dr. Talal Al-Reyahi",
      specialty: "Comprehensive & Cosmetic Dentist, University of Dundee / UK",
      smileMadeBy: "Dr. Talal Al-Reyahi",
    },
  },
  "dr-hashem-ghadanfari": {
    ar: {
      doctorName: "د. هاشم غضنفري",
      specialty: "اختصاصي طب أسنان شامل و تجميل أسنان، جامعة فيرجينيا / الولايات المتحدة الأمريكية.",
      smileMadeBy: "د. هاشم غضنفري",
    },
    en: {
      doctorName: "Dr. Hashem Ghadanfari",
      specialty: "Comprehensive & Cosmetic Dentist, Virginia Commonwealth University / USA",
      smileMadeBy: "Dr. Hashem Ghadanfari",
    },
  },
  "dr-khaled-al-khayat": {
    ar: {
      doctorName: "د. خالد الخياط",
      specialty: "استشـــــاري تقويم الاسنان، جامعة بافلو نيويـورك / الولايـات المتحـدة امريكية.",
      smileMadeBy: "د. خالد الخياط",
    },
    en: {
      doctorName: "Dr. Khaled Al-Khayat",
      specialty: "Orthodontics Consultant, University of New York at Buffalo / USA",
      smileMadeBy: "Dr. Khaled Al-Khayat",
    },
  },
  "dr-moayad-al-omar": {
    ar: {
      doctorName: "د. مؤيد العمر",
      specialty: "اختصاصي علاج عصب وأقنية، جامعة الينوي / الولايات المتحدة امريكية.",
      smileMadeBy: "د. مؤيد العمر",
    },
    en: {
      doctorName: "Dr. Moayad Al-Omar",
      specialty: "Specialist Endodontist, University of Illinois / USA",
      smileMadeBy: "Dr. Moayad Al-Omar",
    },
  },
  "dr-yahya-al-yahya": {
    ar: {
      doctorName: "د. يحيى اليحيى",
      specialty: "اخصائي جراحة الفم و الوجه والفكين، جامعة تكساس هيوستن / الولايات المتحدة الأمريكية.",
      smileMadeBy: "د. يحيى اليحيى",
    },
    en: {
      doctorName: "Dr. Yahya Al Yahya",
      specialty: "Oral and Maxillofacial Surgeon Specialist, Virginia Commonwealth University / USA",
      smileMadeBy: "Dr. Yahya Al Yahya",
    },
  },
  "dr-bashar-rajab": {
    ar: {
      doctorName: "د. بشار رجب",
      specialty: "استشاري جراحة الوجه والفكين، جامعة فرجينيا / الولايات المتحـدة امريكية.",
      smileMadeBy: "د. بشار رجب",
    },
    en: {
      doctorName: "Dr. Bashar Rajab",
      specialty: "Oral and Maxillofacial Surgeon Consultant, Virginia Commonwealth University / USA",
      smileMadeBy: "Dr. Bashar Rajab",
    },
  },
  "dr-hamoud-al-farsi": {
    ar: {
      doctorName: "د. حمود الفارسي",
      specialty: "اختصاصي تركيبات وتجميل وزراعة الأسنان، جامعة جنوب كاليفورنيا / الولايات المتحدة الامريكية.",
      smileMadeBy: "د. حمود الفارسي",
    },
    en: {
      doctorName: "Dr. Hamoud Al-Farsi",
      specialty: "Prosthodontist Specialist, University of Southern California / USA",
      smileMadeBy: "Dr. Hamoud Al-Farsi",
    },
  },
  "dr-hadi-al-saffar": {
    ar: {
      doctorName: "د. هادي الصفار",
      specialty: "استشاري لثة و زراعة أسنان تجميلية، جـامعة نيويورك / الولايات المتحدة امريكية.",
      smileMadeBy: "د. هادي الصفار",
    },
    en: {
      doctorName: "Dr. Hadi Al Saffar",
      specialty: "Periodontist Cosmetic, Implantologist Consultant, University of New York at Buffalo / USA",
      smileMadeBy: "Dr. Hadi Al Saffar",
    },
  },
  "dr-ali-al-saffar": {
    ar: {
      doctorName: "د. علي الصفار",
      specialty: "استشاري طـب أسنان أطفال، جامعة مينيسوتا / الولايات المتحدة امريكية.",
      smileMadeBy: "د. علي الصفار",
    },
    en: {
      doctorName: "Dr. Ali Al Saffar",
      specialty: "Pediatric dentist, University of Minnesota / USA",
      smileMadeBy: "Dr. Ali Al Saffar",
    },
  },
  "dr-paul-nassar": {
    ar: {
      doctorName: "د. بول نصار",
      specialty: "استشاري تقـويم أسنـان، جامعة باريس / فرنسا.",
      smileMadeBy: "د. بول نصار",
    },
    en: {
      doctorName: "Dr. Paul Nassar",
      specialty: "Orthodontics Consultant, University of Paris / France",
      smileMadeBy: "Dr. Paul Nassar",
    },
  },
  "dr-essa-alrashid": {
    ar: {
      doctorName: "د. عيسى الراشد",
      specialty: "أختصاصي طـب أسنان أطفال، جامعة القاهرة / مصر.",
      smileMadeBy: "د. عيسى الراشد",
    },
    en: {
      doctorName: "Dr. Essa AlRashid",
      specialty: "Pediatric Dentist Specialist, Cairo University / Egypt",
      smileMadeBy: "Dr. Essa AlRashid",
    },
  },
  "dr-ahmad-albuzem": {
    ar: {
      doctorName: "د. احمد البزم",
      specialty: "اخصائي جراحة الفم و الوجه والفكين، جامعة دمشق / سوريا.",
      smileMadeBy: "د. احمد البزم",
    },
    en: {
      doctorName: "Dr. Ahmad Albuzem",
      specialty: "Oral and maxillofacial Surgeon, Damascus University / Syria",
      smileMadeBy: "Dr. Ahmad Albuzem",
    },
  },
  "dr-catherine-raffoul": {
    ar: {
      doctorName: "د. كاترين رافول",
      specialty: "أخصائية صحة الفم والأسنان، جــامعة تورونتـو / كنـدا.",
      smileMadeBy: "د. كاترين رافول",
    },
    en: {
      doctorName: "Dr. Catherine Raffoul",
      specialty: "Oral & Dental Hygienist, University of Toronto / Canada",
      smileMadeBy: "Dr. Catherine Raffoul",
    },
  },
  "dr-fawaz-al-foraih": {
    ar: {
      doctorName: "د. فواز الفريح",
      specialty: "اختصاصي علاج عصب وأقنية، جامعة فرجينيا / الولايات المتحدة الأمريكية.",
      smileMadeBy: "د. فواز الفريح",
    },
    en: {
      doctorName: "Dr. Fawaz Al-Foraih",
      specialty: "Specialist Endodontist, Virginia Commonwealth University / USA",
      smileMadeBy: "Dr. Fawaz Al-Foraih",
    },
  },
  "dr-abdullah-al-qaid": {
    ar: {
      doctorName: "د. عبدالله القائد",
      specialty: "اختصاصي علاج عصب وأقنية جذور، جامعة كنيتكيت - الولايات المتحدة الامريكية.",
      smileMadeBy: "د. عبدالله القائد",
    },
    en: {
      doctorName: "Dr. Abdullah Al Qaid",
      specialty: "Specialist Endodontist, University of Connecticut / USA",
      smileMadeBy: "Dr. Abdullah Al Qaid",
    },
  },
  "dr-abdulwahab-alkandari": {
    ar: {
      doctorName: "د. عبدالوهاب الكندري",
      specialty: "أخصائي اللثة، جامعة أوكلاهوما / الولايات المتحـدة الأمريكية.",
      smileMadeBy: "د. عبدالوهاب الكندري",
    },
    en: {
      doctorName: "Dr. Abdulwahab AlKandari",
      specialty: "Periodontist, The University of Oklahoma / USA",
      smileMadeBy: "Dr. Abdulwahab AlKandari",
    },
  },
  "dr-zaher-sabbagh": {
    ar: {
      doctorName: "د . زاهر الصباغ",
      specialty: "أخصائي تركيبات وتجميل وازرعة الأسنان، جامعة بيروت العربية / لبنان.",
      smileMadeBy: "د . زاهر الصباغ",
    },
    en: {
      doctorName: "Dr. Zaher Sabbagh",
      specialty: "Specialist In Cosmetic And Implant, Beirut Arab University / Lebanon",
      smileMadeBy: "Dr. Zaher Sabbagh",
    },
  },
  "dr-rawan-alomary": {
    ar: {
      doctorName: "د. روان العمري",
      specialty: "اختصاصي تجميل و طب الأسنان الشامل، جامعة دمشق / سوريا.",
      smileMadeBy: "د. روان العمري",
    },
    en: {
      doctorName: "Dr. Rawan Alomary",
      specialty: "Cosmetic Specialist, Damascus university / Syria",
      smileMadeBy: "Dr. Rawan Alomary",
    },
  },
  "dr-rawad-karam": {
    ar: {
      doctorName: "د. رواد كرم",
      specialty: "طــب الاسنــــان التحفظي و تجميــل اسنــــان، جامعة سان جوزيف / لبنان.",
      smileMadeBy: "د. رواد كرم",
    },
    en: {
      doctorName: "Dr. Rawad Karam",
      specialty: "Restorative and Esthetic Dentistry, St Joseph University / Lebanon",
      smileMadeBy: "Dr. Rawad Karam",
    },
  },
  "dr-abdullah-alfadhli": {
    ar: {
      doctorName: "د. عبدالله الفضلي",
      specialty: "أختصاصي طـب أسنان أطفال، جامعة نيزني نوفقورد/ موسكو",
      smileMadeBy: "د. عبدالله الفضلي",
    },
    en: {
      doctorName: "Dr. Abdullah Alfadhli",
      specialty: "Pediatric Dentist, Nizhny Novgorod State University / Moscow",
      smileMadeBy: "Dr. Abdullah Alfadhli",
    },
  },
  "dr-layal-saleh": {
    ar: {
      doctorName: "د. ليال صالح",
      specialty: "اخصائية تقويم الأسنان والفكين، جامعة بيروت العربية / لبنان",
      smileMadeBy: "د. ليال صالح",
    },
    en: {
      doctorName: "Dr. Layal Saleh",
      specialty: "Orthodontist and Jaw Specialist, Beirut Arab University / Lebanon",
      smileMadeBy: "Dr. Layal Saleh",
    },
  },
  "dr-meshaal-al-kanderi": {
    ar: {
      doctorName: "د. مشعل الكندري",
      specialty: "استشـــاري تركيبات وتجميـل وزراعـة أسنـان، جامعة هارفارد / الولايات المتحـدة الأمريكية.",
      smileMadeBy: "د. مشعل الكندري",
    },
    en: {
      doctorName: "Dr. Meshaal Al-Kanderi",
      specialty: "Prosthodontist Consultant, Harvard University / USA",
      smileMadeBy: "Dr. Meshaal Al-Kanderi",
    },
  },
  "dr-kamal-alkamal": {
    ar: {
      doctorName: "د. كمال الكمال",
      specialty: "طب وجراحة أسنان شامل وتجميل اسنان، جامعة فرجينيا كومنولث / الولايات المتحدة الامريكية",
      smileMadeBy: "د. كمال الكمال",
    },
    en: {
      doctorName: "Dr. Kamal Alkamal",
      specialty: "Comprehensive & Cosmetic Dentistry, Virginia Commonwealth University",
      smileMadeBy: "Dr. Kamal Alkamal",
    },
  },
  "dr-yousif-german": {
    ar: {
      doctorName: "د. يوسف جرمن",
      specialty: "اختصاصي تجميل و طب الأسنان الشامل، جامعة فيرجينيا",
      smileMadeBy: "د. يوسف جرمن",
    },
    en: {
      doctorName: "Dr. Yousif German",
      specialty: "General and Cosmetic Dentist, Virginia Commonwealth University",
      smileMadeBy: "Dr. Yousif German",
    },
  },
};

function getDoctorCopy(slug: string, locale: Locale): DoctorCopy {
  const baseCopy = commonCopy[locale];
  const doctorOverride = DOCTOR_INFO_MAP[slug]?.[locale] || {};
  return { ...baseCopy, ...doctorOverride } as DoctorCopy;
}

const commonCopy: Record<Locale, DoctorCopy> = {
  ar: {
    heroTitle: "الابتسامة الكريستالية",
    doctorName: "د. محمد الحجي",
    specialty: "اختصاصي تجميل و طب الأسنان الشامل جامعة كولومبيا / الولايات المتحدة الأمريكية",
    readMore: "اقرأ المزيد",
    profile: "عرض الملف الشخصي",
    awards: "جوائزي",
    aboutTitle: "عن دكتور",
    aboutParagraphs: [
      "تخرج د. محمد عام 2008 في طب الأسنان – جامعة كريتون – الولايات المتحدة. حاصل على شهادة التخصص في طب الأسنان الشامل وتجميل الأسنان – جامعة كولومبيا – نيويورك عام 2015. حاصل على البورد الأمريكي في طب الأسنان الشامل.",
      "من خلال دراسته في نيويورك و سنوات خبرته في علاج و تجميل الأسنان، حرص أن يعطي مراجعيه أعلى مستوى في طب الأسنان التجميلي، خبرته ونظرته الفنية جعلته يعطي كل مريض ابتسامة تتناسق مع شكل وجهه وتتميز بالطبيعة.",
    ],
    stats: [
      { value: "40+", label: "مراجعات المرضى" },
      { value: "70+", label: "العمليات الجراحية التي تم إجراؤها" },
      { value: "150+", label: "الشهادات" },
      { value: "35+", label: "سنوات من الخبرة" },
    ],
    beautyTitle: "عالم الجمال",
    smileTitle: "الابتسامة الكريستالية",
    smileSmall: "هذه الإبتسامة صنعها",
    smileMadeBy: "د. محمد الحجي",
    before: "قبل",
    after: "بعد",
    moreSmiles: "مشاهدة المزيد من الإبتسامات",
    educationTitle: "التعليم والمؤهلات",
    educationSubtitle: "مؤهلات معترف بها وتدريب مهني.",
    accreditations: "الاعتمادات",
    degree: "درجة",
    university: "جامعة",
    celebrityTitle: "راح نغير حياتك",
    celebrityTab: "مشاهير أسنان",
    testimonialTab: "اراء المراجعين",
    lifeSmall: "حلمنا مو بس نغير اسنانك..",
    lifeTitle: "راح نغير حياتك",
  },
  en: {
    heroTitle: "Crystal Smile",
    doctorName: "Dr. Mohammed AlHajji",
    specialty: "Cosmetic and Comprehensive Dentistry Specialist, Columbia University / United States of America",
    readMore: "Read More",
    profile: "View Profile",
    awards: "Awards",
    aboutTitle: "About Doctor",
    aboutParagraphs: [
      "Dr. Mohammed graduated in dentistry in 2008 from Creighton University in the United States. He completed advanced training in comprehensive and cosmetic dentistry at Columbia University in New York in 2015 and is board certified in comprehensive dentistry.",
      "Through his studies in New York and years of experience in cosmetic dental care, he is committed to giving patients the highest level of aesthetic dentistry. His experience and artistic eye help him design natural smiles that harmonize with each patient’s face.",
    ],
    stats: [
      { value: "40+", label: "Patient Reviews" },
      { value: "70+", label: "Surgical Procedures" },
      { value: "150+", label: "Certificates" },
      { value: "35+", label: "Years of Experience" },
    ],
    beautyTitle: "World of Beauty",
    smileTitle: "Crystal Smile",
    smileSmall: "This smile was made by",
    smileMadeBy: "Dr. Mohammed AlHajji",
    before: "Before",
    after: "After",
    moreSmiles: "View More Smiles",
    educationTitle: "Education & Qualifications",
    educationSubtitle: "Recognized qualifications and professional training.",
    accreditations: "Accreditations",
    degree: "Degree",
    university: "University",
    celebrityTitle: "We Change Lives",
    celebrityTab: "Asnan Celebrities",
    testimonialTab: "Testimonials",
    lifeSmall: "Our dream is not only to change your teeth..",
    lifeTitle: "We Change Your Life",
  },
};



/** Per-slug assets for the hero section */
const DOCTOR_HERO_ASSETS: Record<string, { heroImg: string; thumbImg: string }> = {
  "dr-essa-al-essa": {
    heroImg: "/images/Dr. Essa Al Essa-2.png",
    thumbImg: "/images/dr-Essa-Al-Essa-2.png",
  },
  "dr-mohammed-al-hajji": {
    heroImg: `/images/Dr Mohammed AlHajji.png`,
    thumbImg: "/images/dr-img-teeth-show.png",
  },
  "dr-amina-al-jassem": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Amina%20Al-Jassem.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Amina%20Al-Jassem.png`,
  },
  "dr-tareq-burezq": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Tareq%20Burezq.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Tareq%20Burezq.png`,
  },
  "dr-amna-al-mutawaa": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Amna%20Al%20Mutawaa.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Amna%20Al%20Mutawaa.png`,
  },
  "dr-talal-al-reyahi": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Talal%20Al-Reyahi.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Talal%20Al-Reyahi.png`,
  },
  "dr-hashem-ghadanfari": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hashem%20Ghadanfari.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hashem%20Ghadanfari.png`,
  },
  "dr-khaled-al-khayat": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Khaled%20Al-Khayat.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Khaled%20Al-Khayat.png`,
  },
  "dr-moayad-al-omar": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Moayad%20Al-Omar.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Moayad%20Al-Omar.png`,
  },
  "dr-yahya-al-yahya": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Yahya%20Al%20Yahya.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Yahya%20Al%20Yahya.png`,
  },
  "dr-bashar-rajab": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Bashar%20Rajab.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Bashar%20Rajab.png`,
  },
  "dr-hamoud-al-farsi": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hamoud%20Al-Farsi.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hamoud%20Al-Farsi.png`,
  },
  "dr-hadi-al-saffar": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hadi%20Al%20Saffar.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hadi%20Al%20Saffar.png`,
  },
  "dr-ali-al-saffar": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Ali%20Al%20Saffar.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Ali%20Al%20Saffar.png`,
  },
  "dr-paul-nassar": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Paul%20Nassar.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Paul%20Nassar.png`,
  },
  "dr-essa-alrashid": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Essa%20AlRashid.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Essa%20AlRashid.png`,
  },
  "dr-ahmad-albuzem": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Ahmad%20Albuzem.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Ahmad%20Albuzem.png`,
  },
  "dr-catherine-raffoul": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Catherine%20Raffoul.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Catherine%20Raffoul.png`,
  },
  "dr-fawaz-al-foraih": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Fawaz%20Al-Foraih.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Fawaz%20Al-Foraih.png`,
  },
  "dr-abdullah-al-qaid": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdullah%20Al%20Qaid.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdullah%20Al%20Qaid.png`,
  },
  "dr-abdulwahab-alkandari": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdulwahab%20AlKandari.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdulwahab%20AlKandari.png`,
  },
  "dr-zaher-sabbagh": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Zaher%20Sabbagh.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Zaher%20Sabbagh.png`,
  },
  "dr-rawan-alomary": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Rawan%20Alomary.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Rawan%20Alomary.png`,
  },
  "dr-rawad-karam": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Rawad%20Karam.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Rawad%20Karam.png`,
  },
  "dr-abdullah-alfadhli": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdullah%20Alfadhli.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdullah%20Alfadhli.png`,
  },
  "dr-layal-saleh": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Layal%20Saleh.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Layal%20Saleh.png`,
  },
  "dr-meshaal-al-kanderi": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Meshaal%20Al-Kanderi.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Meshaal%20Al-Kanderi.png`,
  },
  "dr-kamal-alkamal": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Kamal%20Alkamal.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Kamal%20Alkamal.png`,
  },
  "dr-yousif-german": {
    heroImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Yousif%20German.png`,
    thumbImg: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Yousif%20German.png`,
  },
};


function Hero({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDoctorCopy(slug, locale);
  const assets = DOCTOR_HERO_ASSETS[slug] || {
    heroImg: "/images/Backgrounds/Our_Team_Cover.jpg",
    thumbImg: "/images/Icon-phone.svg"
  };
  return (
    <section className={styles.hero} aria-labelledby="doctor-title">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroDoctor}>
          <Image 
            src={assets.heroImg} 
            alt={t.doctorName} 
            fill 
            sizes="(max-width: 900px) 50vw, 508px" 
            priority 
            className={styles.doctorPortrait}
          />
        </div>
        <div className={styles.heroCopy}>
          <h1 id="doctor-title">“{t.heroTitle}”</h1>
          <h2>{t.doctorName}</h2>
          <div className={styles.specialtyLine}>
            <p>{t.specialty}</p>
            <div className={styles.thumbWrapper}>
              <Image src={assets.thumbImg} alt="" width={60} height={54} className={styles.thumbImg} />
            </div>
          </div>
          <Link href="#about" className={styles.whiteButton}>{t.readMore}</Link>
        </div>
      </div>
    </section>
  );
}

function Stats({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDoctorCopy(slug, locale);
  return (
    <section className={styles.statsSection} aria-label="Doctor statistics">
      <div className={styles.statsGrid}>
        {t.stats.map((stat) => (
          <article className={styles.statCard} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutDoctor({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDoctorCopy(slug, locale);
  return (
    <section id="about" className={styles.aboutSection} aria-labelledby="about-title">
      <div className={styles.aboutWave} aria-hidden="true" />
      <div className={styles.aboutInner}>
        <div className={styles.aboutImageBox}>
  <Image
    src="/images/doctors/about-doc-sq.png"
    alt=""
    fill
    sizes="(max-width: 900px) 90vw, 806px"
    className={styles.aboutImage}
  />
</div>
        <div className={styles.aboutCopy}>
          <h2 id="about-title">{t.aboutTitle}</h2>
          {t.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className={styles.aboutActions}>
            <Link href="#education" className={styles.yellowButton}>{t.profile}</Link>
            <Link href="#education" className={styles.softButton}>{t.awards}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmileComparison({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div className="before-after-wrapper">
      <div className="before-after-img">
        <img className="image-before" src={before} alt={beforeLabel} />
        <img className="image-after" src={after} alt={afterLabel} />
      </div>
      <div className="before-text">{beforeLabel}</div>
      <div className="after-text">{afterLabel}</div>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        aria-label="Percentage of before photo shown"
        className="slider"
      />
      <div className="slider-line" aria-hidden="true" />
    </div>
  );
}

function BeautyWorld({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDoctorCopy(slug, locale);

  useEffect(() => {
    const initWorldBeauty = () => {
      if (typeof window === "undefined") return;

      const containers = document.querySelectorAll<HTMLElement>(
        ".doctor-world-beauty .before-after-wrapper"
      );

      containers.forEach((container) => {
        const slider = container.querySelector<HTMLInputElement>(".slider");
        if (!slider || slider.dataset.doctorSliderBound === "true") return;

        slider.dataset.doctorSliderBound = "true";
        container.style.setProperty("--position", `${slider.value}%`);
        slider.addEventListener("input", (event) => {
          const target = event.target as HTMLInputElement;
          container.style.setProperty("--position", `${target.value}%`);
        });
      });

      const win = window as typeof window & { $?: any };
      const $ = win.$;

      if ($?.fn?.owlCarousel) {
        const $slider = $(".doctor-world-beauty .owl-carousel.world-beauty-slider");
        if ($slider.length && !$slider.hasClass("owl-loaded")) {
          $slider.owlCarousel({
            mouseDrag: false,
            touchDrag: false,
            loop: false,
            nav: true,
            navText: [
              `<img src="${process.env.NEXT_PUBLIC_CDN_URL}/home/arrow-prev-yellow.svg" alt="Prev">`,
              `<img src="${process.env.NEXT_PUBLIC_CDN_URL}/home/arrow-next-yellow.svg" alt="Next">`,
            ],
            dots: false,
            margin: 0,
            responsiveClass: true,
            responsive: { 0: { items: 1 } },
          });
        }
      }
    };

    const retryInit = () => {
      initWorldBeauty();
      const win = window as typeof window & { $?: any };
      const $slider = win.$?.(".doctor-world-beauty .owl-carousel.world-beauty-slider");
      if ($slider?.hasClass?.("owl-loaded")) return;
      window.setTimeout(initWorldBeauty, 250);
      window.setTimeout(initWorldBeauty, 700);
      window.setTimeout(initWorldBeauty, 1400);
    };

    retryInit();
  }, []);

  const mainSmiles = [
    {
      before: "/images/Smiles/Dr-hajji/Before1.PNG",
      after: "/images/Smiles/Dr-hajji/After1.PNG",
      doctorImage: "/images/doctors/Dr-Mohammed-AlHajji-.png",
      doctorName: t.smileMadeBy,
    },
    {
      before: "/images/Smiles/Dr-hajji/Before2.PNG",
      after: "/images/Smiles/Dr-hajji/After2.PNG",
      doctorImage: "/images/doctors/Dr-Mohammed-AlHajji-.png",
      doctorName: t.smileMadeBy,
    },
  ];

  const thumbSmiles = [
    { before: "/images/Smiles/Dr-hajji/Before2.PNG", after: "/images/Smiles/Dr-hajji/After2.PNG" },
    { before: "/images/Smiles/Dr-hajji/Before1.PNG", after: "/images/Smiles/Dr-hajji/After1.PNG" },
  ];

  return (
    <div className="world-beauty-wrapper doctor-world-beauty">
      <div className="world-beauty-title">{t.beautyTitle}</div>
      <div className="container-fluid">
        <div className="owl-carousel owl-theme world-beauty-slider">
          {mainSmiles.map((smile) => (
            <div className="item" key={`${smile.before}-${smile.after}`}>
              <div className="row align-items-center">
                <div className="col-12 col-lg-7">
                  <SmileComparison
                    before={smile.before}
                    after={smile.after}
                    beforeLabel={t.before}
                    afterLabel={t.after}
                  />
                </div>
                <div className="col-12 col-lg-5">
                  <div className="caption-wrapper">
                    <div className="caption-text">{t.smileTitle}</div>
                    <div className="made-by-wrapper">
                      <div className="made-by-title">
                        {t.smileSmall} <div>{locale === "ar" ? "صنعها" : "Made By"}</div>
                      </div>
                      <div className="doctor-small">
                        <div className="doctor-img">
                          <img src={smile.doctorImage} alt="" />
                        </div>
                      </div>
                      <div className="doctor-info">
                        <div className="doctor-name">{smile.doctorName}</div>
                        <div className="doctor-title">{locale === "ar" ? "اختصاصي تجميل الأسنان" : "Cosmetic Dentist"}</div>
                        <div className="doctor-title">{locale === "ar" ? "جامعة كولومبيا" : "Columbia University"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {thumbSmiles.map((smile) => (
            <div className="col-12 col-lg-4" key={`${smile.before}-${smile.after}`}>
              <SmileComparison
                before={smile.before}
                after={smile.after}
                beforeLabel={t.before}
                afterLabel={t.after}
              />
            </div>
          ))}

          <div className="col-12 col-lg-4">
            <a href={`/${locale}/services/world-of-beauty`} className="more-smiles-block">
              <div className="more-smiles-text">{t.moreSmiles}</div>
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Path%20774.svg`}
                alt=""
                className="more-smiles-shape"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/next-arrow.svg`}
                alt=""
                className="more-smiles-arrow"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <a href={`/${locale}/services/world-of-beauty`} className="more-smiles-block-responsive">
              <div className="more-smiles-text-responsive">{t.moreSmiles}</div>
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Path%20774.svg`}
                alt=""
                className="more-smiles-shape-responsive"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/next-arrow.svg`}
                alt=""
                className="more-smiles-arrow-responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

type EducationLine = {
  title: string;
  subtitle?: string;
};

function IconAsset({
  src,
  alt = "",
  size = 24,
  className,
}: {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}) {
  return <Image src={src} alt={alt} width={size} height={size} className={className} />;
}

function CredentialRow({ item, tickSrc }: { item: EducationLine; tickSrc: string }) {
  return (
    <li className={styles.credentialItem}>
      <div className={styles.credentialTitleRow}>
        <IconAsset src={tickSrc} size={16} className={styles.tickIcon} />
        <strong>{item.title}</strong>
      </div>
      {item.subtitle ? <span className={styles.credentialSub}>{item.subtitle}</span> : null}
    </li>
  );
}

function Education({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDoctorCopy(slug, locale);

  const accreditations: EducationLine[] =
    locale === "ar"
      ? [
          { title: "معتمد من البورد الأمريكي" },
          { title: "الجمعية الدولية للأمراض الجلدية" },
          { title: "اعتماد جراحة التجميل" },
        ]
      : [
          { title: "American Board Certified" },
          { title: "International Association of Dermatology" },
          { title: "Cosmetic Surgery Accreditation" },
        ];

  const degreeItems: EducationLine[] =
    locale === "ar"
      ? [
          { title: "دكتور في الطب (MD)", subtitle: "كلية الطب بجامعة هارفارد" },
          { title: "ماجستير في طب الأمراض الجلدية", subtitle: "جامعة كاليفورنيا" },
        ]
      : [
          { title: "Doctor of Dental Medicine", subtitle: "Creighton University School of Dentistry" },
          { title: "Advanced Cosmetic Dentistry", subtitle: "Columbia University" },
        ];

  const universityItems: EducationLine[] =
    locale === "ar"
      ? [{ title: "جامعة هارفارد الطبية", subtitle: "كلية الطب بجامعة ستانفورد" }]
      : [{ title: "Columbia University", subtitle: "Creighton University" }];

  return (
    <section id="education" className={styles.educationSection} aria-labelledby="education-title">
      <div className={styles.educationBg} aria-hidden="true" />
      <div className={styles.educationInner}>
        <h2 id="education-title">{t.educationTitle}</h2>
        <p>{t.educationSubtitle}</p>

        <div className={styles.educationGrid}>
          <div className={styles.gradPhoto}>
            <Image
              src="/images/doctors/e&d-man-image.png"
              alt={t.doctorName}
              fill
              sizes="(max-width: 900px) 90vw, 674px"
            />
          </div>

          <div className={styles.qualificationCards}>
            <article className={styles.accreditationCard}>
              <div className={styles.cardHeading}>
                <IconAsset src="/images/doctors/medal-icon.svg" size={24} className={styles.cardIcon} />
                <h3>{t.accreditations}</h3>
              </div>

              <ul className={styles.credentialList}>
                {accreditations.map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/white-tick.svg" />
                ))}
              </ul>
            </article>

            <article className={styles.degreeCard}>
              <div className={styles.cardHeading}>
                <IconAsset src="/images/doctors/grad-cap.svg" size={24} className={styles.cardIcon} />
                <h3>{t.degree}</h3>
              </div>

              <ul className={styles.credentialList}>
                {degreeItems.slice(0, 1).map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/black-tick.svg" />
                ))}
              </ul>

              <hr className={styles.degreeDivider} />

              <ul className={styles.credentialList}>
                {degreeItems.slice(1).map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/black-tick.svg" />
                ))}
              </ul>

              <hr className={styles.degreeDivider} />

              <div className={styles.cardHeading}>
                <IconAsset src="/images/doctors/build-icon.svg" size={24} className={styles.cardIcon} />
                <h3>{t.university}</h3>
              </div>

              <ul className={styles.credentialList}>
                {universityItems.map((item) => (
                  <CredentialRow key={item.title} item={item} tickSrc="/images/doctors/black-tick.svg" />
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}


function HomeLivesGallery({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const galleryCopy = {
    title: isAr ? "راح نغير حياتك" : "We Change Lives",
    celebrities: isAr ? "مشاهير أسنان" : "Celebrities",
    testimonials: isAr ? "آراء المراجعين" : "Testimonials",
    ctaSmall: isAr ? "حلمنا مو بس نغير اسنانك.." : "We don’t just change smiles ..",
    ctaMain: isAr ? "راح نغير حياتك" : "We Change Lives",
    names: {
      yagoob: isAr ? "يعقوب بوشهري" : "Yagoob Boushehri",
      huda: isAr ? "هدى حسين" : "Huda Hussain",
      ghadeer: isAr ? "غدير سلطان" : "Ghadeer Sultan",
      zainab: isAr ? "زينب خفيف" : "Zainab Khaff",
      salman: isAr ? "سلمان النجادي" : "Salman Alnajadi",
      maya: isAr ? "ميار مودل" : "Maya Model",
      halima: isAr ? "حليمة بولند" : "Halima Boland",
    },
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .gallery-row .gallery-column .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            padding: 2px;
        }
        .home-figma-gallery {
            position: relative;
            padding-top: 2vw;
            overflow: visible;
            z-index: 1;
            background: transparent;
        }
        .home-figma-gallery:before {
            display: block;
            top: -11vw;
            background: url("/images/Mask Group 140.png") center no-repeat;
            background-size: contain;
            width: 100%;
            height: 34vw;
            z-index: 0;
        }
        .home-figma-gallery .change-lives {
            color: #043f84;
            font-size: clamp(26px, 2.2vw, 42px);
            font-weight: 800;
            line-height: 1;
            letter-spacing: 0 !important;
            margin: 0;
            padding-top: 0.9vw;
            z-index: 3;
        }
        .home-figma-gallery .nav-tabs {
            margin: 1.5vw auto 1.25vw;
        }
        .home-figma-gallery .nav-tabs .nav-link {
            color: rgba(255, 255, 255, 0.96);
            font-size: clamp(14px, 0.98vw, 19px);
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0 !important;
            padding: 0 0 0.48vw;
            margin: 0 1.55vw;
        }
        .home-figma-gallery .nav-tabs .nav-link.active,
        .home-figma-gallery .nav-tabs.show .nav-link {
            color: #243746;
        }
        .home-figma-gallery .nav-tabs .nav-link:after {
            bottom: 0;
            height: 0.22vw;
            min-height: 2px;
            border-radius: 999px;
            background: var(--color-secondary);
        }
        .home-figma-gallery .nav-tabs .nav-link.active:after,
        .home-figma-gallery .nav-tabs.show .nav-link:after {
            width: 112%;
        }
        .home-figma-gallery .figma-celeb-gallery {
            position: relative;
            display: grid;
            grid-template-columns: 45.55% 54.45%;
            width: 100%;
            direction: ltr;
            z-index: 3;
        }
        .home-figma-gallery-ltr .figma-celeb-gallery {
            grid-template-columns: 54.45% 45.55%;
        }
        .home-figma-gallery .tab-content {
            position: relative;
            z-index: 3;
        }
        .home-figma-gallery .figma-celeb-left,
        .home-figma-gallery .figma-celeb-right {
            display: flex;
            flex-direction: column;
        }
        .home-figma-gallery-ltr .figma-celeb-left {
            order: 2;
        }
        .home-figma-gallery-ltr .figma-celeb-right {
            order: 1;
        }
        .home-figma-gallery .figma-split-row {
            display: grid;
            grid-template-columns: 36.8% 63.2%;
            width: 100%;
        }
        .home-figma-gallery .figma-gallery-tile {
            position: relative;
            display: block;
            width: 100%;
            overflow: hidden;
            border: 1px solid #fff;
            background: #0c1824;
            z-index: 1;
        }
        .home-figma-gallery .figma-gallery-tile:before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.62) 100%);
            z-index: 1;
        }
        .home-figma-gallery .figma-gallery-tile img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            padding: 0 !important;
        }
        .home-figma-gallery .figma-gallery-title {
            position: absolute;
            right: clamp(22px, 3.2vw, 62px);
            bottom: clamp(18px, 2.2vw, 42px);
            display: inline-block;
            color: #fff;
            font-size: clamp(13px, 1.05vw, 20px);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0 !important;
            text-align: right;
            direction: rtl;
            z-index: 2;
        }
        .home-figma-gallery .figma-gallery-title:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -0.5vw;
            width: clamp(22px, 2.4vw, 40px);
            height: 0.18vw;
            min-height: 2px;
            border-radius: 999px;
            background: var(--color-secondary);
        }
        .home-figma-gallery-ltr .figma-gallery-title {
            left: clamp(22px, 3.2vw, 62px);
            right: auto;
            direction: ltr;
            text-align: left;
        }
        .home-figma-gallery-ltr .figma-gallery-title:after {
            left: 0;
            right: auto;
        }
        .home-figma-gallery .figma-tile-yagoob,
        .home-figma-gallery .figma-tile-huda {
            height: 25.72vw;
        }
        .home-figma-gallery .figma-left-portraits {
            height: 31.03vw;
        }
        .home-figma-gallery .figma-left-bottom {
            height: 16.05vw;
        }
        .home-figma-gallery .figma-tile-maya {
            height: 36.36vw;
        }
        .home-figma-gallery .figma-tile-halima {
            height: 31.17vw;
        }
        .home-figma-gallery .figma-tile-maya img,
        .home-figma-gallery .figma-tile-ghadeer img,
        .home-figma-gallery .figma-tile-zainab img {
            object-position: center top;
        }
        .home-figma-gallery .figma-gallery-cta {
            position: relative;
            height: 41.6vw;
            overflow: hidden;
            border: 1px solid #fff;
            background: #fff;
        }
        .home-figma-gallery .figma-gallery-cta-bg {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            padding: 0 !important;
            z-index: 0;
        }
        .home-figma-gallery-ltr .figma-gallery-cta-bg {
            transform: scaleX(-1);
        }
        .home-figma-gallery .figma-gallery-cta-content {
            position: relative;
            z-index: 2;
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2vw 3vw 8vw;
            color: #fff;
            text-align: center;
            direction: rtl;
            transform: translateY(-2%);
        }
        .home-figma-gallery-ltr .figma-gallery-cta-content {
            direction: ltr;
        }
        .home-figma-gallery .figma-cta-small {
            display: block;
            font-size: clamp(22px, 2.1vw, 40px);
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0 !important;
            margin-bottom: 1.25vw;
        }
        .home-figma-gallery .figma-cta-large {
            display: block;
            font-size: clamp(40px, 5vw, 88px);
            font-weight: 800;
            line-height: 1.05;
            letter-spacing: 0 !important;
        }
        @media screen and (max-width: 991px) {
            .home-figma-gallery {
                padding-top: 65px;
            }
            .home-figma-gallery:before {
                top: 0;
                height: 220px;
                background-size: cover;
                background-position: top;
            }
            .home-figma-gallery .change-lives {
                padding-top: 48px;
            }
            .home-figma-gallery .nav-tabs {
                margin: 18px auto 36px;
            }
            .home-figma-gallery .nav-tabs .nav-link {
                padding-bottom: 8px;
                margin: 0 14px;
            }
            .home-figma-gallery .nav-tabs .nav-link:after {
                height: 3px;
            }
            .home-figma-gallery .figma-celeb-gallery {
                grid-template-columns: 1fr;
            }
            .home-figma-gallery .figma-tile-yagoob,
            .home-figma-gallery .figma-tile-huda,
            .home-figma-gallery .figma-tile-maya,
            .home-figma-gallery .figma-tile-halima {
                height: auto;
                aspect-ratio: 16 / 9;
            }
            .home-figma-gallery .figma-left-portraits {
                height: 260px;
            }
            .home-figma-gallery .figma-left-bottom {
                height: 190px;
            }
            .home-figma-gallery .figma-gallery-cta {
                height: 360px;
            }
            .home-figma-gallery .figma-gallery-title {
                right: 24px;
                bottom: 24px;
            }
            .home-figma-gallery .figma-gallery-title:after {
                bottom: -8px;
                height: 2px;
            }
        }
        @media screen and (max-width: 575px) {
            .home-figma-gallery {
                padding-top: 50px;
            }
            .home-figma-gallery:before {
                height: 233px;
                background-position: top center;
            }
            .home-figma-gallery .change-lives {
                font-size: 30px;
                padding-top: 38px;
            }
            .home-figma-gallery .nav-tabs {
                margin: 18px auto 26px;
            }
            .home-figma-gallery .nav-tabs .nav-link {
                font-size: 17px;
                padding-bottom: 10px;
                margin: 0 11px;
            }
            .home-figma-gallery .figma-celeb-gallery {
                display: grid;
                grid-template-columns: 45.5% 54.5%;
                grid-template-rows: 220px 220px 235px 245px 170px 360px;
                grid-template-areas:
                    "yagoob maya"
                    "huda maya"
                    "ghadeer halima"
                    "zainab salman"
                    "logo logo"
                    "cta cta";
                align-items: stretch;
                width: 100%;
            }
            .home-figma-gallery .figma-celeb-left,
            .home-figma-gallery .figma-celeb-right,
            .home-figma-gallery .figma-left-portraits,
            .home-figma-gallery .figma-left-bottom {
                display: contents;
            }
            .home-figma-gallery .figma-tile-yagoob { grid-area: yagoob; }
            .home-figma-gallery .figma-tile-huda { grid-area: huda; }
            .home-figma-gallery .figma-tile-ghadeer { grid-area: ghadeer; }
            .home-figma-gallery .figma-tile-zainab { grid-area: zainab; }
            .home-figma-gallery .figma-tile-salman { grid-area: salman; }
            .home-figma-gallery .figma-tile-maya { grid-area: maya; }
            .home-figma-gallery .figma-tile-halima { grid-area: halima; }
            .home-figma-gallery .figma-logo-tile { grid-area: logo; }
            .home-figma-gallery .figma-gallery-cta { grid-area: cta; }
            .home-figma-gallery .figma-gallery-tile,
            .home-figma-gallery .figma-gallery-cta,
            .home-figma-gallery .figma-left-portraits .figma-gallery-tile,
            .home-figma-gallery .figma-left-bottom .figma-gallery-tile {
                height: 100% !important;
                aspect-ratio: auto;
            }
            .home-figma-gallery .figma-gallery-title {
                right: 22px;
                bottom: 28px;
                font-size: 14px;
            }
            .home-figma-gallery-ltr .figma-gallery-title {
                left: 22px;
                right: auto;
            }
            .home-figma-gallery .figma-gallery-title:after {
                bottom: -7px;
            }
            .home-figma-gallery .figma-tile-yagoob img,
            .home-figma-gallery .figma-tile-huda img,
            .home-figma-gallery .figma-tile-salman img {
                object-position: center;
            }
            .home-figma-gallery .figma-tile-ghadeer img,
            .home-figma-gallery .figma-tile-zainab img,
            .home-figma-gallery .figma-tile-maya img,
            .home-figma-gallery .figma-tile-halima img {
                object-position: center top;
            }
            .home-figma-gallery .figma-gallery-cta-content {
                padding: 34px 24px 78px;
                transform: none;
            }
            .home-figma-gallery .figma-cta-small {
                font-size: 22px;
                margin-bottom: 14px;
            }
            .home-figma-gallery .figma-cta-large {
                font-size: 46px;
                line-height: 1.15;
            }
        }`,
        }}
      />

      <section className={`gallery-wrapper home-figma-gallery ${isAr ? "home-figma-gallery-rtl" : "home-figma-gallery-ltr"}`} aria-labelledby="lives-title">
        <div id="lives-title" className="change-lives">{galleryCopy.title}</div>

        <ul className="nav nav-tabs" id="doctorLivesTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-toggle="tab"
              data-target="#doctor-tab-celebrities"
              type="button"
              role="tab"
              aria-controls="doctor-tab-celebrities"
              aria-selected="true"
            >
              {galleryCopy.celebrities}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-toggle="tab"
              data-target="#doctor-tab-testimonials"
              type="button"
              role="tab"
              aria-controls="doctor-tab-testimonials"
              aria-selected="false"
            >
              {galleryCopy.testimonials}
            </button>
          </li>
        </ul>

        <div className="tab-content" id="doctorLivesTabContent">
          <div className="tab-pane fade show active" id="doctor-tab-celebrities" role="tabpanel">
            <div className="figma-celeb-gallery">
              <div className="figma-celeb-left">
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/yagoob-boushehri.png`} className="gallery-item figma-gallery-tile figma-tile-yagoob image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/yagoob-boushehri.png`} alt={galleryCopy.names.yagoob} />
                  <div className="figma-gallery-title">{galleryCopy.names.yagoob}</div>
                </a>

                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/huda-hussain.png`} className="gallery-item figma-gallery-tile figma-tile-huda image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/huda-hussain.png`} alt={galleryCopy.names.huda} />
                  <div className="figma-gallery-title">{galleryCopy.names.huda}</div>
                </a>

                <div className="figma-split-row figma-left-portraits">
                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/ghadeer-sultan.png`} className="gallery-item figma-gallery-tile figma-tile-ghadeer image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/ghadeer-sultan.png`} alt={galleryCopy.names.ghadeer} />
                    <div className="figma-gallery-title">{galleryCopy.names.ghadeer}</div>
                  </a>

                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/zainab-khafif.png`} className="gallery-item figma-gallery-tile figma-tile-zainab image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/zainab-khafif.png`} alt={galleryCopy.names.zainab} />
                    <div className="figma-gallery-title">{galleryCopy.names.zainab}</div>
                  </a>
                </div>

                <div className="figma-split-row figma-left-bottom">
                  <div className="gallery-item figma-gallery-tile figma-logo-tile">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Group%2035316.png`} alt="" />
                  </div>

                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/salman-alnajadi.png`} className="gallery-item figma-gallery-tile figma-tile-salman image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/salman-alnajadi.png`} alt={galleryCopy.names.salman} />
                    <div className="figma-gallery-title">{galleryCopy.names.salman}</div>
                  </a>
                </div>
              </div>

              <div className="figma-celeb-right">
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/maya-model.png`} className="gallery-item figma-gallery-tile figma-tile-maya image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/maya-model.png`} alt={galleryCopy.names.maya} />
                  <div className="figma-gallery-title">{galleryCopy.names.maya}</div>
                </a>

                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/halima-boland.png`} className="gallery-item figma-gallery-tile figma-tile-halima image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/halima-boland.png`} alt={galleryCopy.names.halima} />
                  <div className="figma-gallery-title">{galleryCopy.names.halima}</div>
                </a>

                <div className="figma-gallery-cta">
                  <img className="figma-gallery-cta-bg" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/orthodontist%201.png`} alt="" aria-hidden="true" />
                  <div className="figma-gallery-cta-content">
                    <span className="figma-cta-small">{galleryCopy.ctaSmall}</span>
                    <span className="figma-cta-large">{galleryCopy.ctaMain}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="doctor-tab-testimonials" role="tabpanel" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}

export default function DoctorDetailsPage() {
  const params = useParams();
  const locale = ((params?.locale as string) === "ar" ? "ar" : "en") as Locale;
  const slug = (params?.slug as string) ?? "";
  const isAr = locale === "ar";

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <Hero locale={locale} slug={slug} />
      <Stats locale={locale} slug={slug} />
      <AboutDoctor locale={locale} slug={slug} />
      <BeautyWorld locale={locale} slug={slug} />
      <Education locale={locale} slug={slug} />
      <HomeLivesGallery locale={locale} />
      <AppointmentSection locale={locale} />
    </main>
  );
}