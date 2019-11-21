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
          color: isCurrent ? "var(--onyx)" : "var(--steel)",
          borderLeft: isCurrent ? "5px solid var(--steel)" : "5px solid transparent",
          paddingLeft: "3px",
          textDecoration: "none",
        }
      };
    }}
  />
);

export default NavLink;
