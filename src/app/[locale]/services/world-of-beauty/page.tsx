"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import AppointmentSection from "@/components/home/AppointmentSection";

type SmileImage = {
  before: string;
  after: string;
};

type SmileCase = {
  heading: {
    ar: string;
    en: string;
  };
  doctor: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  university: {
    ar: string;
    en: string;
  };
  gender: "m" | "f";
  doctorImage: string;
  smiles: SmileImage[];
};

const FIGMA_IMAGES = {
  before1: "/images/teeth-img-before.png",
  after1: "/images/teeth-img-after.png",
};

const smileImages = {
  main: {
    before: FIGMA_IMAGES.before1,
    after: FIGMA_IMAGES.after1,
  },
  local1: {
    before: "/images/teeth-img-before.png",
    after: "/images/teeth-img-after.png",
  },
  local2: {
    before: "/images/teeth-img-before-2.png",
    after: "/images/teeth-img-after-2.png",
  },
  local3: {
    before: "/images/teeth-img-before-3-1.png",
    after: "/images/teeth-img-after-3-1.png",
  },
};

const wobCases: SmileCase[] = [
  {
    heading: {
      ar: "يوم يديد، وحالة يديدة",
      en: "A New Day, A New Case",
    },
    doctor: {
      ar: "د.عيسى العيسى",
      en: "Dr. Issa Alissa",
    },
    title: {
      ar: "استشاري طب اسنان شامل وتجميل الاسنان",
      en: "Consultant Comprehensive and Cosmetic Dentist",
    },
    university: {
      ar: ".جامعة بتسبرغ / الولايات المتحدة الامريكية",
      en: "University of Pittsburgh / United States of America",
    },
    gender: "m",
    doctorImage: "/images/worldofbeauty/drIssa.png",
    smiles: [smileImages.main, smileImages.local2],
  },
  {
    heading: {
      ar: "الابتسامة الكريستالية",
      en: "Crystal Smile",
    },
    doctor: {
      ar: "د. محمد الحجي",
      en: "	Dr. Mohammed Al-Hajji",
    },
    title: {
      ar: "اختصاصي تركيبات وتجميل وزراعة الأسنان",
      en: "Prosthodontics, Cosmetic Dentistry and Implant Specialist",
    },
    university: {
      ar: ".جامعة جنوب كاليفورنيا / الولايات المتحدة الامريكية",
      en: "University of Southern California / United States of America",
    },
    gender: "m",
    doctorImage: "/images/dr-Al-Hajji.png",
    smiles: [smileImages.local1, smileImages.local2],
  },
  {
    heading: {
      ar: "انت في يد أمينة",
      en: "You Are In Safe Hands",
    },
    doctor: {
      ar: "د. أمينة الجاسم",
      en: "Dr. Amina Al Jassem",
    },
    title: {
      ar: "اختصاصي طب الأسنان الشامل المتقدم وتجميل الأسنان",
      en: "Advanced Comprehensive and Cosmetic Dentistry Specialist",
    },
    university: {
      ar: ".كلية الجراحيين الملكية في إيرلندا",
      en: "Royal College of Surgeons in Ireland",
    },
    gender: "f",
    doctorImage: "/images/dr-amina.png",
    smiles: [smileImages.local2, smileImages.local3],
  },
  {
    heading: {
      ar: "نغير حياتك",
      en: "We Change Lives",
    },
    doctor: {
      ar: "د. هاشم غضنفري",
      en: "Dr. Hashem Ghadanfari",
    },
    title: {
      ar: "اختصاصي طب أسنان شامل و تجميل أسنان",
      en: "Comprehensive and Cosmetic Dentistry Specialist",
    },
    university: {
      ar: ".جامعة فيرجينيا / الولايات المتحدة الأمريكية",
      en: "Virginia University / United States of America",
    },
    gender: "m",
    doctorImage: "/images/worldofbeauty/drHashem.png",
    smiles: [smileImages.main, smileImages.local2],
  },
  {
    heading: {
      ar: "نغير حياتك",
      en: "We Change Lives",
    },
    doctor: {
      ar: "د. زينب العوضي",
      en: "Dr. Zainab Al Awadhi",
    },
    title: {
      ar: "اختصاصي طب أسنان شامل و تجميل أسنان",
      en: "Comprehensive and Cosmetic Dentistry Specialist",
    },
    university: {
      ar: ".جامعة فيرجينيا / الولايات المتحدة الأمريكية",
      en: "Virginia University / United States of America",
    },
    gender: "m",
    doctorImage: "/images/worldofbeauty/drZainab.png",
    smiles: [smileImages.main, smileImages.local2],
  },
  {
    heading: {
      ar: "نغير حياتك",
      en: "We Change Lives",
    },
    doctor: {
      ar: "د. طلال الرياحي",
      en: "Dr. Talal Al Riyahi",
    },
    title: {
      ar: "طــب الاسنــــان التحفظي و تجميــل اسنــــان",
      en: "Restorative and Cosmetic Dentistry",
    },
    university: {
      ar: ".جامعة دانـــــدي / المملكــــة المتحــــدة",
      en: "University of Dundee / United Kingdom",
    },
    gender: "m",
    doctorImage: "/images/worldofbeauty/drTalal.png",
    smiles: [smileImages.local1, smileImages.local3],
  },
  {
    heading: {
      ar: "ابتسامتك واجتهك",
      en: "We Change Lives",
    },
    doctor: {
      ar: "د. حمود الفارسي",
      en: "Dr. Hamoud Al Farsi",
    },
    title: {
      ar: "طــب الاسنــــان التحفظي و تجميــل اسنــــان",
      en: "Restorative and Cosmetic Dentistry",
    },
    university: {
      ar: ".جامعة جنوب كاليفورنيا / الولايات المتحدة الامريكية",
      en: "University of Southern California / United States of America",
    },
    gender: "m",
    doctorImage: "/images/dr-hamoud.png",
    smiles: [smileImages.main, smileImages.local2],
  },
  {
    heading: {
      ar: "نغير حياتك",
      en: "We Change Lives",
    },
    doctor: {
      ar: "د. رواد كرم",
      en: "Dr. Ruwad Karam",
    },
    title: {
      ar: "طب وجراحة أسنان شامل وتجميل اسنان",
      en: "Comprehensive Dental Surgery and Cosmetic Dentistry",
    },
    university: {
      ar: ".جامعة سان جوزيف / لبنان",
      en: "Saint Joseph University / Lebanon",
    },
    gender: "f",
    doctorImage: "/images/worldofbeauty/drRuwad.png",
    smiles: [smileImages.local2, smileImages.local3],
  },
];

