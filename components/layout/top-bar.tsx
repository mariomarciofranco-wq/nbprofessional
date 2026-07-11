'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Container from './container'

interface TopBarMessage {
  id: string | number
  text: string
  icon?: React.ComponentType<{ className?: string }>
  href?: string
}

interface TopBarProps {
  messages: TopBarMessage[]
  autoRotate?: boolean
  interval?: number
  className?: string
}

export default function TopBar({
  messages,
  autoRotate = true,
  interval = 5000,
  className,
}: TopBarProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoRotate || messages.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, interval)
    return () => clearInterval(timer)
  }, [autoRotate, interval, messages.length])

  const current = messages[index] || messages[0]

  const renderMessage = (msg: TopBarMessage) => {
    const Icon = msg.icon
    const content = (
      <>
        {Icon && <Icon className="w-3 h-3 inline mr-1" />}
        {msg.text}
      </>
    )

    const linkClasses =
      'font-[Inter] text-[11px] font-medium tracking-[0.05em] uppercase text-white/80 hover:text-white transition-colors'

    if (msg.href) {
      return (
        <Link href={msg.href} className={linkClasses}>
          {content}
        </Link>
      )
    }

    return <span className={linkClasses}>{content}</span>
  }

  return (
    <div className={cn('h-10 bg-[#0A0A0A] text-white', className)}>
      <Container className="h-full flex items-center">
        {/* Desktop: all messages in a row */}
        <div className="hidden md:flex items-center justify-center w-full gap-6">
          {messages.map((msg, i) => (
            <span key={msg.id} className="flex items-center gap-6">
              {i > 0 && (
                <span className="text-white/20 select-none">&middot;</span>
              )}
              {renderMessage(msg)}
            </span>
          ))}
        </div>

        {/* Mobile: single rotating message */}
        <div className="flex md:hidden items-center justify-center w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {renderMessage(current)}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </div>
  )
}