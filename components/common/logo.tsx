'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoVariant = 'full' | 'icon'
type LogoSize = 'sm' | 'md' | 'lg'

interface LogoProps {
  variant: LogoVariant
  size?: LogoSize
  className?: string
  transparent?: boolean
}

const sizeMap: Record<LogoSize, string> = {
  sm: 'text-[16px]',
  md: 'text-[20px]',
  lg: 'text-[28px]',
}

export function Logo({
  variant,
  size = 'md',
  className,
  transparent = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'font-medium italic',
        transparent ? 'text-white' : 'text-[#0A0A0A]',
        sizeMap[size],
        className,
      )}
      style={{ fontFamily: 'Cormorant Garamond' }}
    >
      {variant === 'full' ? 'NB Professional' : 'NB'}
    </Link>
  )
}