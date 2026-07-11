'use client'

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { RatingStars } from '@/components/common/rating-stars'
import type { IFeaturedProduct } from '@/config/home-featured'

interface ProductCardProps {
  product: IFeaturedProduct
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const hasDiscount = product.precoDe && product.precoDe > product.precoPor
  const discountPercent = hasDiscount
    ? Math.round((1 - product.precoPor / product.precoDe!) * 100)
    : 0

  const formatPrice = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <div className={cn('group bg-white border border-[#F0EDE9] rounded-lg overflow-hidden hover:shadow-md hover:border-[#C8A45C]/20 transition-all', className)}>
      {/* Image placeholder */}
      <Link href={`/produto/${product.slug}`} className="block relative aspect-square bg-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#BFBFBF] text-[11px] uppercase tracking-[0.1em]">Imagem</span>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={cn(
                  'px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.05em] rounded-sm',
                  tag === 'mais-vendido' && 'bg-[#C8A45C] text-white',
                  tag === 'promocao' || (hasDiscount && 'bg-red-600 text-white'),
                  tag === 'premium' && 'bg-[#0A0A0A] text-white',
                  tag === 'lancamento' && 'bg-[#2D6A4F] text-white',
                )}
              >
                {tag === 'mais-vendido' ? 'Mais Vendido' : hasDiscount ? `${discountPercent}% OFF` : tag}
              </span>
            ))}
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-4">
        {/* Brand */}
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#C8A45C]">
          {product.marca.nome}
        </span>

        {/* Name */}
        <Link href={`/produto/${product.slug}`}>
          <h3 className="text-[13px] font-medium text-[#0A0A0A] mt-1 hover:text-[#C8A45C] transition-colors line-clamp-2 leading-snug">
            {product.nome}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2">
          <RatingStars rating={product.avaliacao} size="sm" showCount count={product.totalAvaliacoes} />
        </div>

        {/* Price */}
        <div className="mt-3">
          {hasDiscount && (
            <span className="text-[11px] text-[#999999] line-through">
              {formatPrice(product.precoDe!)}
            </span>
          )}
          <div className="text-[18px] font-semibold text-[#0A0A0A] font-[Cormorant_Garamond] leading-tight">
            {formatPrice(product.precoPor)}
          </div>
          <span className="text-[11px] text-[#5C5C5C]">
            em até {product.parcelamento.vezes}x de{' '}
            {formatPrice(product.parcelamento.valorParcela)}
            {product.parcelamento.semJuros && ' sem juros'}
          </span>
        </div>

        {/* Add to cart */}
        <button className="mt-4 w-full h-10 flex items-center justify-center gap-2 bg-[#0A0A0A] text-white text-[12px] font-semibold rounded-md hover:bg-[#1a1a1a] transition-colors">
          <ShoppingBag className="w-4 h-4" />
          Adicionar
        </button>
      </div>
    </div>
  )
}
