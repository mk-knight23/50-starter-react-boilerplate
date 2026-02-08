import { motion } from 'framer-motion';
import { DocumentationPage } from '../types/content';
import { SEO } from './SEO';

interface DocumentationPageProps {
  page: DocumentationPage;
}

export function DocumentationPageComponent({ page }: DocumentationPageProps) {
  const { frontmatter, content } = page;

  return (
    <article className="min-h-screen bg-slate-50">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        url={`/docs/${frontmatter.slug}`}
        type="article"
      />

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-slate max-w-none"
        >
          <header className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                {frontmatter.title}
              </h1>
            </div>

            <p className="text-xl text-slate-600 mb-6">
              {frontmatter.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm">
              {frontmatter.date && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Last updated: {new Date(frontmatter.date).toLocaleDateString()}
                </span>
              )}
            </div>
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