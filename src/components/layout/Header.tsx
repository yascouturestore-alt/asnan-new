"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();

  const locale = (params?.locale as string) || "en";
  const t = getDictionary(locale);

  const otherLocale = locale === "en" ? "ar" : "en";
  const langText = locale === "en" ? "عربي" : "English";
  const flagSrc =
    locale === "en"
      ? "flag-of-Kuwait.png"
      : "flag-of-United-Kingdom.png";

  const requestWords = t.header_request_appointment.split(" ");
  const requestFirst = requestWords[0] || "";
  const requestSecond = requestWords[1] || "";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);

    // legacy/bootstrap/jquery classes cleanup
    if (typeof document !== "undefined") {
      document.body.classList.remove("menu-open", "overflow-hidden", "modal-open");

      document.querySelector(".side-wrapper")?.classList.remove("active", "show", "open");
      document.querySelector(".navbar-collapse")?.classList.remove("show");
      document.querySelector(".toggle-menu")?.classList.remove("active");
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "scrolled" : ""
          } ${isMobileMenuOpen ? "menu-open" : ""}`}
      >
        <div className="container-fluid">
          <Link href={`/${locale}`} className="navbar-brand">
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/Asnan-Header-logo-big.svg`}
              alt="Asnan Logo"
            />
          </Link>

          <div className="switch-lang-mobile">
            <Link href={`/${otherLocale}`}>
              <img
                className="flag-mobile"
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/${flagSrc}`}
                alt="Language switch icon"
              />
            </Link>
          </div>

          {/* Mobile-only request appointment button.
              It is outside navbar-collapse so its position will not change
              when the mobile menu opens or closes. */}
          <a
            href="#requestAppointment"
            className="btn btn-request-appointment mobile-request-appointment"
          >
            <span className="req-header"> {requestFirst}</span>
            <span className="req-footer"> {requestSecond}</span>
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/next-arrow.svg`}
              alt=""
              className="arrow-icon"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/Asnan-Appointment-icon.svg`}
              className="appointment-icon"
              alt=""
            />
          </a>

          <button
            className={`toggle-menu ${isMobileMenuOpen ? "active" : ""}`}
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen((prev) => !prev);
            }}
          >
            {isMobileMenuOpen ? (
              <RxCross2 className="close-icon" />
            ) : (
              <RiMenu2Line className="menu-icon" />
            )}
          </button>

          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""
              }`}
            id="navbarSupportedContent"
          >
            <div className="top-content">
              <div className="d-flex align-items-center justify-content-end my-2">
                <div className="switch-lang">
                  <Link href={`/${otherLocale}`}>
                    {langText}{" "}
                    <img
                      className="flag"
                      src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/${flagSrc}`}
                      alt="Language switch icon"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="ul-quick-bt-wrap">
              <div className="d-flex align-items-center my-2">
                <a
                  href="https://wa.me/1896666"
                  target="_blank"
                  rel="noreferrer"
                  className="phone-link"
                  id="book-phone-whatsapp"
                >
                  189<span>6666</span>
                </a>

                <a href="#requestAppointment" className="btn btn-request-appointment">
                  <span className="req-header"> {requestFirst}</span>
                  <span className="req-footer"> {requestSecond}</span>
                  <img
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/next-arrow.svg`}
                    alt=""
                    className="arrow-icon"
                  />
                  <img
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/Asnan-Appointment-icon.svg`}
                    className="appointment-icon"
                    alt=""
                  />
                </a>
              </div>

              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" href={`/${locale}`}>
                    {t.header_home}
                  </Link>
                </li>

                <li className="nav-item dropdown dropdown-mega">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t.header_why_asnan}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="container-fluid">
                      <div className="service-header">
                        <div className="services-title">{t.header_why_asnan}</div>
                        <p className="services-text">
                          {t.header_discover_services}
                        </p>
                      </div>
                      <ul className="services-menu">
                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/Mask%20Group%2052.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">
                              {t.header_world_of_beauty}
                            </div>
                            <div className="service-text">
                              {t.header_smile_makeovers}
                            </div>
                          </div>
                          <Link
                            href={`/${locale}/services/world-of-beauty`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next2.svg" alt="" />
                          </Link>
                        </li>
                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/Mask%20Group%2051.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">
                              {t.header_testimonials}
                            </div>
                            <div className="service-text">
                              {t.header_hear_from_patients}
                            </div>
                          </div>
                          <Link
                            href={`/${locale}/services/testimonials`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next1.svg" alt="" />
                          </Link>
                        </li>
                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/Technology.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">Technology</div>
                          </div>
                          <Link
                            href={`/${locale}/services/technology`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next2.svg" alt="" />
                          </Link>
                        </li>
                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/im-new.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">Im New</div>
                          </div>
                          <Link
                            href={`/${locale}/services/im-new`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next1.svg" alt="" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href={`/${locale}/asnanopedia`}>
                    {t.header_asnanopedia}
                  </Link>
                </li>

                <li className="nav-item dropdown dropdown-mega">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t.header_services}
                  </a>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="container-fluid">
                      <div className="service-header">
                        <div className="services-title">{t.header_services}</div>
                        <p className="services-text">
                          {t.header_discover_services}
                        </p>
                      </div>

                      <ul className="services-menu">
                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/Mask%20Group%2052.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">
                              {t.header_world_of_beauty}
                            </div>
                            <div className="service-text">
                              {t.header_smile_makeovers}
                            </div>
                          </div>
                          <Link
                            href={`/${locale}/services/world-of-beauty`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next2.svg" alt="" />
                          </Link>
                        </li>

                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/Mask%20Group%2051.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">
                              {t.header_testimonials}
                            </div>
                            <div className="service-text">
                              {t.header_hear_from_patients}
                            </div>
                          </div>
                          <Link
                            href={`/${locale}/services/testimonials`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next1.svg" alt="" />
                          </Link>
                        </li>

                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/Technology.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">Technology</div>
                          </div>
                          <Link
                            href={`/${locale}/services/technology`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next2.svg" alt="" />
                          </Link>
                        </li>

                        <li className="service-item">
                          <div className="service-img">
                            <img src="/images/im-new.png" alt="" />
                          </div>
                          <div className="service-info">
                            <div className="service-title">Im New</div>
                          </div>
                          <Link
                            href={`/${locale}/services/im-new`}
                            className="service-arrow"
                          >
                            <img src="/images/arrow-next1.svg" alt="" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href={`/${locale}/our-team`}>
                    {t.header_our_team}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href={`/${locale}/kids`}>
                    <img src="/images/kids.png" alt="" />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href={`/${locale}/careers`}>
                    {t.header_careers}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href={`/${locale}/#book-appointment`}
                  >
                    {t.header_contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a
          href="#requestAppointment"
          className="btn btn-secondary desktop-request-appointment"
        >
          {requestFirst}
        </a>
      </nav>

      <aside className="side-wrapper d-lg-none">
        <div className="container-fluid">
          <ul className="side-menu">
            <li>
              <Link onClick={closeMobileMenu} href={`/${locale}`}>
                {t.header_home}
              </Link>
            </li>

            <li>
              <Link onClick={closeMobileMenu} href={`/${locale}/why-asnan`}>
                {t.header_why_asnan}
              </Link>
            </li>

            <li>
              <Link onClick={closeMobileMenu} href={`/${locale}/asnanopedia`}>
                {t.header_asnanopedia}
              </Link>
            </li>

            <li>
              <Link onClick={closeMobileMenu} href={`/${locale}/services/departments`}>
                {t.header_departments}
              </Link>
            </li>

            <li>
              <Link onClick={closeMobileMenu} href={`/${locale}/our-team`}>
                {t.header_our_team}
              </Link>
            </li>

            <li>
              <Link onClick={closeMobileMenu} href={`/${locale}/kids`}>
                <img src="/images/kids.png" alt="" />
              </Link>
            </li>
            
            <li>
              <Link onClick={closeMobileMenu} href={`/${locale}/careers`}>
                {t.header_careers}
              </Link>
            </li>

            <li className="switch-lang-menu">
              <Link onClick={closeMobileMenu} href={`/${otherLocale}`}>
                {langText}{" "}
                <img
                  className="flag"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/header/${flagSrc}`}
                  alt="Language switch button"
                />
              </Link>
            </li>
          </ul>

          <div className="position-relative d-inline-block">
            <div className="get-touch">{t.header_get_in_touch}</div>
            <a href="tel:+9651896666" className="phone-link">
              189<span>6666</span>
            </a>
          </div>

          <div className="side-bottom">
            <div className="row">
              <div className="col-6">
                <div className="available-on">
                  <div>Available on the</div>
                  <img src="/images/AppleStore-icon.png" alt="app store icon" />
                  <img
                    src="/images/googleplay-store-icon.png"
                    alt="play store icon"
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="location-block text-center">
                  <div>Our Location</div>
                  <img
                    src="/images/asnan-location-icon.png"
                    alt="Asnan Tower location icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}