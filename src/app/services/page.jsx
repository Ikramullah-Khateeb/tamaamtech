import Cta from '@/components/Cta'
import OurServices from '@/components/OurServices'
import Platform from '@/components/Platform'
import ServicesHero from '@/components/ServicesHero'
import Tools from '@/components/Tools'
import React from 'react'

export default function ServicesPage() {
  return (
<section>
    <ServicesHero />
    <OurServices />
    <Platform />
    <Tools />
    <Cta isServices = {true}
    serviceCtaTitle={"Real"}
    highlight={"Security"}
    suffix={"Not Just Compliance."}
    ctaDescription={"Stay ahead of evolving threats with Qutbee’s scalable, real-world security."}
    primaryBtn={"Explore Services"}
    secondaryBtn={"Get Free Consultation"}
    secondaryhref={"/contact"}/>
</section>
  )
}
