"use client";

import React from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import WhyAsnanFeatureSection from "@/components/why-asnan/WhyAsnanFeatureSection";
import WhyAsnanWaveFeatureSection from "@/components/why-asnan/WhyAsnanWaveFeatureSection";

export default function WhyAsnanPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);
  const isAr = locale === "ar";

  const usaGraduateFeature = {
    title: isAr
      ? "لماذا تختار طبيب متخرج من أمريكا؟"
      : "Why Choose an American Graduate Dentist?",
    points: isAr
      ? [
          "أكثر دولة تستثمر في الأبحاث والتطوير في مجال طب الأسنان.",
          "اكثر دولة تقدم اختراعات في العالم",
          "أقوى جامعات طب الاسنان في العالم.",
          "اقدم جامعة لطب الاسنان في العالم كانت في أمريكا(ماريلاند-بالتيمور)",
          "تخصصات طب الأسنان بدأت على مستوى العالم في أمريكا(بوستن)",
          "الشعب الأمريكي لديه أجمل إبتسامة.",
        ]
      : [
          "The United States invests heavily in dental research and development.",
          "The United States leads the world in innovation.",
          "It is home to some of the strongest dental universities in the world.",
          "The oldest dental school in the world was founded in America, in Maryland, Baltimore.",
          "Dental specialties began at a global level in America, in Boston.",
          "Americans are known for beautiful smiles.",
        ],
  };

  const talentExperienceFeature = {
    title: isAr
      ? "المزج الصحيح بين الموهبة والخبرة"
      : "The Right Mix Between Talent and Experience",
    paragraphs: isAr
      ? [
          "منذ افتتاح أسنان في عام 2008، كرّسنا أنفسنا لتوفير بيئة مريحة حيث يشعر المرضى فور دخولهم باهتمام خاص وخدمة سبع نجوم. موظفات الاستقبال مدرّبين على خدمة الضيوف بأعلى المستويات تجعل المريض يتحرر من قلقه من الألم والخوف.",
          "أسنان تاور عيادة الأسنان الوحيدة في الكويت التي يعمل بها أخصائي متخرج من الولايات المتحدة الأمريكية والمملكة المتحدة في كل تخصص من تخصصات طب الأسنان.",
          "هدفنا أن تكون تجربتكم لا تُنسى على كافة الأصعدة، حتى قبل أن يراكم طبيب الأسنان. نحن نعتبر ضيوفنا جزء من عائلتنا. من أول اتصال لكم ستشعرون بالفرق.",
          "ملتزمون بتقديم خدمات طب الأسنان بجودة عالية لحماية أسنانكم والحفاظ عليها بيضاء جميلة، ونحلم دائماً أن نغير حياتكم وليس أسنانكم فقط.",
        ]
      : [
          "Since opening Asnan in 2008, we have dedicated ourselves to creating a comfortable environment where patients feel special from the moment they enter, with attentive care and a seven-star service experience.",
          "Asnan Tower is the only dental clinic in Kuwait with specialists graduated from the United States and the United Kingdom across every dental specialty.",
          "Our goal is to make your experience memorable at every level, even before you meet your dentist. We consider our guests part of our family, and from the first call you will feel the difference.",
          "We are committed to providing high-quality dental services to protect your teeth and keep them healthy and beautiful, because we aim to change your life, not only your smile.",
        ],
  };

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="hero-title">
                {isAr ? "ليش اسنان؟" : "Why Asnan Tower?"}
              </h1>

              <p className="hero-text">
                {isAr
                  ? "أسنان تاور هي عيادة الأسنان الوحيدة في الكويت التي يوجد بها خريج واحد على الأقل من خريجي رابطة Ivy League والمتوفر في كل تخصص."
                  : "Asnan Tower is the only dental clinic in Kuwait with at least one Ivy League Alumni who’s available in each specialty."}
              </p>
            </div>

            <div className="col-12 call-btn-container">
              <a
                href="tel:+9651896666"
                target="_blank"
                rel="noreferrer"
                className="call-btn phone-btn"
                id="hero-phone-call-btn"
              >
                <div className="call-btn-icon">
                  <img
                    src="/images/Icon-phone.svg"
                    alt="phone icon"
                    id="phone-icon"
                    height="50"
                  />
                </div>

                <div className="call-btn-txt">
                  <p className="call-desc">{t.direct_call}</p>
                  <span className="phone-link">
                    965-189<span>6666</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-img">
          <img src="/images/bg-why.png" alt="background image" />
          <img src="/images/bg-why-mob.png" alt="background image" />
        </div>
      </div>

      {/* Section 1 */}
      <WhyAsnanFeatureSection
        locale={locale}
        image="/images/why-asnan/usa-graduate-building.png"
        icon="/images/why-asnan/icon-university.svg"
        title={usaGraduateFeature.title}
        points={usaGraduateFeature.points}
        imageAlt={isAr ? "مبنى جامعة أمريكية" : "American university building"}
        iconAlt={isAr ? "أيقونة جامعة" : "University icon"}
        variant="image-left"
      />

      {/* Section 2 */}
      <WhyAsnanWaveFeatureSection
        locale={locale}
        image="/images/why-asnan/talent-experience.png"
        icon="/images/why-asnan/icon-talent-experience.svg"
        title={talentExperienceFeature.title}
        paragraphs={talentExperienceFeature.paragraphs}
        imageAlt={
          isAr
            ? "طبيب أسنان يشرح العلاج"
            : "Dentist explaining dental treatment"
        }
        iconAlt={
          isAr
            ? "أيقونة الموهبة والخبرة"
            : "Talent and experience icon"
        }
        variant="image-right"
      />
    </>
  );
}