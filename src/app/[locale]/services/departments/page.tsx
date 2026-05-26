"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function DepartmentsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const departments = [
  {
    id: 1,
    floor: "1",
    title: locale === "ar" ? "الاستقبال" : "Reception",
    slug: "reception",
    image: "/images/departments/reception.png",
  },
  {
    id: 2,
    floor: "2",
    title: locale === "ar" ? "مختبر اسنان" : "Asnan Dental Lab",
    slug: "dental-lab",
    image: "/images/departments/dental-lab.png",
  },
  {
    id: 3,
    floor: "3",
    title: locale === "ar" ? "اسنان كيدز (طب اسنان الأطفال)" : "Asnan Kids (Pediatric Dentistry)",
    slug: "kids-dentistry",
    image: "/images/departments/kids-dentistry.png",
  },
  {
    id: 4,
    floor: "4",
    title: locale === "ar" ? "تقويم الاسنان" : "Orthodontics",
    slug: "orthodontics",
    image: "/images/departments/orthodontics.png",
  },
  {
    id: 5,
    floor: "5",
    title: locale === "ar" ? "التجميل و طب الاسنان الشامل" : "Cosmetic & Comprehensive Dentistry",
    slug: "cosmetic-comprehensive-dentistry",
    image: "/images/departments/cosmetic-comprehensive-dentistry.png",
  },
  {
    id: 6,
    floor: "6",
    title: locale === "ar" ? "جراحه اللثه و زراعه الاسنان" : "Gum Surgery & Dental Implants",
    slug: "gum-surgery-implants",
    image: "/images/departments/gum-surgery-implants.png",
  },
  {
    id: 7,
    floor: "7",
    title: locale === "ar" ? "صحه الفم و الاسنان" : "Oral & Dental Health",
    slug: "oral-dental-health",
    image: "/images/departments/oral-dental-health.png",
  },
  {
    id: 8,
    floor: "8",
    title:
      locale === "ar"
        ? "علاج أقنيه جذور الاسنان و جراحة ( علاج عصب )"
        : "Root Canal Treatment & Endodontic Surgery",
    slug: "root-canal-treatment",
    image: "/images/departments/root-canal-treatment.png",
  },
  {
    id: 9,
    floor: "9",
    title: locale === "ar" ? "التركيبات وطب الاسنان الشامل" : "Prosthodontics & Comprehensive Dentistry",
    slug: "prosthodontics-comprehensive-dentistry",
    image: "/images/departments/prosthodontics-comprehensive-dentistry.png",
  },
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
              {/* <ul className="departments-floors-list">
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
              </ul> */}
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
          <img src="/images/departments/Asnan-3D-tower.png" alt="Asnan-3D-tower" />
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

      <div className="departments-wrapper">
        <div className="container-fluid">
          <h2 className="departments-title">
            {locale === 'ar' ? "أهلا بكم في أسنان" : "Welcome To Asnan Tower"}
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="row justify-content-between align-items-center">
                <div className="col-12 col-lg-6">
                  <p 
  className="departments-text" 
  style={{ 
    textAlign: locale === 'ar' ? 'right' : 'left', 
    direction: locale === 'ar' ? 'rtl' : 'ltr' 
  }}
>
  {locale === 'ar' 
    ? "أول عيادة أسنان في الكويت تلتزم بصرامة بمعايير الولايات المتحدة للعناية بالأسنان، ولا يمكن تحقيق السعي لتوفير علاجات الأسنان الأكثر تقدمًا إلا من خلال أفضل العمالة والمعدات الحديثة." 
    : "The first dental clinic in Kuwait to strictly adhere to United States dental care standards. The pursuit of providing the most advanced dental treatments can only be achieved through the finest workforce and modern equipment."
  }
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
          
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 mt-5 justify-content-center cards-wrapper-div">
            {departments.map((dept) => (
              <div key={dept.id} className="col-md-3 col-lg-3 mb-4">
                <a href={`/${locale}/services/departments/${dept.slug}`} className="department-item text-center">
                  <div className="floor-img mb-3">
                    <img src={dept.image} alt={dept.title} className="img-fluid" />
                  </div>
                  {/* <p className="floor-number text-secondary mb-1">{locale === 'ar' ? "الطابق" : "Floor"} {dept.floor}</p> */}
                  <h4 className="department-title mb-4">{dept.title}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/departments/asnan-curve.png" alt="background image" />
        </div>
      </div>
    </>
  );
}
