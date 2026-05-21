"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

export default function TeamPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const doctors = [
    {
      name: "Dr. Amina Al-Jassem",
      title: locale === 'ar' ? "أخصائي تقويم أسنان" : "Orthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.-Amnah-(1).png",
      slug: "dr-amnah"
    },
    {
      name: "Dr. Mohammed Al-Hajji",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.-Hmoud.png",
      slug: "dr-hmoud"
    },
    {
      name: "Dr. Essa Al Essa",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-essa"
    },
    {
      name: "Dr. Tareq Burezq",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Amna Al Mutawaa",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Talal Al-Reyahi",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Hashem Ghadanfari",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Khaled Al-Khayat",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Moayad Al-Omar",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Yahya Al Yahya",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Bashar Rajab",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Hamoud Al-Farsi",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Hadi Al Saffar",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Ali Al Saffar",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Paul Nassar",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Essa AlRashid",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Ahmad Albuzem",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Catherine Raffoul",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Fawaz Al-Foraih",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Abdullah Al Qaid",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    },
    {
      name: "Dr. Abdulwahab AlKandari",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr.%20Essa%20Al%20Essa.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Zaher Sabbagh",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Zaher Sabbagh.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Rawan Alomary",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Rawan Alomary.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Rawad Karam",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Rawad Karam.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Abdullah Alfadhli",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Abdullah Alfadhli.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Layal Saleh",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Layal Saleh.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Meshaal Al-Kanderi",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Meshaal Al-Kanderi.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Kamal Alkamal",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Kamal Alkamal.png",
      slug: "dr-tareq-burezq"
    }, {
      name: "Dr. Yousif German",
      title: locale === 'ar' ? "أخصائي تعويضات سنية" : "Prosthodontist",
      university: locale === 'ar' ? "جامعة الكويت" : "Kuwait University",
      image: "/images/Dr. Yousif German.png",
      slug: "dr-tareq-burezq"
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">
                {locale === 'ar' ? "فريقنا" : "Our Team"}
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
          <img src="/images/Backgrounds/Our_Team_Cover.jpg" alt="background image" />
          <img src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_OurTeam_Cropped@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Content */}
      <div className="page-content py-5">
        <div className="container-fluid">
          {/* Our Mission */}
          <div className="mission-block text-center mb-5">
            <div className="mission-title h4 text-secondary mb-3">
              {locale === 'ar' ? "هدفنا" : "Our Mission"}
            </div>
            <div className="section-title h2 mb-4">
              {locale === 'ar' ? "تحويل العالم الثالث إلى العالم الأول من خلال طب الأسنان" : "To transform the third world into the first world through dentistry."}
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <p className="mission-text text-muted">
                      {locale === 'ar' ? "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والمملكة المتحدة في كل تخصص." : "Asnan Tower Doctors carry post graduate specialty degrees from the United States, United Kingdom & Canada."}
                    </p>
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <p className="mission-text text-muted">
                      {locale === 'ar' ? "يحرص فريقنا الطبي دوماً على حضور المؤتمرات وورش العمل العالمية لتطبيق أحدث التطورات والتقنيات." : "This team empowers itself by utilizing the best materials and constantly attending courses to provide exceptional dental care."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="row mt-5">
            {doctors.map((doctor, index) => (
              <div key={index} className="col-lg-3 col-sm-6 col-12 mb-4">
                <div className="doctor-card border rounded overflow-hidden shadow-sm">
                  <div className="doctor-img">
                    <img src={doctor.image} alt={doctor.name} className="img-fluid w-100" />
                  </div>
                  <div className="doctor-info p-4 text-center">
                    <div className="doctor-university text-secondary mb-2">
                      <img src="/images/Dentist%20Icon.svg" alt="university icon" className="me-2" style={{ width: '20px' }} />
                      {doctor.university}
                    </div>
                    <div className="doctor-name h5 font-weight-bold">{doctor.name}</div>
                    <div className="doctor-title text-muted mb-3">{doctor.title}</div>
                    <a href={`/${locale}/our-team/${doctor.slug}`} className="btn btn-secondary">
                      {locale === 'ar' ? "مشاهدة الملف الشخصي" : "View Profile"}
                    </a>
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
