"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import FigmaOurTeam from "@/components/home/FigmaOurTeam";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Locale = "ar" | "en";

type TreatmentCard = {
  title: string;
  subtitle: string;
  image: string;
};

const A = {
  heroBg1: "https://www.figma.com/api/mcp/asset/7acddc87-a6dd-4f04-9898-3251e84ce288",
  heroBg3: "https://www.figma.com/api/mcp/asset/e1c7e33a-3686-45ed-a064-9b06e3e94313",
  heroPhoto: "/images/hero-sq-img.png",
  overview: "https://www.figma.com/api/mcp/asset/845189c0-cd07-4785-91bf-3e2d1df1cbfa",
  metal: "https://www.figma.com/api/mcp/asset/9b1e872e-8659-4e0f-9fd6-9251e33712a2",
  invisalign: "https://www.figma.com/api/mcp/asset/46c0cec7-9d8e-4190-8b1a-3094eb583c3c",
  ceramic: "https://www.figma.com/api/mcp/asset/ae526876-750a-413d-92b1-382d26e5bc19",
  greyWave: "/images/grey-bg-ortho.png",
  doctor: "https://www.figma.com/api/mcp/asset/25005767-5152-4c1b-a3a9-6f872ad5a68d",
  before: "https://www.figma.com/api/mcp/asset/8fc8a4ef-6266-4b2d-9faa-e6385a57ef25",
  after: "https://www.figma.com/api/mcp/asset/c9f96ea7-2f3a-469d-9959-7c8ef8a80dae",
  before1: "https://www.figma.com/api/mcp/asset/3049cb6b-b622-404a-98f5-c22b188e33ea",
  after1: "https://www.figma.com/api/mcp/asset/5959fe4a-9006-44e5-967f-05d7ced276d0",
  before2: "https://www.figma.com/api/mcp/asset/b7433cae-4a46-4bd9-9902-6ab397ccf836",
  after2: "https://www.figma.com/api/mcp/asset/398995a1-1e74-4c67-96d1-36efca68813c",
};

