"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import AppointmentSection from "@/components/home/AppointmentSection";

export default function TeamPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const doctors = [
    {
      name: locale === 'ar' ? "د. أمينة الجاسم" : "Dr. Amina Al-Jassem",
      title: locale === 'ar' ? "اختصاصي طب الأسنان الشامل المتقدم وتجميل الأسنان" : "Comprehensive & Cosmetic Dentist",
      university: locale === 'ar' ? ".كلية الجراحيين الملكية في إيرلندا" : "Royal college of surgeons / Ireland",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Amina%20Al-Jassem.png`,
      slug: "dr-amina-al-jassem"
    },
    {
      name: locale === 'ar' ? "د. محمد الحجي" : "Dr. Mohammed Al-Hajji",
      title: locale === 'ar' ? "اختصاصي تجميل و طب الأسنان الشامل" : "General & Cosmetic Dentist DDS ,MS, ABGD",
      university: locale === 'ar' ? ".جامعة كولومبيا / الولايات المتحدة الأمريكية" : "Columbia University, New York / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Mohammed%20Al-Hajji.png`,
      slug: "dr-mohammed-al-hajji"
    },
    {
      name: locale === 'ar' ? "د.عيسى العيسى" : "Dr. Essa Al Essa",
      title: locale === 'ar' ? "استشاري طب اسنان شامل وتجميل الاسنان" : "Comprehensive & Cosmetic Dental Consultant",
      university: locale === 'ar' ? ".جامعة بتسبرغ / الولايات المتحدة الامريكية" : "University of Pittsburgh / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Essa%20Al%20Essa.png`,
      slug: "dr-essa-al-essa"
    },
    {
      name: locale === 'ar' ? "د. طارق بــورزق" : "Dr. Tareq Burezq",
      title: locale === 'ar' ? "استشـــاري تركيبات وتجميـل وزراعـة أسنـان" : "Prosthodontist Consultant",
      university: locale === 'ar' ? ".جامعة هارفارد / الولايات المتحـدة الأمريكية" : "Harvard University / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Tareq%20Burezq.png`,
      slug: "dr-tareq-burezq"
    },
    {
      name: locale === 'ar' ? "د. امنه المطوع" : "Dr. Amna Al Mutawaa",
      title: locale === 'ar' ? "أخصائية تقويم الاسنان والفكين" : "Orthodontist Consultant",
      university: locale === 'ar' ? "كلية لندن الجامعية" : "Kings College / LondonKings College London",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Amna%20Al%20Mutawaa.png`,
      slug: "dr-amna-al-mutawaa"
    },
    {
      name: locale === 'ar' ? "د. طلال الرياحي" : "Dr. Talal Al-Reyahi",
      title: locale === 'ar' ? "طــب الاسنــــان التحفظي و تجميــل اسنــــان" : "Comprehensive & Cosmetic Dentist",
      university: locale === 'ar' ? ".جامعة دانـــــدي / المملكــــة المتحــــدة" : "University of Dundee / UK",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Talal%20Al-Reyahi.png`,
      slug: "dr-talal-al-reyahi"
    },
    {
      name: locale === 'ar' ? "د. هاشم غضنفري" : "Dr. Hashem Ghadanfari",
      title: locale === 'ar' ? "اختصاصي طب أسنان شامل و تجميل أسنان" : "Comprehensive & Cosmetic Dentist",
      university: locale === 'ar' ? ".جامعة فيرجينيا / الولايات المتحدة الأمريكية" : "Virginia Commonwealth University / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hashem%20Ghadanfari.png`,
      slug: "dr-hashem-ghadanfari"
    },
    {
      name: locale === 'ar' ? "د. خالد الخياط" : "Dr. Khaled Al-Khayat",
      title: locale === 'ar' ? "استشـــــاري تقويم الاسنان" : "Orthodontics Consultant",
      university: locale === 'ar' ? ".جامعة بافلو نيويـورك / الولايـات المتحـدة امريكية" : "University of New York at Buffalo / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Khaled%20Al-Khayat.png`,
      slug: "dr-khaled-al-khayat"
    },
    {
      name: locale === 'ar' ? "د. مؤيد العمر" : "Dr. Moayad Al-Omar",
      title: locale === 'ar' ? "اختصاصي علاج عصب وأقنية" : "Specialist Endodontist",
      university: locale === 'ar' ? ".جامعة الينوي / الولايات المتحدة امريكية" : "University of Illinois / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Moayad%20Al-Omar.png`,
      slug: "dr-moayad-al-omar"
    },
    {
      name: locale === 'ar' ? "د. يحيى اليحيى" : "Dr. Yahya Al Yahya",
      title: locale === 'ar' ? "اخصائي جراحة الفم و الوجه والفكين" : "Oral and Maxillofacial Surgeon Specialist",
      university: locale === 'ar' ? ".جامعة تكساس هيوستن / الولايات المتحدة الأمريكية" : "Virginia Commonwealth University / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Yahya%20Al%20Yahya.png`,
      slug: "dr-yahya-al-yahya"
    },
    {
      name: locale === 'ar' ? "د. بشار رجب" : "Dr. Bashar Rajab",
      title: locale === 'ar' ? "استشاري جراحة الوجه والفكين" : "Oral and Maxillofacial Surgeon Consultant",
      university: locale === 'ar' ? ".جامعة فرجينيا / الولايات المتحـدة امريكية" : "Virginia Commonwealth University / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Bashar%20Rajab.png`,
      slug: "dr-bashar-rajab"
    },
    {
      name: locale === 'ar' ? "د. حمود الفارسي" : "Dr. Hamoud Al-Farsi",
      title: locale === 'ar' ? "اختصاصي تركيبات وتجميل وزراعة الأسنان" : "Prosthodontist Specialist",
      university: locale === 'ar' ? ".جامعة جنوب كاليفورنيا / الولايات المتحدة الامريكية" : "University of Southern California / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hamoud%20Al-Farsi.png`,
      slug: "dr-hamoud-al-farsi"
    },
    {
      name: locale === 'ar' ? "د. هادي الصفار" : "Dr. Hadi Al Saffar",
      title: locale === 'ar' ? "استشاري لثة و زراعة أسنان تجميلية" : "Periodontist Cosmetic, Implantologist Consultant",
      university: locale === 'ar' ? ".جـامعة نيويورك / الولايات المتحدة امريكية" : "University of New York at Buffalo / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Hadi%20Al%20Saffar.png`,
      slug: "dr-hadi-al-saffar"
    },
    {
      name: locale === 'ar' ? "د. علي الصفار" : "Dr. Ali Al Saffar",
      title: locale === 'ar' ? "استشاري طـب أسنان أطفال" : "Pediatric dentist",
      university: locale === 'ar' ? ".جامعة مينيسوتا / الولايات المتحدة امريكية" : "University of Minnesota / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Ali%20Al%20Saffar.png`,
      slug: "dr-ali-al-saffar"
    },
    {
      name: locale === 'ar' ? "د. بول نصار" : "Dr. Paul Nassar",
      title: locale === 'ar' ? "استشاري تقـويم أسنـان" : "Orthodontics Consultant",
      university: locale === 'ar' ? ".جامعة باريس / فرنسا" : "University of Paris / France",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Paul%20Nassar.png`,
      slug: "dr-paul-nassar"
    },
    {
      name: locale === 'ar' ? "د. عيسى الراشد" : "Dr. Essa AlRashid",
      title: locale === 'ar' ? "أختصاصي طـب أسنان أطفال" : "Pediatric Dentist Specialist",
      university: locale === 'ar' ? ".جامعة القاهرة / مصر" : "Cairo University / Egypt",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Essa%20AlRashid.png`,
      slug: "dr-essa-alrashid"
    },
    {
      name: locale === 'ar' ? "د. احمد البزم" : "Dr. Ahmad Albuzem",
      title: locale === 'ar' ? "اخصائي جراحة الفم و الوجه والفكين" : "Oral and maxillofacial Surgeon",
      university: locale === 'ar' ? ".جامعة دمشق / سوريا" : "Damascus University / Syria",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Ahmad%20Albuzem.png`,
      slug: "dr-ahmad-albuzem"
    },
    {
      name: locale === 'ar' ? "د. كاترين رافول" : "Dr. Catherine Raffoul",
      title: locale === 'ar' ? "أخصائية صحة الفم والأسنان" : "Oral & Dental Hygienist",
      university: locale === 'ar' ? ".جــامعة تورونتـو / كنـدا" : "University of Toronto / Canada",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Catherine%20Raffoul.png`,
      slug: "dr-catherine-raffoul"
    },
    {
      name: locale === 'ar' ? "د. فواز الفريح" : "Dr. Fawaz Al-Foraih",
      title: locale === 'ar' ? "اختصاصي علاج عصب وأقنية" : "Specialist Endodontist",
      university: locale === 'ar' ? ".جامعة فرجينيا / الولايات المتحدة الأمريكية" : "Virginia Commonwealth University / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Fawaz%20Al-Foraih.png`,
      slug: "dr-fawaz-al-foraih"
    },
    {
      name: locale === 'ar' ? "د. عبدالله القائد" : "Dr. Abdullah Al Qaid",
      title: locale === 'ar' ? "اختصاصي علاج عصب وأقنية جذور" : "Specialist Endodontist",
      university: locale === 'ar' ? ".جامعة كنيتكيت - الولايات المتحدة الامريكية" : "University of Connecticut / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdullah%20Al%20Qaid.png`,
      slug: "dr-abdullah-al-qaid"
    },
    {
      name: locale === 'ar' ? "د. عبدالوهاب الكندري" : "Dr. Abdulwahab AlKandari",
      title: locale === 'ar' ? "أخصائي اللثة" : "Periodontist",
      university: locale === 'ar' ? ".جامعة أوكلاهوما / الولايات المتحـدة الأمريكية" : "The University of Oklahoma / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdulwahab%20AlKandari.png`,
      slug: "dr-abdulwahab-alkandari"
    },
    {
      name: locale === 'ar' ? "د . زاهر الصباغ" : "Dr. Zaher Sabbagh",
      title: locale === 'ar' ? "أخصائي تركيبات وتجميل وازرعة الأسنان" : "Specialist In Cosmetic And Implant",
      university: locale === 'ar' ? ".جامعة بيروت العربية / لبنان" : "Beirut Arab University / Lebanon",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Zaher%20Sabbagh.png`,
      slug: "dr-zaher-sabbagh"
    },
    {
      name: locale === 'ar' ? "د. روان العمري" : "Dr. Rawan Alomary",
      title: locale === 'ar' ? "اختصاصي تجميل و طب الأسنان الشامل" : "Cosmetic Specialist",
      university: locale === 'ar' ? ".جامعة دمشق / سوريا" : "Damascus university / Syria",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Rawan%20Alomary.png`,
      slug: "dr-rawan-alomary"
    },
    {
      name: locale === 'ar' ? "د. رواد كرم" : "Dr. Rawad Karam",
      title: locale === 'ar' ? "طــب الاسنــــان التحفظي و تجميــل اسنــــان" : "Restorative and Esthetic Dentistry",
      university: locale === 'ar' ? ".جامعة سان جوزيف / لبنان" : "St Joseph University / Lebanon",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Rawad%20Karam.png`,
      slug: "dr-rawad-karam"
    },
    {
      name: locale === 'ar' ? "د. عبدالله الفضلي" : "Dr. Abdullah Alfadhli",
      title: locale === 'ar' ? "أختصاصي طـب أسنان أطفال" : "Pediatric Dentist",
      university: locale === 'ar' ? "جامعة نيزني نوفقورد/ موسكو" : "Nizhny Novgorod State University / Moscow",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Abdullah%20Alfadhli.png`,
      slug: "dr-abdullah-alfadhli"
    },
    {
      name: locale === 'ar' ? "د. ليال صالح" : "Dr. Layal Saleh",
      title: locale === 'ar' ? "اخصائية تقويم الأسنان والفكين" : "Orthodontist and Jaw Specialist",
      university: locale === 'ar' ? "جامعة بيروت العربية / لبنان" : "Beirut Arab University / Lebanon",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Layal%20Saleh.png`,
      slug: "dr-layal-saleh"
    },
    {
      name: locale === 'ar' ? "د. مشعل الكندري" : "Dr. Meshaal Al-Kanderi",
      title: locale === 'ar' ? "استشـــاري تركيبات وتجميـل وزراعـة أسنـان" : "Prosthodontist Consultant",
      university: locale === 'ar' ? ".جامعة هارفارد / الولايات المتحـدة الأمريكية" : "Harvard University / USA",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Meshaal%20Al-Kanderi.png`,
      slug: "dr-meshaal-al-kanderi"
    },
    {
      name: locale === 'ar' ? "د. كمال الكمال" : "Dr. Kamal Alkamal",
      title: locale === 'ar' ? "طب وجراحة أسنان شامل وتجميل اسنان" : "Comprehensive & Cosmetic Dentistry",
      university: locale === 'ar' ? "جامعة فرجينيا كومنولث / الولايات المتحدة الامريكية" : "Virginia Commonwealth University",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Kamal%20Alkamal.png`,
      slug: "dr-kamal-alkamal"
    },
    {
      name: locale === 'ar' ? "د. يوسف جرمن" : "Dr. Yousif German",
      title: locale === 'ar' ? "اختصاصي تجميل و طب الأسنان الشامل" : "General and Cosmetic Dentist",
      university: locale === 'ar' ? "جامعة فيرجينيا" : "Virginia Commonwealth University",
      image: `${process.env.NEXT_PUBLIC_CDN_URL}/our-team/Dr.%20Yousif%20German.png`,
      slug: "dr-yousif-german"
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
                      {doctor.university}
                    </div>
                    <div className="doctor-name h5 font-weight-bold">{doctor.name}</div>
                    <div className="doctor-title text-muted mb-3">{doctor.title}</div>
                    <a href="#" className="btn btn-secondary">
                      {locale === 'ar' ? "مشاهدة الملف الشخصي" : "View Profile"}
                    </a>
                    {/* <a href={`/${locale}/our-team/${doctor.slug}`} className="btn btn-secondary">
                      {locale === 'ar' ? "مشاهدة الملف الشخصي" : "View Profile"}
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment */}
      <AppointmentSection locale={locale} />
    </>
  );
}
