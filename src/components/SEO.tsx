import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
}

export function SEO({
  title,
  description,
  keywords,
  author,
  url,
  image,
  type = 'website',
  article
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Clear existing meta tags
    const existingMetaTags = document.querySelectorAll('meta[name^="og:"], meta[name^="twitter:"], meta[name="description"], meta[name="keywords"], meta[name="author"]');
    existingMetaTags.forEach(tag => tag.remove());

    // Create meta tags
    const createMetaTag = (name: string, content: string) => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    };

    // Create Open Graph tags
    const createOpenGraphTag = (property: string, content: string) => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    };

    // Create Twitter Card tags
    const createTwitterTag = (name: string, content: string) => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', `twitter:${name}`);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    };

    // Basic meta tags
    createMetaTag('description', description);

    if (keywords?.length) {
      createMetaTag('keywords', keywords.join(', '));
    }

    if (author) {
      createMetaTag('author', author);
    }

    // Open Graph tags
    createOpenGraphTag('og:title', title);
    createOpenGraphTag('og:description', description);
    createOpenGraphTag('og:type', type);

    if (url) {
      createOpenGraphTag('og:url', url);
    }

    if (image) {
      createOpenGraphTag('og:image', image);
    }

    // Twitter Card tags
    createTwitterTag('card', 'summary_large_image');
    createTwitterTag('title', title);
    createTwitterTag('description', description);

    if (image) {
      createTwitterTag('image', image);
    }

    // Article specific tags
    if (type === 'article' && article) {
      if (article.publishedTime) {
        createOpenGraphTag('article:published_time', article.publishedTime);
      }
      if (article.modifiedTime) {
        createOpenGraphTag('article:modified_time', article.modifiedTime);
      }
      if (article.section) {
        createOpenGraphTag('article:section', article.section);
      }
      if (article.tags?.length) {
        article.tags.forEach(tag => {
          createOpenGraphTag('article:tag', tag);
        });
      }
    }

    // Add canonical URL if provided
    if (url) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', url);
    }

    // Clean up function
    return () => {
      existingMetaTags.forEach(tag => tag.remove());
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.remove();
      }
    };
  }, [title, description, keywords, author, url, image, type, article]);

  return null;
}