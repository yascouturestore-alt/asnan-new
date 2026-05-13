import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/dictionaries';

export default function Footer({ locale = 'en' }: { locale?: string }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';

  return (
    <>
      {/* Request an Appointment */}
      <div className="request-appointment-wrapper" id="requestAppointment">
          <div className="container-fluid">
              <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                      <div className="row align-items-end">
                          <div className="col-1"></div>
                          <div className="col-12 col-lg-5">
                              <div className="location-title">{t.footer_our_location}</div>
                              <div className="location-address">
                                  {t.footer_address.split(', ')[0]}<br/>
                                  {t.footer_address.split(', ').slice(1).join(', ')}
                              </div>
                              <a href="https://goo.gl/maps/tAkP2nQGtYx67U7d9"
                                  className="btn btn-secondary">{t.footer_get_directions}</a>
                          </div>
                          <div className="col-12 col-lg-6">
                              <div className="request-appointment-title">
                                  {t.footer_request_appointment_title}
                              </div>
                              <form id="requestAppointmentForm" className="request-appointment-form">
                                  <div className="form-group">
                                      <input type="text" className="form-control" name="fullname" required placeholder={t.footer_full_name} />
                                  </div>
                                  <div className="form-group">
                                      <input type="tel" id="phone" className="form-control" name="phone" required placeholder={t.footer_phone_number} />
                                  </div>
                                  <div className="form-group">
                                      <input type="email" className="form-control" name="email" required placeholder={isAr ? "البريد الإلكتروني" : "Email Address"} />
                                  </div>
                                  <div className="form-group">
                                      <textarea className="form-control" name="message" rows={5} required placeholder={t.footer_reason_for_visit}></textarea>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center">
                                      <div className="accepting-terms">
                                          {t.footer_terms_agreement}
                                      </div>
                                      <button type="submit" className="btn btn-secondary">{t.footer_send_request}</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-img">
              <img src={isAr ? "/images/asnan_tower_map_icon_rtl_bg.webp" : "/images/asnan_tower_map_icon_bg.webp"} alt="background image" />
              <img src="/images/asnan_tower_mobile_bg.webp" alt="background image" />
          </div>
      </div>

      {/* Footer */}
      <footer id="contactUs">
          <div className="container-fluid">
              <div className="row align-items-end">
                  <div className="col-12 col-lg-4 text-center">
                      <div className="footer-logo">
                          <img src="/images/logo-footer.png" alt="Asnan" />
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
                                  <img src="/images/Icon-whatsapp.svg" alt="whatsapp icon" height="40" />
                                  {t.footer_whatsapp}
                              </a>
                          </li>
                          <li className="contact-item">
                              <a href="tel:+9651896666" className="contact-link">
                                  <img src="/images/Icon-phone.svg" alt="phone icon" height="40" width="100" />
                                  {t.footer_direct_call}
                              </a>
                          </li>
                          <li className="contact-item">
                              <a href="mailto:info@asnan.com" className="contact-link">
                                  <img src="/images/Icon-Email.svg" alt="email icon" height="40" />
                                  {t.footer_email_us}
                              </a>
                          </li>
                      </ul>
                      <div className="rewards-block">
                          <div className="rewards-title">{t.footer_our_awards}</div>
                          <div className="rewards-img">
                              <img src="/images/Asnan-Awards-1.svg" alt="asnan awards" />
                              <img src="/images/Asnan-Awards-2.svg" alt="asnan awards" />
                              <img src="/images/Asnan-Awards-3.svg" alt="asnan awards" />
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
                              <img src="/images/Asnan-App-Store.svg" alt="Asnan App store icon" />
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.asnan" className="download-btn">
                              <img src="/images/Asnan-Google-Play.svg" alt="Asnan Play store icon" />
                          </a>
                      </div>
                      <div className="footer-bottom">
                          <div className="footer-logo-gray">
                              <img src="/images/logo-gray.png" alt="Asnan" />
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
              <img src="/images/asnan_tower_new.webp" alt="Asnan Tower Photo" />
          </div>
      </footer>
    </>
  );
}
