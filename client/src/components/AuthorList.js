import React, { useState } from "react";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";

function AuthorList(props) {
  const [author, setAuthor] = useState(props.author);

  const removeFromDom = (authorId) => {
    setAuthor(author.filter((a) => a._id !== authorId));
  };
  return (
    <div>
      {author.map((author, idx) => {
        return (
          <div key={idx}>
            <h2>{author.name}</h2>
            <EditButton authorId={author._id} />
            <DeleteButton
              authorId={author._id}
              successCallback={() => removeFromDom(author._id)}
            />
          </div>
        );
      })}
    </div>
  );
}
export default AuthorList;
