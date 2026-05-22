"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import FigmaOurTeam from "@/components/home/FigmaOurTeam";
import FigmaTestimonials from "@/components/home/FigmaTestimonials";
import AppointmentSection from "@/components/home/AppointmentSection";

export default function Home() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);
  const isAr = locale === "ar";
  const showOldMissionFooter = false;
  const galleryCopy = {
    title: isAr ? "راح نغير حياتك" : "We Change Lives",
    celebrities: isAr ? "مشاهير أسنان" : "Celebrities",
    testimonials: isAr ? "آراء المراجعين" : "Testimonials",
    ctaSmall: isAr ? "حلمنا مو بس نغير اسنانك.." : "We don’t just change smiles ..",
    ctaMain: isAr ? "راح نغير حياتك" : "We Change Lives",
    names: {
      yagoob: isAr ? "يعقوب بوشهري" : "Yagoob Boushehri",
      huda: isAr ? "هدى حسين" : "Huda Hussain",
      ghadeer: isAr ? "غدير سلطان" : "Ghadeer Sultan",
      zainab: isAr ? "زينب خفيف" : "Zainab Khaff",
      salman: isAr ? "سلمان النجادي" : "Salman Alnajadi",
      maya: isAr ? "ميار مودل" : "Maya Model",
      halima: isAr ? "حليمة بولند" : "Halima Boland",
    },
  };

  useEffect(() => {
    // Run jQuery dependent logic after mount
    const initScripts = () => {
      if (typeof window !== "undefined" && (window as any).$) {
        const $ = (window as any).$;

        // Magnific Popup
        if ($.fn.magnificPopup) {
          $('.image-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: { enabled: true },
            zoom: {
              enabled: true,
              duration: 300,
              easing: 'ease-in-out',
              opener: function (openerElement: any) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
            }
          });
          $('.popup-player').magnificPopup({ type: 'iframe', midClick: true });
        }

        // Before & After Sliders Native Logic
        const containers = document.querySelectorAll('.before-after-wrapper');
        containers.forEach(container => {
          const slider = container.querySelector('.slider') as HTMLInputElement;
          if (slider) {
            slider.addEventListener('input', (e) => {
              const target = e.target as HTMLInputElement;
              (container as HTMLElement).style.setProperty('--position', `${target.value}%`);
            });
          }
        });

        // Read more toggle
        $('.read-more').off('click').on('click', function (this: any, event: any) {
          event.preventDefault();
          $(this).prev('.more-text').toggle();
          if ($(this).prev('.more-text').is(':visible')) {
            $('.limited').hide();
            $(this).hide();
          }
        });

        // Initialize Owl Carousel for World of Beauty
        if ($.fn.owlCarousel) {
          const $worldBeautySlider = $('.owl-carousel.world-beauty-slider');
          if ($worldBeautySlider.length && !$worldBeautySlider.hasClass('owl-loaded')) {
            $worldBeautySlider.owlCarousel({
              mouseDrag: false,
              touchDrag: false,
              loop: false,
              nav: true,
              navText: [
                `<img src="${process.env.NEXT_PUBLIC_CDN_URL}/home/arrow-prev-yellow.svg" alt="Prev">`,
                `<img src="${process.env.NEXT_PUBLIC_CDN_URL}/home/arrow-next-yellow.svg" alt="Next">`
              ],
              dots: false,
              margin: 0,
              responsiveClass: true,
              responsive: { 0: { items: 1 } }
            });
          }
        }

      }
    };

    // Retry finding $ and plugins a few times in case scripts are loading via next/script lazyOnload
    const tryInit = () => {
      if (typeof window !== "undefined" && (window as any).$ && (window as any).$.fn.owlCarousel) {
        initScripts();
      } else {
        setTimeout(tryInit, 200);
      }
    };

    tryInit();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .gallery-row .gallery-column .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            padding: 2px;
        }
        .home-figma-gallery {
            position: relative;
            padding-top: 2vw !important;
            overflow: visible;
            z-index: 1;
            background: transparent;
        }
        .home-figma-gallery:before {
            display: block;
            top: -11vw;
            background: url("/images/Mask Group 140.png") center no-repeat;
            background-size: contain;
            width: 100%;
            height: 34vw;
            z-index: 0;
        }
        .home-figma-gallery .change-lives {
            color: #043f84;
            font-size: clamp(26px, 2.2vw, 42px);
            font-weight: 800;
            line-height: 1;
            letter-spacing: 0 !important;
            margin: 0;
            padding-top: 0.9vw;
            z-index: 3;
        }
        .home-figma-gallery .nav-tabs {
            margin: 1.5vw auto 1.25vw;
        }
        .home-figma-gallery .nav-tabs .nav-link {
            color: rgba(255, 255, 255, 0.96);
            font-size: clamp(14px, 0.98vw, 19px);
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0 !important;
            padding: 0 0 0.48vw;
            margin: 0 1.55vw;
        }
        .home-figma-gallery .nav-tabs .nav-link.active,
        .home-figma-gallery .nav-tabs.show .nav-link {
            color: #243746;
        }
        .home-figma-gallery .nav-tabs .nav-link:after {
            bottom: 0;
            height: 0.22vw;
            min-height: 2px;
            border-radius: 999px;
            background: var(--color-secondary);
        }
        .home-figma-gallery .nav-tabs .nav-link.active:after,
        .home-figma-gallery .nav-tabs.show .nav-link:after {
            width: 112%;
        }
        .home-figma-gallery .figma-celeb-gallery {
            position: relative;
            display: grid;
            grid-template-columns: 45.55% 54.45%;
            width: 100%;
            direction: ltr;
            z-index: 3;
        }
        .home-figma-gallery-ltr .figma-celeb-gallery {
            grid-template-columns: 54.45% 45.55%;
        }
        .home-figma-gallery .tab-content {
            position: relative;
            z-index: 3;
        }
        .home-figma-gallery .figma-celeb-left,
        .home-figma-gallery .figma-celeb-right {
            display: flex;
            flex-direction: column;
        }
        .home-figma-gallery-ltr .figma-celeb-left {
            order: 2;
        }
        .home-figma-gallery-ltr .figma-celeb-right {
            order: 1;
        }
        .home-figma-gallery .figma-split-row {
            display: grid;
            grid-template-columns: 36.8% 63.2%;
            width: 100%;
        }
        .home-figma-gallery .figma-gallery-tile {
            position: relative;
            display: block;
            width: 100%;
            overflow: hidden;
            border: 1px solid #fff;
            background: #0c1824;
            z-index: 1;
        }
        .home-figma-gallery .figma-gallery-tile:before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.62) 100%);
            z-index: 1;
        }
        .home-figma-gallery .figma-gallery-tile img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            padding: 0 !important;
        }
        .home-figma-gallery .figma-gallery-title {
            position: absolute;
            right: clamp(22px, 3.2vw, 62px);
            bottom: clamp(18px, 2.2vw, 42px);
            display: inline-block;
            color: #fff;
            font-size: clamp(13px, 1.05vw, 20px);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0 !important;
            text-align: right;
            direction: rtl;
            z-index: 2;
        }
        .home-figma-gallery .figma-gallery-title:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -0.5vw;
            width: clamp(22px, 2.4vw, 40px);
            height: 0.18vw;
            min-height: 2px;
            border-radius: 999px;
            background: var(--color-secondary);
        }
        .home-figma-gallery-ltr .figma-gallery-title {
            left: clamp(22px, 3.2vw, 62px);
            right: auto;
            direction: ltr;
            text-align: left;
        }
        .home-figma-gallery-ltr .figma-gallery-title:after {
            left: 0;
            right: auto;
        }
        .home-figma-gallery .figma-tile-yagoob,
        .home-figma-gallery .figma-tile-huda {
            height: 25.72vw;
        }
        .home-figma-gallery .figma-left-portraits {
            height: 31.03vw;
        }
        .home-figma-gallery .figma-left-bottom {
            height: 16.05vw;
        }
        .home-figma-gallery .figma-tile-maya {
            height: 36.36vw;
        }
        .home-figma-gallery .figma-tile-halima {
            height: 31.17vw;
        }
        .home-figma-gallery .figma-tile-maya img,
        .home-figma-gallery .figma-tile-ghadeer img,
        .home-figma-gallery .figma-tile-zainab img {
            object-position: center top;
        }
        .home-figma-gallery .figma-gallery-cta {
            position: relative;
            height: 41.6vw;
            overflow: hidden;
            border: 1px solid #fff;
            background: #fff;
        }
        .home-figma-gallery .figma-gallery-cta-bg {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            padding: 0 !important;
            z-index: 0;
        }
        .home-figma-gallery-ltr .figma-gallery-cta-bg {
            transform: scaleX(-1);
        }
        .home-figma-gallery .figma-gallery-cta-content {
            position: relative;
            z-index: 2;
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2vw 3vw 8vw;
            color: #fff;
            text-align: center;
            direction: rtl;
            transform: translateY(-2%);
        }
        .home-figma-gallery-ltr .figma-gallery-cta-content {
            direction: ltr;
        }
        .home-figma-gallery .figma-cta-small {
            display: block;
            font-size: clamp(22px, 2.1vw, 40px);
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0 !important;
            margin-bottom: 1.25vw;
        }
        .home-figma-gallery .figma-cta-large {
            display: block;
            font-size: clamp(40px, 5vw, 88px);
            font-weight: 800;
            line-height: 1.05;
            letter-spacing: 0 !important;
        }
        @media screen and (max-width: 991px) {
            .home-figma-gallery {
                padding-top: 65px;
            }
            .home-figma-gallery:before {
                top: 0;
                height: 220px;
                background-size: cover;
                background-position: top;
            }
            .home-figma-gallery .change-lives {
                padding-top: 48px;
            }
            .home-figma-gallery .nav-tabs {
                margin: 18px auto 36px;
            }
            .home-figma-gallery .nav-tabs .nav-link {
                padding-bottom: 8px;
                margin: 0 14px;
            }
            .home-figma-gallery .nav-tabs .nav-link:after {
                height: 3px;
            }
            .home-figma-gallery .figma-celeb-gallery {
                grid-template-columns: 1fr;
            }
            .home-figma-gallery .figma-tile-yagoob,
            .home-figma-gallery .figma-tile-huda,
            .home-figma-gallery .figma-tile-maya,
            .home-figma-gallery .figma-tile-halima {
                height: auto;
                aspect-ratio: 16 / 9;
            }
            .home-figma-gallery .figma-left-portraits {
                height: 260px;
            }
            .home-figma-gallery .figma-left-bottom {
                height: 190px;
            }
            .home-figma-gallery .figma-gallery-cta {
                height: 360px;
            }
            .home-figma-gallery .figma-gallery-title {
                right: 24px;
                bottom: 24px;
            }
            .home-figma-gallery .figma-gallery-title:after {
                bottom: -8px;
                height: 2px;
            }
        }
        @media screen and (max-width: 575px) {
            .home-figma-gallery {
                padding-top: 50px;
            }
            .home-figma-gallery:before {
                height: 233px;
                background-position: top center;
            }
            .home-figma-gallery .change-lives {
                font-size: 30px;
                padding-top: 38px;
            }
            .home-figma-gallery .nav-tabs {
                margin: 18px auto 26px;
            }
            .home-figma-gallery .nav-tabs .nav-link {
                font-size: 17px;
                padding-bottom: 10px;
                margin: 0 11px;
            }
            .home-figma-gallery .figma-celeb-gallery {
                display: grid;
                grid-template-columns: 45.5% 54.5%;
                grid-template-rows: 220px 220px 235px 245px 170px 360px;
                grid-template-areas:
                    "yagoob maya"
                    "huda maya"
                    "ghadeer halima"
                    "zainab salman"
                    "logo logo"
                    "cta cta";
                align-items: stretch;
                width: 100%;
            }
            .home-figma-gallery .figma-celeb-left,
            .home-figma-gallery .figma-celeb-right,
            .home-figma-gallery .figma-left-portraits,
            .home-figma-gallery .figma-left-bottom {
                display: contents;
            }
            .home-figma-gallery .figma-tile-yagoob { grid-area: yagoob; }
            .home-figma-gallery .figma-tile-huda { grid-area: huda; }
            .home-figma-gallery .figma-tile-ghadeer { grid-area: ghadeer; }
            .home-figma-gallery .figma-tile-zainab { grid-area: zainab; }
            .home-figma-gallery .figma-tile-salman { grid-area: salman; }
            .home-figma-gallery .figma-tile-maya { grid-area: maya; }
            .home-figma-gallery .figma-tile-halima { grid-area: halima; }
            .home-figma-gallery .figma-logo-tile { grid-area: logo; }
            .home-figma-gallery .figma-gallery-cta { grid-area: cta; }
            .home-figma-gallery .figma-gallery-tile,
            .home-figma-gallery .figma-gallery-cta,
            .home-figma-gallery .figma-left-portraits .figma-gallery-tile,
            .home-figma-gallery .figma-left-bottom .figma-gallery-tile {
                height: 100% !important;
                aspect-ratio: auto;
            }
            .home-figma-gallery .figma-gallery-title {
                right: 22px;
                bottom: 28px;
                font-size: 14px;
            }
            .home-figma-gallery-ltr .figma-gallery-title {
                left: 22px;
                right: auto;
            }
            .home-figma-gallery .figma-gallery-title:after {
                bottom: -7px;
            }
            .home-figma-gallery .figma-tile-yagoob img,
            .home-figma-gallery .figma-tile-huda img,
            .home-figma-gallery .figma-tile-salman img {
                object-position: center;
            }
            .home-figma-gallery .figma-tile-ghadeer img,
            .home-figma-gallery .figma-tile-zainab img,
            .home-figma-gallery .figma-tile-maya img,
            .home-figma-gallery .figma-tile-halima img {
                object-position: center top;
            }
            .home-figma-gallery .figma-gallery-cta-content {
                padding: 34px 24px 78px;
                transform: none;
            }
            .home-figma-gallery .figma-cta-small {
                font-size: 22px;
                margin-bottom: 14px;
            }
            .home-figma-gallery .figma-cta-large {
                font-size: 46px;
                line-height: 1.15;
            }
        }
      `}} />

      {/* Hero */}
      <div className="hero-wrapper hero-home">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-12 mb-2">
              <h1 className="hero-title">
                {t.we_change_lives_quote_p1}<br />
                {t.we_change_lives_quote_p2}
              </h1>
            </div>
            <div className="col-12 call-btn-container">
              <a href="tel:+9651896666" target="_blank" rel="noreferrer" className="call-btn phone-btn" id="hero-phone-call-btn">
                <div className="call-btn-icon">
                  <img src="/images/Icon-phone.svg" alt="phone icon" id="phone-icon" height="50" />
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
          <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Asnan_Cover_Big2x.jpg`} alt="background image" />
          <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/bg-home-mob.png`} alt="background image" />
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome-wrapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h3 className="welcome-title">{t.welcome_title}</h3>
              <p className="welcome-text limited">
                {t.welcome_para_short}
              </p>
              <p className="welcome-text more-text full" style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: t.welcome_para.replace(/\n/g, '<br />') }}></p>
              <a href="#" className="btn btn-primary mt-3 read-more">{t.read_more}</a>
            </div>
            <div className="col-12 col-lg-6">
              <div className="welcome-img">
                <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/asnan_3d_new.webp`} alt="Asnan Tower 3D photo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className={`gallery-wrapper home-figma-gallery ${isAr ? "home-figma-gallery-rtl" : "home-figma-gallery-ltr"}`}>
        <div className="change-lives">{galleryCopy.title}</div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" data-toggle="tab" data-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="true">
              {galleryCopy.celebrities}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-toggle="tab" data-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
              {galleryCopy.testimonials}
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab2" role="tabpanel">
            <div className="figma-celeb-gallery">
              <div className="figma-celeb-left">
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/yagoob-boushehri.png`} className="gallery-item figma-gallery-tile figma-tile-yagoob image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/yagoob-boushehri.png`} alt={galleryCopy.names.yagoob} />
                  <div className="figma-gallery-title">{galleryCopy.names.yagoob}</div>
                </a>
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/huda-hussain.png`} className="gallery-item figma-gallery-tile figma-tile-huda image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/huda-hussain.png`} alt={galleryCopy.names.huda} />
                  <div className="figma-gallery-title">{galleryCopy.names.huda}</div>
                </a>
                <div className="figma-split-row figma-left-portraits">
                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/ghadeer-sultan.png`} className="gallery-item figma-gallery-tile figma-tile-ghadeer image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/ghadeer-sultan.png`} alt={galleryCopy.names.ghadeer} />
                    <div className="figma-gallery-title">{galleryCopy.names.ghadeer}</div>
                  </a>
                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/zainab-khafif.png`} className="gallery-item figma-gallery-tile figma-tile-zainab image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/zainab-khafif.png`} alt={galleryCopy.names.zainab} />
                    <div className="figma-gallery-title">{galleryCopy.names.zainab}</div>
                  </a>
                </div>
                <div className="figma-split-row figma-left-bottom">
                  <div className="gallery-item figma-gallery-tile figma-logo-tile">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Group%2035316.png`} alt="" />
                  </div>
                  <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/salman-alnajadi.png`} className="gallery-item figma-gallery-tile figma-tile-salman image-popup">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/salman-alnajadi.png`} alt={galleryCopy.names.salman} />
                    <div className="figma-gallery-title">{galleryCopy.names.salman}</div>
                  </a>
                </div>
              </div>

              <div className="figma-celeb-right">
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/maya-model.png`} className="gallery-item figma-gallery-tile figma-tile-maya image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/maya-model.png`} alt={galleryCopy.names.maya} />
                  <div className="figma-gallery-title">{galleryCopy.names.maya}</div>
                </a>
                <a href={`${process.env.NEXT_PUBLIC_CDN_URL}/home/halima-boland.png`} className="gallery-item figma-gallery-tile figma-tile-halima image-popup">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/halima-boland.png`} alt={galleryCopy.names.halima} />
                  <div className="figma-gallery-title">{galleryCopy.names.halima}</div>
                </a>
                <div className="figma-gallery-cta">
                  <img className="figma-gallery-cta-bg" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/orthodontist%201.png`} alt="" aria-hidden="true" />
                  <div className="figma-gallery-cta-content">
                    <span className="figma-cta-small">{galleryCopy.ctaSmall}</span>
                    <span className="figma-cta-large">{galleryCopy.ctaMain}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="tab3" role="tabpanel">
            <div className="gallery-row">
              <div className="gallery-column">
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 141.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-1" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 141-2.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-2" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item no-after">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/orthodontist%201.png`} alt="" />
                  <div className="change-block">
                    <div className="change-smile">{t.we_dont}</div>
                    <div className="change-life">{t.we_change_lives}</div>
                  </div>
                </div>
              </div>

              <div className="gallery-column">
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 141-3.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-3" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 138.png`} alt="testimonial item" />
                  <a href="#" className="play-video popup-player video-link-4" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                  </a>
                </div>
                <div className="gallery-row">
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 138-2.png`} alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-5" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 138-3.png`} alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-6" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gallery-row">
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Mask Group 139.png`} alt="testimonial item" />
                      <a href="#" className="play-video popup-player video-link-7" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/play.svg`} alt="" /> {t.play}
                      </a>
                    </div>
                  </div>
                  <div className="gallery-column">
                    <div className="gallery-item">
                      <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Group%2035316.png`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* World of beauty */}
      <div className="world-beauty-wrapper">
        <div className="world-beauty-title">{t.world_of_beauty}</div>
        <div className="container-fluid">
          <div className="owl-carousel owl-theme world-beauty-slider">
            <div className="item">
              <div className="row align-items-center">
                <div className="col-12 col-lg-7">
                  <div className="before-after-wrapper">
                    <div className="before-after-img">
                      <img className="image-before" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before.png`} alt="Before" />
                      <img className="image-after" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after.png`} alt="After" />
                    </div>
                    <div className="before-text">{t.before}</div>
                    <div className="after-text">{t.after}</div>
                    <input type="range" min="0" max="100" defaultValue="50" aria-label="Percentage of before photo shown" className="slider" />
                    <div className="slider-line" aria-hidden="true"></div>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="caption-wrapper">
                    <div className="caption-text">{t.beautiful_smile}</div>
                    <div className="made-by-wrapper">
                      <div className="made-by-title">
                        {t.this_smile} <div>{t.made_by}</div>
                      </div>
                      <div className="doctor-small">
                        <div className="doctor-img">
                          <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/dr-img-teeth-show.png`} alt="" />
                        </div>
                      </div>
                      <div className="doctor-info">
                        <div className="doctor-name">{t.dr_border_img}</div>
                        <div className="doctor-title">{t.prosthodontist}</div>
                        <div className="doctor-title">{t.kuwait_university}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="row align-items-center">
                <div className="col-12 col-lg-7">
                  <div className="before-after-wrapper">
                    <div className="before-after-img">
                      <img className="image-before" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-2.png`} alt="Before" />
                      <img className="image-after" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-2.png`} alt="After" />
                    </div>
                    <div className="before-text">{t.before}</div>
                    <div className="after-text">{t.after}</div>
                    <input type="range" min="0" max="100" defaultValue="50" aria-label="Percentage of before photo shown" className="slider" />
                    <div className="slider-line" aria-hidden="true"></div>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="caption-wrapper">
                    <div className="caption-text">{t.beautiful_smile}</div>
                    <div className="made-by-wrapper">
                      <div className="made-by-title">
                        {t.this_smile} <div>{t.made_by_female}</div>
                      </div>
                      <div className="doctor-small">
                        <div className="doctor-img">
                          <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Dr.-Amnah-(1).png`} alt="" />
                        </div>
                      </div>
                      <div className="doctor-info">
                        <div className="doctor-name">Dr. Amnah</div>
                        <div className="doctor-title">{t.orthodontist}</div>
                        <div className="doctor-title">{t.kuwait_university}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="before-after-wrapper">
                <div className="before-after-img">
                  <img className="image-before" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-3-1.png`} alt="Before" />
                  <img className="image-after" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-3-1.png`} alt="After" />
                </div>
                <div className="before-text">{t.before}</div>
                <div className="after-text">{t.after}</div>
                <input type="range" min="0" max="100" defaultValue="50" aria-label="Percentage of before photo shown" className="slider" />
                <div className="slider-line" aria-hidden="true"></div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="before-after-wrapper">
                <div className="before-after-img">
                  <img className="image-before" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-before-2.png`} alt="Before" />
                  <img className="image-after" src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/teeth-img-after-2.png`} alt="After" />
                </div>
                <div className="before-text">{t.before}</div>
                <div className="after-text">{t.after}</div>
                <input type="range" min="0" max="100" defaultValue="50" aria-label="Percentage of before photo shown" className="slider" />
                <div className="slider-line" aria-hidden="true"></div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <a href={`/${locale}/services/world-of-beauty`} className="more-smiles-block">
                <div className="more-smiles-text">{t.view_more}</div>
                <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Path%20774.svg`} alt="" className="more-smiles-shape" />
                <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/next-arrow.svg`} alt="" className="more-smiles-arrow" />
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <a href={`/${locale}/services/world-of-beauty`} className="more-smiles-block-responsive">
                <div className="more-smiles-text-responsive">{t.view_more}</div>
                <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/Path%20774.svg`} alt="" className="more-smiles-shape-responsive" />
                <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/home/next-arrow.svg`} alt="" className="more-smiles-arrow-responsive" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <FigmaOurTeam locale={locale} />

      {/* Testimonials */}
      <FigmaTestimonials locale={locale} />

      {/* Appointment */}
      <AppointmentSection locale={locale} />

      {/* Old mission/footer-style block disabled temporarily for Figma footer replacement */}
      {showOldMissionFooter && (
        <div className="mission-wrapper">
          <div className="container-fluid">
            <div className="mission-block">
              <div className="mission-title">{t.our_mission}</div>
              <div className="section-title">
                {t.mission_1} <span className="text-secondary">{t.first}</span> {t.mission_2} <span className="text-primary">{t.dentistry}</span>.
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <p className="mission-text">
                        {t.asnan_doctors}
                      </p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="mission-text2">
                        {t.the_team}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
