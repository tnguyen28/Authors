import React, { useEffect, useState } from "react";
import axios from "axios";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";

function AuthorList(props) {
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => setAuthor(res.data));
  });

  return (
    <div>
      {author.map((author, idx) => {
        return (
          <p key={idx}>
            <h2>{author.name}</h2>
            <EditButton authorId={author._id} />
            <DeleteButton
              authorId={author._id}
              successCallback={() => props.removeFromDom(author._id)}
            />
          </p>
        );
      })}
    </div>
  );
}
export default AuthorList;
