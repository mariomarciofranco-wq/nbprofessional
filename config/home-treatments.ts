export interface ITreatment {
  id: string;
  name: string;
  slug: string;
  href: string;
  description: string;
  iconName?: string;
  imageUrl?: string;
  productCount?: number;
}

export const homeTreatments: ITreatment[] = [
  {
    id: 'trat-01',
    name: 'Hidratação',
    slug: 'hidratacao',
    href: '/busca?tratamento=hidratacao',
    description: 'Reposição hídrica profunda para cabelos macios e sedosos.',
    iconName: 'droplets',
  },
  {
    id: 'trat-02',
    name: 'Nutrição',
    slug: 'nutricao',
    href: '/busca?tratamento=nutricao',
    description: 'Reposição lipídica que devolve a oleosidade natural dos fios.',
    iconName: 'bean',
  },
  {
    id: 'trat-03',
    name: 'Reconstrução',
    slug: 'reconstrucao',
    href: '/busca?tratamento=reconstrucao',
    description: 'Reposição de massa capilar com queratina e proteínas.',
    iconName: 'wrench',
  },
  {
    id: 'trat-04',
    name: 'Controle do Frizz',
    slug: 'controle-frizz',
    href: '/busca?tratamento=controle-frizz',
    description: 'Discipline os fios rebeldes com fórmulas antifrizz avançadas.',
    iconName: 'wind',
  },
  {
    id: 'trat-05',
    name: 'Crescimento',
    slug: 'crescimento',
    href: '/busca?tratamento=crescimento',
    description: 'Estimule o crescimento saudável com ativos fortalecedores.',
    iconName: 'sprout',
  },
  {
    id: 'trat-06',
    name: 'Queda',
    slug: 'queda',
    href: '/busca?tratamento=queda',
    description: 'Fortaleça o couro cabeludo e reduza a queda capilar.',
    iconName: 'shield',
  },
  {
    id: 'trat-07',
    name: 'Cabelos Loiros',
    slug: 'cabelos-loiros',
    href: '/busca?tratamento=cabelos-loiros',
    description: 'Matizadores e tratamentos específicos para manter o tom perfeito.',
    iconName: 'sun',
  },
  {
    id: 'trat-08',
    name: 'Cabelos Coloridos',
    slug: 'cabelos-coloridos',
    href: '/busca?tratamento=cabelos-coloridos',
    description: 'Proteja a cor e prolongue a vivacidade dos fios tingidos.',
    iconName: 'palette',
  },
  {
    id: 'trat-09',
    name: 'Cacheados',
    slug: 'cacheados',
    href: '/busca?tratamento=cacheados',
    description: 'Defina, hidrate e mantenha os cachos com produtos especializados.',
    iconName: 'waves',
  },
  {
    id: 'trat-10',
    name: 'Lisos',
    slug: 'lisos',
    href: '/busca?tratamento=lisos',
    description: 'Discipline e alinhe os fios lisos com leveza e brilho.',
    iconName: 'align-justify',
  },
  {
    id: 'trat-11',
    name: 'Oleosidade',
    slug: 'oleosidade',
    href: '/busca?tratamento=oleosidade',
    description: 'Controle a produção excessiva de óleo no couro cabeludo.',
    iconName: 'droplet-off',
  },
  {
    id: 'trat-12',
    name: 'Caspa',
    slug: 'caspa',
    href: '/busca?tratamento=caspa',
    description: 'Tratamentos anticaspa que aliviam e previnem a descamação.',
    iconName: 'leafy-green',
  },
  {
    id: 'trat-13',
    name: 'Cabelos Danificados',
    slug: 'cabelos-danificados',
    href: '/busca?tratamento=cabelos-danificados',
    description: 'Recupere fios danificados por química, calor ou fatores externos.',
    iconName: 'flame',
  },
  {
    id: 'trat-14',
    name: 'Selagem',
    slug: 'selagem',
    href: '/busca?tratamento=selagem',
    description: 'Sele as cutículas para fios alinhados com brilho espelhado.',
    iconName: 'paint-bucket',
  },
  {
    id: 'trat-15',
    name: 'Botox Capilar',
    slug: 'botox-capilar',
    href: '/busca?tratamento=botox-capilar',
    description: 'Tratamento intensivo que reconstrói e alisa os fios profundamente.',
    iconName: 'flask-conical',
  },
];