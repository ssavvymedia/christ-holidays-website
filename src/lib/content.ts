export type Crumb = { name: string; path: string };

export type Card = {
  title: string;
  text?: string;
  href?: string;
  enquire?: boolean;
};

export type PageSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: Card[];
};

export type PageFaq = { question: string; answer: string };

export type PageContent = {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  eyebrow?: string;
  h1: string;
  intro: string[];
  image?: { src: string; alt: string };
  sections: PageSection[];
  faqs?: PageFaq[];
  related?: Card[];
  whatsapp: string;
};
