"use client";

import React from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import AppointmentSection from "@/components/home/AppointmentSection";
import styles from "./page.module.css";

type Celebrity = {
  name: string;
  image: string;
  avatar: string;
};

type VideoTile = {
  image: string;
  name: string;
  className: string;
};

type Review = {
  name: string;
  age: string;
  text: string;
};

const celebrityItems: Celebrity[] = [
  {
    name: "هدى حسين",
    image: "/images/Celebs/huda-hussain.png",
    avatar: "/images/Celebs/huda-hussain-min.PNG",
  },
  {
    name: "يعقوب بوشهري",
    image: "/images/Celebs/yagoob-boushehri.png",
    avatar: "/images/Celebs/yaaqoub-boushehri-min.PNG",
  },
  {
    name: "غدير سبتي",
    image: "/images/Celebs/ghadeer-sultan.png",
    avatar: "/images/Celebs/ghadeer-sabti-min.JPG",
  },
  {
    name: "زينب خلف",
    image: "/images/Celebs/zainab-khafif.png",
    avatar: "/images/Celebs/zainab-fayad-min.JPG",
  },
  {
    name: "وليد علي",
    image: "/images/Celebs/waleed-ali.JPG",
    avatar: "/images/Celebs/waleed-ali.JPG",
  },
  {
    name: "سلمان النجادي",
    image: "/images/Celebs/salman-alnajadi.png",
    avatar: "/images/Celebs/Salman-Al-Najadi -min.jpg",
  },
];

const videoTiles: VideoTile[] = [
  {
    image: "/images/Mask Group 141.png",
    name: "سلمان النجادي",
    className: "videoOne",
  },
  {
    image: "/images/Mask Group 138.png",
    name: "وليد علي",
    className: "videoTwo",
  },
  {
    image: "/images/Mask Group 141-2.png",
    name: "نورة العميري",
    className: "videoThree",
  },
  {
    image: "/images/Mask Group 138-2.png",
    name: "غدير سبتي",
    className: "videoFour",
  },
  {
    image: "/images/Mask Group 141-3.png",
    name: "يعقوب بوشهري",
    className: "videoFive",
  },
  {
    image: "/images/Mask Group 138-3.png",
    name: "سلمان النجادي",
    className: "videoSix",
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

  const activeCelebrity = celebrityItems[0];

  return (
    <>
      {/* Hero - unchanged */}
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
                <div className="rating-stars text-warning">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
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
            <div className={styles.celebrityPhotoWrap}>
              <img
                src={activeCelebrity.image}
                alt={activeCelebrity.name}
                className={styles.celebrityPhoto}
              />
            </div>

            <div className={styles.celebrityInfo}>
              <h2>{copy.celebrityTitle}</h2>
              <div className={styles.celebrityByline}>
                <span>{activeCelebrity.name}</span>
                <img src={activeCelebrity.avatar} alt="" />
              </div>
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

        {/* Video heading */}
        <section className="bg-grey-div" aria-labelledby="testimonial-videos-title">
          <div className={styles.videoIntro}>
          <h2 id="testimonial-videos-title">{copy.videosTitle}</h2>
          <p>{copy.videosSubtitle}</p>
          </div>
        </section>

        {/* Video Gallery */}
        <section className={styles.videoGallery} aria-label={copy.videosTitle}>
          <div className={styles.galleryGrid}>
            {videoTiles.map((video) => (
              <a
                key={video.className}
                href="#"
                className={`${styles.videoCard} ${styles[video.className as keyof typeof styles]}`}
              >
                <img src={video.image} alt={video.name} />
                <span className={styles.playButton} aria-hidden="true">
                  <img src="/images/play.svg" alt="" />
                  <span>{copy.play}</span>
                </span>
              </a>
            ))}

            <div className={styles.brandTile} aria-hidden="true">
              <img src="/images/Asnan-logo.svg" alt="" />
            </div>

            <div className={styles.blueCta}>
              <img src="/images/orthodontist 1.png" alt="" />
              <div>
                <span>{copy.ctaSmall}</span>
                <strong>{copy.ctaLarge}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <section className={styles.googleReviews} aria-labelledby="google-rating-title">
          <div className="google-inner">
          <div className={styles.googleHeading}>
            <div className={styles.ratingPill}>
              <span>{copy.ratingScore}</span>
              <span>{copy.ratingCount}</span>
              <div className={styles.ratingStars} aria-hidden="true">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <img src="/images/google.svg" alt="Google" />
            <h2 id="google-rating-title">{copy.rating}</h2>
          </div>

          <div className={styles.reviewsWrap}>
            <button className={`${styles.reviewArrow} ${styles.prevArrow}`} type="button" aria-label="Previous">
              <img src="/images/arrow-prev-yellow.svg" alt="" />
            </button>

            <div className={styles.reviewCards}>
              {reviews.map((review) => (
                <article key={review.name} className={styles.reviewCard}>
                  <header>
                    <div>
                      <h3>{review.name}</h3>
                      <div className={styles.reviewMeta}>
                        <span>{review.age}</span>
                        <span className={styles.cardStars} aria-hidden="true">
                          ★★★★★
                        </span>
                      </div>
                    </div>
                  </header>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>

            <button className={`${styles.reviewArrow} ${styles.nextArrow}`} type="button" aria-label="Next">
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
