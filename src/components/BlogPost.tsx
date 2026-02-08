import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { BlogPost } from '../types/content';
import { SEO } from './SEO';

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPostPage({ post }: BlogPostProps) {
  const { frontmatter, content, readingTime, wordCount } = post;

  return (
    <article className="min-h-screen bg-slate-50">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.tags}
        author={frontmatter.author}
        url={`/blog/${frontmatter.slug}`}
        image={frontmatter.image}
        type="article"
        article={{
          publishedTime: frontmatter.date,
          modifiedTime: new Date().toISOString().split('T')[0],
          tags: frontmatter.tags
        }}
      />

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-slate max-w-none"
        >
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {frontmatter.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm md:text-base">
              {frontmatter.author && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  By {frontmatter.author}
                </span>
              )}

              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {format(new Date(frontmatter.date), 'MMMM dd, yyyy')}
              </span>

              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read ({wordCount} words)
              </span>
            </div>

            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {frontmatter.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      </div>
    </article>
  );
}