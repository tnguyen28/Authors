import React from "react";
import { Link } from "@reach/router";
function NotFound() {
  return (
    <div>
      <h3>Author not found...</h3>
      <Link to="/create">Click here to add an author</Link>
    </div>
  );
}

export default NotFound;
