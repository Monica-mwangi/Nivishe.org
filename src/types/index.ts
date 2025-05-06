export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ImpactStat {
  id: string;
  figure: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface Fellow {
  id: string;
  name: string;
  cohort: string;
  country: string;
  image: string;
  testimonial?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'funding' | 'strategic';
}