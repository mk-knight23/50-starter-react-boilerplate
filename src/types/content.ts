export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  slug: string;
  category?: 'blog' | 'documentation';
  image?: string;
}

export interface BlogPost {
  id: string;
  frontmatter: Frontmatter;
  content: string;
  readingTime: number;
  wordCount: number;
}

export interface DocumentationPage {
  id: string;
  frontmatter: Frontmatter;
  content: string;
  order?: number;
}