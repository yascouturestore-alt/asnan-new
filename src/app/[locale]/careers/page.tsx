"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function CareersPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const jobs = [
    {
      id: 1,
      title: locale === 'ar' ? "أخصائي أسنان" : "Dental Specialist",
      description: locale === 'ar' ? "نحن نبحث عن أخصائي أسنان موهوب للانضمام إلى فريقنا." : "We are looking for a talented dental specialist to join our team."
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
                {locale === 'ar' ? "وظائف برج أسنان" : "Asnan Tower Careers"}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/careers.png" alt="background image" />
          <img src="/images/Backgrounds/mobile/Blank_Cover@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Content */}
      <div className="page-content py-5">
        <div className="container-fluid">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="job-container p-4 border rounded shadow-sm mb-4">
                <div className="job-top-container d-flex justify-content-between align-items-center mb-3">
                  <div className="job-title h4 mb-0">
                    <a href={`/${locale}/careers/${job.id}`} className="text-decoration-none">{job.title}</a>
                  </div>
                  <div className="job-btn-container">
                    <a href={`/${locale}/careers/${job.id}`} className="btn btn-primary me-2">
                      {locale === 'ar' ? "اقرأ المزيد" : "Read More"}
                    </a>
                    <a href={`/${locale}/careers/apply/${job.id}`} className="btn btn-secondary">
                      {locale === 'ar' ? "قدم الآن" : "Apply Now"}
                    </a>
                  </div>
                </div>
                <div className="job-description text-muted">
                  {job.description}
                </div>
              </div>
            ))
          ) : (
            <div className="no-jobs-message text-center py-5">
              <h3>{locale === 'ar' ? "عذرًا! ليس لدينا وظائف شاغرة حاليًا." : "Sorry! We don't have any open positions right now."}</h3>
            </div>
          )}

          {/* Looking for something else */}
          <div className="container-fluid my-5 text-center">
            <h2 className="mb-4">{locale === 'ar' ? "البحث عن شيء اخر؟" : "Looking for something else?"}</h2>
            <a href={`/${locale}/careers/apply/0`} className="btn btn-primary">
              {locale === 'ar' ? "قدم للوظيفة العامة" : "Apply for a general position"}
            </a>
          </div>

          {/* Contact info */}
          <div className="container-fluid my-5 text-center">
            <p className="text-muted">
              {locale === 'ar' 
                ? "للإستفسارات الخاصة تواصل بنا عن طريق recruit@asnan.com أو +965 99921260" 
                : "For any inquiries or questions, contact us through recruit@asnan.com or +965 99921260"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
