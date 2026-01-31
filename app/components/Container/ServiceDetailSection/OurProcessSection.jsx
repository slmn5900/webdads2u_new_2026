"use client";
import { PencilRuler, Code2, BadgeCheck, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Planning",
    icon: PencilRuler,
    points: [
      "Business Analysis",
      "Document Specifications",
      "Preparing Wireframes",
      "Getting Client Approval",
    ],
  },
  {
    title: "Development",
    icon: Code2,
    points: [
      "Coding",
      "Mockup & Page Layout Creation",
      "Review",
      "Approval Cycle",
    ],
  },
  {
    title: "Testing",
    icon: BadgeCheck,
    points: [
      "Preparing Test Cases",
      "Quality Assurance",
      "Bug Fixing",
      "Final Review",
    ],
  },
  {
    title: "Deployment",
    icon: Rocket,
    points: ["Launch", "Monitoring", "Support & Maintenance"],
  },
];

export default function OurProcessSection() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 px4 md:px-20 py-32">
        <div className="sticky top-32 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <span className="text-sm tracking-wide">Our Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl leading-13 font-light mb-6">
            Elevate Your Web
            <br />
            Experience with Our
            <br />
            Seamless Process
          </h2>
          <p className="text-white/70 leading-relaxed max-w-md text-xs">
            Our process involves in-depth business analysis, documenting
            specifications, creating wireframes, and obtaining your approval
            before moving forward. Our seasoned web experts guide you through
            every step of the journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {processSteps?.map((step, index) => (
            <div
              key={index}
              className="
                rounded-[33px]
                border border-white/20
                bg-white/5
                backdrop-blur-xl
                p-8
                min-h-[321px]
              "
            >
              <step.icon size={32} className="text-white/50 mb-4" />
              <h3 className="text-xl mb-2 font-medium">{step.title}</h3>
              <ul className="space-y-2">
                {step?.points?.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <span className="h-2 w-2 rounded-full bg-purple-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
