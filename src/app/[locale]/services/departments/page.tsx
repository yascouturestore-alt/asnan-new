"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function DepartmentsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const departments = [
    { id: 1, floor: "1", title: locale === 'ar' ? "الاستقبال والتشخيص" : "Reception & Diagnostics", slug: "reception", image: "/images/mu-1.png" },
    { id: 2, floor: "2", title: locale === 'ar' ? "تقويم الأسنان" : "Orthodontics", slug: "orthodontics", image: "/images/mu-2.png" },
    { id: 3, floor: "3", title: locale === 'ar' ? "أسنان الأطفال" : "Pedodontics", slug: "pedodontics", image: "/images/mu-3.png" },
    { id: 4, floor: "4", title: locale === 'ar' ? "علاج العصب واللثة" : "Endodontics & Periodontics", slug: "endodontics", image: "/images/mu-4.png" },
    { id: 5, floor: "5", title: locale === 'ar' ? "الجراحة والزراعة" : "Surgery & Implants", slug: "surgery", image: "/images/mu-5.png" }
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="hero-title">
                {locale === 'ar' ? "الأقسام" : "Departments"}
              </h1>
              <ul className="departments-floors-list">
                {departments.map((dept) => (
                  <li key={dept.id}>
                    <a href={`/${locale}/services/departments/${dept.slug}`} className="department-item">
                      <div className="floor-info">
                        <div className="floor-number">{dept.floor}</div>
                        <div className="floor-text">{locale === 'ar' ? "الطابق" : "Floor"}</div>
                      </div>
                      <div className="department-title">{dept.title}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/bg-departments.png" alt="background image" />
          <img src="/images/bg-departments-mob.png" alt="background image" />
        </div>
      </div>

      {/* Tower Info */}
      <div className="container-fluid">
        <div className="departments-tower">
          <img src="/images/Asnan-3D-tower-footer.png" alt="Asnan-3D-tower" />
          <div className="departments-tower-text">
            <div>{locale === 'ar' ? "أول عيادة أسنان" : "The First Dental"}</div>
            <div className="divider"></div>
            <div>{locale === 'ar' ? "في" : "Clinic in"} <span className="text-secondary">{locale === 'ar' ? "الكويت" : "Kuwait"}</span>.</div>
          </div>
          <div className="departments-tower-text">
            <div>{locale === 'ar' ? "تلتزم بصرامة بمعايير" : "Strict adherence to"}</div>
            <div className="divider"></div>
            <div>{locale === 'ar' ? "الولايات المتحدة الأمريكية" : "Standards of the USA"}.</div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="departments-wrapper">
        <div className="container-fluid">
          <h2 className="departments-title">
            {locale === 'ar' ? "أهلا بكم في أسنان" : "Welcome To Asnan Tower"}
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="row justify-content-between align-items-center">
                <div className="col-12 col-lg-6">
                  <p className="departments-text">
                    {locale === 'ar' ? "أول عيادة أسنان في الكويت تلتزم بصرامة بمعايير الولايات المتحدة للعناية بالأسنان" : "The First Dental Clinic in Kuwait to strictly adhere to the United States standards of dental care."}
                  </p>
                </div>
                <div className="col-12 col-lg-5">
                  <a href={`/${locale}/services/departments/reception`} className="btn btn-secondary my-2">
                    {locale === 'ar' ? "ابدأ الرحلة" : "Start the tour"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 mt-5">
            {departments.map((dept) => (
              <div key={dept.id} className="col mb-4">
                <a href={`/${locale}/services/departments/${dept.slug}`} className="department-item text-center">
                  <div className="floor-img mb-3">
                    <img src={dept.image} alt={dept.title} className="img-fluid rounded" />
                  </div>
                  <p className="floor-number text-secondary mb-1">{locale === 'ar' ? "الطابق" : "Floor"} {dept.floor}</p>
                  <h4 className="department-title">{dept.title}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/asnan-curve.svg" alt="background image" />
        </div>
      </div>
    </>
  );
}
