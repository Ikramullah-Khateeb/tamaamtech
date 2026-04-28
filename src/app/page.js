import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Founder from "@/components/Founder";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import WhoWeAre from "@/components/WhoWeAre";




export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <OurServices />
      <WhoWeAre />
      <Stats />
      <Founder />
      <Partners />
      <Faq />
      <Blog />
      <Cta />
    </section>
  );
}
