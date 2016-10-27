/// <reference path="../components/SearchBar.d.ts"/>

import * as React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ value, onChange }: ISearchBarProps) => (
  <div className="jekyll-blog-search__search">
    <form>
      <FormGroup controlId="formBasicText">
        <FormControl
          type="text"
          placeholder="Search posts..."
          value={value}
          onChange={onChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    </form>
  </div>
);

export default SearchBar;
