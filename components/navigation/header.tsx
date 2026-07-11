'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, User, ShoppingBag, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import Container from '@/components/layout/container'
import TopBar from '@/components/layout/top-bar'
import { Logo } from '@/components/common/logo'
import MobileMenu from './mobile-menu'
import { mainMenuItems, institutionalLinks } from '@/config/navigation'

const topBarMessages = [
  { id: 2, text: '6x sem juros em compras acima de R$ 200,00' },
  { id: 3, text: '10% OFF na primeira compra com o cupom NB10' },
]

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn('sticky top-0 z-50', className)}>
      <TopBar messages={topBarMessages} />

      <nav
        className={cn(
          'bg-white border-b border-[#F0EDE9] transition-all duration-300',
          scrolled ? 'h-[68px] md:h-[76px]' : 'h-[76px] md:h-[96px]',
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <Container className="h-full">
          <div className="flex items-center justify-between h-full">
            {/* Mobile: hamburger + logo */}
            <div className="flex items-center gap-3 md:hidden -ml-1">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="p-1"
              >
                <Menu className="w-5 h-5 text-[#0A0A0A]" />
              </button>
              <Logo variant="full" size={scrolled ? 'sm' : 'sm'} />
            </div>

            {/* Desktop: logo */}
            <div className="hidden md:block -ml-4 md:-ml-8">
              <Logo variant="full" size={scrolled ? 'sm' : 'md'} />
            </div>

            {/* Desktop: nav links */}
            <div className="hidden md:flex items-center gap-8">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#0A0A0A]/70 hover:text-[#C8A45C] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Actions: search, account, cart */}
            <div className="flex items-center gap-3 md:gap-4">
              <button aria-label="Search" className="p-1 hover:text-[#C8A45C] transition-colors">
                <Search className="w-[18px] h-[18px]" />
              </button>

              <Link href="/minha-conta" aria-label="Minha Conta" className="hidden md:block p-1 hover:text-[#C8A45C] transition-colors">
                <User className="w-[18px] h-[18px]" />
              </Link>

              <Link href="/carrinho" aria-label="Carrinho" className="relative p-1 hover:text-[#C8A45C] transition-colors">
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span className="absolute -top-0.5 -right-0.5 w-[14px] h-[14px] bg-[#0A0A0A] text-white text-[9px] font-semibold rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* Institutional bar */}
      <div className="hidden md:flex items-center justify-center gap-6 h-[30px] bg-[#F5F0EB]">
        {institutionalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#5C5C5C] hover:text-[#C8A45C] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
