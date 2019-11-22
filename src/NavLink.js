import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          textDecoration: isCurrent ? "underline" : "none",
          color: isCurrent ? "var(--onyx)" : "var(--steel)"
        }
      };
    }}
  />
);

export default NavLink;
