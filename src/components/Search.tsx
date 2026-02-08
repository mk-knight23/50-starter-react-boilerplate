import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { contentSearcher, SearchResult } from '../utils/search';

interface SearchProps {
  onResultSelect?: (result: SearchResult) => void;
  className?: string;
}

export function SearchComponent({ onResultSelect, className = '' }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (query.length >= 3) {
      setLoading(true);
      contentSearcher.search(query).then(searchResults => {
        setResults(searchResults);
        setSelectedIndex(-1);
        setLoading(false);
      });
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        break;
    }
  }, [isOpen, results, selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleResultSelect = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
    onResultSelect?.(result);
  };

  const getScoreColor = (score: number) => {
    if (score < 0.1) return 'text-green-600';
    if (score < 0.2) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <Search className="w-4 h-4 text-slate-600" />
          <span className="text-sm font-medium text-slate-700">Search</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-slate-200 z-50"
            >
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search posts and documentation..."
                    autoFocus
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {query && (
                    <button
                      onClick={() => {
                        setQuery('');
                        setResults([]);
                        setSelectedIndex(-1);
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {loading && (
                  <div className="mt-4 text-center">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  </div>
                )}

                {!loading && query.length < 3 && (
                  <div className="mt-4 text-sm text-slate-500">
                    Type at least 3 characters to search
                  </div>
                )}

                {!loading && query.length >= 3 && results.length > 0 && (
                  <div className="mt-4 max-h-96 overflow-y-auto">
                    {results.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleResultSelect(result)}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          index === selectedIndex
                            ? 'bg-primary/10 border border-primary/20'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="font-medium text-slate-900 mb-1">
                              {result.title}
                            </h3>
                            <p className="text-sm text-slate-600 mb-2">
                              {result.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                result.category === 'blog'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-green-100 text-green-700'
                              }`}>
                                {result.category}
                              </span>
                              <span className={`text-xs ${getScoreColor(result.score)}`}>
                                {(1 - result.score).toFixed(1)}% match
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {!loading && query.length >= 3 && results.length === 0 && (
                  <div className="mt-4 text-center text-sm text-slate-500">
                    No results found
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}