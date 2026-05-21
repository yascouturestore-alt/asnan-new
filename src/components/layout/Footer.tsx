import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/dictionaries';

export default function Footer({ locale = 'en' }: { locale?: string }) {
  const t = getDictionary(locale);

  return (
    <>
      {/* Footer */}
      <footer id="contactUs">
          <div className="container-fluid">
              <div className="row align-items-end">
                  <div className="col-12 col-lg-4 text-center">
                      <div className="footer-logo">
                          <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/logo-footer.png`} alt="Asnan" />
                      </div>
                      <div className="ministry">
                        {t.footer_address.split(', ')[0]}<br/>
                        {t.footer_address.split(', ').slice(1).join(', ')}<br/>
                        {t.footer_license}
                      </div>
                  </div>
                  <div className="col-12 col-lg-4">
                      <a href="tel:+9651896666" className="phone-link">
                          189<span>6666</span>
                      </a>
                      <div className="working-hours">
                          <span>{t.footer_working_hours_sat_wed}</span>
                          <span>{t.footer_working_hours_thu}</span>
                      </div>
                      <ul className="contact-list">
                          <li className="contact-item">
                              <a target="_blank" rel="noreferrer" href="https://wa.me/1896666" className="contact-link">
                                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Icon-whatsapp.svg`} alt="whatsapp icon" height="40" />
                                  {t.footer_whatsapp}
                              </a>
                          </li>
                          <li className="contact-item">
                              <a href="tel:+9651896666" className="contact-link">
                                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Icon-phone.svg`} alt="phone icon" height="40" width="100" />
                                  {t.footer_direct_call}
                              </a>
                          </li>
                          <li className="contact-item">
                              <a href="mailto:info@asnan.com" className="contact-link">
                                  <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Icon-Email.svg`} alt="email icon" height="40" />
                                  {t.footer_email_us}
                              </a>
                          </li>
                      </ul>
                      <div className="rewards-block">
                          <div className="rewards-title">{t.footer_our_awards}</div>
                          <div className="rewards-img">
                              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Asnan-Awards-1.svg`} alt="asnan awards" />
                              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Asnan-Awards-2.svg`} alt="asnan awards" />
                              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Asnan-Awards-3.svg`} alt="asnan awards" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row flex-lg-row-reverse align-items-end justify-content-end mt-4">
                  <div className="col-12 col-lg-4">
                      <div className="row">
                          <div className="col-12 col-lg-6">
                              <ul className="footer-links">
                                  <li>{t.header_departments}</li>
                                  <li><Link href={`/${locale}/services/departments`}>{t.footer_view_all}</Link></li>
                              </ul>
                          </div>
                          <div className="col-12 col-lg-6">
                              <ul className="footer-links">
                                  <li>{t.footer_quick_links}</li>
                                  <li><Link href={`/${locale}/careers`}>{t.header_careers}</Link></li>
                                  <li><Link href={`/${locale}/services/testimonials`}>{t.header_testimonials}</Link></li>
                                  <li><Link href={`/${locale}/csr`}>CSR</Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-lg-4">
                      <div className="download-block">
                          <a href="https://apps.apple.com/kw/app/asnan-tower/id1495283859" className="download-btn">
                              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Asnan-App-Store.svg`} alt="Asnan App store icon" />
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.asnan" className="download-btn">
                              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/Asnan-Google-Play.svg`} alt="Asnan Play store icon" />
                          </a>
                      </div>
                      <div className="footer-bottom">
                          <div className="footer-logo-gray">
                              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/logo-gray.png`} alt="Asnan" />
                          </div>
                          <div className="">
                              <div className="copyrights">
                                  © {new Date().getFullYear()} Asnan Tower. {t.footer_all_rights_reserved}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="tower-img">
              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/footer/asnan_tower_new.webp`} alt="Asnan Tower Photo" />
          </div>
      </footer>
    </>
  );
}
