'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { X, User, Package, Heart, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/common/logo'
import { mainMenuItems, mobileMenuItems } from '@/config/navigation'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-[300px] max-w-[85vw] bg-white shadow-xl"
          >
            <div className="flex items-center justify-between h-[68px] px-5 border-b border-[#F0EDE9]">
              <Logo variant="full" size="sm" />
              <button onClick={onClose} aria-label="Close menu" className="p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto h-[calc(100%-68px)] pb-8">
              {/* Main nav */}
              <div className="px-5 py-4">
                {mainMenuItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-[13px] font-medium text-[#0A0A0A] border-b border-[#F0EDE9] last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-2 bg-[#F5F0EB]" />

              {/* Account section */}
              <div className="px-5 py-4">
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#999999] mb-3">
                  Minha Conta
                </h4>
                <Link
                  href="/minha-conta"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 text-[13px] text-[#0A0A0A]"
                >
                  <User className="w-4 h-4 text-[#999999]" />
                  Minha Conta
                </Link>
                <Link
                  href="/meus-pedidos"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 text-[13px] text-[#0A0A0A]"
                >
                  <Package className="w-4 h-4 text-[#999999]" />
                  Meus Pedidos
                </Link>
                <Link
                  href="/favoritos"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 text-[13px] text-[#0A0A0A]"
                >
                  <Heart className="w-4 h-4 text-[#999999]" />
                  Favoritos
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
