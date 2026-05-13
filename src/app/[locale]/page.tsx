"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useParams } from "next/navigation";
import { getDictionary } from "@/dictionaries";

export default function Home() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

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
              opener: function(openerElement: any) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
            }
          });
          $('.popup-player').magnificPopup({ type:'iframe', midClick: true });
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
        $('.read-more').off('click').on('click', function(this: any, event: any) {
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
                    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">', '<img src="/images/arrow-next-yellow.svg" alt="Next">'],
                    dots: false,
                    margin: 0,
                    responsiveClass: true,
                    responsive: { 0: { items: 1 } }
                });
            }
        }
        
        // Ensure Bootstrap Carousel for Our Team is initialized
        if ($.fn.carousel) {
            $('#ourTeam').carousel({
                interval: 5000,
                pause: "hover"
            });
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
      <style dangerouslySetInnerHTML={{__html: `
        .gallery-row .gallery-column .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            padding: 2px;
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
          <img src="/images/Backgrounds/Asnan_Cover_Big2x.jpg" alt="background image" />
          <img src="/images/bg-home-mob.png" alt="background image" />
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
                <img src="/images/asnan_3d_new.webp" alt="Asnan Tower 3D photo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-wrapper">
        <div className="change-lives">{t.we_change_lives}</div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" data-toggle="tab" data-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="true">
              {t.celebrities}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-toggle="tab" data-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
              {t.testimonials}
            </button>
          </li>
        </ul>
        
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab2" role="tabpanel">
            <div className="gallery-row">
              <div className="gallery-column">
                <a href="/images/mu-1.png" className="gallery-item image-popup">
                  <img src="/images/mu-1.png" alt={`${t.celebrity} 1`} />
                  <div className="gallery-title">{t.celebrity} 1</div>
                </a>
                <a href="/images/mu-2.png" className="gallery-item image-popup">
                  <img src="/images/mu-2.png" alt={`${t.celebrity} 2`} />
                  <div className="gallery-title">{t.celebrity} 2</div>
                </a>
                <a href="#" className="gallery-item no-after">
                  <img src="/images/orthodontist%201.png" alt="" />
                  <div className="change-block">
                    <div className="change-smile">{t.we_dont}</div>
                    <div className="change-life">{t.we_change_lives}</div>
                  </div>
                </a>
              </div>
              
              <div className="gallery-column">
                <a href="/images/mu-3.png" className="gallery-item image-popup">
                  <img src="/images/mu-3.png" alt={`${t.celebrity} 3`} />
                  <div className="gallery-title">{t.celebrity} 3</div>
                </a>
                <a href="/images/mu-4.png" className="gallery-item image-popup">
                  <img src="/images/mu-4.png" alt={`${t.celebrity} 4`} />
                  <div className="gallery-title">{t.celebrity} 4</div>
                </a>
                
                <div className="gallery-row">
                  <div className="gallery-column">
                    <a href="/images/mu-5.png" className="gallery-item image-popup">
                        <img src="/images/mu-5.png" alt={`${t.celebrity} 5`} />
                        <div className="gallery-title">{t.celebrity} 5</div>
                    </a>
                  </div>
                  <div className="gallery-column">
                    <a href="/images/mu-6.png" className="gallery-item image-popup">
                        <img src="/images/mu-6.png" alt={`${t.celebrity} 6`} />
                        <div className="gallery-title">{t.celebrity} 6</div>
                    </a>
                  </div>
                </div>
                
                <div className="gallery-row">
                  <div className="gallery-column">
                    <a href="/images/mu-7.png" className="gallery-item image-popup">
                        <img src="/images/mu-7.png" alt={`${t.celebrity} 7`} />
                        <div className="gallery-title">{t.celebrity} 7</div>
                    </a>
                  </div>
                  <div className="gallery-column">
                    <div className="gallery-item">
                        <img src="/images/Group%2035316.png" alt="" />
                        <div className="gallery-title"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tab-pane fade" id="tab3" role="tabpanel">
             <div className="gallery-row">
                 <div className="gallery-column">
                    <div className="gallery-item">
                        <img src="/images/Mask Group 141.png" alt="testimonial item" />
                        <a href="#" className="play-video popup-player video-link-1" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img src="/images/play.svg" alt="" /> {t.play}
                        </a>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/Mask Group 141-2.png" alt="testimonial item" />
                        <a href="#" className="play-video popup-player video-link-2" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img src="/images/play.svg" alt="" /> {t.play}
                        </a>
                    </div>
                    <div className="gallery-item no-after">
                        <img src="/images/orthodontist%201.png" alt="" />
                        <div className="change-block">
                            <div className="change-smile">{t.we_dont}</div>
                            <div className="change-life">{t.we_change_lives}</div>
                        </div>
                    </div>
                 </div>
                 
                 <div className="gallery-column">
                    <div className="gallery-item">
                        <img src="/images/Mask Group 141-3.png" alt="testimonial item" />
                        <a href="#" className="play-video popup-player video-link-3" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img src="/images/play.svg" alt="" /> {t.play}
                        </a>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/Mask Group 138.png" alt="testimonial item" />
                        <a href="#" className="play-video popup-player video-link-4" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img src="/images/play.svg" alt="" /> {t.play}
                        </a>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-column">
                            <div className="gallery-item">
                                <img src="/images/Mask Group 138-2.png" alt="testimonial item" />
                                <a href="#" className="play-video popup-player video-link-5" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <img src="/images/play.svg" alt="" /> {t.play}
                                </a>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="gallery-item">
                                <img src="/images/Mask Group 138-3.png" alt="testimonial item" />
                                <a href="#" className="play-video popup-player video-link-6" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <img src="/images/play.svg" alt="" /> {t.play}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-column">
                            <div className="gallery-item">
                                <img src="/images/Mask Group 139.png" alt="testimonial item" />
                                <a href="#" className="play-video popup-player video-link-7" data-mfp-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <img src="/images/play.svg" alt="" /> {t.play}
                                </a>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="gallery-item">
                                <img src="/images/Group%2035316.png" alt="" />
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
                      <img className="image-before" src="/images/teeth-img-before.png" alt="Before" />
                      <img className="image-after" src="/images/teeth-img-after.png" alt="After" />
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
                            <img src="/images/Dr.-Hmoud.png" alt="" />
                        </div>
                      </div>
                      <div className="doctor-info">
                        <div className="doctor-name">Dr. Hmoud</div>
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
                      <img className="image-before" src="/images/teeth-img-before-2.png" alt="Before" />
                      <img className="image-after" src="/images/teeth-img-after-2.png" alt="After" />
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
                            <img src="/images/Dr.-Amnah-(1).png" alt="" />
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
                  <img className="image-before" src="/images/teeth-img-before.png" alt="Before" />
                  <img className="image-after" src="/images/teeth-img-after.png" alt="After" />
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
                  <img className="image-before" src="/images/teeth-img-before-2.png" alt="Before" />
                  <img className="image-after" src="/images/teeth-img-after-2.png" alt="After" />
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
                  <img src="/images/Path%20774.svg" alt="" className="more-smiles-shape" />
                  <img src="/images/next-arrow.svg" alt="" className="more-smiles-arrow" />
              </a>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
                <a href={`/${locale}/services/world-of-beauty`} className="more-smiles-block-responsive">
                    <div className="more-smiles-text-responsive">{t.view_more}</div>
                    <img src="/images/Path%20774.svg" alt="" className="more-smiles-shape-responsive" />
                    <img src="/images/next-arrow.svg" alt="" className="more-smiles-arrow-responsive" />
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="team-wrapper">
        <div className="container-fluid">
          <div className="team-title">
            <img src="/images/Group%2035340.png" alt="" />
            <div className="we-selective">{t.we_are_selective}</div>
          </div>
          <div id="ourTeam" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
                <div className="carousel-item active">
                   <div className="row">
                      <div className="col-6 col-lg-4">
                          <a href={`/${locale}/our-team`}>
                              <div className="doctor-item">
                                  <div className="doctor-img">
                                      <img src="/images/Dr.-Hmoud.png" alt="Doctor" />
                                  </div>
                                  <div className="doctor-info">
                                      <div>
                                          <div className="doctor-name">Dr. Hmoud</div>
                                          <div className="doctor-title">{t.prosthodontist}</div>
                                          <div className="doctor-university">{t.kuwait_university}</div>
                                      </div>
                                      <div className="arrow-icon">
                                          <img src="/images/arrow-next1.svg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="col-6 col-lg-4">
                          <a href={`/${locale}/our-team`}>
                              <div className="doctor-item">
                                  <div className="doctor-img">
                                      <img src="/images/Dr.-Amnah-(1).png" alt="Doctor" />
                                  </div>
                                  <div className="doctor-info">
                                      <div>
                                          <div className="doctor-name">Dr. Amnah</div>
                                          <div className="doctor-title">{t.orthodontist}</div>
                                          <div className="doctor-university">{t.kuwait_university}</div>
                                      </div>
                                      <div className="arrow-icon">
                                          <img src="/images/arrow-next1.svg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="col-6 col-lg-4">
                          <a href={`/${locale}/our-team`}>
                              <div className="doctor-item">
                                  <div className="doctor-img">
                                      <img src="/images/Dr.%20Essa%20Al%20Essa.png" alt="Doctor" />
                                  </div>
                                  <div className="doctor-info">
                                      <div>
                                          <div className="doctor-name">Dr. Essa Al Essa</div>
                                          <div className="doctor-title">{t.prosthodontist}</div>
                                          <div className="doctor-university">{t.kuwait_university}</div>
                                      </div>
                                      <div className="arrow-icon">
                                          <img src="/images/arrow-next1.svg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                   </div>
                </div>
                
                <div className="carousel-item">
                   <div className="row">
                      <div className="col-6 col-lg-4">
                          <a href={`/${locale}/our-team`}>
                              <div className="doctor-item">
                                  <div className="doctor-img">
                                      <img src="/images/Dr.-Hmoud.png" alt="Doctor" />
                                  </div>
                                  <div className="doctor-info">
                                      <div>
                                          <div className="doctor-name">Dr. Hmoud</div>
                                          <div className="doctor-title">{t.prosthodontist}</div>
                                          <div className="doctor-university">{t.kuwait_university}</div>
                                      </div>
                                      <div className="arrow-icon">
                                          <img src="/images/arrow-next1.svg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                   </div>
                </div>
             </div>
             <a className="carousel-control-prev" href="#ourTeam" role="button" data-slide="prev">
                <img src="/images/prev-arrow.svg" width="20" alt="Previous" />
            </a>
            <a className="carousel-control-next" href="#ourTeam" role="button" data-slide="next">
                <img src="/images/next-arrow.svg" width="20" alt="Next" />
            </a>
          </div>
          
          <ul className="departments-list">
             <li>
                 <div className="department-item">
                     <div className="department-icon">
                         <img src="/images/Prosthodontist,%20Implant%20&%20Cosmetic%20Dentistry.svg" alt="Specialty" />
                     </div>
                     <div className="department-title">{t.prosthodontist}</div>
                 </div>
             </li>
             <li>
                 <div className="department-item">
                     <div className="department-icon">
                         <img src="/images/Dental-icon.svg" alt="Specialty" />
                     </div>
                     <div className="department-title">{t.orthodontist}</div>
                 </div>
             </li>
             <li>
                 <div className="department-item">
                     <div className="department-icon">
                         <img src="/images/Dental-emergencies-icon.svg" alt="Specialty" />
                     </div>
                     <div className="department-title">{t.endodontist}</div>
                 </div>
             </li>
             <li>
                 <div className="department-item">
                     <div className="department-icon">
                         <img src="/images/Prevention-icon.svg" alt="Specialty" />
                     </div>
                     <div className="department-title">{t.periodontist}</div>
                 </div>
             </li>
             <li>
                 <div className="department-item">
                     <div className="department-icon">
                         <img src="/images/Dental-Problems-icon.svg" alt="Specialty" />
                     </div>
                     <div className="department-title">{t.oral_surgeon}</div>
                 </div>
             </li>
          </ul>
          
          <div className="view-all-doctors">
            <Link href={`/${locale}/our-team`} className="btn btn-secondary">{t.view_all_doctors}</Link>
          </div>
        </div>
      </div>

      {/* Our Mission */}
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
    </>
  );
}
