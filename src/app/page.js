import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import WhoWeAre from "@/components/WhoWeAre";




export default function HomePage() {
  return (
    <section>
      <OurServices />
      <WhoWeAre />
      <Stats />
      <Partners />
      <Faq />
      <Cta ctaTitle="Ready to Transform Your Business?"
        ctaDescription="Let's discuss how our innovative technology solutions can accelerate your growth and drive success. Get started today with a free consultation."
        primaryBtn="Get Free Consultation"
        secondaryBtn="Contact Us Today"
        secondaryhref={"/contact"}
      />
    </section>
  );
}
