import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import FigmaFooter from "@/components/layout/FigmaFooter";
// import Footer from "@/components/layout/Footer";
import Script from "next/script";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asnan Tower | Next.js Frontend",
  description: "Asnan Tower Official Website",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  console.log('Current locale:', locale, 'isAr:', isAr);

  return (
    <html key={locale} lang={locale} dir={isAr ? "rtl" : "ltr"} className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {isAr && (
            <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800&display=swap" rel="stylesheet" />
        )}
        <style dangerouslySetInnerHTML={{__html: `
          html[dir="rtl"] body {
            direction: rtl;
            text-align: right;
          }
        `}} />
        <meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/intlTelInput.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/splide.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.min.css" />
        
        {isAr ? (
            <link 
              rel="stylesheet" 
              href="https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" 
              integrity="sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe" 
              crossOrigin="anonymous" 
            />
        ) : (
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        )}
        
        <link rel="stylesheet" type="text/css" href="/css/fonts.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/custom.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/country-select-js/2.1.1/css/countrySelect.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/booking-page.css" />
        <link rel="stylesheet" type="text/css" href="/css/kids-specialties.css" />

        {isAr && (
          <>
            <link rel="stylesheet" type="text/css" href="/css/style-rtl.min.css" />
            <link rel="stylesheet" type="text/css" href="/css/custom-rtl.min.css" />
            <link rel="stylesheet" type="text/css" href="/css/booking-page-ar.css" />
          </>
        )}
        <style dangerouslySetInnerHTML={{__html: `
            .navbar { transition: none; }
            .navbar.activeMegaMenu:before, .navbar.activeMegaMenu:after { transition: none; }
            .navbar .dropdown.dropdown-mega .dropdown-menu .services-menu .service-item:before {
                content: ''; position: absolute; top: 0; left: 0; right: 0; margin: 0;
                width: 100%; height: 100%; background: linear-gradient(rgba(0, 0, 0, 0) 0%, #000 100%); opacity: 0.8;
            }
            @media screen and (max-width: 991px) {
                .side-wrapper .services-menu .service-item:before { background: linear-gradient(rgba(0, 0, 0, 0) 0%, #000 100%); opacity: 0.8; }
            }
            a:hover { text-decoration: none; }
        `}} />
      </head>
      <body dir={isAr ? "rtl" : "ltr"}>
        <Header />
        {children}
        {/* Old footer disabled temporarily for Figma footer replacement */}
        {/* <Footer locale={locale} /> */}
        <FigmaFooter locale={locale} />
        {/* Scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/intlTelInput.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/script.min.js" strategy="lazyOnload" />
        <Script src="/js/before-after.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
