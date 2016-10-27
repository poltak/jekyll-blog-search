/// <reference path="../components/BlogList.d.ts"/>

interface IBlogSearchProps {
  readonly initPosts: IBlogPost[]; // Intended to be static props; should never change from parent
  readonly searchAtts: string[];
}

interface IBlogSearchState {
  posts: IBlogPost[];
  searchVal: string;
}
