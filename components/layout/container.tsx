'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  as?: 'div' | 'section' | 'main'
  className?: string
  children: React.ReactNode
}

export default function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return (
    <Tag className={cn('max-w-[1400px] mx-auto px-4 md:px-8', className)}>
      {children}
    </Tag>
  )
}