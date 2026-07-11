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

const heightMap: Record<LogoSize, number> = {
  sm: 36,
  md: 46,
  lg: 52,
}

export function Logo({
  size = 'md',
  className,
}: LogoProps) {
  const h = heightMap[size]

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0 relative', className)}
      style={{ height: h, width: 'auto' }}
      title="NB Professional - Cosméticos Profissionais"
    >
      <Image
        src="/imagens/logo-oficial.png"
        alt="NB Professional - Cosméticos Profissionais"
        fill
        sizes="200px"
        className="object-contain object-left"
        priority
      />
    </Link>
  )
}
