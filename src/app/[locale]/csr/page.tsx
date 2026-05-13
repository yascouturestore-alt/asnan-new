"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function CSRPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <h1 className="hero-title h1 mb-3">
                {locale === 'ar' ? "المسؤولية الاجتماعية" : "CSR"}
              </h1>
              <p className="hero-text text-muted lead">
                {locale === 'ar' ? "التزامنا تجاه المجتمع" : "Our commitment to the community"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/asnan-cover-medium.webp" alt="background image" />
          <img src="/images/Backgrounds/mobile/Blank_Cover@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Content */}
      <div className="page-content py-5">
        <div className="container-fluid text-center">
          <div className="csr-content h4 text-muted mb-5">
            {locale === 'ar' ? "نحن في أسنان تاور نؤمن بأهمية رد الجميل للمجتمع." : "At Asnan Tower, we believe in giving back to the community."}
          </div>
          
          <div className="csr-tabs d-flex justify-content-center gap-3 mb-5">
            <button className="btn btn-outline-primary active">2023</button>
            <button className="btn btn-outline-primary">2022</button>
            <button className="btn btn-outline-primary">2021</button>
          </div>

          <div className="csr-grid row">
            <div className="col-12 col-md-4 mb-4">
              <div className="csr-item border rounded overflow-hidden shadow-sm">
                <img src="/images/mu-1.png" alt="CSR" className="img-fluid" />
                <div className="p-3">
                  <h3 className="h5">{locale === 'ar' ? "فعالية مجتمعية" : "Community Event"}</h3>
                  <p className="small text-muted mb-0">20 Dec 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
