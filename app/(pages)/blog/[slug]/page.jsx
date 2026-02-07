import BlogDetailSection from "@/app/components/Container/BlogDetailSection/BlogDetailSection";

export default function Page({ params }) {
  const { slug } = params;

  return <BlogDetailSection slug={slug} />;
}
