import * as React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ value = '', handleChange = f => f }) => (
  <div className="jekyll-blog-search__search">
    <form>
      <FormGroup controlId="formBasicText">
        <FormControl
          type="text"
          placeholder="Post name..."
          value={value}
          onChange={handleChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    </form>
  </div>
);

export default SearchBar;
