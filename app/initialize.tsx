import { render } from 'react-dom';
import * as React from 'react';
import BlogSearch from './containers/BlogSearch';

document.addEventListener('DOMContentLoaded', () => {
  render(<BlogSearch />, document.getElementById('#jekyll-blog-search'));
});
