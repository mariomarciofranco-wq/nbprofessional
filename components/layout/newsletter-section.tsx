'use client'

import { useState, FormEvent } from 'react'
import Container from './container'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

interface NewsletterSectionProps {
  action?: (formData: FormData) => Promise<void>
  title?: string
  subtitle?: string
}

const statusConfig: Record<SubmitStatus, { text: string; className: string }> = {
  idle: { text: 'Inscrever-se', className: 'bg-[#C8A45C] text-white' },
  loading: { text: 'Enviando...', className: 'bg-[#C8A45C]/70 text-white cursor-not-allowed' },
  success: { text: 'Inscrito ✓', className: 'bg-green-600 text-white cursor-default' },
  error: { text: 'Erro ao enviar', className: 'bg-red-600 text-white cursor-default' },
}

export default function NewsletterSection({
  action,
  title = 'Fique por dentro',
  subtitle = 'Novidades, lançamentos e ofertas exclusivas.',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || status === 'loading') return

    if (action) {
      setStatus('loading')
      try {
        const formData = new FormData()
        formData.append('email', email)
        await action(formData)
        setStatus('success')
        setEmail('')
      } catch {
        setStatus('error')
      }
    } else {
      setStatus('loading')
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setEmail('')
    }

    setTimeout(() => setStatus('idle'), 3000)
  }

  const btnConfig = statusConfig[status]
  const isDone = status === 'success' || status === 'error'

  return (
    <div className="bg-[#F5F0EB] py-16">
      <Container>
        <div className="max-w-[500px] mx-auto text-center">
          <h2 className="font-[Cormorant_Garamond] text-[clamp(1.5rem,3vw,2rem)] font-medium mb-3">
            {title}
          </h2>
          <p className="text-[14px] text-[#5C5C5C] mb-8">{subtitle}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 h-12 px-4 bg-white border border-[#E5E2DE] rounded-[6px] text-[14px] placeholder:text-[#999999] focus:outline-none focus:border-[#C8A45C]/40 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isDone}
              className={`h-12 px-6 rounded-[6px] text-[13px] font-semibold transition-colors shrink-0 ${btnConfig.className}`}
            >
              {btnConfig.text}
            </button>
          </form>

          <p className="text-[11px] text-[#999999] mt-4">
            Sem spam. Apenas conteúdo relevante.
          </p>
        </div>
      </Container>
    </div>
  )
}