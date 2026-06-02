"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Celebrity = {
  name: string;
  image: string;
  avatar: string;
};

type Review = {
  name: string;
  age: string;
  text: string;
};

const celebrityItems: Celebrity[] = [
  {
    name: "هدى حسين",
    image: "/images/Testimonials/thumbnail-image-1.png",
    avatar: "/images/Celebs/huda-hussain-min.PNG",
  },
  {
    name: "يعقوب بوشهري",
    image: "/images/Testimonials/thumbnail-image-2.png",
    avatar: "/images/Celebs/yaaqoub-boushehri-min.PNG",
  },
  {
    name: "غدير سبتي",
    image: "/images/Testimonials/thumbnail-image-3.png",
    avatar: "/images/Celebs/ghadeer-sabti-min.JPG",
  },
  {
    name: "زينب خلف",
    image: "/images/Testimonials/thumbnail-image-4.png",
    avatar: "/images/Celebs/zainab-fayad-min.JPG",
  },
  {
    name: "وليد علي",
    image: "/images/Testimonials/thumbnail-image-5.png",
    avatar: "/images/Celebs/waleed-ali.JPG",
  },
  {
    name: "سلمان النجادي",
    image: "/images/Celebs/salman-alnajadi.png",
    avatar: "/images/Celebs/Salman-Al-Najadi -min.jpg",
  },
];

const reviews: Review[] = [
  {
    name: "Tasneem Alrknah",
    age: "50 months ago",
    text: "اقوى عيادة سويت اسناني عندهم وما افكر اسوي عند غيرهم بدعوا والله😍😍😍😍😍",
  },
  {
    name: "Munerah Bader Alenzi",
    age: "37 months ago",
    text: "احسن عيادة",
  },
  {
    name: "Ryan Als",
    age: "37 months ago",
    text: "احسن عيادة اسنان بالشرق الاوسط",
  },
  {
    name: "Sarhona Tomi",
    age: "37 months ago",
    text: "الاهتمام بالمواعيد",
  },
];

