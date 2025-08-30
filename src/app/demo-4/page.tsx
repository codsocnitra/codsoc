import React from "react";
import dynamic from "next/dynamic";
import AboutFour from "../../components/AboutFour";
import AboutThree from "../../components/AboutThree";
import BannerFour from "../../components/BannerFour";
import CounterUpOne from "../../components/CounterUpOne";
import CRMOne from "../../components/CRMOne";
import DrivenSectionOne from "../../components/DrivenSectionOne";
import FeaturesFour from "../../components/FeaturesFour";
import FooterFour from "../../components/FooterFour";
import HeaderFour from "../../components/HeaderFour";
import IntegrateAppsOne from "../../components/IntegrateAppsOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";

const BrandFour = dynamic(() => import("../../components/BrandFour"));
const TestimonialsFour = dynamic(
  () => import("../../components/TestimonialsFour")
);

import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home - 4 | SassTech - Saas Software and IT Solution",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "About | SassTech",
      description:
        "Learn more about our SaaS software, team, features, and IT solutions.",
      url: "https://nextjs.sasstech.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.sasstech.webnextpro.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "About SassTech",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <section className='home-crm heading-black'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* HeaderFour */}
        <HeaderFour />

        {/* BannerFour */}
        <BannerFour />

        {/* BrandFour */}
        <BrandFour />

        {/* AboutThree */}
        <AboutThree />

        {/* FeaturesFour */}
        <FeaturesFour />

        {/* AboutFour */}
        <AboutFour />

        {/* CRMOne */}
        <CRMOne />

        {/* TestimonialsFour */}
        <TestimonialsFour />

        {/* IntegrateAppsOne */}
        <IntegrateAppsOne />

        {/* CounterUpOne */}
        <CounterUpOne />

        {/* DrivenSectionOne */}
        <DrivenSectionOne />

        {/* FooterFour */}
        <FooterFour />
      </section>
    </AOSWrap>
  );
};

export default Page;
