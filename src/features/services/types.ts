export type ServiceCategory =
  | "cleaning"
  | "repair"
  | "kitchen"
  | "home"
  | "painting"
  | "electrical"
  | "plumbing"
  | "other";

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  category: ServiceCategory;
  images: string[];
  icon?: string;
  bannerImage?: string;
  tags: string[];
  features: string[];
  faqs: FAQ[];
  isActive: boolean;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: string;
}
