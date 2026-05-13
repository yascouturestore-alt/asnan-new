"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function BookAppointmentPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const buildingImages = [
    "/images/asnan_building/1P4A9964-min.png",
    "/images/asnan_building/1P4A9911-min.png",
    "/images/asnan_building/1P4A9928-min.png",
    "/images/asnan_building/1P4A9929-min.png",
    "/images/asnan_building/1P4A9945-min.png",
    "/images/asnan_building/1P4A9949-min.png"
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <h1 className="hero-title h1 mb-4">
                {locale === 'ar' ? "احجز موعدك الآن مع أكبر مركز أسنان في الكويت" : "Book An Appointment today with Asnan Tower - The biggest dental center in Kuwait"}
              </h1>
              <div className="call-btn-container d-flex justify-content-center gap-3 mt-4">
                <a href="tel:+9651896666" className="btn btn-secondary btn-lg px-5 py-3">
                  {locale === 'ar' ? "اتصل بنا" : "Call Now"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/Backgrounds/CallNow_Cover@3x.webp" alt="background image" />
          <img src="/images/bg-home-mob.png" alt="background image" />
        </div>
      </div>

      {/* Gallery */}
      <div className="container-fluid py-5">
        <h2 className="text-center h2 mb-5">{locale === 'ar' ? "أكبر مركز أسنان" : "The Biggest Dental Center"}</h2>
        <div className="row">
          {buildingImages.map((img, idx) => (
            <div key={idx} className="col-12 col-md-4 col-lg-2 mb-3">
              <img src={img} alt="Building" className="img-fluid rounded shadow-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="testimonials-footer py-5 bg-light">
        <div className="container-fluid text-center">
          <div className="google-rating-block mb-4">
            <img src="/images/google.svg" alt="Google" className="mb-2" />
            <h3>{locale === 'ar' ? "تقييم المراجعين" : "Guest Rating"}</h3>
            <div className="google-rating text-warning mb-3">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="rating-num h4">{locale === 'ar' ? "٤.٩ من ٥" : "4.9 out of 5"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
