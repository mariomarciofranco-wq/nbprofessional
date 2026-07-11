'use client'

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type StarSize = 'sm' | 'md'

interface RatingStarsProps {
  rating: number
  size?: StarSize
  showCount?: boolean
  count?: number
}

const sizeMap: Record<StarSize, string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
}

export function RatingStars({
  rating,
  size = 'md',
  showCount,
  count,
}: RatingStarsProps) {
  const clamped = Math.max(0, Math.min(5, rating))
  const filledCount = Math.round(clamped)

  return (
    <div className="inline-flex items-center gap-[2px]" role="img" aria-label={`Rating: ${filledCount} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizeMap[size],
            i < filledCount
              ? 'fill-[#C8A45C] text-[#C8A45C]'
              : 'fill-[#E5E2DE] text-[#E5E2DE]',
          )}
        />
      ))}
      {showCount && count !== undefined && (
        <span className="ml-1 text-[#999999] text-[11px] leading-none">
          ({count})
        </span>
      )}
    </div>
  )
}