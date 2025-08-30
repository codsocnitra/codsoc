import React, { Suspense } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FeaturedProductsInner from "../../components/FeaturedProductsInner";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import ProductTabsInner from "../../components/ProductTabsInner";
import ShopDetailsInner from "../../components/ShopDetailsInner";
import TaskManagementOne from "../../components/TaskManagementOne";
import TopHeaderOne from "../../components/TopHeaderOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";

import type { Metadata } from "next";
import Loading from "../loading";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Shop Details | SassTech - Saas Software and IT Solution",
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
      <section className='heading-black'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* Top Header One */}
        <TopHeaderOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb title={"Shop Details"} />

        {/* ShopDetailsInner */}
        <Suspense fallback={<Loading />}>
          <ShopDetailsInner />
        </Suspense>

        {/* ProductTabsInner */}

        <ProductTabsInner />

        {/* FeaturedProductsInner */}
        <FeaturedProductsInner />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default Page;
