import { Shield, Lock, ScrollText } from 'lucide-react';

export interface IFooterColumn {
  id: string;
  title: string;
  variant: 'links' | 'contact' | 'social';
  links?: IFooterLink[];
  contactInfo?: { address: string; phone: string; email: string; hours: string };
}

export interface IFooterLink {
  label: string;
  href: string;
}

export interface ISocialLink {
  id: string;
  label: string;
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube';
  href: string;
  iconName: string;
}

export interface IPaymentIcon {
  id: string;
  label: string;
  iconName: string;
}

export interface ISecuritySeal {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const footerColumns: IFooterColumn[] = [
  {
    id: 'empresa',
    title: 'Empresa',
    variant: 'links',
    links: [
      { label: 'Quem Somos', href: '/quem-somos' },
      { label: 'Blog NB Professional', href: '/blog' },
      { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
      { label: 'Seja um Revendedor', href: '/revendedor' },
      { label: 'Nossas Lojas', href: '/lojas' },
    ],
  },
  {
    id: 'categorias',
    title: 'Categorias',
    variant: 'links',
    links: [
      { label: 'Shampoos', href: '/produtos?categoria=shampoos' },
      { label: 'Condicionadores', href: '/produtos?categoria=condicionadores' },
      { label: 'Tratamentos', href: '/produtos?categoria=tratamentos' },
      { label: 'Máscaras', href: '/produtos?categoria=mascaras' },
      { label: 'Óleos', href: '/produtos?categoria=oleos' },
      { label: 'Finalizadores', href: '/produtos?categoria=finalizadores' },
      { label: 'Ver Todas', href: '/produtos' },
    ],
  },
  {
    id: 'atendimento',
    title: 'Atendimento',
    variant: 'contact',
    contactInfo: {
      address: 'Rua Exemplo, 123 - São Paulo, SP',
      phone: '(11) 99999-9999',
      email: 'contato@nbprofessional.com.br',
      hours: 'Seg a Sex: 08h às 18h | Sáb: 08h às 12h',
    },
  },
  {
    id: 'politicas',
    title: 'Políticas',
    variant: 'links',
    links: [
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { label: 'Trocas e Devoluções', href: '/trocas-e-devolucoes' },
      { label: 'Termos de Uso', href: '/termos-de-uso' },
      { label: 'Política de Envio', href: '/politica-de-envio' },
      { label: 'Perguntas Frequentes', href: '/faq' },
    ],
  },
];

export const socialColumn: IFooterColumn = {
  id: 'social',
  title: 'Redes Sociais',
  variant: 'social',
};

export const socialLinks: ISocialLink[] = [
  { id: 'instagram', label: 'Instagram', platform: 'instagram', href: '#', iconName: 'instagram' },
  { id: 'facebook', label: 'Facebook', platform: 'facebook', href: '#', iconName: 'facebook' },
  { id: 'tiktok', label: 'TikTok', platform: 'tiktok', href: '#', iconName: 'music' },
  { id: 'youtube', label: 'YouTube', platform: 'youtube', href: '#', iconName: 'youtube' },
];

export const paymentIcons: IPaymentIcon[] = [
  { id: 'pix', label: 'PIX', iconName: 'pix' },
  { id: 'visa', label: 'Visa', iconName: 'visa' },
  { id: 'mastercard', label: 'Mastercard', iconName: 'mastercard' },
  { id: 'elo', label: 'Elo', iconName: 'elo' },
  { id: 'amex', label: 'American Express', iconName: 'amex' },
  { id: 'boleto', label: 'Boleto', iconName: 'boleto' },
];

export const securitySeals: ISecuritySeal[] = [
  { id: 'ssl', label: 'SSL', description: 'Site 100% seguro', icon: Shield },
  { id: 'encrypted', label: 'Criptografia', description: 'Dados criptografados', icon: Lock },
  { id: 'privacy', label: 'LGPD', description: 'LGPD Compliance', icon: ScrollText },
];

export const copyright = {
  text: 'NB Professional',
  rights: 'Todos os direitos reservados.',
};