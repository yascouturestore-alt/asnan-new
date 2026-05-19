"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import BookAppointmentPage from "../book-appointment/page";
import AppointmentSection from "@/components/home/AppointmentSection";

export default function KidsSpecialtiesPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isAr = locale === "ar";
  const t = getDictionary(locale);

  const characterTabs = isAr
    ? [
        {
          id: 0,
          name: "السيد توث",
          image: "/images/Mr. Tooth.svg",
          description:
            "السيد توث هو البطل الشجاع في عالم أسنان كيدز، يساعد الأطفال على كسر الخوف من زيارة طبيب الأسنان ويشجعهم على العناية اليومية بابتسامتهم.",
        },
        {
          id: 1,
          name: "فروشة",

          description:
            "فروشة صديقة الأطفال التي تعلمهم الطريقة الصحيحة لاستخدام الفرشاة بطريقة ممتعة، وتذكرهم بأهمية تنظيف الأسنان صباحاً ومساءً.",
        },
        {
          id: 2,
          name: "السيدة توث",
          image: "/images/Mrs. Tooth.svg",
          description:
            "السيدة توث تركز على العادات الصحية اليومية مثل تقليل السكريات والاهتمام بنظافة الفم، وتساعد الأطفال على بناء روتين صحي يدوم معهم.",
        },
        {
          id: 3,
          name: "سوبر معجون",
          image: "/images/Superpaste.svg",
          description:
            "سوبر معجون يعلم أطفالنا الطريقة الصحيحة لاستخدام المعجون بطريقة ممتعة، ويذكرهم بأهمية تنظيف الأسنان صباحاً ومساءً.",
        },
        {
          id: 4,
          name: "فلوسي",
          description:
            "فلوسي صديقة الأطفال الذكية التي تعلمهم أهمية تنظيف ما بين الأسنان بالخيط بطريقة بسيطة ومناسبة لأعمارهم.",
        },
      ]
    : [
        {
          id: 0,
          name: "Mr. Tooth",
          image: "/images/Mr. Tooth.svg",
          description:
            "Mr. Tooth is the brave hero of Asnan Kids, helping children overcome dental anxiety and feel confident about every clinic visit.",
        },
        {
          id: 1,
          name: "Froshy",

          description:
            "Froshy is the friendly character who teaches kids the right brushing technique in a fun way and reminds them to brush every morning and night.",
        },
        {
          id: 2,
          name: "Mrs. Tooth",
          image: "/images/Mrs. Tooth.svg",
          description:
            "Mrs. Tooth focuses on healthy daily habits, from reducing sugar intake to proper oral care for stronger teeth.",
        },
        {
          id: 3,
          name: "Superpaste",
          image: "/images/Superpaste.svg",
          description:
            "Superpaste teaches kids the right toothpaste routine in a fun way and reminds them to keep their smiles clean every day.",
        },
        {
          id: 4,
          name: "Flossy",
          description:
            "Flossy helps children understand why cleaning between teeth matters and how to do it in a simple child-friendly way.",
        },
      ];

  const treatments = isAr
    ? [
        {
          id: 0,
          title: "التخدير العام",
          description:
            "نوفّر التخدير العام للأطفال في الحالات التي تتطلب علاجاً شاملاً أو عندما يصعب إتمام العلاج بالطرق التقليدية. تتم جميع الإجراءات تحت إشراف فريق طبي متخصص لضمان أعلى درجات الأمان والراحة لطفلك.",
          image: "/images/frame1.png",
        },
      ]
    : [
        {
          id: 0,
          title: "General Anesthesia",
          description:
            "We provide general anesthesia for children when comprehensive treatment is needed or when regular chair-side care is not suitable. All procedures are performed under a specialized medical team to ensure maximum safety and comfort.",
          image: "/images/frame1.png",
        },
      ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero */}
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="hero-title">
                {isAr ? "أسنان" : "Asnan"}
                <img
                  className="kids-img img-fluid ms-3"
                  src="/images/kids.png"
                  alt="Kids section"
                  style={{ width: "100px" }}
                />
              </h1>
            </div>
            <div className="col-12 call-btn-container">
              <a
                href="tel:+9651896666"
                target="_blank"
                rel="noreferrer"
                className="call-btn phone-btn"
              >
                <div className="call-btn-icon">
                  <img
                    src="/images/Icon-phone.svg"
                    alt="phone icon"
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
          <img
            src="/images/Backgrounds/Asnan_Kids_Cover_Image2x.jpg"
            alt="background image"
          />
          <img
            src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_Kids_Cropped@3x.jpg"
            alt="background image"
          />
        </div>
      </div>

      {/* Welcome */}
      <div className="kids-specialties-page">
        <div className="ks-welcome">
          <div className="container-fluid">
            <div className="ks-welcome-grid">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="ks-welcome-content">
                    <h2 className="ks-welcome-title">
                      {isAr ? "  مرحباً بكم في" : "Welcome to"}
                      <br />
                      <span>{isAr ? "  أسنان كيدز" : " Asnan Kids"}</span>
                    </h2>
                    <div className="content-section">
                      <p className="ks-welcome-text">
                        {isAr
                          ? "تقدم عيادة أسنان تاور في الكويت رعاية أسنان عالية الجودة وشاملة للرضع والأطفال بما في ذلك ذوي الاحتياجات الخاصة برعاية استشاري أطباء أسنان الأطفال المعتمدون لدينا."
                          : "Asnan Tower Clinic in Kuwait provides high-quality, comprehensive dental care for infants and children, including those with special needs, under the care of our certified pediatric dental consultants."}
                      </p>
                      <p className="ks-welcome-text">
                        {isAr
                          ? "تم تصميم أسنان كيدز بطريقة محببة لطفلك تجعله يقضي الوقت داخل العيادة في بيئة مريحة حيث نقدم له كل الرعاية الصحية للفم وذلك للوقاية الأولية من لحظة الولادة و حتى سن المراهقة."
                          : "Asnan Kids is designed in a child-friendly way that allows your child to spend time in the clinic in a comfortable environment where we provide complete oral health care for primary prevention from birth through adolescence."}
                      </p>
                      <p className="ks-welcome-text">
                        {isAr
                          ? "الجو الآمن والمريح يجعل زيارة طفلك ممتعة وتعليمية من البداية وحتى النهاية."
                          : "The safe and comfortable atmosphere makes your child's visit enjoyable and educational from start to finish."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-welcome-img-wrap">
                    <img
                      src="/images/kids character image.png"
                      alt={isAr ? "أسنان كيدز" : "Asnan Kids"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Characters Tabs */}
        <div className="ks-characters">
          <div className="container-fluid">
            <div className="ks-characters-header">
              <h3>{isAr ? "شخصياتنا" : "Our Characters"}</h3>
              <p>
                {isAr
                  ? "تصفح الشخصيات المختلفة في قسم الأطفال."
                  : "Browse the different characters in the kids section."}
              </p>
            </div>

            <ul className="ks-tabs-list" role="tablist">
              {characterTabs.map((char) => (
                <li key={char.id} className="ks-tab-item">
                  {char.image ? <img src={char.image} alt={char.name} /> : null}

                  <button
                    type="button"
                    className={`ks-tab-btn ${activeTab === char.id ? "active" : ""}`}
                    onClick={() => setActiveTab(char.id)}
                  >
                    <span className="ks-tab-label">{char.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="ks-tab-content">
              <p>{characterTabs[activeTab].description}</p>
            </div>
          </div>
        </div>

        <div className="treatment-container">
          <div className="container-fluid">
            <div className={`ks-treatments-header ${isAr ? "rtl" : ""}`}>
              <div className="ks-treatments-text">
                <h3>{isAr ? "العلاجات" : "Treatments"}</h3>
                <p>
                  {isAr ? (
                    <>
                      دع خبراء طب الأسنان لدينا يستعيدون ابتسامتك بأحدث التقنيات
                      للأسنان
                      <br />
                      المفقودة أو المتضررة وأمراض اللثة وأي مشاكل تسبب لك
                      الانزعاج أو القلق.
                    </>
                  ) : (
                    <>
                      Let our dental experts restore your smile with the latest
                      technologies for missing
                      <br />
                      or damaged teeth, gum disease, and any issues causing you
                      discomfort or concern.
                    </>
                  )}
                </p>
              </div>
              <img
                src="/images/security.svg"
                alt="Treatments icon"
                className="ks-security-icon"
              />
            </div>
          </div>
        </div>

        {/* Treatments */}
        <div className="ks-treatments">
          <div className="container-fluid">
            {treatments.map((item) => (
              <article
                key={item.id}
                className={`ks-treatment-card ${isAr ? "rtl" : ""}`}
              >
                <div className="row gx-4 align-items-center">
                  <div className="col-md-6">
                    <div className="ks-treatment-info">
                      <h4>{isAr ? "التخدير العام" : "General Anesthesia"}</h4>
                      <p>
                        {isAr
                          ? "غالبًا ما يخضع الأطفال ذوو الاحتياجات الخاصة للتخدير العام لعلاج الأسنان كوسيلة لتجنب مخاطر الإصابة والإجهاد المفرط."
                          : "Children with special needs often undergo general anesthesia for dental treatment as a way to avoid the risks of injury and excessive stress."}
                      </p>
                      <p>
                        {isAr
                          ? "للأسف يعاني العديد من ذوي الاحتياجات الخاصة من آلام الأسنان الحادة. اذا لم يتم معالجتها سوف يؤثر الم الاسنان سلباً على التعلم والتواصل والتغذية والأنشطة الأخرى اللازمة للنمو والتطور الطبيعي."
                          : "Unfortunately, many children with special needs suffer from severe dental pain. If left untreated, dental pain will negatively affect learning, communication, nutrition, and other activities necessary for normal growth and development."}
                      </p>
                      <p>
                        {isAr
                          ? "إعادة التأهيل الشامل للأسنان تحت التخدير العام هو إجراء ممتاز، يحتاج من ساعة-ساعتين كحد أقصى لإتمام العلاج كامل وليس لديه أثار جانبية."
                          : "Comprehensive dental rehabilitation under general anesthesia is an excellent procedure, requiring one to two hours maximum to complete the full treatment with no side effects."}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="ks-treatment-img-wrap">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="ks-treatments-section">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img src="../images/frame2.png" alt="laughing gas" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>{isAr ? "الغاز الضاحك" : "Laughing Gas"}</h4>
                    <p>
                      {isAr
                        ? "معروف علمياً بـ أكسيد النايتروس هو مزيج من غاز النايتروس مع الاوكسجين يساعد الأطفال الذين لديهم نسبة عالية من الخوف والتوتر أثناء العلاج، على الاسترخاء. فهو مهدئ للأعصاب يعطي احساساً لطيفاً بالراحة والسعادة، فينسى الطفل ما حدث خلال العلاج وكأنه يحلق من السعادة."
                        : "Scientifically known as Nitrous Oxide, it is a mixture of nitrous gas and oxygen that helps children who have a high level of fear and anxiety during treatment to relax. It is a nerve sedative that gives a pleasant feeling of comfort and happiness, making the child forget what happened during treatment as if floating with joy."}
                    </p>
                    <p>
                      {isAr
                        ? "آمن تماماً وتأثيره على الطفل سريع الزوال، حيث يستطيع الذهاب للمنزل او المدرسة مباشرة بعد الانتهاء من العلاج."
                        : "It is completely safe and its effect on the child wears off quickly, allowing them to go home or to school immediately after the treatment is completed."}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-4 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>
                      {isAr
                        ? "درهم وقاية خير من قنطار علاج"
                        : "Prevention is Better Than Cure"}
                    </h4>
                    <p>
                      {isAr
                        ? "يتكون البلاك في الغالب من البكتيريا، التي تتغذى على السكر من الطعام والشراب. تنتج الأحماض التي تهاجم الأسنان مسببة تسوس وآلام الأسنان والتهابات وأمراض اللثة."
                        : "Plaque is mostly composed of bacteria that feed on sugar from food and drinks. They produce acids that attack the teeth, causing cavities, toothaches, infections, and gum diseases."}
                    </p>
                    <p>
                      {isAr
                        ? "بالنسبة للأطفال الذين لديهم الكثير من التسوس، قد يوصي طبيب أسنان الأطفال بالفلورايد الإضافي. يمكن لطبيب أسنان الأطفال أيضًا إغلاق التسوس قبل حدوثه، عن طريق تطبيق مانعات تسرب على سطح الأسنان. المواد المانعة للتسرب هي مواد بلاستيكية صافية مطلية على سطح السن. تعمل كحاجز للطعام والبكتيريا، وبالتالي حماية المناطق المعرضة للتسوس. يوصى بزيارة طبيب أسنان الأطفال كل ستة أشهر من عيد ميلاد الطفل الأول. عادات الأكل الصحية تؤدي لأسنان صحية. تحتاج الأسنان والعظام والأنسجة الرخوة للفم، مثل باقي الجسم، إلى نظام غذائي متوازن."
                        : "For children with a lot of cavities, the pediatric dentist may recommend additional fluoride. The pediatric dentist can also seal cavities before they occur by applying sealants on the tooth surface. Sealants are clear plastic materials coated on the tooth surface that act as a barrier against food and bacteria, thus protecting cavity-prone areas. It is recommended to visit the pediatric dentist every six months from the child's first birthday. Healthy eating habits lead to healthy teeth. Teeth, bones, and soft tissues of the mouth, like the rest of the body, need a balanced diet."}
                    </p>
                    <p>
                      {isAr
                        ? "انصح طفلك بعدم تناول الحلوى الصلبة وما إلى ذلك لأنها تبقى في الفم لفترة طويلة وغير مستقرة. علاوة على ذلك، يتم تدريب طبيب أسنان الأطفال في أسنان تاور على التعامل مع طفلك بطريقة مميزة وتحفيزية لجعله يحب الطبيب ويقوم بزيارته بشكل دوري."
                        : "Advise your child not to eat hard candy and the like because they stay in the mouth for a long time and are unstable. Furthermore, the pediatric dentist at Asnan Tower is trained to interact with your child in a special and motivating way to make them love the dentist and visit regularly."}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img src="../images/frame3.png" alt={"frame3"} />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments-section">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img src="../images/frame4.png" alt="preventive fillings" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>{isAr ? "الحشوات الوقائية" : "Preventive Fillings"}</h4>
                    <p>
                      {isAr
                        ? "توضع على تجاويف الطواحن الدائمة عند اكتمال ظهورها بالفم وتقلل نسبة التسوس. انها الأفضل من حيث الوقاية ولا تتطلب برد الاسنان."
                        : "They are placed on the grooves of permanent molars when they fully emerge in the mouth and reduce the rate of cavities. They are the best in terms of prevention and do not require filing the teeth."}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-4 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>
                      {isAr
                        ? "الحشوات التجميلية العلاجية"
                        : "Cosmetic Therapeutic Fillings"}
                    </h4>
                    <p>
                      {isAr
                        ? "توضع هذه الحشوات على الاسنان الدائمة لعلاج التسوس وسد التجويف الناتج عن التسوس والمحافظة على السن الطبيعي."
                        : "These fillings are placed on permanent teeth to treat cavities, seal the cavity caused by decay, and preserve the natural tooth."}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img src="../images/frame5.png" alt={"frame3"} />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments-section">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img
                      src="../images/frame7.png"
                      alt="root canal and crowns"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>
                      {isAr
                        ? "علاج العصب والتلبيس"
                        : "Root Canal Treatment and Crowns"}
                    </h4>
                    <p>
                      {isAr
                        ? "عدم علاج التهاب عصب السن اللبني ممكن ان يؤثر سلباً على لون، شكل وبنية السن الدائم. الضرس اللبني له بنيته الخاصة وعصبه الخاص به ويفصله عن الضرس الدائم منطقة عظمية. المنطقة العظمية و جذور الضرس اللبني يبدأن بالتحلل مع بزوغ الضرس الدائم ويبدأ الضرس بالسقوط."
                        : "Not treating an inflamed nerve in a primary tooth can negatively affect the color, shape, and structure of the permanent tooth. The primary molar has its own structure and nerve, separated from the permanent tooth by a bony area. The bony area and roots of the primary molar begin to dissolve as the permanent tooth emerges, and the tooth starts to fall out."}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-4 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>
                      {isAr
                        ? "التاج للأسنان اللبنية الخلفية"
                        : "Crown for Primary Back Teeth"}
                    </h4>
                    <p>
                      {isAr
                        ? "يوضع التاج على السن اللبني بعد علاج العصب خاصة إذا كان التسوس كبير. وظيفة الاسنان اللبنية الخلفية هي ان تحافظ على المسافة لبزوغ الاسنان الدائمة وتحافظ على العظم وتسهل عملية المضغ عند طفلك لذلك يعتبر التاج عاملاً اساسياً لممارسة طفلك للعادات اليومية كالأكل والنطق."
                        : "The crown is placed on the primary tooth after nerve treatment, especially if the decay is extensive. The function of primary back teeth is to maintain space for the eruption of permanent teeth, preserve the bone, and facilitate chewing for your child. Therefore, the crown is considered an essential factor for your child to practice daily habits such as eating and speaking."}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img
                      src="../images/frame4.png"
                      alt={"crown for primary teeth"}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments-section">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img
                      src="../images/frame6.png"
                      alt="primary teeth extraction"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>
                      {isAr
                        ? "خلع الاسنان اللبنية"
                        : "Primary Teeth Extraction"}
                    </h4>
                    <p>
                      {isAr
                        ? "تشكّل صحة الفم والأسنان إحدى اهم الركائز الأساسية التي يركّز عليها الأهل. ويحاولون تعليم طفلهم كيفية الاعتناء بها. فمثلاً، يعلّمونه طريقة تنظيف أسنانه بالفرشاة، كما ويحرصون على تقديم له وجبات خفيفة صحية للأسنان، ويشجعونه على شرب الماء. ولكن على الرغم من كل ما يبذلونه من جهود، فإن طفلهم معرّض إلى أن يعاني من تسوس الأسنان اللبنية. ولكن، هل من الصحي خلع الاسنان اللبنية المتسوسة؟"
                        : "Oral and dental health is one of the most important foundations that parents focus on. They try to teach their child how to take care of them. For example, they teach them how to brush their teeth, provide healthy snacks for their teeth, and encourage them to drink water. However, despite all their efforts, their child may still suffer from primary tooth decay. But is it healthy to extract decayed primary teeth?"}
                    </p>
                    <strong>
                      {isAr
                        ? "خلع الاسنان اللبنية المتسوسة"
                        : "Extraction of Decayed Primary Teeth"}
                    </strong>
                    <p>
                      {isAr
                        ? "من الناحية المثالية، لن يحتاج طفلكم أبداً إلى خلع الأسنان اللبنية. ومع ذلك، يعدّ هذا الإجراء ضرورياً في بعض الأحيان لتحسين صحة طفلكم بشكل عام. قد يتعيّن على طبيب الأسنان إجراء عملية الخلع لعدة أسباب، بما في ذلك تسوس الأسنان الشديد وكجزء من علاج تقويم الأسنان. أما بالنسبة للحالات الأخرى:"
                        : "Ideally, your child will never need to have primary teeth extracted. However, this procedure is sometimes necessary to improve your child's overall health. The dentist may need to perform an extraction for several reasons, including severe tooth decay and as part of orthodontic treatment. As for other cases:"}
                    </p>
                    <p>
                      {isAr
                        ? "تسوس الأسنان الشامل بحيث لا يمكن علاجه بحشو مركّب. التهاب شديد يصيب الأوعية الدموية، والأعصاب، والأنسجة الأخرى الموجودة في مركز السن. ولا يمكن إصلاحه عن طريق أي علاج آخر. إنها أسنان إضافية غير ضرورية تمنع الأسنان الأخرى من النمو بشكل صحيح. الأسنان من حوله مصابة، مما تسبب في أمراض اللثة. تعرّض السنّ لكسور بحيث لا يمكن ترميمه بمادة الترابط. وبغض النظر عن سبب وجوب خلع السنّ، فإن الطبيب يلجأ إلى الخلع عادة فقط للحالات التي لا يوجد فيها خيار علاج آخر من شأنه أن يعالج العدوى أو يحل المشكلة. طرق علاج الأسنان اللبنية المتسوسة."
                        : "Comprehensive tooth decay that cannot be treated with composite filling. Severe inflammation affecting the blood vessels, nerves, and other tissues in the center of the tooth that cannot be repaired by any other treatment. They are unnecessary extra teeth that prevent other teeth from growing properly. The surrounding teeth are infected, causing gum disease. The tooth has fractures that cannot be restored with bonding material. Regardless of the reason for extraction, the dentist usually resorts to extraction only for cases where there is no other treatment option that would treat the infection or solve the problem."}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-4 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>{isAr ? "التقويم المبكر" : "Early Orthodontics"}</h4>
                    <p>
                      {isAr
                        ? "يستخدم هذا النوع من التقويم للأطفال الذين يعانون من بروز بالفك العلوي او السفلي او ضيق بالفك مما يسبب تراجم الاسنان او البروز وبالتالي يبدأ التدخل الطبي لمساعدة الفك على النمو بطريقة صحيحة ويقلل من نسبة التدخل الجراحي في المستقبل في حال تم اللجوء الى الطبيب المختص في الوقت المناسب. والأفضل النتائج بفضل مراجعة الطفل عند بلوغه عمر 8 سنوات."
                        : "This type of orthodontics is used for children who suffer from protrusion of the upper or lower jaw or jaw narrowness that causes teeth crowding or protrusion. Medical intervention begins to help the jaw grow properly and reduces the chance of surgical intervention in the future if the specialist is consulted at the right time. Best results are achieved when the child visits at age 8."}
                    </p>
                    <strong>
                      {isAr
                        ? "وينقسم الى مرحلتين:"
                        : "It is divided into two phases:"}
                    </strong>
                    <br />
                    <strong>{isAr ? "المرحلة الاولى" : "Phase One"}</strong>
                    <p>
                      {isAr
                        ? "يعمل فيها الجهاز على تعديل مواقع العضلات بالتالي تعديل مشاكل الفك وضمان تناسقه بالمستقبل."
                        : "The appliance works to adjust the position of the muscles, thus correcting jaw problems and ensuring its alignment in the future."}
                    </p>
                    <strong>{isAr ? "المرحلة الثانية" : "Phase Two"}</strong>
                    <p>
                      {isAr
                        ? "يعمل فيها الجهاز الثاني على تعديل مواقع الاسنان."
                        : "The second appliance works to adjust the position of the teeth."}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img
                      src="../images/frame8.png"
                      alt={"early orthodontics"}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="ks-treatments-section">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img
                      src="../images/frame10.png"
                      alt="removable orthodontic appliances"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>
                      {isAr
                        ? <>الأجهزة المتحركة لتقويم <br/> الأسنان</>
                        : <>Removable Orthodontic <br/> Appliances</>}
                    </h4>
                    <strong>
                      {isAr ? "تستعمل في حالات :" : "Used in cases of:"}
                    </strong>

                    <p className="less-space">
                      {isAr ? "سوء اطباق الفكين" : "Jaw malocclusion"}
                    </p>
                    <p className="less-space">
                      {isAr
                        ? "صعوبة المضغ أو العض"
                        : "Difficulty chewing or biting"}
                    </p>
                    <p className="less-space">
                      {isAr
                        ? "مص الابهام عند الرضيع والدفع اللساني"
                        : "Thumb sucking in infants and tongue thrusting"}
                    </p>
                    <p className="less-space">
                      {isAr
                        ? "فقد احد الاسنان المبكر ما ينتج عن تراجم الاسنان فوق بعضها او ظهور مسافات سنية واسعة."
                        : "Early loss of a tooth resulting in teeth crowding or wide dental spaces."}
                    </p>
                    <p className="less-space">
                      {isAr ? "ضيق بسيط بالفك." : "Mild jaw narrowness."}
                    </p>
                    <p className="less-space">
                      {isAr
                        ? "العضة المعكوسة لسن واحد او لعدد من الاسنان."
                        : "Crossbite of one or multiple teeth."}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>


         <div className="ks-treatments">
          <div className="container-fluid">
            <article className={`ks-treatment-card ${isAr ? "rtl" : ""}`}>
              <div className="row gx-4 align-items-center">
                <div className="col-md-6">
                  <div className="ks-treatment-info">
                    <h4>{isAr ? "حافظ المسافة" : "Space Maintainer"}</h4>
                    <p>
                      {isAr
                        ? "في حال الخلع المبكر للاسنان اللبنية الخلفية لطفلك، حافظ المسافة يقوم بتثبيت باقي الاسنان والمحافظة على المسافات الموجودة للأسنان التي ستظهر لاحقاً. إنه يحمي من تراجم الاسنان بسبب الفراغ وبالتالي يقلل من حاجة الطفل بالمستقبل لتقويم الاسنان."
                        : "In case of early extraction of your child's back primary teeth, a space maintainer holds the remaining teeth in place and preserves the spaces for teeth that will emerge later. It protects against teeth crowding due to gaps and thus reduces the child's future need for orthodontics."}
                    </p>
                    <strong>
                      {isAr
                        ? "حافظ المسافة مع الأسنان التجميلية:"
                        : "Space Maintainer with Cosmetic Teeth:"}
                    </strong>
                    <p>
                      {isAr
                        ? "إذا فقد طفلك احد اسنانه الامامية (من سن واحد إلى أربعة أسنان)فإن هذا النوع من حافظ المسافة يعطي شكل جميل للأسنان مما يمنح الطفل ثقة أكبر بالنفس."
                        : "If your child loses one of their front teeth (from one to four teeth), this type of space maintainer gives a beautiful appearance to the teeth, giving the child more self-confidence."}
                    </p>
                    <p>
                      {isAr
                        ? "يستطيع تناول كافة الأطعمة بشكل طبيعي جدا من دون اية مشاكل وتساعد طفلك على المضغ بشكل صحي وجيد."
                        : "They can eat all foods very naturally without any problems and help your child chew in a healthy and proper way."}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ks-treatment-img-wrap">
                    <img
                      src="../images/frame11.png"
                      alt={"space maintainer"}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>


     <AppointmentSection locale={locale} />
    </>
  );
}
