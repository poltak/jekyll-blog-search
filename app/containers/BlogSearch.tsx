import * as React from 'react';
import { BlogList, BlogListItem, SearchBar } from '../components';
import { PostType } from '../util/post';
import * as Fuse from 'fuse.js';

interface Props {
  initPosts: PostType[]; // Intended to be static props; should never change from parent
  searchAtts: string[];
}

interface State {
  posts: PostType[];
  searchVal: string;
}

class BlogSearchContainer extends React.Component<Props, State> {
  public state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      posts: props.initPosts, // Props assignment to state used for initialisation only
      searchVal: '',
    };
  }

  private static defaultProps: Props = {
    initPosts: [
      {
        title: 'First blog post',
        subtitle: 'This is fun',
        date: '03 October 2016',
        url: 'http://www.google.com',
        category: 'Interesting thoughts',
        tags: 'fun, interactive, and typescript',
      },
      {
        title: 'Second blog post',
        subtitle: 'This is still fun...',
        date: '03 December 2015',
        url: 'http://www.google.com',
        category: 'Less interesting thoughts',
        tags: 'group activity, and github',
      },
    ],
    searchAtts: ['title', 'subtitle', 'date', 'category', 'tags'],
  };

  private onSearchChange = (event) => {
    const { target: { value } } = event;

    // Perform fuse.js fuzzy search on posts using the entered value
    const posts = value === '' ?
      this.props.initPosts :
      new Fuse(this.props.initPosts, {
        shouldSort: true,
        threshold: 0.2,
        maxPatternLength: 32,
        keys: this.props.searchAtts,
      }).search(value);

    this.setState({ searchVal: value, posts });
  }

  private getListItems = () =>
    this.state.posts.map((post, index) => <BlogListItem key={index} post={post} />);

  public render() {
    const { posts, searchVal } = this.state;

    return (
      <div className="jekyll-blog-search">
        <SearchBar value={searchVal} onChange={this.onSearchChange} />
        <BlogList>
          {this.getListItems()}
        </BlogList>
      </div>
    );
  }
}

export default BlogSearchContainer;
