import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { navigate } from "@reach/router";

function Update(props) {
  const { id } = props;
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/" + id)
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateAuthor = (author) => {
    axios
      .put("http://localhost:8000/api/author/" + id, author)
      .then((res) => navigate("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        console.log(err.response.data.errors);
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <h3>Edit this author</h3>
      {loaded && (
        <>
          <AuthorForm
            onSubmitProp={updateAuthor}
            initialName={author.name}
            errors={errors}
          />
        </>
      )}
    </div>
  );
}

export default Update;
