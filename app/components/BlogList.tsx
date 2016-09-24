import * as React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const BlogListItem = ({ post: { title = '', subtitle = '', date = new Date(), link = '' } }) => (
  <ListGroupItem className="jekyll-blog-search__item" href={link} header={title}>
    <h3>{subtitle}</h3>
    <p><em>{date}</em></p>
  </ListGroupItem>
);

const BlogList = ({ children = [] }) => (
  <div className="jekyll-blog-search__list">
    <ListGroup>
      {children}
    </ListGroup>
  </div>
);

export default BlogList;
