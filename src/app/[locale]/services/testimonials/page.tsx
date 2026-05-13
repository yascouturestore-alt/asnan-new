"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function TestimonialsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const celebrities = [
    { name: "Celebrity 1", image: "/images/mu-1.png" },
    { name: "Celebrity 2", image: "/images/mu-2.png" },
    { name: "Celebrity 3", image: "/images/mu-3.png" }
  ];

  const videoTestimonials = [
    { id: 1, thumb: "/images/Mask Group 141.png", video: "#" },
    { id: 2, thumb: "/images/Mask Group 141-2.png", video: "#" },
    { id: 3, thumb: "/images/Mask Group 141-3.png", video: "#" },
    { id: 4, thumb: "/images/Mask Group 138.png", video: "#" }
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <h1 className="hero-title">
                {locale === 'ar' ? "آراء المراجعين" : "Testimonials"}
              </h1>
              <p className="hero-text">
                {locale === 'ar' ? "المراجعين والشركات التي تعاونت مع" : "Patients and businesses that Collaborated with"}
                <span className="text-secondary"> {locale === 'ar' ? "أسنان" : "Asnan"}</span>
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
                  <div className="rating-num">{locale === 'ar' ? "٤.٩ من ٥" : "4.9 out of 5"}</div>
                  <div className="rating-by">{locale === 'ar' ? "تقييم" : "By"} <span>Google</span></div>
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

      {/* Celebrity Testimonials */}
      <div className="testimonials-wrapper py-5">
        <div className="container-fluid">
          <h2 className="text-center mb-5">{locale === 'ar' ? "آراء المشاهير" : "Celebrity Testimonials"}</h2>
          <div className="row">
            {celebrities.map((celeb, index) => (
              <div key={index} className="col-12 col-md-4 mb-4">
                <div className="celebrity-card text-center p-3 border rounded shadow-sm">
                  <img src={celeb.image} alt={celeb.name} className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                  <h4>{celeb.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Gallery */}
      <div className="gallery-wrapper testimonials py-5 bg-light">
        <div className="container-fluid text-center">
          <div className="change-lives h2">{t.we_change_lives}</div>
          <div className="discover-testimonials mb-5">
            {locale === 'ar' ? "شاهد آراء المراجعين لدينا في مقاطع الفيديو" : "Discover our Guest’s testimonials in videos"}
          </div>
          
          <div className="row">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="gallery-item position-relative">
                  <img src={video.thumb} alt="Testimonial thumbnail" className="img-fluid rounded shadow" />
                  <a href={video.video} className="play-video position-absolute top-50 start-50 translate-middle text-white text-decoration-none">
                    <img src="/images/play.svg" alt="play icon" className="mb-2" />
                    <div>{locale === 'ar' ? "تشغيل الفيديو" : "Play Video"}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rating Footer */}
      <div className="testimonials-footer py-5">
        <div className="container-fluid text-center">
          <div className="google-rating-block mb-4">
            <img src="/images/google.svg" alt="Google" className="mb-2" />
            <h3>{locale === 'ar' ? "تقييم" : "Rating"}</h3>
            <div className="google-rating">
              <div className="rating-stars text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="rating-num mt-2">{locale === 'ar' ? "٤.٩ من ٥ - ٥،٧١٧ تقييم" : "4.9 out of 5 - 5,717 Reviews"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
