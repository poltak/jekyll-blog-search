interface IBlogPost {
  readonly title: string;
  readonly subtitle: string;
  readonly date: string;
  readonly url: string;
  readonly category: string;
  readonly tags: string;
}

interface IBlogListItemProps {
  readonly post: IBlogPost,
}
