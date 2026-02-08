// Type definitions for fuse.js
declare module 'fuse.js' {
  export interface FuseOptions<T> {
    keys?: Array<{
      name: string;
      weight?: number;
    }>;
    threshold?: number;
    distance?: number;
    includeScore?: boolean;
    minMatchCharLength?: number;
    shouldSort?: boolean;
    sortFn?: (a: any, b: any) => number;
    tokenize?: boolean;
    matchAllTokens?: boolean;
    includeMatches?: boolean;
    ignoreLocation?: boolean;
    location?: number;
    id?: string | ((item: T) => any);
    getFn?(obj: any, path: string): any;
    caseSensitive?: boolean;
    includeScoreIndex?: boolean;
    min?: number;
    max?: number;
  }

  export type FuseResult<T> = {
    item: T;
    score?: number;
    matches?: Array<{
      value: string;
      indices: [number, number][];
    }>;
  };

  export class Fuse<T> {
    constructor(items: T[], options?: FuseOptions<T>);
    search(query: string, options?: { limit?: number }): FuseResult<T>[];
    addCollection(items: T[]): void;
    removeCollection(index: number): void;
    setCollection(items: T[]): void;
  }
}