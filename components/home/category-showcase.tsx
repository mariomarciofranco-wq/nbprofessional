'use client'

import Link from 'next/link'
import { ArrowRight, Droplets, Wind, Sparkles, Layers, FlaskConical, Paintbrush, SprayCan, Package, Scissors } from 'lucide-react'
import { cn } from '@/lib/utils'
import Section from '@/components/layout/section'
import { homeCategories, type IHomeCategory } from '@/config/home-categories'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  wind: Wind,
  sparkles: Sparkles,
  layers: Layers,
  'flask-conical': FlaskConical,
  paintbrush: Paintbrush,
  'spray-can': SprayCan,
  package: Package,
  scissors: Scissors,
}

interface CategoryShowcaseProps {
  className?: string
}

function CategoryCard({ category }: { category: IHomeCategory }) {
  const Icon = category.iconName ? iconMap[category.iconName] : null

  return (
    <Link
      href={category.href}
      className="group flex items-center gap-4 p-4 bg-white border border-[#F0EDE9] rounded-lg hover:border-[#C8A45C]/30 hover:shadow-sm transition-all"
    >
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-[#F5F0EB] flex items-center justify-center shrink-0 group-hover:bg-[#C8A45C]/10 transition-colors">
          <Icon className="w-5 h-5 text-[#C8A45C]" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] font-medium text-[#0A0A0A]">{category.name}</h3>
        <p className="text-[12px] text-[#999999] mt-0.5">{category.productCount} produtos</p>
      </div>
      <ArrowRight className="w-4 h-4 text-[#BFBFBF] group-hover:text-[#C8A45C] transition-colors shrink-0" />
    </Link>
  )
}

export default function CategoryShowcase({ className }: CategoryShowcaseProps) {
  return (
    <Section
      title="Categorias"
      subtitle="Encontre a linha certa para o seu tipo de cabelo"
      spacing="sm"
      className={className}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {homeCategories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </Section>
  )
}
