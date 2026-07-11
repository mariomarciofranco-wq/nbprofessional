'use client'

import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Music4,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Container from './container'
import NewsletterSection from './newsletter-section'
import { Logo } from '@/components/common/logo'
import {
  footerColumns,
  socialColumn,
  socialLinks,
  paymentIcons,
  securitySeals,
  copyright,
} from '@/config/footer'

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  tiktok: Music4,
}

const contactIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  phone: Phone,
  whatsapp: MessageCircle,
  email: Mail,
  hours: Clock,
}

interface FooterProps {
  columns?: typeof footerColumns
  socialLinks?: typeof socialLinks
  paymentIcons?: typeof paymentIcons
  securitySeals?: typeof securitySeals
  className?: string
}

export default function Footer({
  columns = footerColumns,
  socialLinks: socialLinksProp = socialLinks,
  paymentIcons: paymentIconsProp = paymentIcons,
  securitySeals: securitySealsProp = securitySeals,
  className,
}: FooterProps) {
  return (
    <footer className={cn(className)}>
      {/* Newsletter */}
      <NewsletterSection />

      {/* Links Section */}
      <div className="bg-[#0A0A0A] py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {columns.map((col, ci) => {
              const isSocial = ci === columns.length - 1

              if (isSocial) {
                return (
                  <div key={col.title} className="flex flex-col gap-4">
                    <Logo variant="full" size="lg" transparent={true} />
                    <p className="text-[13px] text-white/40 leading-relaxed">
                      Siga-nos nas redes sociais e fique por dentro de todas as novidades.
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      {socialLinksProp.map((link) => {
                        const Icon = socialIconMap[link.platform]
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="w-9 h-9 rounded-[6px] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/20 transition-colors"
                          >
                            {Icon ? (
                              <Icon className="w-4 h-4" />
                            ) : (
                              <span className="text-[10px] uppercase">{link.platform}</span>
                            )}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              const isContact = ci === columns.length - 2

              return (
                <div key={col.title}>
                  {col.title && (
                    <h4 className="hidden lg:block text-[12px] font-semibold text-white/60 uppercase tracking-[0.1em] mb-5">
                      {col.title}
                    </h4>
                  )}
                  <ul className="space-y-3">
                    {isContact && col.contactInfo ? (
                      <>
                        <li className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-white/30 shrink-0" />
                          <span className="text-[13px] text-white/40">{col.contactInfo.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-white/30 shrink-0" />
                          <span className="text-[13px] text-white/40">{col.contactInfo.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-white/30 shrink-0" />
                          <span className="text-[13px] text-white/40">{col.contactInfo.email}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-white/30 shrink-0" />
                          <span className="text-[13px] text-white/40">{col.contactInfo.hours}</span>
                        </li>
                      </>
                    ) : col.links?.map((linkItem: any, li: number) => (
                        <li key={li}>
                          <Link
                            href={linkItem.href || '#'}
                            className="text-[13px] text-white/40 hover:text-white/80 transition-colors"
                          >
                            {linkItem.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </div>

      {/* Separator */}
      <hr className="bg-white/[0.06] border-0 h-px" />

      {/* Bottom Bar */}
      <div className="bg-[#0A0A0A]">
        <Container>
          {paymentIconsProp && paymentIconsProp.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 py-6 border-b border-white/[0.06]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40">
                Pagamento
              </span>
              {paymentIconsProp.map((pi: any, i: number) => (
                <span
                  key={i}
                  className="h-7 px-3 rounded-[4px] bg-white/[0.04] border border-white/[0.06] text-[10px] uppercase text-white/35 flex items-center"
                >
                  {pi.label || pi.name || pi}
                </span>
              ))}
            </div>
          )}

          {securitySealsProp && securitySealsProp.length > 0 && (
            <div className="flex flex-wrap items-center gap-5 py-6 border-b border-white/[0.06]">
              {securitySealsProp.map((seal: any, i: number) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-[11px] uppercase text-white/25"
                >
                  {typeof seal.icon === 'function' ? (
                    <seal.icon className="w-4 h-4" />
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-white/5" />
                  )}
                  {seal.label || seal.name || seal}
                </span>
              ))}
            </div>
          )}
        </Container>
      </div>

      {/* Copyright */}
      <div className="bg-[#080808] py-4">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px] text-white/25">
            {copyright?.text || '© NB Professional'}
          </span>
          <span className="text-[11px] text-white/25">
            {copyright?.rights || ''}
          </span>
        </Container>
      </div>
    </footer>
  )
}