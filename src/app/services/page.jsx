import CtaServices from '@/components/CtaServices'
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
    <CtaServices />
</section>
  )
}
