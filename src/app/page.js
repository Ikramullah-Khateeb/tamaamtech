import CTA from "@/components/Cta";
import FAQ from "@/components/Faq";
import Founder from "@/components/Founder";
import Stats from "@/components/Stats";
import Whoweare from "@/components/Who_we_are";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Whoweare/>
      <Stats/>
      <Founder/>
      <FAQ/>
      <CTA/>
    </div>
  );
}
