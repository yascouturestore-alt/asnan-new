"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./KidsCharactersTabsSection.module.css";

export interface KidsCharacterTab {
  id: string;
  label: string;
  image?: string;
  description: string;
  imageAlt?: string;
}

interface Props {
  locale: string;
  title?: string;
  subtitle?: string;
}

const charactersAr: KidsCharacterTab[] = [
  {
    id: "mr-tooth",
    label: "السيد توث",
    image: "https://www.figma.com/api/mcp/asset/19bb336e-2eaf-43bc-aa9a-d9a44ecf4ede",
    imageAlt: "السيد توث",
    description:
      "سعدت برؤيتك هنا أنا السيد. توث أساعدك في مضغ طعامك حتى يحصل جسمك على العناصر الغذائية التي يحتاجها للبقاء بصحة جيدة. عندما تعتني بي ، أعدك بالبقاء أبيضًا وقويًا إلى الأبد.",
  },
  {
    id: "farosha",
    label: "فروشة",
    description:
      "أنا فروشة، صديقتك اليومية لتنظيف الأسنان. أساعدك على إزالة بقايا الطعام والحفاظ على ابتسامتك نظيفة وصحية كل يوم.",
  },
  {
    id: "mrs-tooth",
    label: "السيدة توث",
    image: "https://www.figma.com/api/mcp/asset/d2c45078-dc3f-4d09-b049-58fe4cce07d5",
    imageAlt: "السيدة توث",
    description:
      "أنا السيدة توث، أحب الابتسامات الصحية وأشجعك على الاهتمام بأسنانك بالفرشاة والخيط وزيارة طبيب الأسنان بانتظام.",
  },
  {
    id: "super-paste",
    label: "سوبر معجون",
    image: "https://www.figma.com/api/mcp/asset/b9790288-9969-4550-83b1-3bed07757486",
    imageAlt: "سوبر معجون",
    description:
      "أنا سوبر معجون، أعمل مع الفرشاة لحماية أسنانك من التسوس ومساعدتك على الحصول على نفس منعش وابتسامة مشرقة.",
  },
  {
    id: "flossy",
    label: "فلوسي",
    description:
      "أنا فلوسي، أصل إلى الأماكن الصغيرة بين الأسنان حيث لا تصل الفرشاة، وأساعدك على حماية اللثة والأسنان من بقايا الطعام.",
  },
];

const charactersEn: KidsCharacterTab[] = [
  {
    id: "mr-tooth",
    label: "Mr. Tooth",
    image: "https://www.figma.com/api/mcp/asset/19bb336e-2eaf-43bc-aa9a-d9a44ecf4ede",
    imageAlt: "Mr. Tooth",
    description:
      "Happy to see you here. I am Mr. Tooth. I help you chew your food so your body gets the nutrients it needs to stay healthy. When you take care of me, I promise to stay white and strong forever.",
  },
  {
    id: "farosha",
    label: "Farosha",
    description:
      "I am Farosha, your daily brushing friend. I help remove food particles and keep your smile clean and healthy every day.",
  },
  {
    id: "mrs-tooth",
    label: "Mrs. Tooth",
    image: "https://www.figma.com/api/mcp/asset/d2c45078-dc3f-4d09-b049-58fe4cce07d5",
    imageAlt: "Mrs. Tooth",
    description:
      "I am Mrs. Tooth. I love healthy smiles and remind you to brush, floss, and visit the dentist regularly.",
  },
  {
    id: "super-paste",
    label: "Super Paste",
    image: "https://www.figma.com/api/mcp/asset/b9790288-9969-4550-83b1-3bed07757486",
    imageAlt: "Super Paste",
    description:
      "I am Super Paste. I work with your toothbrush to protect teeth from cavities and help you keep a fresh, bright smile.",
  },
  {
    id: "flossy",
    label: "Flossy",
    description:
      "I am Flossy. I reach the tiny spaces between teeth where the brush cannot reach and help protect your gums and teeth.",
  },
];

export default function KidsCharactersTabsSection({
  locale,
  title,
  subtitle,
}: Props) {
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const characters = useMemo(() => (isAr ? charactersAr : charactersEn), [isAr]);
  const [activeId, setActiveId] = useState(characters[0].id);

  const activeCharacter =
    characters.find((character) => character.id === activeId) || characters[0];

  return (
    <section
      className={styles.section}
      dir={dir}
      style={
        {
          "--kids-characters-bg": "url(https://www.figma.com/api/mcp/asset/b569a2f3-f349-4e2f-8107-324287d40445)",
        } as React.CSSProperties
      }
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            {title || (isAr ? "شخصياتنا" : "Our Characters")}
          </h2>
          <p className={styles.subtitle}>
            {subtitle ||
              (isAr
                ? "تصفح الشخصيات المختلفة في قسم الأطفال."
                : "Browse the different characters in the kids section.")}
          </p>
        </header>

        <div className={styles.tabsWrap}>
          <div className={styles.tabs} role="tablist" aria-label={title || (isAr ? "شخصياتنا" : "Our Characters")}>
            {characters.map((character) => {
              const isActive = character.id === activeId;
              return (
                <button
                  key={character.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`character-panel-${character.id}`}
                  id={`character-tab-${character.id}`}
                  className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
                  onClick={() => setActiveId(character.id)}
                >
                  <span className={styles.characterImageSlot}>
                    {character.image ? (
                      <Image
                        src={character.image}
                        alt={character.imageAlt || character.label}
                        width={286}
                        height={250}
                        className={`${styles.characterImage} ${styles[character.id.replaceAll("-", "")] || ""}`}
                        unoptimized
                      />
                    ) : (
                      <span className={styles.emptyCharacter} aria-hidden="true" />
                    )}
                  </span>

                  <span className={styles.tabLabelWrap}>
                    <span className={styles.tabLabel}>{character.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`character-panel-${activeCharacter.id}`}
            role="tabpanel"
            aria-labelledby={`character-tab-${activeCharacter.id}`}
            className={styles.panel}
          >
            <p>{activeCharacter.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
