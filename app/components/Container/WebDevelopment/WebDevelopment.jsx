import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { webDevelopment } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";

const WebDevelopment = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={webDevelopment} />
      <StickyServicesSection
        heading={
          <>
            The Best Website &<br />
            Web Application
            <br />
            Development
            <br />
            Company In Chennai
          </>
        }
        services={webDevelopment?.servicesData}
      />
      <PartnersRecognition />
      <TechStackSection />
      <StandOutSection
        title="How We Stand Out?"
        items={webDevelopment?.standOutData}
      />
      <OurProcessSection {...webDevelopment?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default WebDevelopment;
