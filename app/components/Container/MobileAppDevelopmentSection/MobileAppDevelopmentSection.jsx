import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { mobileAppDevelopment } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";

const MobileAppDevelopment = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={mobileAppDevelopment} />
      <StickyServicesSection
        heading={
          <>
            Custom Mobile App <br />
            Development Services <br />
            That Power Your <br />
            Business Growth
          </>
        }
        services={mobileAppDevelopment?.servicesData}
      />

      <PartnersRecognition />

      <TechStackSection />

      <StandOutSection
        title="How We Stand Out?"
        items={mobileAppDevelopment?.standOutData}
      />

      <OurProcessSection {...mobileAppDevelopment?.processData} />

      <IndustryStackedCards />

      <TestimonialsSection />

      <BlogSection />

      <FAQSection />
    </>
  );
};

export default MobileAppDevelopment;
