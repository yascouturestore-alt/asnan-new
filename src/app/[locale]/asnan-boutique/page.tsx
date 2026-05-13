"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function BoutiquePage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">
                {locale === 'ar' ? "أسنان بوتيك" : "Asnan Boutique"}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/bg-hero-blank.png" alt="background image" />
          <img src="/images/Backgrounds/mobile/Blank_Cover@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Content */}
      <div className="page-content py-5">
        <div className="container-fluid text-center my-5">
          <div className="coming-soon-title h2 mb-3">
            {locale === 'ar' ? "قريباً" : "Coming Soon"}
          </div>
          <div className="coming-soon-text text-muted h5">
            {locale === 'ar' ? "ترقبوا المزيد من المعلومات قريباً." : "Stay tuned for more information soon."}
          </div>
        </div>
      </div>
    </>
  );
}
