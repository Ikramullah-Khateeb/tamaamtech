import CTA from "@/components/Cta";
import FAQ from "@/components/Faq";
import Founder from "@/components/Founder";
import Stats from "@/components/Stats";
import Whoweare from "@/components/Who_we_are";

// import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import Blog from "@/components/Blog"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Whoweare/>
      <Stats/>
      <Founder/>
      <FAQ/>
      <CTA/>
      <h1>Heading</h1>
      <OurServices/>
      <Blog/>
      <p>paragraph</p>
    </div>
  );
}
