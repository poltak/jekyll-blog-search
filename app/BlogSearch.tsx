import * as React from 'react';
import { SearchBar, BlogList } from './components';

interface Props {}
interface State {}

class BlogSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="jekyll-blog-search">
        <SearchBar />
        <BlogList />
      </div>
    );
  }
}

export default BlogSearch;