const featuredSlides: SmileCase[] = [
  {
    heading: {
      ar: "لكل بسمة رسمة",
      en: "A Design For Every Smile",
    },
    doctor: {
      ar: "د. طارق بــورزق",
      en: "Dr. Tareq Bawarzeg",
    },
    title: {
      ar: "استشـــاري تركيبات وتجميـل وزراعـة أسنـان",
      en: "Consultant Prosthodontics, Cosmetic Dentistry and Dental Implants",
    },
    university: {
      ar: ".جامعة هارفارد / الولايات المتحـدة الأمريكية",
      en: "Harvard University / United States of America",
    },
    gender: "m",
    doctorImage: "/images/worldofbeauty/drTareq.png",
    smiles: [smileImages.main],
  },
  {
    heading: {
      ar: "الابتسامة الكريستالية",
      en: "The Crystal Smile",
    },
    doctor: {
      ar: "د. محمد الحجي",
      en: "Dr. Mohammad Al Hajji",
    },
    title: {
      ar: "اختصاصي تجميل و طب الأسنان الشامل",
      en: "Cosmetic and Comprehensive Dentistry Specialist",
    },
    university: {
      ar: ".جامعة كولومبيا / الولايات المتحدة الأمريكية",
      en: "Columbia University / United States of America",
    },
    gender: "m",
    doctorImage: "/images/worldofbeauty/drMohammad.png",
    smiles: [smileImages.local2],
  },
];

const getLocalizedText = (
  value: {
    ar: string;
    en: string;
  },
  locale: string
) => {
  return locale === "ar" ? value.ar : value.en;
};

