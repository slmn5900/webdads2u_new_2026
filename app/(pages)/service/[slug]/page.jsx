import ServiceDetailSection from "@/app/components/Container/ServiceDetailSection/ServiceDetailSection";

export default async function ServiceDetails({ params }) {
  const { slug } = params;
  return <ServiceDetailSection slug={slug} />;
}
