import React, { Suspense } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import ShopInner from "../../components/ShopInner";
import TaskManagementOne from "../../components/TaskManagementOne";
import TopHeaderOne from "../../components/TopHeaderOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";

import type { Metadata } from "next";
import Loading from "../loading";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Shop | CodSoc'25 - CodSoc'25 Software and IT Solution",
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
        <Breadcrumb title={"Shop Page"} />

        {/* ShopInner */}
        <Suspense fallback={<Loading />}>
          <ShopInner />
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
