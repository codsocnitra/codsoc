import type { Metadata } from "next";
import BannerOne from "../components/BannerOne";
import BlogOne from "../components/BlogOne";
import ChooseUsOne from "../components/ChooseUsOne";
import CtaOne from "../components/CtaOne";
import FAQOne from "../components/FAQOne";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import OfferOne from "../components/OfferOne";
import RoadmapOne from "../components/RoadmapOne";
import TestimonialsOne from "../components/TestimonialsOne";
import TopFeaturesOne from "../components/TopFeaturesOne";
import TopHeaderOne from "../components/TopHeaderOne";
import AOSWrap from "../helper/AOSWrap";
import CustomCursor from "../helper/CustomCursor";
import AboutOne from "../components/AboutOne";
import Image from "next/image";
import dynamic from "next/dynamic";
import ProjectsShowcase from "../components/ProjectsShowcase";

const BrandSliderOne = dynamic(() => import("../components/BrandSliderOne"));
const ShowCaseOne = dynamic(() => import("../components/ShowCaseOne"));

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | CodSoc'25 - Official Coding Society of Nitra Technical Campus",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "Home | CodSoc'25",
      description:
        "CodSoc’25 – Official Coding Society of Nitra Technical Campus",
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
      {/* CustomCursor */}
      <CustomCursor />

      {/* Top Header One */}
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderOne />

      {/* TopFeaturesOne */}
      <TopFeaturesOne />

      {/* BannerOne */}
      <BannerOne />

      {/* BrandSliderOne */}
      {/* <BrandSliderOne /> */}

      {/* AboutOne */}
      <AboutOne />

      {/* RoadmapOne */}
      <RoadmapOne />

      {/* OfferOne */}
      <OfferOne />

      {/* FAQOne */}
      <FAQOne />

      {/* ChooseUsOne */}
      <ChooseUsOne />

      {/* ShowCaseOne */}
      {/* <ShowCaseOne /> */}

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* Wrapper two section */}
      <div className='position-relative z-1'>
        <Image
          width={1919}
          height={845}
          src='/assets/images/shapes/shape-image.png'
          alt='Shape'
          className='position-absolute w-100 tw-start-0 bottom-0 z-n1'
        />

        {/* Project ShowCase */}
        <ProjectsShowcase />
        {/* BlogOne */}
        <BlogOne />

        {/* CtaOne */}
        <CtaOne />
      </div>

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
