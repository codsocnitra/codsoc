import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ContactInner from "../../components/ContactInner";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import TaskManagementOne from "../../components/TaskManagementOne";
import TopHeaderOne from "../../components/TopHeaderOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";

import type { Metadata } from "next";
import FooterOne from "../../components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Contact | codsoc25 - Saas Software and IT Solution",
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
        <Breadcrumb title={"Get In Touch"} />

        {/* ContactInner */}
        <ContactInner />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default Page;
