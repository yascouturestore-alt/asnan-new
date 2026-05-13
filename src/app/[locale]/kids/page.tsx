"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function KidsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const [activeChar, setActiveChar] = useState(0);

  const kidsCharacters = [
    { id: 0, title: "Lulu", image: "/images/Kids/kids-charcters-02.png", description: locale === 'ar' ? "لولو هي الشخصية المرحة في اسنان كيدز." : "Lulu is the fun character at Asnan Kids." },
    { id: 1, title: "Zaki", image: "/images/Kids/kids-charcters-02.png", description: locale === 'ar' ? "زكي يحب الحفاظ على أسنان قوية." : "Zaki loves keeping his teeth strong." }
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="hero-title">
                {locale === 'ar' ? "أسنان" : "Asnan"}
                <img className="kids-img img-fluid ms-3" src="/images/kids.png" alt="Kids section" style={{ width: '100px' }} />
              </h1>
            </div>
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" target="_blank" rel="noreferrer" className="call-btn phone-btn">
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone icon" height="50" />
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
          <img src="/images/Backgrounds/Asnan_Kids_Cover_Image2x.jpg" alt="background image" />
          <img src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_Kids_Cropped@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Welcome Kids */}
      <div className="welcome-kids py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h3 className="welcome-kids-title h2 mb-4">
                {locale === 'ar' ? "مرحبا بكم في" : "Welcome To"}
                <span className="text-secondary"> {locale === 'ar' ? "اسنان كيدز" : "Asnan Kids"}</span>
              </h3>
              <p className="welcome-kids-text text-muted lead">
                {locale === 'ar' ? "تقدم عيادة أسنان تاور في الكويت رعاية أسنان عالية الجودة وشاملة للرضع والأطفال." : "Asnan Tower in Kuwait provides high-quality and comprehensive dental care for infants and children."}
              </p>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img src="/images/Kids/kids-charcters-02.png" alt="kids characters" className="img-fluid" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Characters Tabs */}
      <div className="popular-categories-wrapper kids-characters py-5 bg-light">
        <div className="container-fluid">
          <h3 className="popular-categories-title text-center h2 mb-2">{locale === 'ar' ? "شخصياتنا" : "Characters"}</h3>
          <p className="popular-categories-text text-center text-muted mb-5">{locale === 'ar' ? "تصفح الشخصيات المختلفة في قسم الأطفال." : "Browse the different characters in the kids section."}</p>

          <ul className="nav nav-tabs justify-content-center border-0 mb-4" role="tablist">
            {kidsCharacters.map((char) => (
              <li key={char.id} className="nav-item">
                <button 
                  className={`nav-link border-0 bg-transparent px-4 py-2 ${activeChar === char.id ? 'active border-bottom border-primary font-weight-bold' : ''}`}
                  onClick={() => setActiveChar(char.id)}
                >
                  <img src={char.image} alt={char.title} className="me-2" style={{ width: '30px' }} />
                  {char.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content text-center">
            <div className="tab-pane fade show active">
              <p className="lead">{kidsCharacters[activeChar].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments */}
      <div className="container-fluid py-5">
        <div className="category-header mb-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-8">
              <div className="category-block d-flex align-items-center">
                <div className="category-icon me-4">
                  <img src="/images/Prevention-icon-3.svg" alt="prevention icon" style={{ width: '60px' }} />
                </div>
                <div className="category-info">
                  <div className="category-title h3">{locale === 'ar' ? "العلاجات" : "Treatments"}</div>
                  <div className="category-text text-muted">
                    {locale === 'ar' ? "دع خبراء طب الأسنان لدينا يستعيدون ابتسامتك بأحدث التقنيات." : "Let our dental experts restore your child's smile with the latest techniques."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kids-articles-wrapper">
          <div className="row">
            {[1, 2].map((item) => (
              <div key={item} className="col-12 mb-5">
                <div className="kids-article p-4 border rounded shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5 mb-3 mb-lg-0">
                      <img src="/images/mu-1.png" alt="Treatment" className="img-fluid rounded" />
                    </div>
                    <div className="col-12 col-lg-7">
                      <h4 className="article-title h4 mb-3">{locale === 'ar' ? "فحص الأسنان الدوري" : "Regular Dental Checkup"}</h4>
                      <p className="article-text text-muted">
                        {locale === 'ar' ? "الفحص الدوري يساعد في الحفاظ على صحة أسنان طفلك." : "Regular checkups help in maintaining your child's dental health and preventing issues early."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}