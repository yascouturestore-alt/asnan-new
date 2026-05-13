"use client";
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function WorldOfBeautyPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  useEffect(() => {
    // Before & after slider logic
    const containers = document.querySelectorAll('.before-after-wrapper');
    containers.forEach((container: any) => {
      const slider = container.querySelector('.slider');
      if (slider) {
        slider.addEventListener('input', (e: any) => {
          container.style.setProperty('--position', `${e.target.value}%`);
        });
      }
    });
  }, []);

  const doctorsWithSmiles = [
    {
      name: "Dr. Hmoud",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.-Hmoud.png",
      quote: locale === 'ar' ? "ابتسامة جميلة صنعت بعناية." : "Beautiful Smile created with care.",
      gender: "m",
      smiles: [
        { before: "/images/teeth-img-before.png", after: "/images/teeth-img-after.png" },
        { before: "/images/teeth-img-before-2.png", after: "/images/teeth-img-after-2.png" }
      ]
    },
    {
      name: "Dr. Amnah",
      title: locale === 'ar' ? "أخصائي تقويم أسنان" : "Orthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.-Amnah-(1).png",
      quote: locale === 'ar' ? "ابتسامة جميلة صنعت بعناية." : "Beautiful Smile created with care.",
      gender: "f",
      smiles: [
        { before: "/images/teeth-img-before-2.png", after: "/images/teeth-img-after-2.png" }
      ]
    }
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">{t.world_of_beauty}</h1>
              <p className="hero-text">{t.we_dont} {t.we_change_lives}</p>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/Backgrounds/World_of_Beauty_Cover_Image2x.jpg" alt="background image" />
          <img src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_WOB_Cropped@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* World of Beauty Content */}
      <div className="container-fluid py-5">
        {doctorsWithSmiles.map((doctor, dIdx) => (
          <div key={dIdx} className="mb-5 pb-5 border-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="caption-wrapper">
                  <div className="caption-text mb-4">{doctor.quote}</div>
                  <div className="made-by-wrapper">
                    <div className="made-by-title">
                      {t.this_smile}
                      <div>{doctor.gender === 'm' ? t.made_by : t.made_by_female}</div>
                    </div>
                    <div className="doctor-small my-3">
                      <div className="doctor-img">
                        <img src={doctor.image} alt={doctor.name} className="img-fluid rounded-circle" style={{ width: '80px' }} />
                      </div>
                    </div>
                    <div className="doctor-info">
                      <div className="doctor-name font-weight-bold">{doctor.name}</div>
                      <div className="doctor-title text-secondary">{doctor.title}</div>
                      <div className="doctor-title text-secondary">{doctor.university}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="row">
                  {doctor.smiles.map((smile, sIdx) => (
                    <div key={sIdx} className="col-12 col-md-6 mb-3">
                      <div className="before-after-wrapper">
                        <div className="before-after-img">
                          <img className="image-before" src={smile.before} alt="Before" />
                          <img className="image-after" src={smile.after} alt="After" />
                        </div>
                        <div className="before-text">{t.before}</div>
                        <div className="after-text">{t.after}</div>
                        <input type="range" min="0" max="100" defaultValue="50" aria-label="Percentage of before photo shown" className="slider" />
                        <div className="slider-line" aria-hidden="true"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
