"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function WhyAsnanPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const whyAsnanItems = [
    {
      title: t.why_usa,
      description: t.asnan_doctors,
      image: "/images/mu-1.png",
      icon: "/images/graduate-icon.svg"
    },
    {
      title: t.workshops,
      description: t.the_team,
      image: "/images/mu-2.png",
      icon: "/images/experience-icon.svg"
    },
    {
      title: t.best_results,
      description: t.the_team, // Placeholder description
      image: "/images/Technology Image.png",
      icon: "/images/technology-Icon.svg"
    }
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">
                {locale === 'ar' ? "ليش اسنان؟" : "Why Asnan Tower?"}
              </h1>
              <p className="hero-text">
                {locale === 'ar' ? "أسنان تاور هي عيادة الأسنان الوحيدة في الكويت التي يوجد بها خريج واحد على الأقل من خريجي رابطة Ivy League والمتوفر في كل تخصص." : "Asnan Tower is the only dental clinic in Kuwait with at least one Ivy League Alumni who’s available in each specialty."}
              </p>
            </div>
            
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" target="_blank" rel="noreferrer" className="call-btn phone-btn" id="hero-phone-call-btn">
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone icon" id="phone-icon" height="50" />
                </div>
                <div className="call-btn-txt">
                  <p className="call-desc">{t.direct_call}</p>
                  <span className="phone-link">965-189<span>6666</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/bg-why.png" alt="background image" />
          <img src="/images/bg-why-mob.png" alt="background image" />
        </div>
      </div>

      {/* Content */}
      <div className="page-content">
        <ul className="services-list why-asnan">
          {whyAsnanItems.map((item, index) => (
            <li key={index} className="service-item">
              <div className="service-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="service-info">
                <div className="service-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h2 className="service-title">{item.title}</h2>
                <div className="service-description">
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