const copy = {
  ar: {
    heroTitle: "تقويم الأسنان",
    heroSub: "استقم ابتسامتك مع علاجات تقويم الأسنان المتقدمة.",
    heroText:
      "يركز طب تقويم الأسنان على تصحيح اصطفاف الأسنان وتحسين صحة الفم من خلال علاجات التقويم الحديثة وأجهزة التقويم الشفافة.",
    book: "حجز موعد",
    bookNow: "احجز الآن",
    treatmentsTitle: "علاجات تقويم الأسنان",
    cardSubtitle: "تقويم الأسنان (الأقواس)",
    introTitle: "قسم تقويم الأسنان لدينا",
    introText:
      "يستخدم متخصصو تقويم الأسنان لدينا التكنولوجيا المتقدمة والتقنيات الحديثة لتوفير علاجات دقيقة ومريحة لمحاذاة الأسنان. من الأقواس التقليدية إلى محاذاة مسح، ونحن نضمن الرعاية الشخصية لكل مريض.",
    worldTitle: "عالم الجمال",
    smileTitle: "الابتسامة الكريستالية",
    made1: "هذه الإبتسامة",
    made2: "صنعها",
    doctorName: "د. محمد الحجي",
    doctorTitle: "اختصاصي تجميل و طب الأسنان الشامل",
    doctorUni: ".جامعة كولومبيا / الولايات المتحدة الأمريكية",
    before: "قبل",
    after: "بعد",
    moreSmiles: "مشاهدة المزيد من الإبتسامات",
    galleryTitle: "راح نغير حياتك",
    celebs: "مشاهير اسنان",
    reviews: "اراء المراجعين",
    ctaSmall: "حلمنا مو بس نغير اسنانك..",
    ctaMain: "راح نغير حياتك",
    names: {
      yagoob: "يعقوب بوشهري",
      huda: "هدى حسين",
      ghadeer: "غدير سبتي",
      zainab: "زينب خلف",
      salman: "سلمان النجادي",
      maria: "ماريا مودل",
      halima: "حليمه بولند",
    },
    treatments: ["نظرة عامة", "الانفزلاين", "تقويم الاسنان المعدني", "تقويم السيراميك"],
  },
  en: {
    heroTitle: "Orthodontics",
    heroSub: "Straighten your smile with advanced orthodontic treatments.",
    heroText:
      "Orthodontics focuses on correcting teeth alignment and improving oral health through modern braces and clear aligner treatments.",
    book: "Book Appointment",
    bookNow: "Book Now",
    treatmentsTitle: "Orthodontic Treatments",
    cardSubtitle: "Orthodontics (Braces)",
    introTitle: "Our Orthodontics Department",
    introText:
      "Our orthodontic specialists use advanced technology and modern techniques to provide precise, comfortable treatments for teeth alignment. From traditional braces to clear aligners, we ensure personalized care for every patient.",
    worldTitle: "World of Beauty",
    smileTitle: "The Crystal Smile",
    made1: "This smile",
    made2: "made by",
    doctorName: "Dr. Mohammad Alhajji",
    doctorTitle: "Cosmetic & Comprehensive Dentist",
    doctorUni: "Columbia University / United States of America.",
    before: "Before",
    after: "After",
    moreSmiles: "View more smiles",
    galleryTitle: "We Change Lives",
    celebs: "Asnan Celebrities",
    reviews: "Testimonials",
    ctaSmall: "We don’t just change your teeth..",
    ctaMain: "We Change Lives",
    names: {
      yagoob: "Yagoob Boushehri",
      huda: "Huda Hussain",
      ghadeer: "Ghadeer Sabti",
      zainab: "Zainab Khalaf",
      salman: "Salman Alnajadi",
      maria: "Maria Model",
      halima: "Halima Boland",
    },
    treatments: ["Overview", "Invisalign", "Metal Braces", "Ceramic Braces"],
  },
};

