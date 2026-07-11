import type { LucideIcon } from 'lucide-react'
import { Package } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateAction {
  label: string
  onClick: () => void
}

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  action?: EmptyStateAction
  className?: string
}

export function EmptyState({
  icon: Icon = Package,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-20', className)}>
      <Icon className="w-10 h-10 text-[#E5E2DE] mb-4" />

      <h3
        className="text-lg text-[#999999]"
        style={{ fontFamily: 'Cormorant Garamond' }}
      >
        {title}
      </h3>

      {description && (
        <p className="mt-1 text-[14px] text-[#999999]/70">{description}</p>
      )}

      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 h-10 px-5 text-[13px] border border-[#E5E2DE] rounded-[6px] bg-white text-[#0A0A0A] hover:bg-neutral-50 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}