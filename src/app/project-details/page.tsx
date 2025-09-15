import Breadcrumb from "../../components/Breadcrumb";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import ProjectDetailsInner from "../../components/ProjectDetailsInner";
import TaskManagementOne from "../../components/TaskManagementOne";
import TopHeaderOne from "../../components/TopHeaderOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";

import type { Metadata } from "next";
import React, { Suspense } from "react";
import Loading from "../loading";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Project Details | codsoc25 - Saas Software and IT Solution",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "About | codsoc25",
      description:
        "Learn more about our SaaS software, team, features, and IT solutions.",
      url: "https://nextjs.codsoc25.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.codsoc25.webnextpro.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "About codsoc25",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <section className='heading-black'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* Top Header One */}
        <TopHeaderOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb title={"Project Details"} />

        {/* ProjectDetailsInner */}
        <Suspense fallback={<Loading />}>
          <ProjectDetailsInner />
        </Suspense>

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default Page;
