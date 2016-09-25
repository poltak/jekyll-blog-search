import { render } from 'react-dom';
import * as React from 'react';
import BlogSearch from './containers/BlogSearch';
import { PostType } from './util/postFilter';

export default (initPosts: PostType[]) =>
  document.addEventListener('DOMContentLoaded', () => {
    render(<BlogSearch initPosts={initPosts} />, document.getElementById('#jekyll-blog-search'));
  });
