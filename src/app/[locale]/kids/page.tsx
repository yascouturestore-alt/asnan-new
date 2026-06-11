"use client";
import { useParams } from 'next/navigation';
import KidsFeatureSection from "@/components/kids/KidsFeatureSection";
import KidsCharactersTabsSection from "@/components/kids/KidsCharactersTabsSection";
import KidsWaveFeatureSection from "@/components/kids/KidsWaveFeatureSection";
import styles from "./KidsPage.module.css";
import AppointmentSection from '@/components/home/AppointmentSection';

export default function KidsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isAr = locale === "ar";

  const kidsTreatmentFeatures = [
    {
      image: "/images/Kids/im1.png",
      title: isAr ? "التخدير العام" : "General Anesthesia",
      imageAlt: isAr ? "التخدير العام للأطفال" : "General anesthesia for children",
      paragraphs: isAr
        ? [
          "غالبًا ما يخضع الأطفال ذوو الاحتياجات الخاصة للتخدير العام لعلاج الأسنان كوسيلة لتجنب مخاطر الإصابة والإجهاد المفرط.",
        ]
        : [
          "Children with special needs often have general anesthesia for dental treatment as a way to avoid the risk of injury and excessive stress. Unfortunately, many people with special needs suffer from severe dental pain. If left untreated, toothache will negatively affect learning, communication, nutrition and other activities necessary for normal growth and development. Comprehensive dental rehabilitation under general anesthesia is an excellent procedure, it takes 1-2 hours maximum to complete the entire treatment and has no side effects.",
        ],
    },
    {
      image: "/images/Kids/im2.png",
      title: isAr ? "الغاز الضاحك" : "Laughing Gas",
      imageAlt: isAr ? "الغاز الضاحك للأطفال" : "Laughing gas for children",
      paragraphs: isAr
        ? [
          "معروف علمياً بـ أكسيد النايتروس هو مزيج من غاز النايتروس مع الاوكسجين يساعد الأطفال الذين لديهم نسبة عالية من الخوف والتوتر أثناء العلاج، على الاسترخاء. فهو مهدئ للأعصاب يعطي احساساً لطيفاً بالراحة والسعادة، فينسى الطفل ما حدث خلال العلاج وكأنه يحلق من السعادة.",
        ]
        : [
          "Scientifically known as nitrous oxide, it is a mixture of nitrous gas with oxygen that helps children who have a high rate of fear and stress during treatment, to relax. It calms the nerves and gives a pleasant feeling of comfort and happiness, so the child forgets what happened during the treatment as if he is flying from happiness. It is completely safe and its effect on the child is fleeting, as he can go home or school immediately after completing the treatment.",
        ],
    },
    {
      image: "/images/Kids/im3.png",
      title: isAr ? "درهم وقاية خير من قنطار علاج" : "The Importance of Preventative Treatments",
      imageAlt: isAr ? "وقاية أسنان الأطفال" : "Children dental prevention",
      paragraphs: isAr
        ?
        [
          "يتكون البلاك في الغالب من البكتيريا، التي تتغذى على السكر من الطعام والشراب. تنتج الأحماض التي تهاجم الأسنان مسببة تسوس وآلام الأسنان والتهابات وأمراض اللثة."
        ] : [
          "Plaque is mostly made up of bacteria, which feed on sugar from food and drink. They produce acids that attack the teeth causing cavities, tooth pain, infections, and gum disease. For children who have a lot of cavities, a pediatric dentist may recommend additional fluoride. A pediatric dentist can also seal the decay before it occurs, by applying sealants to the surface of the teeth. Sealants are clear plastic materials that are coated on the surface of the tooth. They act as a barrier for food and bacteria, thus protecting areas prone to cavities. It is recommended to visit a pediatric dentist every six months from the first birthday of the child. Healthy eating habits lead to healthy teeth. The teeth, bones and soft tissues of the mouth, like the rest of the body, need a balanced diet. Advise your child not to eat hard candy etc. because they remain in the mouth for a long time and are unstable. Moreover, the pediatric dentist at Asnan Tower is trained to deal with your child in a distinctive and motivating way to make him love the doctor and visit him periodically.",
        ]
    },
    {
      image: "/images/Kids/blank.png",
      title: isAr ? "الحشوات الوقائية" : "Protective Fillings",
      imageAlt: isAr ? "الحشوات الوقائية للأطفال" : "Preventive dental fillings for children",
      paragraphs: isAr
        ?
        [
          "توضع على تجاويف الطواحن الدائمة عند اكتمال ظهورها بالفم وتقلل نسبة التسوس, انها الأفضل من حيث الوقاية ولا تتطلب برد الاسنان."
        ] : [
          "It is placed on the cavities of permanent molars when they have completed their appearance in the mouth and reduce the rate of caries, it is the best in terms of prevention and does not require tooth preparation."
        ]
    },
    {
      image: "/images/Kids/im5.png",
      title: isAr ? "الحشوات التجميلية العلاجية" : "Therapeutic Cosmetic Fillings",
      imageAlt: isAr ? "الحشوات التجميلية العلاجية" : "Therapeutic cosmetic fillings",
      paragraphs: isAr
        ?
        [
          "توضع هذه الحشوات على الاسنان الدائمة لعلاج التسوس وسد التجويف الناتج عن التسوس والمحافظة على السن الطبيعي."
        ] : [
          "These fillings are placed on the permanent teeth to treat caries, block the cavity resulting from caries, and preserve the natural tooth."
        ]
    },
    {
      image: "/images/Kids/im6.png",
      title: isAr ? "علاج العصب والتلبيس" : "Root Canal and Crown Treatments",
      imageAlt: isAr ? "علاج العصب والتلبيس للأطفال" : "Pulp treatment and crowns for children",
      paragraphs: isAr
        ?
        [
          "عدم علاج التهاب عصب السن اللبني ممكن ان يؤثر سلباً على لون، شكل وبنية السن الدائم. الضرس اللبني له بنيته الخاصة وعصبة الخاص به ويفصله عن الضرس الدائم منطقة عظمية. المنطقة العظمية و جذور الضرس اللبني يبدآن بالتحلل مع بزوغ الضرس الدائم ويبدأ الضرس بالسقوط."
        ] : [
          "Untreated neuritis of the milky tooth can adversely affect the color, shape and structure of the permanent tooth. The deciduous molar has its own structure, its own nerve, and is separated from the permanent molar by a bony area. The bony area and the roots of the milk molar begin to decompose with the eruption of the permanent molar and the molar begins to fall out.",
        ]
    },
    {
      image: "/images/Kids/blank.png",
      title: isAr ? "التاج للأسنان اللبنية الخلفية" : "Premolar Crowns for Deciduous Teeth",
      imageAlt: isAr ? "التاج للأسنان اللبنية الخلفية" : "Crowns for back baby teeth",
      paragraphs: isAr
        ?
        [
          "يوضع التاج على السن اللبني بعد علاج العصب خاصةً إذا كان التسوس كبير."
        ] : [
          "The crown is placed on the tooth after nerve treatment, especially if the caries are large. The function of the premolar deciduous tooth is to maintain the distance until the growth of the perpetual premolars, to preserve the bone and facilitate the child’s chewing. The crown is therefore a key factor in your child's daily practices, such as eating and pronunciation."
        ]
    },
    {
      image: "/images/Kids/im8.png",
      title: isAr ? "خلع الاسنان اللبنية" : "Milk teeth extraction",
      imageAlt: isAr ? "خلع الأسنان اللبنية" : "Milk teeth extraction",
      paragraphs: isAr
        ? [
          "تشكّل صحة الفم والأسنان إحدى اهم الركائز الأساسية التي يركّز عليها الأهل، ويحاولون تعليم طفلهم كيفية الاعتناء بها. فمثلاً، يعلّمونه طريقة تنظيف أسنانه بالفرشاة، كما ويحرصون على تقديم له وجبات خفيفة صحية للأسنان، ويشجعونه على شرب الماء. ولكن على الرغم من كل ما يبذلونه من جهود، فإن طفلهم معرّض إلى أن يعاني من تسوس الأسنان اللبنية. ولكن، هل من الصحي خلع الاسنان اللبنية المتسوسة؟",
          "خلع الاسنان اللبنية المتسوسة",
          "من الناحية المثالية، لن يحتاج طفلكم أبداً إلى خلع الأسنان اللبنية. ومع ذلك، يعدّ هذا الإجراء ضرورياً في بعض الأحيان لتحسين صحة طفلكم بشكل عام. قد يتعين على طبيب الأسنان إجراء عملية الخلع لعدة أسباب، بما في ذلك تسوس الأسنان الشديد وكجزء من علاج تقويم الأسنان. أمّا بالنسبة للحالات الأخرى:",
          "تسوس الأسنان الشامل بحيث لا يمكن علاجه بحشو مركب. التهاب شديد يصيب الأوعية الدموية، والأعصاب، والأنسجة الأخرى الموجودة في مركز السن، ولا يمكن إصلاحه عن طريق أي علاجٍ آخر.إنها أسنان إضافية غير ضرورية تمنع الاسنان الاخرى من النمو بشكل صحيح. الأنسجة من حوله مصابة، مما تسبب في أمراض اللثة. تعرّض السنّ لكسور بحيث لا يمكن ترميمه بمادة الترابط. وبغض النظر عن سبب وجوب خلع السن، فإن الطبيب يلجأ إلى الخلع عادةً فقط للحالات التي لا يوجد فيها خيار علاج آخر من شأنه أن يعالج العدوى أو يحل المشكلة. طرق علاج الأسنان اللبنية المتسوسة.",
        ]
        : [
          "Oral and dental health is one of the main pillars that parents focus on, and they try to teach their child how to take care of it. For example, they teach him how to brush his teeth, make sure to provide him with healthy snacks for his teeth, and encourage him to drink water. But despite all their best efforts, their child is at risk of suffering from primary caries. However, is it healthy to remove decayed milk teeth? Decayed milk tooth extraction your child will never need to have their milk teeth extracted. However, this procedure is sometimes necessary to improve your child's overall health. A dentist may have to perform an extraction for a number of reasons, including severe tooth decay and as part of orthodontic treatment. As for the other cases:",
          "Extensive tooth decay that cannot be treated with a composite filling.",
          "Severe inflammation of the blood vessels, nerves, and other tissues in the center of the tooth that cannot be repaired by any other treatment.",
          "Unnecessary extra teeth that prevent other teeth from growing properly. The tissues around it are infected, causing gum disease.",
          "The tooth has been fractured so that it cannot be repaired with bonding material.",
          "Regardless of why the tooth must be extracted, the doctor usually only resorts to extraction for cases where there is no other treatment option that would cure the infection or solve the problem.",
          "Methods of treating decayed milk teeth",
        ],
    },
    {
      image: "/images/Kids/im9.png",
      title: isAr ? "التقويم المبكر" : "Early Braces",
      imageAlt: isAr ? "التقويم المبكر للأطفال" : "Early orthodontics for children",
      paragraphs: isAr
        ? [
          "يستخدم هذا النوع من التقويم للأطفال الذين يعانون من بروز بالفك العلوي او السفلي او ضيق بالفك مما يسبب تزاحم الاسنان او البروز وبالتالي يبدأ التدخل الطبي لمساعدة الفك على النمو بطريقة صحيحة ويقلل من نسبة التدخل الجراحي في المستقبل في حال تم اللجوء الى الطبيب المختص في الوقت المناسب. ولأفضل النتائج يفضل مراجعة الطفل عند بلوغه عمر 8 سنوات."
        ]
        : [
          "This type of orthodontic is used for children with upper or lower jaw protrusion, which causes teeth crowding or protrusion, thus medical intervention begins to help the jaw grow properly and reduces the rate of surgical intervention in the future if the orthodontist has called it at the right time. For the best results, it is preferable to see the child at the age of 8. It is divided into two phases: The first stage: the device works to modify the positions of the muscles thus modifying the problems of the jaw and ensure its consistency in the future. The second stage: The second device works to modify the teeth positions."
        ],
    },
    {
      image: "/images/Kids/im10.png",
      title: isAr ? "الأجهزة المتحركة لتقويم الأسنان" : "Retainers",
      imageAlt: isAr ? "الأجهزة المتحركة لتقويم الأسنان" : "Retainers",
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
          "Used in cases of:",
          "Poor jaw alignment",
          "Difficulty in chewing or biting Infant’s",
          "Thumb sucking or tongue pushing the teeth",
          "The early loss of a tooth resulting in crowding of teeth on or the appearance of large gaps between the teeth.",
          "Small jaw tightness",
          "The inverted bite is for one or more teeth.",
        ],
    },
    {
      image: "/images/Kids/im11.png",
      title: isAr ? "حافظ المسافة" : "Space Maintenance",
      imageAlt: isAr ? "حافظ المسافة للأطفال" : "Space maintainer for children",
      paragraphs: isAr
        ? [
          "في حال الخلع المبكر للاسنان اللبنية الخلفية لطفلك, حافظ المسافة يقوم بثبيت باقي الاسنان والمحافظة على المسافات الموجودة للأسنان التي ستظهر لاحقاً, إنه يحمي من تزاحم الاسنان بسبب الفراغ وبالتالي يقلل من حاجة الطفل بالمستقبل لتقويم الاسنان ."
        ]
        :
        [
          "In the case of early extraction of the posterior primary teeth of your child, the distance keeper fixes the rest of the teeth and maintains the existing distances for the teeth that will appear later. It protects against crowding of the teeth due to the vacuum and thus reduces the child’s need in the future for orthodontics. If your child loses one of his front teeth (from one to four teeth), this type of distance keeper gives a beautiful shape to the teeth, which gives the child greater self-confidence. He can eat all foods very naturally without any problems and help your child to chew healthy and well."
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
                <img className="kids-img img-fluid ms-3" src="/images/kids.png" alt="Kids section" />
              </h1>
            </div>
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" target="_blank" rel="noreferrer" className={`${styles['call-btn']} ${styles['phone-btn']}`}>
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone icon" height="50" />
                </div>
                <div className="call-btn-txt">
                  <p className={styles.callDesc}>Direct Call</p>
                  <span className={styles.phoneLink}>965-189<span>6666</span></span>
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
                  "Asnan Tower in Kuwait provides high-quality and comprehensive dental care for infants and children, including those with special needs.",
                  "Asnan Kids is designed in a loving way; your children will spend their time in the clinic in a comfortable environment where we provide preventative oral health care from birth to adolescence and educate them through their dental journey.",
                  "The safe and comfortable environment makes your child's visit enjoyable and educational from start to finish.",
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
        title={isAr ? "شخصياتنا" : "Characters"}
        subtitle={isAr ? "تصفح الشخصيات المختلفة في قسم الأطفال." : "Browse the different characters in the kids section."}
      />

      {/* Treatments */}
      <section className={styles.treatmentsHeader} dir={isAr ? "rtl" : "ltr"}>
        <div className={styles.treatmentsIcon}>
          <img src="/images/Prevention-icon-3.svg" alt={isAr ? "أيقونة الوقاية" : "Prevention icon"} />
        </div>
        <div className={styles.treatmentsText}>
          <h2>{isAr ? "العلاجات" : "Treatments"}</h2>
          <p>
            {isAr
              ? "دع خبراء طب الأسنان لدينا يستعيدون ابتسامتك بأحدث التقنيات للأسنان المفقودة أو المتضررة وأمراض اللثة وأي مشاكل تسبب لك الانزعاج أو القلق."
              : "Let our dental experts restore your smile with the latest techniques for missing or damaged teeth, gum disease, and any issues that are causing you discomfort or anxiety."}
          </p>
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