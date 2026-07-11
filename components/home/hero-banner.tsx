'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Container from '@/components/layout/container'
import { heroData } from '@/config/hero'

interface HeroBannerProps {
  className?: string
}

export default function HeroBanner({ className }: HeroBannerProps) {
  const { badge, title, subtitle, primaryCta, secondaryCta } = heroData

  return (
    <section className={cn('relative min-h-[85vh] md:min-h-[90vh] bg-[#0A0A0A] overflow-hidden', className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a]" />

      {/* Accent gradient */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-[#C8A45C]/10 via-transparent to-transparent" />

      <Container className="relative h-full">
        <div className="flex flex-col md:flex-row items-center min-h-[85vh] md:min-h-[90vh] py-24 md:py-0">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <span className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C8A45C] mb-6 rounded-sm">
              {badge}
            </span>

            {/* Title */}
            <h1 className="font-[Cormorant_Garamond] text-[clamp(2rem,5vw,4rem)] leading-[1.1] text-white font-medium mb-5 whitespace-pre-line">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] leading-relaxed text-white/50 max-w-[480px] mx-auto md:mx-0 mb-10">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 h-12 px-8 bg-[#C8A45C] text-white text-[13px] font-semibold rounded-sm hover:bg-[#B0894A] transition-colors"
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center h-12 px-8 border border-white/20 text-white text-[13px] font-medium rounded-sm hover:bg-white/5 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Video area */}
          <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden bg-gradient-to-br from-[#C8A45C]/20 via-[#C8A45C]/5 to-transparent">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
              >
                <source src="/videos/video01.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-[9px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