export default function TestimonialsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);
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

  const copy = {
    title: isAr ? "آراء المراجعين" : "Testimonials",
    subtitle: isAr
      ? "المراجعين والشركات التي تعاونت مع"
      : "Patients and businesses that collaborated with",
    celebrityTitle: isAr ? "آراء\nالمشاهير" : "Celebrity\nTestimonials",
    videosTitle: isAr ? "راح نغير حياتك" : "We Change Lives",
    videosSubtitle: isAr
      ? "شاهد آراء المراجعين لدينا في مقاطع الفيديو"
      : "Discover our guest testimonials in videos",
    play: isAr ? "تشغيل الفيديو" : "Play Video",
    ctaSmall: isAr
      ? "حلمنا مو بس نغير اسنانك،"
      : "We do not just change your teeth,",
    ctaLarge: isAr ? "راح نغير حياتك" : "We Change Lives",
    rating: isAr ? "تقييم" : "Rating",
    ratingScore: isAr ? "٤.٩ من ٥" : "4.9 out of 5",
    ratingCount: isAr ? "٥،٧١٧ تقييم" : "5,717 reviews",
  };

  const reviewsRef = React.useRef<HTMLDivElement>(null);

  const slidePrev = () => {
    if (reviewsRef.current) {
      const card = reviewsRef.current.children[0] as HTMLElement;
      const gap = parseFloat(window.getComputedStyle(reviewsRef.current).gap) || 0;
      const scrollAmount = card ? card.offsetWidth + gap : 300;
      reviewsRef.current.scrollBy({ left: isAr ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  const slideNext = () => {
    if (reviewsRef.current) {
      const card = reviewsRef.current.children[0] as HTMLElement;
      const gap = parseFloat(window.getComputedStyle(reviewsRef.current).gap) || 0;
      const scrollAmount = card ? card.offsetWidth + gap : 300;
      reviewsRef.current.scrollBy({ left: isAr ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const activeCelebrity = celebrityItems[0];

  const renderStars = () =>
  Array.from({ length: 5 }).map((_, index) => (
    <img
      key={`star-${index}`}
      src="/images/Testimonials/star.svg"
      alt=""
      className={styles.starIcon}
      aria-hidden="true"
    />
  ));


  useEffect(() => {
  const initScripts = () => {
    if (typeof window !== "undefined" && (window as any).$) {
      const $ = (window as any).$;

      if ($.fn.magnificPopup) {
        $(".image-popup").magnificPopup({
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

        $(".popup-player").magnificPopup({
          type: "iframe",
          midClick: true,
        });
      }
    }
  };

  const tryInit = () => {
    if (
      typeof window !== "undefined" &&
      (window as any).$ &&
      (window as any).$.fn.magnificPopup
    ) {
      initScripts();
    } else {
      setTimeout(tryInit, 200);
    }
  };

  tryInit();
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
              z-index: 3;
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
          z-index: 2;
    background-color: #ececec;
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
          // border: 1px solid #fff;
    background-color: #ececec;
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
      `
    }} />

      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <h1 className="hero-title">{copy.title}</h1>
              <p className="hero-text">
                {copy.subtitle}
                <span className="text-secondary"> {isAr ? "أسنان" : "Asnan"}</span>
              </p>
              <div className="google-rating mt-4">
                <div className={styles.ratingStars} aria-label="5 star rating">
  {renderStars()}
</div>
                <div className="rating-text">
                  <div className="rating-num">{copy.ratingScore}</div>
                  <div className="rating-by">
                    {copy.rating} <span>Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/bg-testimonials.png" alt="background image" />
          <img src="/images/bg-testimonials-mob.png" alt="background image" />
        </div>
      </div>

      <main
        className={`${styles.page} ${isAr ? styles.rtl : styles.ltr}`}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Celebrity Testimonials */}
        <section className={styles.celebritySection} aria-label={copy.celebrityTitle}>
          <div className={styles.celebrityInner}>
            <div className={styles.celebrityInfo}>
              <h2>{copy.celebrityTitle}</h2>
              <div className={styles.celebrityByline}>
                <span>{activeCelebrity.name}</span>
                <img src={activeCelebrity.avatar} alt="" />
              </div>
            </div>
            <div className={styles.celebrityPhotoWrap}>
              <img
                src="/images/Celebs/huda-hussain-min.PNG"
                alt={activeCelebrity.name}
                className={styles.celebrityPhoto}
              />
            </div>

          </div>

          <div className={styles.thumbnailRail} aria-label="Celebrity thumbnails">
            {celebrityItems.map((item, index) => (
              <button
                key={item.name}
                className={`${styles.thumbButton} ${index === 0 ? styles.activeThumb : ""}`}
                type="button"
                aria-label={item.name}
              >
                <img src={item.image} alt="" />
              </button>
            ))}
          </div>
        </section>

        {/* Gallery */}
      <div className={`gallery-wrapper home-figma-gallery ${isAr ? "home-figma-gallery-rtl" : "home-figma-gallery-ltr"}`}>
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
                <a href="#" className="gallery-item figma-gallery-tile figma-tile-yagoob image-popup">
                  <img src="/images/Testimonials/thumbnail-image-2.png" alt={galleryCopy.names.yagoob} />
                  <div className="figma-gallery-title">{galleryCopy.names.yagoob}</div>
                </a>
                <a href="#" className="gallery-item figma-gallery-tile figma-tile-huda image-popup">
                  <img src="/images/Testimonials/thumbnail-image-4.png" alt={galleryCopy.names.huda} />
                  <div className="figma-gallery-title">{galleryCopy.names.huda}</div>
                </a>
                <div className="figma-split-row figma-left-portraits">
                  <a href="#" className="gallery-item figma-gallery-tile figma-tile-ghadeer image-popup">
                    <img src="/images/Testimonials/thumbnail-image-6.png" alt={galleryCopy.names.ghadeer} />
                    <div className="figma-gallery-title">{galleryCopy.names.ghadeer}</div>
                  </a>
                  <a href="#" className="gallery-item figma-gallery-tile figma-tile-zainab image-popup">
                    <img src="/images/Testimonials/thumbnail-image-5.png"  alt={galleryCopy.names.zainab} />
                    <div className="figma-gallery-title">{galleryCopy.names.zainab}</div>
                  </a>
                </div>
                <div className="figma-split-row figma-left-bottom">
                  <div className="gallery-item figma-gallery-tile figma-logo-tile">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Group%2035316.png`} alt="" />
                  </div>
                  <a href="#" className="gallery-item figma-gallery-tile figma-tile-salman image-popup">
                    <img src="/images/Testimonials/thumbnail-image-7.png" alt={galleryCopy.names.salman} />
                    <div className="figma-gallery-title">{galleryCopy.names.salman}</div>
                  </a>
                </div>
              </div>

              <div className="figma-celeb-right">
                <a href="#" className="gallery-item figma-gallery-tile figma-tile-maya image-popup">
                  <img src="/images/Testimonials/thumbnail-image-1.png" alt={galleryCopy.names.maya} />
                  <div className="figma-gallery-title">{galleryCopy.names.maya}</div>
                </a>
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/halima-boland.png`} className="gallery-item figma-gallery-tile figma-tile-halima image-popup">
                  <img src="/images/Testimonials/thumbnail-image-3.png" alt={galleryCopy.names.halima} />
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
                  <img src="/images/Testimonials/thumbnail-image-1.png" alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-1" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/Testimonials/thumbnail-image-3.png" alt="testimonial item" />
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
                  <img src="/images/Testimonials/thumbnail-image-2.png" alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-3" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/Testimonials/thumbnail-image-4.png" alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-4" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-row">
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src="/images/Testimonials/thumbnail-image-5.png" alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-5" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src="/images/Testimonials/thumbnail-image-6.png" alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-6" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gallery-row">
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src="/images/Testimonials/thumbnail-image-7.png" alt="testimonial item" />
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

        {/* Google Reviews */}
        <section className={styles.googleReviews} aria-labelledby="google-rating-title">
          <div className="google-inner">
          <div className={styles.googleHeading}>
            <h2 id="google-rating-title">{copy.rating}</h2>
            <img src="/images/google.svg" alt="Google" />
            
            <div className={styles.ratingPill}>
              <span>{copy.ratingScore}</span>
              <span>{copy.ratingCount}</span>
              <div className={styles.ratingStars} aria-label="5 star rating">
  {renderStars()}
</div>
            </div>
          </div>

          <div className={styles.reviewsWrap}>
            <button className={`${styles.reviewArrow} ${styles.prevArrow}`} type="button" aria-label="Previous" onClick={slidePrev}>
              <img src="/images/arrow-prev-yellow.svg" alt="" />
            </button>

            <div className={styles.reviewCards} ref={reviewsRef}>
              {[...reviews, ...reviews, ...reviews].map((review, i) => (
                <article key={`${review.name}-${i}`} className={styles.reviewCard}>
                  <header>
                    <div>
                      <h3>{review.name}</h3>
                      <div className={styles.reviewMeta}>
                        <span className={styles.cardStars} aria-label="5 star rating">
  {renderStars()}
</span>
                        <span>{review.age}</span>
                      </div>
                    </div>
                  </header>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>

            <button className={`${styles.reviewArrow} ${styles.nextArrow}`} type="button" aria-label="Next" onClick={slideNext}>
              <img src="/images/arrow-next-yellow.svg" alt="" />
            </button>
          </div>
          </div>
        </section>

        <AppointmentSection locale={locale} />
      </main>
    </>
  );
}
