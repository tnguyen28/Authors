import React from "react";
import { Link } from "@reach/router";

function EditButton(props) {
  const { authorId } = props;
  return (
    <Link to={"/" + authorId + "/edit"}>
      <button>Edit</button>
    </Link>
  );
}

export default EditButton;
