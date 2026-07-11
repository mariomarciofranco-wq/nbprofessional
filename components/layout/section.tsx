'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Container from './container'

interface SectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  spacing?: 'sm' | 'md' | 'lg'
  background?: 'white' | 'cream' | 'dark'
  className?: string
}

const spacingMap: Record<string, string> = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-24',
}

const bgMap: Record<string, string> = {
  white: 'bg-white',
  cream: 'bg-[#F5F0EB]',
  dark: 'bg-[#0A0A0A]',
}

export default function Section({
  title,
  subtitle,
  children,
  spacing = 'lg',
  background = 'white',
  className,
}: SectionProps) {
  const isDark = background === 'dark'

  return (
    <section
      className={cn(spacingMap[spacing], bgMap[background], className)}
      aria-labelledby={title ? 'section-title' : undefined}
    >
      <Container>
        {title && (
          <h2
            id="section-title"
            className={cn(
              'font-[Cormorant_Garamond] text-[clamp(1.5rem,3vw,2rem)] font-medium mb-3 text-center',
              isDark && 'text-white'
            )}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={cn(
              'font-[Inter] text-[14px] max-w-[500px] mx-auto text-center mb-10',
              isDark ? 'text-white/50' : 'text-[#5C5C5C]'
            )}
          >
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  )
}