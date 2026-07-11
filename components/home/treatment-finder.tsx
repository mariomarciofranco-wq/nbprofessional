'use client'

import Link from 'next/link'
import { Droplets, Bean, Wrench, Wind, Sprout, Shield, Sun, Palette, Waves, AlignJustify, Flame, PaintBucket, FlaskConical } from 'lucide-react'
import { cn } from '@/lib/utils'
import Section from '@/components/layout/section'
import { homeTreatments, type ITreatment } from '@/config/home-treatments'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  bean: Bean,
  wrench: Wrench,
  wind: Wind,
  sprout: Sprout,
  shield: Shield,
  sun: Sun,
  palette: Palette,
  waves: Waves,
  'align-justify': AlignJustify,
  'droplet-off': Droplets,
  'leafy-green': Sprout,
  flame: Flame,
  'paint-bucket': PaintBucket,
  'flask-conical': FlaskConical,
}

interface TreatmentFinderProps {
  className?: string
}

function TreatmentCard({ treatment }: { treatment: ITreatment }) {
  const Icon = treatment.iconName ? iconMap[treatment.iconName] : null

  return (
    <Link
      href={treatment.href}
      className="group flex items-center gap-4 p-4 bg-white border border-[#F0EDE9] rounded-lg hover:border-[#C8A45C]/20 hover:shadow-sm transition-all"
    >
      {Icon && (
        <div className="w-9 h-9 rounded-lg bg-[#F5F0EB] flex items-center justify-center shrink-0">
          <Icon className="w-[18px] h-[18px] text-[#5C5C5C] group-hover:text-[#C8A45C] transition-colors" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-[13px] font-medium text-[#0A0A0A]">{treatment.name}</h3>
        <p className="text-[11px] text-[#999999] mt-0.5 line-clamp-1">{treatment.description}</p>
      </div>
    </Link>
  )
}

export default function TreatmentFinder({ className }: TreatmentFinderProps) {
  return (
    <Section
      title="Encontre o Tratamento Ideal"
      subtitle="Descubra soluções específicas para cada necessidade capilar"
      spacing="sm"
      className={className}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
        {homeTreatments.map((t) => (
          <TreatmentCard key={t.id} treatment={t} />
        ))}
      </div>
    </Section>
  )
}
