export interface INavMenuItem {
  id: string;
  label: string;
  href: string;
  type: 'link' | 'mega';
  megaId?: string;
}

export interface IMegaMenuCategory {
  id: string;
  name: string;
  href: string;
  subcategories: { name: string; href: string }[];
}

export interface ISearchSuggestion {
  id: string;
  label: string;
  href: string;
}

export const mainMenuItems: INavMenuItem[] = [
  { id: 'home', label: 'Início', href: '/', type: 'link' },
  { id: 'produtos', label: 'Produtos', href: '/produtos', type: 'link' },
  { id: 'categorias', label: 'Categorias', href: '#', type: 'mega', megaId: 'categorias' },
  { id: 'marcas', label: 'Marcas', href: '#', type: 'mega', megaId: 'marcas' },
  { id: 'linhas', label: 'Linhas', href: '/linhas', type: 'link' },
  { id: 'lancamentos', label: 'Lançamentos', href: '/lancamentos', type: 'link' },
  { id: 'promocoes', label: 'Promoções', href: '/promocoes', type: 'link' },
  { id: 'blog', label: 'Blog', href: '/blog', type: 'link' },
  { id: 'contato', label: 'Contato', href: '/contato', type: 'link' },
];

export const megaMenuCategories: IMegaMenuCategory[] = [
  {
    id: 'shampoos',
    name: 'Shampoos',
    href: '/produtos?categoria=shampoos',
    subcategories: [
      { name: 'Hidratantes', href: '/busca?tratamento=hidratacao' },
      { name: 'Nutritivos', href: '/busca?tratamento=nutricao' },
      { name: 'Reconstrutores', href: '/busca?tratamento=reconstrucao' },
      { name: 'Antifrizz', href: '/busca?tratamento=controle-frizz' },
      { name: 'Anti-queda', href: '/busca?tratamento=queda' },
      { name: 'Anticaspa', href: '/busca?tratamento=caspa' },
    ],
  },
  {
    id: 'condicionadores',
    name: 'Condicionadores',
    href: '/produtos?categoria=condicionadores',
    subcategories: [
      { name: 'Hidratantes', href: '/busca?tratamento=hidratacao' },
      { name: 'Nutritivos', href: '/busca?tratamento=nutricao' },
      { name: 'Desmaia Cabelo', href: '/busca?tratamento=lisos' },
      { name: 'Para Cachos', href: '/busca?tratamento=cacheados' },
      { name: 'Color Protect', href: '/busca?tratamento=cabelos-coloridos' },
      { name: 'Volume', href: '/busca?tratamento=crescimento' },
    ],
  },
  {
    id: 'tratamentos',
    name: 'Tratamentos',
    href: '/produtos?categoria=tratamentos',
    subcategories: [
      { name: 'Máscaras', href: '/produtos?categoria=mascaras' },
      { name: 'Óleos', href: '/produtos?categoria=oleos' },
      { name: 'Ampolas', href: '/busca?tratamento=reconstrucao' },
      { name: 'Selagens', href: '/busca?tratamento=selagem' },
      { name: 'Botox Capilar', href: '/busca?tratamento=botox-capilar' },
      { name: 'Leave-in', href: '/produtos?categoria=leave-in' },
    ],
  },
  {
    id: 'finalizadores',
    name: 'Finalizadores',
    href: '/produtos?categoria=finalizadores',
    subcategories: [
      { name: 'Sprays', href: '/busca?tratamento=frizz' },
      { name: 'Cremes para Pentear', href: '/busca?tratamento=cacheados' },
      { name: 'Protetores Térmicos', href: '/busca?tratamento=cabelos-danificados' },
      { name: 'Ativadores de Cachos', href: '/busca?tratamento=cacheados' },
      { name: 'Finalizadores Loiros', href: '/busca?tratamento=cabelos-loiros' },
      { name: 'Fixadores', href: '/busca?tratamento=lisos' },
    ],
  },
];

export const megaMenuBrands = [
  { id: 'm1', name: 'Truss', slug: 'truss', href: '/marcas/truss' },
  { id: 'm2', name: 'Wella', slug: 'wella', href: '/marcas/wella' },
  { id: 'm3', name: 'Kérastase', slug: 'kerastase', href: '/marcas/kerastase' },
  { id: 'm4', name: "L'Oréal", slug: 'loreal', href: '/marcas/loreal' },
  { id: 'm5', name: 'Sebastian', slug: 'sebastian', href: '/marcas/sebastian' },
  { id: 'm6', name: 'Marivan', slug: 'marivan', href: '/marcas/marivan' },
  { id: 'm7', name: 'Amend', slug: 'amend', href: '/marcas/amend' },
  { id: 'm8', name: 'Redken', slug: 'redken', href: '/marcas/redken' },
];

export const institutionalLinks = [
  { label: 'Promoções', href: '/promocoes' },
  { label: 'Lançamentos', href: '/lancamentos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
];

export const mobileMenuItems = [
  ...institutionalLinks,
  { label: 'Minha Conta', href: '/minha-conta', requiresAuth: true },
  { label: 'Meus Pedidos', href: '/meus-pedidos', requiresAuth: true },
  { label: 'Favoritos', href: '/favoritos', requiresAuth: true },
];