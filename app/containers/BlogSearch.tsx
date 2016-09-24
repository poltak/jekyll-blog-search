import * as React from 'react';
import { BlogList, BlogListItem, SearchBar } from '../components';

interface Props { initPosts: [Object]; }
interface State {
  posts?: [Object];
  searchVal?: string;
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
        date: '03 October',
        link: 'http://www.google.com',
      },
      {
        title: 'Second blog post',
        subtitle: 'This is still fun...',
        date: '03 December',
        link: 'http://www.google.com',
      },
    ],
  };

  private onSearchChange = (event) => this.setState({ searchVal: event.target.value });

  private getListItems = () => this.state.posts
    .filter((post: { title: '', subtitle: '', date: '' }) => {
      const title = post.title.toLowerCase();
      const subtitle = post.subtitle.toLowerCase();
      const date = post.date.toLowerCase();
      const val = this.state.searchVal.toLowerCase();

      const titleMatch = title.indexOf(val) !== -1;
      const subtitleMatch = subtitle.indexOf(val) !== -1;
      const dateMatch = date.indexOf(val) !== -1;

      return titleMatch || subtitleMatch || dateMatch;
    })
    .map((post, index) => <BlogListItem key={index} post={post} />);

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
