"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function AsnanopediaPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const categories = [
    { id: 1, title: locale === 'ar' ? "الوقاية" : "Prevention", icon: "/images/Prevention-icon.svg", slug: "prevention" },
    { id: 2, title: locale === 'ar' ? "مشاكل الأسنان" : "Dental Problems", icon: "/images/Dental-Problems-icon.svg", slug: "dental-problems" },
    { id: 3, title: locale === 'ar' ? "طوارئ الأسنان" : "Dental Emergencies", icon: "/images/Dental-emergencies-icon.svg", slug: "dental-emergencies" },
    { id: 4, title: locale === 'ar' ? "العلاج" : "Treatment", icon: "/images/Dental-icon.svg", slug: "treatment" }
  ];

  const articles = [
    {
      id: 1,
      title: locale === 'ar' ? "كيف تحافظ على صحة أسنانك؟" : "How to keep your teeth healthy?",
      category: categories[0],
      likes: 124,
      image: "/images/bg-asnanopedia-single.png"
    },
    {
      id: 2,
      title: locale === 'ar' ? "أسباب حساسية الأسنان" : "Causes of tooth sensitivity",
      category: categories[1],
      likes: 85,
      image: "/images/bg-asnanopedia-single.png"
    }
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper hero-asnanopedia">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="hero-title">
                {locale === 'ar' ? "اسنانوبيديا" : "ASNANOPEDIA"}
              </h2>
              <div className="hero-search">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder={locale === 'ar' ? "اكتب هنا على سبيل المثال: كيف أحافظ على صحة أسناني؟" : "Type here for example: How to keep my teeth healthy?"} 
                />
                <button type="button" className="btn btn-secondary">
                  {locale === 'ar' ? "البحث" : "Search"}
                </button>
              </div>

              <ul className="asnanopedia-list">
                {categories.map((category) => (
                  <li key={category.id}>
                    <a href={`/${locale}/asnanopedia/${category.slug}`} className="asnanopedia-item">
                      <div className="asnanopedia-icon">
                        <img src={category.icon} alt={category.title} />
                      </div>
                      <h6 className="asnanopedia-title">{category.title}</h6>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/bg-asnanopedia.png" alt="background image" />
          <img src="/images/bg-asnanopedia-mob.png" alt="background image" />
        </div>
      </div>

      {/* Handpicked articles */}
      <div className="handpicked-articles-wrapper">
        <div className="container-fluid">
          <h3 className="handpicked-articles-title">
            {locale === 'ar' ? "مقالات مختارة بعناية" : "Handpicked articles"}
          </h3>
          <p className="handpicked-articles-text">
            {locale === 'ar' ? "مقالات مفيدة مختارة من قبل أسنان تاور." : "Useful articles handpicked by Asnan Tower."}
          </p>
          
          <div className="row mt-4">
            {articles.map((article) => (
              <div key={article.id} className="col-12 col-lg-4 mb-4">
                <div className="faq-item">
                  <div className="faq-img">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="faq-info">
                    <div className="faq-title">{article.title}</div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="category-info">
                        <img src={article.category.icon} alt={article.category.title} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                        {article.category.title}
                      </div>
                      <div className="faq-reaction">
                        <img src="/images/reaction-icon.svg" alt="reaction icon" />
                        <span>{article.likes}</span>
                      </div>
                      <a href={`/${locale}/asnanopedia/articles/${article.id}`} className="btn btn-primary">
                        {locale === 'ar' ? "تعلم المزيد" : "Learn More"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ptrn">
          <img src="/images/Mask%20Group%20163.png" alt="background pattern" />
        </div>
      </div>
    </>
  );
}