function HomeWorldBeautySection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  useEffect(() => {
    const initWorldBeauty = () => {
      if (typeof window === "undefined") return;

      const containers = document.querySelectorAll(
        ".orthodontics-world-beauty .before-after-wrapper"
      );

      containers.forEach((container) => {
        const slider = container.querySelector(".slider") as HTMLInputElement | null;
        if (!slider || slider.dataset.asnanOrthoBound === "true") return;

        slider.dataset.asnanOrthoBound = "true";

        const setPosition = () => {
          (container as HTMLElement).style.setProperty(
            "--position",
            `${slider.value}%`
          );
        };

        setPosition();
        slider.addEventListener("input", setPosition);
      });

      const $ = (window as any).$;

      if ($?.fn?.owlCarousel) {
        const $worldBeautySlider = $(
          ".orthodontics-world-beauty .owl-carousel.world-beauty-slider"
        );

        if (
          $worldBeautySlider.length &&
          !$worldBeautySlider.hasClass("owl-loaded")
        ) {
          $worldBeautySlider.owlCarousel({
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

    const tryInit = () => {
      const $ = typeof window !== "undefined" ? (window as any).$ : undefined;

      if ($?.fn?.owlCarousel) {
        initWorldBeauty();
      } else {
        window.setTimeout(tryInit, 200);
      }
    };

    tryInit();
  }, []);

  return (
    <div className="world-beauty-wrapper orthodontics-world-beauty">
      <div className="world-beauty-title">{t.world_of_beauty}</div>
      <div className="container-fluid">
        <div className="owl-carousel owl-theme world-beauty-slider">
          <div className="item">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <div className="before-after-wrapper">
                  <div className="before-after-img">
                    <img
                      className="image-before"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before.png`}
                      alt="Before"
                    />
                    <img
                      className="image-after"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after.png`}
                      alt="After"
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
                  <div className="slider-line" aria-hidden="true" />
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="caption-wrapper">
                  <div className="caption-text">{t.beautiful_smile}</div>
                  <div className="made-by-wrapper">
                    <div className="made-by-title">
                      {t.this_smile} <div>{t.made_by}</div>
                    </div>

                    <div className="doctor-small">
                      <div className="doctor-img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/dr-img-teeth-show.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="doctor-info">
                      <div className="doctor-name">{t.dr_border_img}</div>
                      <div className="doctor-title">{t.prosthodontist}</div>
                      <div className="doctor-title">{t.kuwait_university}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <div className="before-after-wrapper">
                  <div className="before-after-img">
                    <img
                      className="image-before"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-2.png`}
                      alt="Before"
                    />
                    <img
                      className="image-after"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-2.png`}
                      alt="After"
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
                  <div className="slider-line" aria-hidden="true" />
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="caption-wrapper">
                  <div className="caption-text">{t.beautiful_smile}</div>
                  <div className="made-by-wrapper">
                    <div className="made-by-title">
                      {t.this_smile} <div>{t.made_by_female}</div>
                    </div>

                    <div className="doctor-small">
                      <div className="doctor-img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Dr.-Amnah-(1).png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="doctor-info">
                      <div className="doctor-name">Dr. Amnah</div>
                      <div className="doctor-title">{t.orthodontist}</div>
                      <div className="doctor-title">{t.kuwait_university}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="before-after-wrapper">
              <div className="before-after-img">
                <img
                  className="image-before"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-3-1.png`}
                  alt="Before"
                />
                <img
                  className="image-after"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-3-1.png`}
                  alt="After"
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
              <div className="slider-line" aria-hidden="true" />
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="before-after-wrapper">
              <div className="before-after-img">
                <img
                  className="image-before"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-2.png`}
                  alt="Before"
                />
                <img
                  className="image-after"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-2.png`}
                  alt="After"
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
              <div className="slider-line" aria-hidden="true" />
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <a
              href={`/${locale}/services/world-of-beauty`}
              className="more-smiles-block"
            >
              <div className="more-smiles-text">{t.view_more}</div>
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
            <a
              href={`/${locale}/services/world-of-beauty`}
              className="more-smiles-block-responsive"
            >
              <div className="more-smiles-text-responsive">{t.view_more}</div>
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

function HomeLivesGallery({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const t = getDictionary(locale);
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

  useEffect(() => {
    const initGallery = () => {
      if (typeof window === "undefined") return;
      const $ = (window as any).$;

      if (!$) {
        window.setTimeout(initGallery, 200);
        return;
      }

      if ($.fn?.magnificPopup) {
        const $imagePopups = $(".orthodontics-home-figma-gallery .image-popup");
        const $videoPopups = $(".orthodontics-home-figma-gallery .popup-player");

        if ($imagePopups.length) {
          $imagePopups.magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            gallery: { enabled: true },
            zoom: {
              enabled: true,
              duration: 300,
              easing: "ease-in-out",
              opener: function (openerElement: any) {
                return openerElement.is("img")
                  ? openerElement
                  : openerElement.find("img");
              },
            },
          });
        }

        if ($videoPopups.length) {
          $videoPopups.magnificPopup({ type: "iframe", midClick: true });
        }
      }
    };

    initGallery();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
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
            padding-top: 2vw !important;
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
    font-size: 46px;
    font-weight: 800;
    line-height: 50px;
    letter-spacing: 0 !important;
    margin: 0;
    padding-top: 0.9vw;
    z-index: 3;
        }
        .home-figma-gallery .nav-tabs {
            margin: 2.5vw auto 2.25vw;
        }
        .home-figma-gallery .nav-tabs .nav-link {
            color: rgba(255, 255, 255, 0.96);
                font-size: 24px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0 !important;
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
    font-size: 24px;
    font-weight: 700;
    line-height: 44px;
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
       .home-figma-gallery-rtl .figma-gallery-cta-bg {
    transform: scaleX(-1);
}
        .home-figma-gallery .figma-gallery-cta-content {
            position: relative;
            z-index: 2;
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: flex-start;
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
                font-size: 100px;
            font-weight: 800;
            line-height: 1.05;
            letter-spacing: 0 !important;
                 text-align: start;
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
                height: 255px;
                background-position: top center;
            }
            .home-figma-gallery .change-lives {
        font-size: 28px;
        padding-top: 41px;
            }
            .home-figma-gallery .nav-tabs {
        margin: 12px auto 18px;
            }
            .home-figma-gallery .nav-tabs .nav-link {
                font-size: 17px;
                padding-bottom: 10px;
                margin: 0 11px;
    line-height: 40px;
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
        }
      `}} />

      {/* Gallery */}
      <div className={`gallery-wrapper home-figma-gallery orthodontics-home-figma-gallery ${isAr ? "home-figma-gallery-rtl" : "home-figma-gallery-ltr"}`}>
        <div className="change-lives">{galleryCopy.title}</div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" data-toggle="tab" data-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="true">
              {galleryCopy.celebrities}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-toggle="tab" data-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
              {galleryCopy.testimonials}
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab2" role="tabpanel">
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

          <div className="tab-pane fade" id="tab3" role="tabpanel">
            <div className="gallery-row">
              <div className="gallery-column">
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 141.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-1" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 141-2.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-2" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item no-after">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/orthodontist%201.png`} alt="" />
                  <div className="change-block">
                    <div className="change-smile">{t.we_dont}</div>
                    <div className="change-life">{t.we_change_lives}</div>
                  </div>
                </div>
              </div>

              <div className="gallery-column">
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 141-3.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-3" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 138.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-4" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-row">
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 138-2.png`} alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-5" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 138-3.png`} alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-6" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gallery-row">
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 139.png`} alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-7" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Group%2035316.png`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function OrthodonticsServicePage() {
  const params = useParams();
  const locale = ((params?.locale as string) || "ar") as Locale;
  const isAr = locale === "ar";
  const t = copy[isAr ? "ar" : "en"];

  const treatments: TreatmentCard[] = [
    { title: t.treatments[0], subtitle: t.cardSubtitle, image: A.overview },
    { title: t.treatments[1], subtitle: t.cardSubtitle, image: A.invisalign },
    { title: t.treatments[2], subtitle: t.cardSubtitle, image: A.metal },
    { title: t.treatments[3], subtitle: t.cardSubtitle, image: A.ceramic },
  ];

  return (
    <main className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`} dir={isAr ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <img className={styles.heroBgOne} src={A.heroBg1} alt="" aria-hidden="true" />
        <img className={styles.heroBgTwo} src={A.heroBg3} alt="" aria-hidden="true" />
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroVisual}>
            <img src={A.heroPhoto} alt={t.heroTitle} />
          </div>
          <div className={styles.heroContent}>
            <h1><span>“</span>{t.heroTitle}<span>”</span></h1>
            <h2>{t.heroSub}</h2>
            <p>{t.heroText}</p>
            <Link href={`/${locale}/book-appointment`} className={styles.whiteButton}>{t.book}</Link>
          </div>
        </div>
      </section>

      <section className={styles.treatmentsSection}>
        <div className={styles.containerWide}>
          <h2 className={styles.sectionTitle}>{t.treatmentsTitle}</h2>
          <div className={styles.treatmentsGrid}>
            {treatments.map((card) => (
              <article className={styles.treatmentCard} key={card.title}>
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
                <Link href={`/${locale}/book-appointment`} className={styles.cardButton}>{t.bookNow}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.departmentIntro}>
        <img src={A.greyWave} alt="" aria-hidden="true" />
        <div>
          <h2>{t.introTitle}</h2>
          <p>{t.introText}</p>
        </div>
      </section>

      <HomeWorldBeautySection locale={locale} />

      {/* Our Team - exact homepage component */}
      <FigmaOurTeam locale={locale} />

      <HomeLivesGallery locale={locale} />

      <AppointmentSection locale={locale} />
    </main>
  );
}
