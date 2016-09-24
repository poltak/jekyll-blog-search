import * as React from 'react';
import { BlogList, BlogListItem, SearchBar } from '../components';

interface Props { posts: [Object]; }
interface State {}

class BlogSearchContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  private static defaultProps: Props = {
    posts: [
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

  private getListItems = () =>
    this.props.posts.map((post, index) => <BlogListItem key={index} post={post} />);

  public render() {
    return (
      <div className="jekyll-blog-search">
        <SearchBar />
        <BlogList>
          {this.getListItems()}
        </BlogList>
      </div>
    );
  }
}

export default BlogSearchContainer;
