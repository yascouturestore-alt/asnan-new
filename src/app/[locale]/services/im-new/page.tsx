"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function ImNewPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const steps = [
    { id: 1, title: locale === 'ar' ? "مراجعة التاريخ الطبي" : "Review medical history", image: "/images/im-new/Review_medical_history-min.jpg" },
    { id: 2, title: locale === 'ar' ? "معالجة العناية بالأسنان" : "Address dental care", image: "/images/im-new/address_dental_care-min.jpg" },
    { id: 3, title: locale === 'ar' ? "الفحص الشامل" : "Comprehensive examination", image: "/images/im-new/examination-min.jpg" },
    { id: 4, title: locale === 'ar' ? "أشعة بانورامية" : "Panoramic X-ray", image: "/images/im-new/panoramic_xray-min.jpg" },
    { id: 5, title: locale === 'ar' ? "علاج الأسنان" : "Dental treatment", image: "/images/im-new/dental_treatment-min.jpg" },
    { id: 6, title: locale === 'ar' ? "خطة الدفع والشرح" : "Payment plan and explaining", image: "/images/im-new/payment_plan_and_explaining-min.jpg" }
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">
                {locale === 'ar' ? "دليل المريض الجديد" : "New Patient Guide"}
              </h1>
              <p className="hero-text">
                {locale === 'ar' ? "أهلاً بك في أسنان تاور" : "Welcome to Asnan Tower"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/Backgrounds/Im_New_Cover_Image2x.jpg" alt="background image" />
          <img src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_ImNew_Cropped@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Content */}
      <div className="container-fluid py-5">
        <div className="section-title h2 text-center mb-5">
          {locale === 'ar' ? "كل ما تريد معرفته عن زيارتك الأولى" : "Everything you need to know about your first visit"}
        </div>

        {/* Payment */}
        <div className="payment-wrapper p-5 bg-light rounded shadow-sm mb-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-2 text-center mb-4 mb-lg-0">
              <img src="/images/payment-plan-icon.svg" alt="Payment icon" style={{ width: '80px' }} />
            </div>
            <div className="col-12 col-lg-10">
              <h3 className="payment-title h3 mb-3">{locale === 'ar' ? "خطط الدفع الميسرة" : "Flexible Payment Plans"}</h3>
              <p className="payment-text text-muted lead">
                {locale === 'ar' ? "نحن نقدم خطط دفع ميسرة لجميع المرضى." : "We offer flexible payment plans to suit everyone."}
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="we-will-wrapper py-5">
          <h2 className="we-will-title text-center h2 mb-5">
            {locale === 'ar' ? "في زيارتك الأولى، سنقوم بـ:" : "On your first visit, we will:"}
          </h2>
          <div className="row">
            {steps.map((step) => (
              <div key={step.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="we-will-item text-center">
                  <div className="we-will-number h4 bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '40px', height: '40px' }}>
                    {step.id}
                  </div>
                  <div className="we-will-img mb-3">
                    <img src={step.image} alt={step.title} className="img-fluid rounded shadow-sm" />
                  </div>
                  <p className="we-will-text font-weight-bold h5">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
