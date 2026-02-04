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
import FAQAccordion from "@/app/common/FAQAccordion";
import ServiceRatingSection from "../ServiceSection/ServiceRatingSection";

const WebDesignSection = () => {
  const stats = [
    { value: "200+", label: "Successful Projects" },
    { value: "300+", label: "Sales Closed" },
    { value: "12+", label: "Years of Experience" },
  ];
  return (
    <>
      <ServiceDetailsHero serviceData={webDesign} />
      <StickyServicesSection
        heading={<>The best web design company in Chennai</>}
        services={webDesign?.servicesData}
      />

      <PartnersRecognition />
      <TechStackSection />
      <StandOutSection
        title="How Our Website Design Services Supports Business Growth?"
        items={webDesign?.standOutData}
      />
      <ServiceRatingSection
        title="Create a Strong Visual Identity with Our Web Design Services"
        description="We design websites that look clear, professional, and easy to navigate. Every design is planned to present your brand properly, guide visitors smoothly, and create a strong first impression that builds trust.
Our design experience covers many business types and website styles. Each design is made to stay consistent across all devices, keeping the layout balanced, readable, and comfortable for users on every screen."
        stats={stats}
      />
      <OurProcessSection {...webDesign?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQAccordion
        faqs={webDesign?.webDesignFaqData}
        title="FAQs"
        heading="Frequently Asked Questions"
        description="Clear answers to common questions about our web development services in Chennai."
      />
    </>
  );
};

export default WebDesignSection;
