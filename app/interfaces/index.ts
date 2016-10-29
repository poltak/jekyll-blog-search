export interface IBlogSearchProps {
  readonly initPosts: IBlogPost[]; // Intended to be static props; should never change from parent
  readonly searchAtts: string[];
};

export interface IBlogSearchState {
  posts: IBlogPost[];
  searchVal: string;
};

export interface IBlogPost {
  readonly title: string;
  readonly subtitle: string;
  readonly date: string;
  readonly url: string;
  readonly category: string;
  readonly tags: string;
};

export interface IBlogListItemProps {
  readonly post: IBlogPost;
};

export interface ISearchBarProps {
  readonly value: string;
  onChange(event: any): void;
}
