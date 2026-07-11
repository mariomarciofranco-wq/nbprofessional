import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoSize = 'sm' | 'md' | 'lg'

interface LogoProps {
  variant?: 'full' | 'icon'
  size?: LogoSize
  className?: string
  transparent?: boolean
}

const sizeMap: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 140, height: 36 },
  md: { width: 180, height: 46 },
  lg: { width: 200, height: 52 },
}

export function Logo({
  size = 'md',
  className,
}: LogoProps) {
  const dims = sizeMap[size]

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0', className)}
      title="NB Professional - Cosméticos Profissionais"
    >
      <Image
        src="/imagens/logo-oficial.png"
        alt="NB Professional - Cosméticos Profissionais"
        width={dims.width}
        height={dims.height}
        className="object-contain"
        priority
      />
    </Link>
  )
}
