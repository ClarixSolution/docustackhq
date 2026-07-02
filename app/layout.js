import { Instrument_Serif, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
 
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--serif",
});
 
const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--sans",
});
 
const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--mono",
});
 
export const metadata = {
  metadataBase: new URL("https://docustackhq.com"),
  title: {
    default: "DocuStackHQ — PDF Tools, Independently Tested & Ranked",
    template: "%s | DocuStackHQ",
  },
  description:
    "Independent, scored reviews and step-by-step guides for PDF editors, converters, and e-sign tools. Same documents, same tasks, every tool.",
  openGraph: {
    type: "website",
    siteName: "DocuStackHQ",
  },
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LJY4HMK8VG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LJY4HMK8VG');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}