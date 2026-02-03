import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { webDesign } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";

const WebDesignSection = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={webDesign} />
      <StickyServicesSection
        heading={
          <>
            Creative Web Design <br />
            Services That Elevate <br />
            Your Brand Identity
          </>
        }
        services={webDesign?.servicesData}
      />

      <PartnersRecognition />
      <TechStackSection />
      <StandOutSection
        title="How We Stand Out?"
        items={webDesign?.standOutData}
      />
      <OurProcessSection {...webDesign?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default WebDesignSection;
