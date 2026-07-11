'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Section from '@/components/layout/section'
import { homeBrands, type IBrandCard } from '@/config/home-brands'

interface BrandShowcaseProps {
  className?: string
}

function BrandCard({ brand }: { brand: IBrandCard }) {
  return (
    <Link
      href={brand.href}
      className="group flex flex-col justify-center p-6 bg-white border border-[#F0EDE9] rounded-lg hover:border-[#C8A45C]/20 hover:shadow-sm transition-all min-h-[120px]"
    >
      <h3 className="text-[16px] font-medium text-[#0A0A0A] font-[Cormorant_Garamond] group-hover:text-[#C8A45C] transition-colors">
        {brand.name}
      </h3>
      <p className="text-[12px] text-[#999999] mt-1.5 leading-relaxed">{brand.description}</p>
      {brand.productCount && (
        <span className="text-[11px] text-[#BFBFBF] mt-2">{brand.productCount} produtos</span>
      )}
    </Link>
  )
}

export default function BrandShowcase({ className }: BrandShowcaseProps) {
  const activeBrands = homeBrands.filter((b) => b.isActive)

  return (
    <Section
      title="Marcas Premium"
      subtitle="As melhores marcas profissionais em um só lugar"
      spacing="sm"
      background="cream"
      className={className}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {activeBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </Section>
  )
}
