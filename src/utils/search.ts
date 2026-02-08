import Fuse from 'fuse.js';
import { BlogPost, DocumentationPage } from '../types/content';
import { loadAllContent } from './contentLoader';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'blog' | 'documentation';
  score: number;
}

export class ContentSearcher {
  private fuse: any | null = null;
  private allContent: { posts: BlogPost[]; docs: DocumentationPage[] } | null = null;

  async initialize() {
    this.allContent = await loadAllContent();

    const searchItems: SearchResult[] = [
      ...this.allContent.posts.map(post => ({
        id: post.id,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        url: `/blog/${post.frontmatter.slug}`,
        category: 'blog' as const,
        score: 0
      })),
      ...this.allContent.docs.map(doc => ({
        id: doc.id,
        title: doc.frontmatter.title,
        description: doc.frontmatter.description,
        url: `/docs/${doc.frontmatter.slug}`,
        category: 'documentation' as const,
        score: 0
      }))
    ];

    this.fuse = new (Fuse as any)(searchItems, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.3 }
      ],
      threshold: 0.4,
      distance: 100,
      includeScore: true,
      minMatchCharLength: 3
    });
  }

  async search(query: string): Promise<SearchResult[]> {
    if (!this.fuse) {
      await this.initialize();
    }

    if (!this.fuse) {
      return [];
    }

    const results = (this.fuse as any).search(query, { limit: 10 });
    return results.map((result: any) => ({
      ...result.item,
      score: result.score || 0
    }));
  }

  async searchInCategory(query: string, category: 'blog' | 'documentation'): Promise<SearchResult[]> {
    const allResults = await this.search(query);
    return allResults.filter(result => result.category === category);
  }

  async getAllPosts(): Promise<BlogPost[]> {
    if (!this.allContent) {
      this.allContent = await loadAllContent();
    }
    return this.allContent.posts;
  }

  async getAllDocs(): Promise<DocumentationPage[]> {
    if (!this.allContent) {
      this.allContent = await loadAllContent();
    }
    return this.allContent.docs;
  }
}

export const contentSearcher = new ContentSearcher();