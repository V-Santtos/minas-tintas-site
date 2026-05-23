export interface Product {
  name: string
  tag: string
  top: string
  bot: string
  stripe: string
  image?: string
}

export interface Textura {
  name: string
  hex: string
  grad: string
  fg: string
  image?: string
  bgSize?: string
}

export interface Linha {
  tag: string
  title: string
  desc: string
  bg: string
  tone: 'dark' | 'light'
  image?: string
}

export const MAZA_PRODUCTS: Product[] = [
  { name: 'Esmalte Sintético Maza',       tag: 'ESMALTE',        top: '#C8102E', bot: '#6B0615', stripe: '#1A1714', image: '/assets/esmalte-sintetico-maza.png' },
  { name: 'Acrílico Ultra Rende Mais',    tag: 'ACRÍLICO',       top: '#E08600', bot: '#8C4B00', stripe: '#1A1714', image: '/assets/acrilico-ultra-rende-mais-maza.png' },
  { name: 'Acrílico Premium Total Prot.', tag: 'PREMIUM',        top: '#2A6FDB', bot: '#13346B', stripe: '#C8102E', image: '/assets/acrilico-premium-total-maza.png' },
  { name: 'Direto na Ferrugem',           tag: 'ANTI-CORROSIVO', top: '#3D3A37', bot: '#1A1714', stripe: '#C8102E', image: '/assets/direto-na-ferrugem-maza.png' },
  { name: 'Esmalte Acetinado Maza',       tag: 'ESMALTE',        top: '#1F8A5B', bot: '#0B3D27', stripe: '#1A1714', image: '/assets/esmalte-acetinado-maza.png' },
  { name: 'Verniz Marítimo Maza',         tag: 'VERNIZ',         top: '#A36A2B', bot: '#5C3812', stripe: '#1A1714', image: '/assets/verniz-maritimo-maza.png' },
  { name: 'Fundo Preparador Paredes',     tag: 'PREPARADOR',     top: '#EFECE8', bot: '#C8C4BF', stripe: '#C8102E', image: '/assets/fundo-preparador-paredes-maza.png' },
  { name: 'Massa Acrílica Maza',          tag: 'MASSA',          top: '#F7F5F2', bot: '#DDD9D5', stripe: '#1A1714', image: '/assets/massa-acrilica-maza.png' },
]

export const TEXTURAS: Textura[] = [
  { name: 'Bianco Travertino', hex: '#DDD9D5', grad: 'linear-gradient(180deg,#EFECE8,#DDD9D5)', fg: '#1A1714', image: '/assets/textura-bianco-travertino.png' },
  { name: 'Pó de Diamante',    hex: '#9C9894', grad: 'linear-gradient(180deg,#C8C4BF,#9C9894)', fg: '#1A1714', image: '/assets/textura-po-diamante.png',     bgSize: '900px auto' },
  { name: 'Grigio Supremo',    hex: '#3D3A37', grad: 'linear-gradient(180deg,#6B6560,#3D3A37)', fg: '#1A1714', image: '/assets/textura-grigio-supremo.png',  bgSize: '900px auto' },
  { name: 'Sabbia Chiara',     hex: '#C8C4BF', grad: 'linear-gradient(180deg,#E2DED9,#C8C4BF)', fg: '#1A1714', image: '/assets/textura-sabbia-chiara.png'     },
  { name: 'Ferro Liscio',      hex: '#5C5753', grad: 'linear-gradient(180deg,#8B847C,#5C5753)', fg: '#fff',     image: '/assets/textura-ferro-liscio.png'      },
  { name: 'Grigio Nero',       hex: '#1A1714', grad: 'linear-gradient(180deg,#3D3A37,#1A1714)', fg: '#fff',     image: '/assets/textura-grigio-nero.png'       },
]

export const LINHAS: Linha[] = [
  {
    tag:   'AUTOMOTIVA',
    title: 'Linha Automotiva',
    image: '/assets/linha-automotiva.png',
    desc:  'Maza Automotiva e Lazzudur Sherwin Williams — tintas e vernizes de alta performance para lataria e funilaria.',
    bg: '#141210', tone: 'dark',
  },
  {
    tag:   'AUTOMOTIVA · INDUSTRIAL',
    title: 'Farben',
    image: '/assets/linha-farben.png',
    desc:  'Tintas e massas para lataria e funilaria — tinta oficial Porsche no Brasil. Na linha industrial, revestimentos de alta resistência para estruturas metálicas, equipamentos e pisos.',
    bg: '#1E1B18', tone: 'dark',
  },
  {
    tag:   'CUIDADO AUTOMOTIVO',
    title: 'Vonixx',
    image: '/assets/linha-vonixx.png',
    desc:  'Linha completa de cuidado, proteção e polimento automotivo. Do brilho ao detalhamento profissional.',
    bg: '#2E2A26', tone: 'dark',
  },
  {
    tag:   'FERRAMENTAS',
    title: 'Ferramentas Condor',
    image: '/assets/linha-condor.png',
    desc:  'Linha profissional completa — rolos, pincéis, espátulas e tudo que a obra precisa.',
    bg: '#F7F5F2', tone: 'light',
  },
  {
    tag:   'IMPERMEABILIZANTE',
    title: 'Impertech HM Rubber',
    image: '/assets/linha-impertech.png',
    desc:  'Borracha Líquida Multifunção 3 em 1 — impermeabiliza, isola e protege qualquer superfície.',
    bg: '#EFECE8', tone: 'light',
  },
]
