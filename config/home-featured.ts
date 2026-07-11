export interface IFeaturedProduct {
  id: string;
  nome: string;
  slug: string;
  marca: {
    id: string;
    nome: string;
    slug: string;
  };
  images: [string, string];
  avaliacao: number;
  totalAvaliacoes: number;
  precoDe?: number;
  precoPor: number;
  parcelamento: {
    vezes: number;
    valorParcela: number;
    semJuros: boolean;
  };
  tags: string[];
  emEstoque: boolean;
}

export const featuredProducts: IFeaturedProduct[] = [
  {
    id: 'feat-01',
    nome: 'Truss Ultra Hydration Shampoo 300ml',
    slug: 'truss-ultra-hydration-shampoo-300ml',
    marca: { id: 'brand-01', nome: 'Truss', slug: 'truss' },
    images: ['/assets/images/placeholder-product-01.jpg', '/assets/images/placeholder-product-01b.jpg'],
    avaliacao: 4.8,
    totalAvaliacoes: 1542,
    precoDe: 239.9,
    precoPor: 189.9,
    parcelamento: { vezes: 6, valorParcela: 31.65, semJuros: true },
    tags: ['mais-vendido', 'hidratacao'],
    emEstoque: true,
  },
  {
    id: 'feat-02',
    nome: 'Truss Miracle Mask Reconstrutora 250g',
    slug: 'truss-miracle-mask-reconstrutora-250g',
    marca: { id: 'brand-01', nome: 'Truss', slug: 'truss' },
    images: ['/assets/images/placeholder-product-02.jpg', '/assets/images/placeholder-product-02b.jpg'],
    avaliacao: 4.9,
    totalAvaliacoes: 893,
    precoDe: 299.9,
    precoPor: 249.9,
    parcelamento: { vezes: 8, valorParcela: 31.24, semJuros: true },
    tags: ['top-rated', 'reconstrucao'],
    emEstoque: true,
  },
  {
    id: 'feat-03',
    nome: 'Wella Professionals Oil Reflections 100ml',
    slug: 'wella-oil-reflections-100ml',
    marca: { id: 'brand-02', nome: 'Wella', slug: 'wella' },
    images: ['/assets/images/placeholder-product-03.jpg', '/assets/images/placeholder-product-03b.jpg'],
    avaliacao: 4.7,
    totalAvaliacoes: 1120,
    precoDe: 199.9,
    precoPor: 159.9,
    parcelamento: { vezes: 5, valorParcela: 31.98, semJuros: true },
    tags: ['nutricao', 'brilho'],
    emEstoque: true,
  },
  {
    id: 'feat-04',
    nome: 'Wella Professionals Invigo Nutri-Enrich Máscara 500g',
    slug: 'wella-invigo-nutri-enrich-mascara-500g',
    marca: { id: 'brand-02', nome: 'Wella', slug: 'wella' },
    images: ['/assets/images/placeholder-product-04.jpg', '/assets/images/placeholder-product-04b.jpg'],
    avaliacao: 4.6,
    totalAvaliacoes: 678,
    precoPor: 219.9,
    parcelamento: { vezes: 7, valorParcela: 31.41, semJuros: true },
    tags: ['nutricao', 'mascara'],
    emEstoque: true,
  },
  {
    id: 'feat-05',
    nome: 'Kérastase Résistance Thérapiste Sérum 150ml',
    slug: 'kerastase-resistance-therapiste-serum-150ml',
    marca: { id: 'brand-03', nome: 'Kérastase', slug: 'kerastase' },
    images: ['/assets/images/placeholder-product-05.jpg', '/assets/images/placeholder-product-05b.jpg'],
    avaliacao: 4.9,
    totalAvaliacoes: 2100,
    precoDe: 349.9,
    precoPor: 279.9,
    parcelamento: { vezes: 10, valorParcela: 27.99, semJuros: false },
    tags: ['premium', 'reconstrucao'],
    emEstoque: true,
  },
  {
    id: 'feat-06',
    nome: 'Kérastase Blond Absolu Bain Lumière 250ml',
    slug: 'kerastase-blond-absolu-bain-lumiere-250ml',
    marca: { id: 'brand-03', nome: 'Kérastase', slug: 'kerastase' },
    images: ['/assets/images/placeholder-product-06.jpg', '/assets/images/placeholder-product-06b.jpg'],
    avaliacao: 4.8,
    totalAvaliacoes: 1456,
    precoDe: 289.9,
    precoPor: 259.9,
    parcelamento: { vezes: 8, valorParcela: 32.49, semJuros: true },
    tags: ['loiros', 'premium'],
    emEstoque: true,
  },
  {
    id: 'feat-07',
    nome: "L'Oréal Professionnel Absolut Repair Máscara 250g",
    slug: 'loreal-absolut-repair-mascara-250g',
    marca: { id: 'brand-04', nome: "L'Oréal", slug: 'loreal' },
    images: ['/assets/images/placeholder-product-07.jpg', '/assets/images/placeholder-product-07b.jpg'],
    avaliacao: 4.7,
    totalAvaliacoes: 932,
    precoDe: 179.9,
    precoPor: 139.9,
    parcelamento: { vezes: 4, valorParcela: 34.98, semJuros: true },
    tags: ['reconstrucao', 'promocao'],
    emEstoque: true,
  },
  {
    id: 'feat-08',
    nome: 'Sebastian Professional Dark Oil 95ml',
    slug: 'sebastian-dark-oil-95ml',
    marca: { id: 'brand-05', nome: 'Sebastian', slug: 'sebastian' },
    images: ['/assets/images/placeholder-product-08.jpg', '/assets/images/placeholder-product-08b.jpg'],
    avaliacao: 4.8,
    totalAvaliacoes: 756,
    precoDe: 259.9,
    precoPor: 229.9,
    parcelamento: { vezes: 7, valorParcela: 32.84, semJuros: true },
    tags: ['nutricao', 'oleo'],
    emEstoque: true,
  },
];