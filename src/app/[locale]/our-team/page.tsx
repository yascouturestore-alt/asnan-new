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
      {/* Hero - unchanged */}
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

      {/* Content from Figma screen: hero ke neeche aur appointment/footer se upar */}
      <main className="asnan-team-page" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {/* Mission / Goal */}
        <section className="asnan-mission-section" aria-labelledby="asnan-mission-title">
          <p className="asnan-mission-kicker">
            {locale === 'ar' ? "هدفنا" : "Our Mission"}
          </p>

          <h2 id="asnan-mission-title" className="asnan-mission-title">
            {locale === 'ar' ? (
              <>
                تـــحويــل العـــالــــم الثـــالــــــث
                <br />
                الــــى العــــالــــــم <span className="asnan-yellow">الأول</span> مــــــن خــــــــلال <span className="asnan-blue-text">طــــب الأســنــان</span>.
              </>
            ) : (
              <>
                To transform the third world into the first world through <span className="asnan-blue-text">dentistry</span>.
              </>
            )}
          </h2>

          <div className="asnan-mission-copy">
            <p>
              {locale === 'ar'
                ? "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والممكلة المتحدة في كل تخصص من تخصصات طب الأسنان."
                : "Asnan Tower Doctors carry post graduate specialty degrees from the United States, United Kingdom & Canada."}
            </p>
            <p>
              {locale === 'ar'
                ? "يحرص فريقنا الطبي دوما على حضور المؤتمرات وورش العمل العالمية لتطبيق أحدث التطورات والتقنيات في مجال طب الأسنان."
                : "This team empowers itself by utilizing the best materials and constantly attending courses to provide exceptional dental care."}
            </p>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="asnan-doctors-section" aria-label={locale === 'ar' ? "فريقنا الطبي" : "Doctors team"}>
          <div className="asnan-doctors-grid">
            {doctors.map((doctor) => (
              <article className="asnan-doctor-card" key={doctor.slug}>
                <div className="asnan-doctor-image-wrap">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="asnan-doctor-image"
                    loading="lazy"
                  />
                </div>

                <div className="asnan-doctor-content">
                  <p className="asnan-doctor-university">{doctor.university}</p>
                  <h3 className="asnan-doctor-name">{doctor.name}</h3>
                  <span className="asnan-doctor-line" aria-hidden="true" />
                  <p className="asnan-doctor-title">{doctor.title}</p>
                </div>

                <a
                  href={`/${locale}/our-team/${doctor.slug}`}
                  className="asnan-doctor-button"
                >
                  {locale === 'ar' ? "مشاهدة الملف الشخصي" : "View Profile"}
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Appointment */}
      <AppointmentSection locale={locale} />

      <style jsx global>{`
        .asnan-team-page {
          --asnan-navy: #051a53;
          --asnan-blue: #2c8eff;
          --asnan-yellow: #ffc936;
          --asnan-gray: #50595c;
          --asnan-card-bg: #ffffff;
          --asnan-image-bg: #ececec;
          --asnan-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.1);
          width: 100%;
          background: #ffffff;
          color: var(--asnan-navy);
          
          overflow: hidden;
        }

        .asnan-mission-section {
          width: min(1323px, calc(100% - 48px));
          margin: clamp(58px, 7vw, 80px) auto clamp(44px, 5vw, 60px);
          text-align: center;
        }

        .asnan-mission-kicker {
          margin: 0 0 24px;
          color: var(--asnan-gray);
          font-size: 20px;
          font-weight: 800;
          line-height: 1.2;
        }

        .asnan-mission-title {
          margin: 0 auto;
          max-width: 1323px;
          color: var(--asnan-navy);
          font-size: clamp(30px, 3.2vw, 46px);
          font-weight: 800;
          line-height: 1.52;
          letter-spacing: 0;
        }

        .asnan-yellow {
          color: var(--asnan-yellow);
        }

        .asnan-blue-text {
          color: var(--asnan-blue);
        }

        .asnan-mission-copy {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 517px));
          justify-content: center;
          gap: 20px;
          margin-top: 34px;
          color: var(--asnan-gray);
          font-size: 20px;
          line-height: 1.5;
          text-align: inherit;
        }

        .asnan-mission-copy p {
          margin: 0;
          text-align: inherit;
        }

        .asnan-team-page[dir="rtl"] .asnan-mission-copy p {
          text-align: right;
        }

        .asnan-team-page[dir="ltr"] .asnan-mission-copy p {
          text-align: left;
        }

        .asnan-doctors-section {
          width: min(1598px, calc(100% - 48px));
          margin: 0 auto clamp(74px, 8vw, 116px);
    z-index: 2;
    position: relative;
        }

        .asnan-doctors-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 383px));
          justify-content: center;
          gap: 20px 77px;
          direction: inherit;
        }

        .asnan-doctor-card {
          width: 100%;
          min-height: 627px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 50px;
          background: var(--asnan-card-bg);
          box-shadow: var(--asnan-shadow);
        }

        .asnan-doctor-image-wrap {
          height: 332px;
          flex: 0 0 332px;
          border-radius: 50px 50px 0 0;
          background: var(--asnan-image-bg);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .asnan-doctor-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
        }

        .asnan-doctor-content {
          flex: 1 1 auto;
          padding: 36px 20px 14px;
          text-align: inherit;
        }

        .asnan-doctor-university {
          min-height: 38px;
          margin: 0;
          color: var(--asnan-gray);
          font-size: 14px;
          font-weight: 700;
          line-height: 1.35;
        }

        .asnan-doctor-name {
          min-height: 43px;
          margin: 13px 0 0;
          color: var(--asnan-navy);
          font-size: clamp(24px, 1.55vw, 28px);
          font-weight: 800;
          line-height: 1.18;
        }

        .asnan-doctor-line {
          display: block;
          width: 114px;
          height: 2px;
          margin-top: 11px;
          margin-bottom: 20px;
          background: var(--asnan-yellow);
        }

        .asnan-team-page[dir="rtl"] .asnan-doctor-line {
        margin-left: auto;
          margin-right: 0;
        }

        .asnan-team-page[dir="ltr"] .asnan-doctor-line {
          margin-right: auto;
          margin-left: 0;
        }

        .asnan-doctor-title {
          min-height: 44px;
          margin: 0;
          color: var(--asnan-gray);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.38;
        }

        .asnan-doctor-button {
          align-self: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          max-width: calc(100% - 40px);
          margin: 0 20px 40px;
          padding: 8px 24px;
          border-radius: 30px;
          color: #ffffff !important;
          background: linear-gradient(100deg, #042970 7.7%, #197ad9 100%);
          text-decoration: none !important;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          text-align: center;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .asnan-doctor-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(25, 122, 217, 0.25);
        }

        @media (max-width: 1599px) {
          .asnan-doctors-grid {
            gap: 28px;
          }
        }

        @media (max-width: 1399px) {
          .asnan-doctors-grid {
            grid-template-columns: repeat(3, minmax(0, 383px));
          }
        }

        @media (max-width: 1080px) {
          .asnan-mission-copy {
            grid-template-columns: 1fr;
            max-width: 760px;
            margin-left: auto;
            margin-right: auto;
          }

          .asnan-doctors-grid {
            grid-template-columns: repeat(2, minmax(0, 383px));
          }
        }

        @media (max-width: 767px) {
          .asnan-mission-section {
            width: min(100% - 28px, 560px);
            margin-top: 54px;
          }

          .asnan-mission-kicker {
            font-size: 18px;
            margin-bottom: 18px;
          }

          .asnan-mission-title {
            font-size: 30px;
            line-height: 1.5;
          }

          .asnan-mission-copy {
            margin-top: 24px;
            font-size: 16px;
            line-height: 1.75;
          }

          .asnan-doctors-section {
            width: min(100% - 28px, 430px);
            margin-bottom: 72px;
          }

          .asnan-doctors-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .asnan-doctor-card {
            min-height: auto;
            border-radius: 34px;
          }

          .asnan-doctor-image-wrap {
            height: 320px;
            flex-basis: 320px;
            border-radius: 34px 34px 0 0;
          }

          .asnan-doctor-content {
            padding: 28px 18px 14px;
          }

          .asnan-doctor-button {
            margin-bottom: 30px;
            font-size: 17px;
          }
        }

        @media (max-width: 420px) {
          .asnan-mission-title {
            font-size: 26px;
          }

          .asnan-doctor-image-wrap {
            height: 292px;
            flex-basis: 292px;
          }

          .asnan-doctor-name {
            font-size: 23px;
          }
        }
      `}</style>
    </>
  );
}
