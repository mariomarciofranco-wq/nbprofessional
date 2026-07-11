export interface IHeroData {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export const heroData: IHeroData = {
  badge: 'COSMÉTICOS PROFISSIONAIS',
  title: 'Transforme seus cabelos\ncom resultados\nprofissionais.',
  subtitle:
    'Descubra produtos premium selecionados pelas melhores marcas profissionais do mundo. Resultados de salão direto na sua casa.',
  primaryCta: {
    label: 'Comprar Agora',
    href: '/produtos',
  },
  secondaryCta: {
    label: 'Conheça as Linhas',
    href: '/linhas',
  },
  image: {
    src: '/assets/images/hero-placeholder.jpg',
    alt: 'Produtos profissionais NB Professional - cosméticos capilares premium',
  },
};