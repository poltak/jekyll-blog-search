import * as React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ value = '', onChange = f => f }) => (
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
