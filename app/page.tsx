import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WorkSection />
      </main>
    </>
  );
}
