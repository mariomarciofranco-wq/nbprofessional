export interface IBrandCard {
  id: string;
  name: string;
  slug: string;
  href: string;
  description: string;
  logoUrl?: string;
  featuredImageUrl?: string;
  position: number;
  productCount?: number;
  isActive: boolean;
}

export const homeBrands: IBrandCard[] = [
  {
    id: 'brand-01',
    name: 'Truss Professional',
    slug: 'truss',
    href: '/marcas/truss',
    description: 'Tecnologia brasileira com fórmulas avançadas para resultados de salão em casa.',
    position: 1,
    isActive: true,
  },
  {
    id: 'brand-02',
    name: 'Wella Professionals',
    slug: 'wella',
    href: '/marcas/wella',
    description: 'Marca alemã líder mundial em coloração e cuidados capilares profissionais.',
    position: 2,
    isActive: true,
  },
  {
    id: 'brand-03',
    name: 'Kérastase',
    slug: 'kerastase',
    href: '/marcas/kerastase',
    description: 'Luxo francês com tratamentos personalizados de altíssima performance.',
    position: 3,
    isActive: true,
  },
  {
    id: 'brand-04',
    name: "L'Oréal Professionnel",
    slug: 'loreal',
    href: '/marcas/loreal',
    description: 'Inovação e expertise francesa para cabelos com beleza de salão.',
    position: 4,
    isActive: true,
  },
  {
    id: 'brand-05',
    name: 'Sebastian Professional',
    slug: 'sebastian',
    href: '/marcas/sebastian',
    description: 'Marca icônica americana com styling ousado e produtos de alta fixação.',
    position: 5,
    isActive: true,
  },
  {
    id: 'brand-06',
    name: 'Marivan Professional',
    slug: 'marivan',
    href: '/marcas/marivan',
    description: 'Linha profissional brasileira com tratamentos acessíveis e eficazes.',
    position: 6,
    isActive: true,
  },
  {
    id: 'brand-07',
    name: 'Amend Professional',
    slug: 'amend',
    href: '/marcas/amend',
    description: 'Marca brasileira com fórmulas naturais e resultados comprovados.',
    position: 7,
    isActive: true,
  },
  {
    id: 'brand-08',
    name: 'Lolla Professional',
    slug: 'lolla',
    href: '/marcas/lolla',
    description: 'Cosméticos profissionais brasileiros com foco em nutrição e brilho.',
    position: 8,
    isActive: true,
  },
  {
    id: 'brand-09',
    name: 'Braé Professional',
    slug: 'brae',
    href: '/marcas/brae',
    description: 'Tratamentos premium brasileiros com ativos de última geração.',
    position: 9,
    isActive: true,
  },
  {
    id: 'brand-10',
    name: 'Redken',
    slug: 'redken',
    href: '/marcas/redken',
    description: 'Marca americana com tecnologia pH balance e proteínas fortalecedoras.',
    position: 10,
    isActive: true,
  },
];