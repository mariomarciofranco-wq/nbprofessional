'use client'

import { cn } from '@/lib/utils'
import Section from '@/components/layout/section'
import ProductCard from './product-card'
import { featuredProducts } from '@/config/home-featured'

interface FeaturedProductsProps {
  className?: string
}

export default function FeaturedProducts({ className }: FeaturedProductsProps) {
  return (
    <Section
      title="Destaques"
      subtitle="Os produtos mais amados pelos nossos clientes"
      spacing="sm"
      className={className}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  )
}