export default function WorldOfBeautyPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isAr = locale === "ar";
  const t = getDictionary(locale);

  useEffect(() => {
    const containers = document.querySelectorAll(".before-after-wrapper");

    const cleanupListeners: Array<() => void> = [];

    containers.forEach((container: Element) => {
      const slider = container.querySelector(".slider") as HTMLInputElement | null;

      if (!slider) return;

      const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        (container as HTMLElement).style.setProperty("--position", `${target.value}%`);
      };

      slider.addEventListener("input", handleInput);
      cleanupListeners.push(() => slider.removeEventListener("input", handleInput));
    });

    return () => {
      cleanupListeners.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper pe-none no-after">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">{t.world_of_beauty}</h1>
              <p className="hero-text">
                {t.we_dont} {t.we_change_lives}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-img">
          <img
            src="/images/Backgrounds/World_of_Beauty_Cover_Image2x.jpg"
            alt="background image"
          />
          <img
            src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_WOB_Cropped@3x.jpg"
            alt="background image"
          />
        </div>
      </div>

      <section className="wob-grey-bg wob-carousel-safe" dir={isAr ? "rtl" : "ltr"}>
        <div className="container-fluid">
          <div className="owl-carousel owl-theme world-beauty-slider">
            {featuredSlides.map((slide, index) => {
              const smile = slide.smiles[0];

              return (
                <div className="item" key={`featured-slide-${index}`}>
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <div className="caption-wrapper">
                        <div className="caption-text">
                          {getLocalizedText(slide.heading, locale)}
                        </div>

                        <div className="made-by-wrapper">
                          <div className="made-by-title">
                            {t.this_smile}
                            <div>
                              {slide.gender === "f" ? t.made_by_female : t.made_by}
                            </div>
                          </div>

                          <div className="doctor-small">
                            <div className="doctor-img">
                              <img
                                src={slide.doctorImage}
                                alt={getLocalizedText(slide.doctor, locale)}
                              />
                            </div>
                          </div>

                          <div className="doctor-info">
                            <div className="doctor-name">
                              {getLocalizedText(slide.doctor, locale)}
                            </div>
                            <div className="doctor-title">
                              {getLocalizedText(slide.title, locale)}
                            </div>
                            <div className="doctor-title">
                              {getLocalizedText(slide.university, locale)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-7">
                      <div className="before-after-wrapper wob-page-slider">
                        <div className="before-after-img">
                          <img
                            className="image-before"
                            src="/images/worldofbeauty/before_img_1686637958،Before3.jpg"
                            alt={isAr ? "قبل" : "Before"}
                          />
                          <img
                            className="image-after"
                            src="/images/worldofbeauty/after_img_1686637958،After3.jpg"
                            alt={isAr ? "بعد" : "After"}
                          />
                        </div>

                        <div className="before-text">{t.before}</div>
                        <div className="after-text">{t.after}</div>

                        <input
                          type="range"
                          min="0"
                          max="100"
                          defaultValue="50"
                          aria-label="Percentage of before photo shown"
                          className="slider"
                        />

                        <div className="slider-line" aria-hidden="true"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* World of Beauty Cases */}
      <div className="wob-cases-wrapper" dir={isAr ? "rtl" : "ltr"}>
        {wobCases.map((doctor, dIdx) => {
          const isGreySection = dIdx % 2 !== 0;

          return (
            <section
              key={`wob-case-${dIdx}`}
              className={`wob-case-section ${
                isGreySection
                  ? "wob-case-section--grey"
                  : "wob-case-section--white"
              }`}
            >
              <div className="container-fluid wob-case-container">
                <div className="row align-items-center wob-case-row">
                  <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                    <div className="caption-wrapper">
                      <div className="caption-text mb-4">
                        {getLocalizedText(doctor.heading, locale)}
                      </div>

                      <div className="made-by-wrapper">
                        <div className="made-by-title">
                          {t.this_smile}
                          <div>
                            {doctor.gender === "f" ? t.made_by_female : t.made_by}
                          </div>
                        </div>

                        <div className="doctor-small my-3">
                          <div className="doctor-img">
                            <img
                              src={doctor.doctorImage}
                              alt={getLocalizedText(doctor.doctor, locale)}
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="doctor-info">
                          <div className="doctor-name font-weight-bold">
                            {getLocalizedText(doctor.doctor, locale)}
                          </div>
                          <div className="doctor-title">
                            {getLocalizedText(doctor.title, locale)}
                          </div>
                          <div className="doctor-title">
                            {getLocalizedText(doctor.university, locale)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-8">
                    <div className="row">
                      {doctor.smiles.map((smile, sIdx) => (
                        <div key={`smile-${dIdx}-${sIdx}`} className="col-12 col-md-6 mb-3">
                          <div className="before-after-wrapper">
                            <div className="before-after-img">
                              <img
                                className="image-before"
                                src={smile.before}
                                alt={isAr ? "قبل" : "Before"}
                              />
                              <img
                                className="image-after"
                                src={smile.after}
                                alt={isAr ? "بعد" : "After"}
                              />
                            </div>

                            <div className="before-text">{t.before}</div>
                            <div className="after-text">{t.after}</div>

                            <input
                              type="range"
                              min="0"
                              max="100"
                              defaultValue="50"
                              aria-label="Percentage of before photo shown"
                              className="slider"
                            />

                            <div className="slider-line" aria-hidden="true"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <AppointmentSection locale={locale} />
    </>
  );
}