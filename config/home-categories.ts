export interface IHomeCategory {
  id: string;
  name: string;
  slug: string;
  href: string;
  shortDescription: string;
  productCount: number;
  imageUrl?: string;
  iconName?: string;
}

export const homeCategories: IHomeCategory[] = [
  {
    id: 'cat-01',
    name: 'Shampoos',
    slug: 'shampoos',
    href: '/produtos?categoria=shampoos',
    shortDescription: 'Limpeza profunda com fórmulas profissionais para cada tipo de cabelo.',
    productCount: 48,
    iconName: 'droplets',
  },
  {
    id: 'cat-02',
    name: 'Condicionadores',
    slug: 'condicionadores',
    href: '/produtos?categoria=condicionadores',
    shortDescription: 'Desembarace e hidrate os fios com condicionadores de alta performance.',
    productCount: 36,
    iconName: 'wind',
  },
  {
    id: 'cat-03',
    name: 'Tratamentos',
    slug: 'tratamentos',
    href: '/produtos?categoria=tratamentos',
    shortDescription: 'Recupere a saúde dos cabelos com tratamentos intensivos profissionais.',
    productCount: 52,
    iconName: 'sparkles',
  },
  {
    id: 'cat-04',
    name: 'Máscaras',
    slug: 'mascaras',
    href: '/produtos?categoria=mascaras',
    shortDescription: 'Máscaras concentradas para nutrição e reconstrução profunda dos fios.',
    productCount: 30,
    iconName: 'layers',
  },
  {
    id: 'cat-05',
    name: 'Óleos',
    slug: 'oleos',
    href: '/produtos?categoria=oleos',
    shortDescription: 'Óleos nutritivos que selam as cutículas e proporcionam brilho intenso.',
    productCount: 24,
    iconName: 'flask-conical',
  },
  {
    id: 'cat-06',
    name: 'Finalizadores',
    slug: 'finalizadores',
    href: '/produtos?categoria=finalizadores',
    shortDescription: 'Finalize seu penteado com produtos que definem, modelam e protegem.',
    productCount: 28,
    iconName: 'paintbrush',
  },
  {
    id: 'cat-07',
    name: 'Leave-in',
    slug: 'leave-in',
    href: '/produtos?categoria=leave-in',
    shortDescription: 'Proteção e tratamento que permanecem nos fios o dia todo.',
    productCount: 18,
    iconName: 'spray-can',
  },
  {
    id: 'cat-08',
    name: 'Kits',
    slug: 'kits',
    href: '/produtos?categoria=kits',
    shortDescription: 'Kits completos com rotinas profissionais para cada necessidade capilar.',
    productCount: 12,
    iconName: 'package',
  },
  {
    id: 'cat-09',
    name: 'Acessórios',
    slug: 'acessorios',
    href: '/produtos?categoria=acessorios',
    shortDescription: 'Pentes, escovas e acessórios essenciais para o cuidado diário.',
    productCount: 15,
    iconName: 'scissors',
  },
];