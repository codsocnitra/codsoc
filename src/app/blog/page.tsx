import React, { Suspense } from "react";
import BlogInner from "../../components/BlogInner";
import Breadcrumb from "../../components/Breadcrumb";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import TaskManagementOne from "../../components/TaskManagementOne";
import TopHeaderOne from "../../components/TopHeaderOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";
import Loading from "../loading";

import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog | CodSoc'25 - CodSoc'25 Software and IT Solution",
    description:
      "Learn more about our CodSoc'25 software, team, features, and IT solutions.",
    openGraph: {
      title: "About | CodSoc'25",
      description:
        "Learn more about our CodSoc'25 software, team, features, and IT solutions.",
      url: "https://nextjs.CodSoc'25.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.CodSoc'25.webnextpro.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "About CodSoc'25",
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
        <Breadcrumb title={"Blog Page"} />

        {/* BlogInner */}
        <Suspense fallback={<Loading />}>
          <BlogInner />
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
