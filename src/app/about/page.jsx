import AboutHero from '@/components/AboutHero'
import Apart from '@/components/Apart'
import Cta from '@/components/Cta'
import Stats from '@/components/Stats'
import WhyChoose from '@/components/WhyChoose'


export default function AboutPage() {
  return (
    <section>
      <AboutHero />
      <Stats />
      <Apart />
      <WhyChoose />
      <Cta ctaTitle="Ready to Transform Your Business?"
        ctaDescription="Let's discuss how our innovative technology solutions can accelerate your growth and drive success. Get started today with a free consultation."
        primaryBtn="Get Free Consultation"
        secondaryBtn="Contact Us Today"
        secondaryhref={"/contact"}
      />
    </section>
  )
}
