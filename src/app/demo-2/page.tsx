import React from "react";
import dynamic from "next/dynamic";
import AboutTwo from "../../components/AboutTwo";
import BannerTwo from "../../components/BannerTwo";
import BrandMarketingOne from "../../components/BrandMarketingOne";
import DegreeViewOne from "../../components/DegreeViewOne";
import FaqTwo from "../../components/FaqTwo";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import PricingPlanOne from "../../components/PricingPlanOne";
import SearchDomainOne from "../../components/SearchDomainOne";
import SearchDomainTwo from "../../components/SearchDomainTwo";
import TopHeaderTwo from "../../components/TopHeaderTwo";
import WebsiteOwnerOne from "../../components/WebsiteOwnerOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";

import type { Metadata } from "next";

const HostingPlanOne = dynamic(() => import("../../components/HostingPlanOne"));
const ServicesOne = dynamic(() => import("../../components/ServicesOne"));

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home - 2 | SassTech - Saas Software and IT Solution",
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
      <section className='home-two'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* TopHeaderTwo */}
        <TopHeaderTwo />

        {/* HeaderTwo */}
        <HeaderTwo />

        {/* BannerTwo */}
        <BannerTwo />

        {/* SearchDomainOne */}
        <SearchDomainOne />

        {/* AboutTwo */}
        <AboutTwo />

        {/* HostingPlanOne */}
        <HostingPlanOne />

        {/* DegreeViewOne */}
        <DegreeViewOne />

        {/* SearchDomainTwo */}
        <SearchDomainTwo />

        {/* PricingPlanOne */}
        <PricingPlanOne />

        {/* ServicesOne */}
        <ServicesOne />

        {/* BrandMarketingOne */}
        <BrandMarketingOne />

        {/* WebsiteOwnerOne */}
        <WebsiteOwnerOne />

        {/* FaqTwo */}
        <FaqTwo />

        {/* FooterTwo */}
        <FooterTwo />
      </section>
    </AOSWrap>
  );
};

export default Page;
