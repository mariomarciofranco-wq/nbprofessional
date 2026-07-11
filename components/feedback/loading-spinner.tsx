import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type SpinnerSize = 'sm' | 'md' | 'lg'

interface LoadingSpinnerProps {
  size?: SpinnerSize
  className?: string
}

const sizeMap: Record<SpinnerSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-10 h-10',
}

export function LoadingSpinner({
  size = 'md',
  className,
}: LoadingSpinnerProps) {
  return (
    <Loader2
      className={cn(
        'animate-spin text-[#C8A45C]',
        sizeMap[size],
        className,
      )}
    />
  )
}