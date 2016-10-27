/// <reference path="./BlogList.d.ts"/>

import * as React from 'react';
import { ListGroup } from 'react-bootstrap';

export const BlogListItem = ({ post: { url, title, subtitle, date } }: IBlogListItemProps) => (
  <a href={url} className="jekyll-blog-search__item list-group-item">
    <h2 className="jekyll-blog-search__item__title">{title}</h2>
    <h3 className="jekyll-blog-search__item__subtitle">{subtitle}</h3>
    <p className="jekyll-blog-search__item__date"><em>{date}</em></p>
  </a>
);

const BlogList = ({ children }) => (
  <div className="jekyll-blog-search__list">
    <ListGroup>
      {children}
    </ListGroup>
  </div>
);

export default BlogList;
