import { render } from 'react-dom';
import * as React from 'react';
import BlogSearch from './containers/BlogSearch';
import { PostType } from './util/post';

export default (initPosts: PostType[], searchAtts: string[]) =>
  document.addEventListener('DOMContentLoaded', () => render(
      <BlogSearch initPosts={initPosts} searchAtts={searchAtts} />,
      document.getElementById('#jekyll-blog-search')));
