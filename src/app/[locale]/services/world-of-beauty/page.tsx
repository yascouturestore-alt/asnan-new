"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import AppointmentSection from "@/components/home/AppointmentSection";

export default function WorldOfBeautyPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  useEffect(() => {
    // Before & after slider logic
    const containers = document.querySelectorAll(".before-after-wrapper");

    containers.forEach((container: any) => {
      const slider = container.querySelector(".slider");

      if (slider) {
        slider.addEventListener("input", (e: any) => {
          container.style.setProperty("--position", `${e.target.value}%`);
        });
      }
    });
  }, []);

  const doctorsWithSmiles = [
    {
      name: "Dr. Hmoud",
      title: locale === "ar" ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === "ar" ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.-Hmoud.png",
      quote:
        locale === "ar"
          ? "ابتسامة جميلة صنعت بعناية."
          : "Beautiful Smile created with care.",
      gender: "m",
      smiles: [
        {
          before: "/images/teeth-img-before.png",
          after: "/images/teeth-img-after.png",
        },
        {
          before: "/images/teeth-img-before-2.png",
          after: "/images/teeth-img-after-2.png",
        },
      ],
    },
    {
      name: "Dr. Amnah",
      title: locale === "ar" ? "أخصائي تقويم أسنان" : "Orthodontist",
      university: locale === "ar" ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.-Amnah-(1).png",
      quote:
        locale === "ar"
          ? "ابتسامة جميلة صنعت بعناية."
          : "Beautiful Smile created with care.",
      gender: "f",
      smiles: [
        {
          before: "/images/teeth-img-before-2.png",
          after: "/images/teeth-img-after-2.png",
        },
      ],
    },
  ];

  const firstSectionData = doctorsWithSmiles[0];

  const wobRepeatedSections = Array.from(
    { length: 8 },
    () => firstSectionData
  );

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
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

      <section className="wob-grey-bg wob-carousel-safe" dir={locale === "ar" ? "rtl" : "ltr"}>
        <div className="container-fluid">
          <div className="owl-carousel owl-theme world-beauty-slider">
            <div className="item">
              <div className="row align-items-center">
                <div className="col-12 col-lg-7">
                  <div className="before-after-wrapper wob-page-slider">
                    <div className="before-after-img">
                      <img
                        className="image-before"
                        src="/images/teeth-img-before.png"
                        alt="Before"
                      />
                      <img
                        className="image-after"
                        src="/images/teeth-img-after.png"
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

                    <div className="slider-line" aria-hidden="true"></div>
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
                          <img src="/images/dr-img-teeth-show.png" alt="" />
                        </div>
                      </div>

                      <div className="doctor-info">
                        <div className="doctor-name">{t.dr_border_img}</div>
                        <div className="doctor-title">{t.prosthodontist}</div>
                        <div className="doctor-title">
                          {t.kuwait_university}
                        </div>
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
                        src="/images/teeth-img-before-2.png"
                        alt="Before"
                      />
                      <img
                        className="image-after"
                        src="/images/teeth-img-after-2.png"
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

                    <div className="slider-line" aria-hidden="true"></div>
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
                          <img src="/images/Dr.-Amnah-(1).png" alt="" />
                        </div>
                      </div>

                      <div className="doctor-info">
                        <div className="doctor-name">Dr. Amnah</div>
                        <div className="doctor-title">{t.orthodontist}</div>
                        <div className="doctor-title">
                          {t.kuwait_university}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World of Beauty Cases */}
      <div
        className="wob-cases-wrapper"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {wobRepeatedSections.map((doctor, dIdx) => {
          const isGreySection = dIdx % 2 !== 0;

          return (
            <section
              key={dIdx}
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
                      <div className="caption-text mb-4">{doctor.quote}</div>

                      <div className="made-by-wrapper">
                        <div className="made-by-title">
                          {t.this_smile}
                          <div>
                            {doctor.gender === "m"
                              ? t.made_by
                              : t.made_by_female}
                          </div>
                        </div>

                        <div className="doctor-small my-3">
                          <div className="doctor-img">
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="img-fluid rounded-circle"
                              style={{ width: "80px" }}
                            />
                          </div>
                        </div>

                        <div className="doctor-info">
                          <div className="doctor-name font-weight-bold">
                            {doctor.name}
                          </div>
                          <div className="doctor-title text-secondary">
                            {doctor.title}
                          </div>
                          <div className="doctor-title text-secondary">
                            {doctor.university}
                          </div>
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
                              <img
                                className="image-before"
                                src={smile.before}
                                alt="Before"
                              />
                              <img
                                className="image-after"
                                src={smile.after}
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

                            <div
                              className="slider-line"
                              aria-hidden="true"
                            ></div>
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