export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'member' | 'admin';
  membershipType: 'regular' | 'premium';
}

export interface ForumTopic {
  id: number;
  title: string;
  category: string;
  author: string;
  replies: number;
  views: number;
  lastActive: string;
  isPinned?: boolean;
}