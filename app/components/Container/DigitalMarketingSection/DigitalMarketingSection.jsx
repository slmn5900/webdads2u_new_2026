import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { digitalMarketing } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";

const DigitalMarketing = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={digitalMarketing} />
      <StickyServicesSection
        heading={
          <>
            Results-Driven Digital <br />
            Marketing Services <br />
            That Grow Your <br />
            Business
          </>
        }
        services={digitalMarketing?.servicesData}
      />
      <PartnersRecognition />
      <TechStackSection />
      <StandOutSection
        title="How We Stand Out?"
        items={digitalMarketing?.standOutData}
      />
      <OurProcessSection {...digitalMarketing?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default DigitalMarketing;
