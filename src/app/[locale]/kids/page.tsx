"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import KidsFeatureSection from "@/components/kids/KidsFeatureSection";
import KidsCharactersTabsSection from "@/components/kids/KidsCharactersTabsSection";
import KidsWaveFeatureSection from "@/components/kids/KidsWaveFeatureSection";
import styles from "./KidsPage.module.css";
import AppointmentSection from '@/components/home/AppointmentSection';

const copy = {
  ar: {
    heroTitle: "اسنانوبيديا",
    heroCount: "٤٧ مقالة من قبل أسنان تاور",
    searchPlaceholder: "اكتب هنا على سبيل المثال: كيف أحافظ على صحة أسناني؟",
    searchBtn: "البحث",
    articlesTitle: "مقالات مختارة بعناية",
    articlesSubtitle: "مقالات مفيدة مختارة من قبل أسنان تاور",
    bookNow: "احجز الآن",
    learnMore: "تعلم المزيد",
    categoriesTitle: "المجالات المطلوبة",
    categoriesSubtitle: "تصفح الفئات المختلفة المتاحة في قاعدة المعرفة.",
    faqTitle: "أسئلة وأجوبة",
    faqSubtitle: "إبحث عن إجابة سريعة لمشكلة أو سؤال عن كيفية القيام به.",
    /* DOM order: index 0 = rightmost in RTL */
    cats: ["الوقاية", "طوارئ الأسنان", "مشاكل الأسنان", "صحة الفم والجسم", "الأسئلة الأكثر شيوعاً"],
  },
  en: {
    heroTitle: "ASNANOPEDIA",
    heroCount: "47 articles by Asnan Tower",
    searchPlaceholder: "Type here e.g: How to keep my teeth healthy?",
    searchBtn: "Search",
    articlesTitle: "Carefully Selected Articles",
    articlesSubtitle: "Useful articles selected by Asnan Tower",
    bookNow: "Book Now",
    learnMore: "Learn More",
    categoriesTitle: "Popular Categories",
    categoriesSubtitle: "Browse the different categories available in the knowledge base.",
    faqTitle: "Questions & Answers",
    faqSubtitle: "Find a quick answer to a problem or question about how to do something.",
    cats: ["Prevention", "Dental Emergencies", "Dental Problems", "Oral & Body Health", "Most Asked Questions"],
  },
};

