// import "bootstrap/dist/js/bootstrap.js";
import PhosphorIconsLoader from "../helper/PhosphorIconsLoader";
import RouteScrollToTop from "../helper/RouteScrollToTop";
import { Jost } from "next/font/google";
import { Poppins } from "next/font/google";
import { Vidaloka } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Urbanist } from "next/font/google";
import { Caveat } from "next/font/google";
import { Montserrat_Alternates } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const vidaloka = Vidaloka({
  subsets: ["latin"],
  weight: ["400"], // Only one available
  variable: "--font-vidaloka",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export async function generateMetadata() {
  return {
    title: {
      default: "SassTech - SaaS Template",
      template: "%s | SassTech",
    },
    description: "SaaS, IT Solutions, and Software multipurpose template.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`
        ${jost.variable}
        ${poppins.variable}
        ${vidaloka.variable}
        ${dmSerif.variable}
        ${urbanist.variable}
        ${caveat.variable}
        ${montserratAlternates.variable}
      `}
    >
      <body suppressHydrationWarning={true}>
        <RouteScrollToTop />
        <PhosphorIconsLoader />

        {children}
      </body>
    </html>
  );
}
