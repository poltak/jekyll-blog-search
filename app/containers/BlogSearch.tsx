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
