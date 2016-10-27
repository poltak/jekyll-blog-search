/// <reference path="./components/BlogList.d.ts"/>

import { render } from 'react-dom';
import * as React from 'react';
import BlogSearch from './containers/BlogSearch';

export default (initPosts: IBlogPost[], searchAtts: string[]) =>
  document.addEventListener('DOMContentLoaded', () => render(
      <BlogSearch initPosts={initPosts} searchAtts={searchAtts} />,
      document.getElementById('#jekyll-blog-search')));
