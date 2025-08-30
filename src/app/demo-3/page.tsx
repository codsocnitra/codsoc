import dynamic from "next/dynamic";
import React from "react";
import AutomationOne from "../../components/AutomationOne";
import BannerThree from "../../components/BannerThree";

import DistractionOne from "../../components/DistractionOne";
import FeaturesThree from "../../components/FeaturesThree";
import FooterThree from "../../components/FooterThree";
import HeaderThree from "../../components/HeaderThree";
import PricingPlanTwo from "../../components/PricingPlanTwo";
import TaskManagementOne from "../../components/TaskManagementOne";
import TaskManagerOne from "../../components/TaskManagerOne";
import WorkPlaceOne from "../../components/WorkPlaceOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";

import type { Metadata } from "next";

const BrandThree = dynamic(() => import("../../components/BrandThree"));
const TestimonialsThree = dynamic(
  () => import("../../components/TestimonialsThree")
);
const PlanExecuteOne = dynamic(() => import("../../components/PlanExecuteOne"));

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home - 3 | SassTech - Saas Software and IT Solution",
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
      <section className='home-three crm-page'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* HeaderThree */}
        <HeaderThree />

        {/* BannerThree */}
        <BannerThree />

        {/* BrandThree */}
        <BrandThree />

        {/* FeaturesThree */}
        <FeaturesThree />

        {/* WorkPlaceOne */}
        <WorkPlaceOne />

        {/* AutomationOne */}
        <AutomationOne />

        {/* TaskManagerOne */}
        <TaskManagerOne />

        {/* PlanExecuteOne */}
        <PlanExecuteOne />

        {/* TestimonialsThree */}
        <TestimonialsThree />

        {/* DistractionOne */}
        <DistractionOne />

        {/* PricingPlanTwo */}
        <PricingPlanTwo />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default Page;