export default function KidsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isAr = locale === "ar";
  const t = isAr ? copy.ar : copy.en;

  const kidsTreatmentFeatures = [
    {
      image: "/images/Kids/im1.png",
      title: isAr ? "التخدير العام" : "General Anesthesia",
      imageAlt: isAr ? "التخدير العام للأطفال" : "General anesthesia for children",
      paragraphs: isAr
        ? [
            "غالبًا ما يخضع الأطفال ذوو الاحتياجات الخاصة للتخدير العام لعلاج الأسنان كوسيلة لتجنب مخاطر الإصابة والإجهاد المفرط.",
            "للأسف يعاني العديد من ذوي الاحتياجات الخاصة من آلام الأسنان الحادة. اذا لم يتم معالجتها سوف يؤثر الم الاسنان سلباً على التعلم والتواصل والتغذية والأنشطة الأخرى اللازمة للنمو والتطور الطبيعي.",
            "إعادة التأهيل الشامل للأسنان تحت التخدير العام هو إجراء ممتاز، يحتاج من ساعة-ساعتين كحد أقصى لإتمام العلاج كامل وليس لديه أثار جانبية.",
          ]
        : [
            "Children with special needs often undergo dental treatment under general anesthesia to avoid the risk of injury and excessive stress.",
            "Unfortunately, many children with special needs suffer from severe dental pain. If left untreated, tooth pain can negatively affect learning, communication, nutrition, and other activities needed for normal growth and development.",
            "Comprehensive dental rehabilitation under general anesthesia is an excellent procedure. It usually takes one to two hours at most to complete the full treatment and has no side effects.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/42fc0679-c18b-44c2-b9a7-9c054ae84079",
      title: isAr ? "الغاز الضاحك" : "Laughing Gas",
      imageAlt: isAr ? "الغاز الضاحك للأطفال" : "Laughing gas for children",
      paragraphs: isAr
        ? [
            "معروف علمياً بـ أكسيد النايتروس هو مزيج من غاز النايتروس مع الاوكسجين يساعد الأطفال الذين لديهم نسبة عالية من الخوف والتوتر أثناء العلاج، على الاسترخاء. فهو مهدئ للأعصاب يعطي احساساً لطيفاً بالراحة والسعادة، فينسى الطفل ما حدث خلال العلاج وكأنه يحلق من السعادة.",
            "آمن تماماً وتأثيره على الطفل سريع الزوال، حيث يستطيع الذهاب للمنزل او المدرسة مباشرة بعد الانتهاء من العلاج.",
          ]
        : [
            "Known scientifically as nitrous oxide, it is a mixture of nitrous gas and oxygen that helps children who feel high levels of fear and anxiety during treatment to relax. It calms the nerves and gives a pleasant feeling of comfort and happiness.",
            "It is completely safe and its effect wears off quickly, so the child can go home or back to school immediately after the treatment is completed.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/0028a05c-bbc9-4a99-99f9-f6fb33370262",
      title: isAr ? "درهم وقاية خير من قنطار علاج" : "Prevention Is Better Than Cure",
      imageAlt: isAr ? "وقاية أسنان الأطفال" : "Children dental prevention",
      paragraphs: isAr
        ? [
            "يتكون البلاك في الغالب من البكتيريا، التي تتغذى على السكر من الطعام والشراب. تنتج الأحماض التي تهاجم الأسنان مسببة تسوس وآلام الأسنان والتهابات وأمراض اللثة.",
            "بالنسبة للأطفال الذين لديهم الكثير من التسوس، قد يوصي طبيب أسنان الأطفال بالفلورايد الإضافي. يمكن لطبيب أسنان الأطفال أيضًا إغلاق التسوس قبل حدوثه، عن طريق تطبيق مانعات تسرب على سطح الأسنان. المواد المانعة للتسرب هي مواد بلاستيكية صافية مطلية على سطح السن. تعمل كحاجز للطعام والبكتيريا، وبالتالي حماية المناطق المعرضة للتسوس. يوصى بزيارة طبيب أسنان الأطفال كل ستة أشهر من عيد ميلاد الطفل الأول. عادات الأكل الصحية تؤدي لأسنان صحية. تحتاج الأسنان والعظام والأنسجة الرخوة للفم، مثل باقي الجسم، إلى نظام غذائي متوازن.",
            "انصح طفلك بعدم تناول الحلوى الصلبة وما إلى ذلك لأنها تبقى في الفم لفترة طويلة وغير مستقرة. علاوة على ذلك، يتم تدريب طبيب أسنان الأطفال في أسنان تاور على التعامل مع طفلك بطريقة مميزة وتحفيزية لجعله يحب الطبيب ويقوم بزيارته بشكل دوري.",
          ]
        : [
            "Plaque is mostly made of bacteria that feed on sugar from food and drinks. These bacteria produce acids that attack the teeth, causing cavities, tooth pain, infections, and gum disease.",
            "For children with frequent cavities, a pediatric dentist may recommend extra fluoride. A pediatric dentist can also help prevent cavities before they happen by applying sealants to the tooth surface. Sealants act as a barrier against food and bacteria, protecting areas that are more likely to decay. A pediatric dental visit is recommended every six months from the child’s first birthday.",
            "Encourage your child to avoid hard candy and similar sweets because they stay in the mouth for a long time. At Asnan Tower, pediatric dentists are trained to deal with children in a special and motivating way that helps them love visiting the dentist regularly.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/a20ebcc7-c908-4b53-ab7e-f07efc497d30",
      title: isAr ? "الحشوات الوقائية" : "Preventive Fillings",
      imageAlt: isAr ? "الحشوات الوقائية للأطفال" : "Preventive dental fillings for children",
      paragraphs: isAr
        ? [
            "توضع على تجاويف الطواحن الدائمة عند اكتمال ظهورها بالفم وتقلل نسبة التسوس, انها الأفضل من حيث الوقاية ولا تتطلب برد الاسنان.",
          ]
        : [
            "They are placed on the grooves of permanent molars once they fully appear in the mouth and help reduce the risk of decay. They are one of the best preventive options and do not require tooth drilling.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/9b7ce0e4-8af0-4df1-a804-0ca746870bcf",
      title: isAr ? "الحشوات التجميلية العلاجية" : "Therapeutic Cosmetic Fillings",
      imageAlt: isAr ? "الحشوات التجميلية العلاجية" : "Therapeutic cosmetic fillings",
      paragraphs: isAr
        ? [
            "توضع هذه الحشوات على الاسنان الدائمة لعلاج التسوس وسد التجويف الناتج عن التسوس والمحافظة على السن الطبيعي.",
          ]
        : [
            "These fillings are placed on permanent teeth to treat decay, close the cavity caused by decay, and preserve the natural tooth.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/f349586d-d02a-4827-9251-f0386f4cdeab",
      title: isAr ? "علاج العصب والتلبيس" : "Pulp Treatment and Crowns",
      imageAlt: isAr ? "علاج العصب والتلبيس للأطفال" : "Pulp treatment and crowns for children",
      paragraphs: isAr
        ? [
            "عدم علاج التهاب عصب السن اللبني ممكن ان يؤثر سلباً على لون، شكل وبنية السن الدائم. الضرس اللبني له بنيته الخاصة وعصبة الخاص به ويفصله عن الضرس الدائم منطقة عظمية. المنطقة العظمية و جذور الضرس اللبني يبدآن بالتحلل مع بزوغ الضرس الدائم ويبدأ الضرس بالسقوط.",
          ]
        : [
            "Not treating inflammation in the nerve of a baby tooth can negatively affect the color, shape, and structure of the permanent tooth. A baby molar has its own structure and nerve, and a bony area separates it from the permanent tooth. This bony area and the roots of the baby molar begin to dissolve as the permanent tooth erupts, and the baby tooth starts to fall out.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/b483a8c2-5de4-438b-a43d-dcb582d4252e",
      title: isAr ? "التاج للأسنان اللبنية الخلفية" : "Crowns for Back Baby Teeth",
      imageAlt: isAr ? "التاج للأسنان اللبنية الخلفية" : "Crowns for back baby teeth",
      paragraphs: isAr
        ? [
            "يوضع التاج على السن اللبني بعد علاج العصب خاصةً إذا كان التسوس كبير.",
            "وظيفة الاسنان اللبنية الخلفية هي ان تحافظ على المسافة لبزوغ الاسنان الدائمة وتحافظ على العظم وتسهل عملية المضغ عند طفلك. لذلك يعتبر التاج عاملاً أساسيا لممارسة طفلك للعادات اليومية كالأكل والنطق.",
          ]
        : [
            "A crown is placed on a baby tooth after nerve treatment, especially when the decay is large.",
            "Back baby teeth help maintain the space needed for permanent teeth to erupt, preserve the bone, and make chewing easier for your child. For this reason, crowns play an important role in daily functions such as eating and speaking.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/a98cdd80-7900-4eb9-9497-370e7f6ffbee",
      title: isAr ? "خلع الاسنان اللبنية" : "Baby Tooth Extraction",
      imageAlt: isAr ? "خلع الأسنان اللبنية" : "Baby tooth extraction",
      paragraphs: isAr
        ? [
            "تشكّل صحة الفم والأسنان إحدى اهم الركائز الأساسية التي يركّز عليها الأهل، ويحاولون تعليم طفلهم كيفية الاعتناء بها. فمثلاً، يعلّمونه طريقة تنظيف أسنانه بالفرشاة، كما ويحرصون على تقديم له وجبات خفيفة صحية للأسنان، ويشجعونه على شرب الماء. ولكن على الرغم من كل ما يبذلونه من جهود، فإن طفلهم معرّض إلى أن يعاني من تسوس الأسنان اللبنية. ولكن، هل من الصحي خلع الاسنان اللبنية المتسوسة؟",
            "خلع الاسنان اللبنية المتسوسة",
            "من الناحية المثالية، لن يحتاج طفلكم أبداً إلى خلع الأسنان اللبنية. ومع ذلك، يعدّ هذا الإجراء ضرورياً في بعض الأحيان لتحسين صحة طفلكم بشكل عام. قد يتعين على طبيب الأسنان إجراء عملية الخلع لعدة أسباب، بما في ذلك تسوس الأسنان الشديد وكجزء من علاج تقويم الأسنان. أمّا بالنسبة للحالات الأخرى:",
            "تسوس الأسنان الشامل بحيث لا يمكن علاجه بحشو مركب. التهاب شديد يصيب الأوعية الدموية، والأعصاب، والأنسجة الأخرى الموجودة في مركز السن، ولا يمكن إصلاحه عن طريق أي علاجٍ آخر.إنها أسنان إضافية غير ضرورية تمنع الاسنان الاخرى من النمو بشكل صحيح. الأنسجة من حوله مصابة، مما تسبب في أمراض اللثة. تعرّض السنّ لكسور بحيث لا يمكن ترميمه بمادة الترابط. وبغض النظر عن سبب وجوب خلع السن، فإن الطبيب يلجأ إلى الخلع عادةً فقط للحالات التي لا يوجد فيها خيار علاج آخر من شأنه أن يعالج العدوى أو يحل المشكلة. طرق علاج الأسنان اللبنية المتسوسة.",
          ]
        : [
            "Oral and dental health is one of the key areas parents focus on when teaching their child how to care for their teeth. They teach brushing, offer tooth-friendly snacks, and encourage drinking water. Despite these efforts, children may still experience decay in baby teeth.",
            "Extraction of decayed baby teeth",
            "Ideally, your child will never need to have baby teeth extracted. However, this procedure is sometimes necessary to improve your child’s overall health. A dentist may need to extract a tooth for several reasons, including severe tooth decay or as part of orthodontic treatment.",
            "Extraction may be needed when decay is too extensive to be treated with a composite filling, when there is severe infection in the blood vessels, nerves, or other tissues in the center of the tooth, when extra teeth prevent other teeth from growing properly, when surrounding tissues are infected and cause gum disease, or when a tooth is fractured and cannot be restored.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/cf4c021b-47d7-4f53-8e39-5cfe4db74891",
      title: isAr ? "التقويم المبكر" : "Early Orthodontics",
      imageAlt: isAr ? "التقويم المبكر للأطفال" : "Early orthodontics for children",
      paragraphs: isAr
        ? [
            "يستخدم هذا النوع من التقويم للأطفال الذين يعانون من بروز بالفك العلوي او السفلي او ضيق بالفك مما يسبب تزاحم الاسنان او البروز وبالتالي يبدأ التدخل الطبي لمساعدة الفك على النمو بطريقة صحيحة ويقلل من نسبة التدخل الجراحي في المستقبل في حال تم اللجوء الى الطبيب المختص في الوقت المناسب. ولأفضل النتائج يفضل مراجعة الطفل عند بلوغه عمر 8 سنوات.",
            "وينقسم الى مرحلتين:",
            "المرحلة الاولى",
            "يعمل فيها الجهاز على تعديل مواقع العضلات بالتالي تعديل مشاكل الفك وضمان تناسقه بالمستقبل.",
            "المرحلة الثانية",
            "يعمل فيها الجهاز الثاني على تعديل مواقع الاسنان.",
          ]
        : [
            "This type of orthodontic treatment is used for children who have protrusion in the upper or lower jaw or a narrow jaw that causes crowding or protrusion. Early intervention helps the jaw grow correctly and may reduce the need for surgery in the future when the specialist is consulted at the right time. For best results, the child should be examined around the age of eight.",
            "It is divided into two stages:",
            "First stage",
            "The appliance adjusts muscle positions, helping correct jaw problems and support proper alignment in the future.",
            "Second stage",
            "The second appliance works on adjusting tooth positions.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/5bf861b2-0cef-472a-85fa-42eace1ed80e",
      title: isAr ? "الأجهزة المتحركة لتقويم الأسنان" : "Removable Orthodontic Appliances",
      imageAlt: isAr ? "الأجهزة المتحركة لتقويم الأسنان" : "Removable orthodontic appliances",
      paragraphs: isAr
        ? [
            "تستعمل في حالات :",
            "سوء اطباق الفكين",
            "صعوبة المضغ أو العض",
            "مص الابهام عند الرضيع والدفع اللساني.",
            "فقد احد الاسنان المبكر ما ينتج عن تزاحم الاسنان فوق بعضها او ظهور مسافات سنية واسعة.",
            "ضيق بسيط بالفك.",
            "العضة المعكوسة لسن واحد او لعدد من الاسنان.",
          ]
        : [
            "Used in cases such as:",
            "Jaw bite problems.",
            "Difficulty chewing or biting.",
            "Thumb sucking and tongue thrusting.",
            "Early loss of a tooth, which can lead to crowding or wide spaces between teeth.",
            "Mild jaw narrowing.",
            "Crossbite affecting one tooth or several teeth.",
          ],
    },
    {
      image: "https://www.figma.com/api/mcp/asset/0fb0a7b3-5a7c-4984-ae19-91205ff81f29",
      title: isAr ? "حافظ المسافة" : "Space Maintainer",
      imageAlt: isAr ? "حافظ المسافة للأطفال" : "Space maintainer for children",
      paragraphs: isAr
        ? [
            "في حال الخلع المبكر للاسنان اللبنية الخلفية لطفلك, حافظ المسافة يقوم بثبيت باقي الاسنان والمحافظة على المسافات الموجودة للأسنان التي ستظهر لاحقاً, إنه يحمي من تزاحم الاسنان بسبب الفراغ وبالتالي يقلل من حاجة الطفل بالمستقبل لتقويم الاسنان .",
            "حافظ المسافة مع الأسنان التجميلية:",
            "إذا فقد طفلك احد اسنانه الامامية (من سن واحد إلى أربعة أسنان)فإن هذا النوع من حافظ المسافة يعطي شكل جميل للأسنان مما يمنح الطفل ثقة أكبر بالنفس.",
            "يستطيع تناول كافة الأطعمة بشكل طبيعي جدا من دون اية مشاكل وتساعد طفلك على المضغ بشكل صحي وجيد .",
          ]
        : [
            "If your child loses a back baby tooth early, a space maintainer holds the remaining teeth in place and preserves the space for teeth that will appear later. It helps protect against crowding caused by empty spaces and may reduce the need for orthodontic treatment in the future.",
            "Space maintainer with cosmetic teeth:",
            "If your child loses one or more front teeth, this type of space maintainer gives the teeth a better appearance and helps improve the child’s confidence.",
            "It allows your child to eat all foods normally without problems and supports healthy chewing.",
          ],
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
                {locale === 'ar' ? "أسنان" : "Asnan"}
                <img className="kids-img img-fluid ms-3" src="/images/kids.png" alt="Kids section" style={{ width: '100px' }} />
              </h1>
            </div>
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" target="_blank" rel="noreferrer" className="call-btn phone-btn">
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone icon" height="50" />
                </div>
                <div className="call-btn-txt">
                  <p className="call-desc">Call</p>
                  <span className="phone-link">965-189<span>6666</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src="/images/Backgrounds/Asnan_Kids_Cover_Image2x.jpg" alt="background image" />
          <img src="/images/Backgrounds/mobile/Asnan_Cover_Mobile_Kids_Cropped@3x.jpg" alt="background image" />
        </div>
      </div>

      {/* Welcome Kids */}
      <section className={styles.welcome} dir={isAr ? "rtl" : "ltr"}>
        <div className={styles.welcomeInner}>
          <div className={styles.welcomeImage}>
            <img src="/images/Kids/kids-charcters-02.png" alt={isAr ? "شخصيات أسنان كيدز" : "Asnan Kids characters"} />
          </div>

          <div className={styles.welcomeContent}>
            <h2 className={styles.welcomeTitle}>
              {isAr ? (
                <>
                  <span>مرحبا بكم</span>
                  <span>في <strong>اسنان كيدز</strong></span>
                </>
              ) : (
                <>
                  <span>Welcome To</span>
                  <span><strong>Asnan Kids</strong></span>
                </>
              )}
            </h2>

            <div className={styles.welcomeText}>
              {(isAr
                ? [
                    "تقدم عيادة أسنان تاور في الكويت رعاية أسنان عالية الجودة وشاملة للرضع والأطفال بما في ذلك ذوي الاحتياجات الخاصة برعاية استشاري أطباء أسنان الأطفال المعتمدون لدينا.",
                    "تم تصميم أسنان كيدز بطريقة محببة لطفلك تجعله يقضي الوقت داخل العيادة في بيئة مريحة حيث نقدم له كل الرعاية الصحية للفم وذلك للوقاية الأولية من لحظة الولادة و حتى سن المراهقة.",
                    "الجو الآمن والمريح يجعل زيارة طفلك ممتعة وتعليمية من البداية وحتى النهاية.",
                  ]
                : [
                    "Asnan Tower Clinic in Kuwait provides high-quality, comprehensive dental care for infants and children, including children with special needs, under the care of our certified pediatric dental consultants.",
                    "Asnan Kids is designed in a child-friendly way, helping your child spend time in a comfortable clinic environment while receiving complete oral healthcare from early prevention through adolescence.",
                    "The safe and comfortable atmosphere makes your child’s visit enjoyable and educational from beginning to end.",
                  ]
              ).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/*KIDS CATEGORIES*/}
      <KidsCharactersTabsSection
  locale={locale}
  title={isAr ? "شخصياتنا" : "Our Characters"}
  subtitle={isAr ? "تصفح الشخصيات المختلفة في قسم الأطفال." : "Browse the different characters in the kids section."}
/>

      {/* Treatments */}
      <section className={styles.treatmentsHeader} dir={isAr ? "rtl" : "ltr"}>
        <div className={styles.treatmentsText}>
          <h2>{isAr ? "العلاجات" : "Treatments"}</h2>
          <p>
            {isAr
              ? "دع خبراء طب الأسنان لدينا يستعيدون ابتسامتك بأحدث التقنيات للأسنان المفقودة أو المتضررة وأمراض اللثة وأي مشاكل تسبب لك الانزعاج أو القلق."
              : "Let our dental experts restore your child’s smile with modern techniques for missing or damaged teeth, gum concerns, and any problems causing discomfort or anxiety."}
          </p>
        </div>

        <div className={styles.treatmentsIcon}>
          <img src="/images/Prevention-icon-3.svg" alt={isAr ? "أيقونة الوقاية" : "Prevention icon"} />
        </div>
      </section>

      {kidsTreatmentFeatures.map((feature, index) => {
        const shouldBeWave = index % 2 === 0;

        return shouldBeWave ? (
          <KidsWaveFeatureSection
            key={feature.title}
            locale={locale}
            image={feature.image}
            icon="/images/why-asnan/icon-talent-experience.svg"
            title={feature.title}
            paragraphs={feature.paragraphs}
            imageAlt={feature.imageAlt}
            iconAlt={isAr ? "أيقونة علاج الأسنان" : "Dental treatment icon"}
            variant="image-left"
          />
        ) : (
          <KidsFeatureSection
            key={feature.title}
            locale={locale}
            image={feature.image}
            icon="/images/why-asnan/icon-university.svg"
            title={feature.title}
            points={feature.paragraphs}
            imageAlt={feature.imageAlt}
            iconAlt={isAr ? "أيقونة علاج الأسنان" : "Dental treatment icon"}
            variant="image-right"
          />
        );
      })}
              <AppointmentSection locale={locale} />
    </>
  );
}