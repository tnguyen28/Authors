import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
function Create(props) {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/author/create").then((res) => {
      setAuthor(res.data);
      setLoaded(true);
    });
  }, []);

  const createAuthor = (a) => {
    axios
      .post("http://localhost:8000/api/author/create", a)
      .then((res) => {
        setAuthor([...author, res.data]);
      })
      .then((res) => console.log(res))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }

        setErrors(errorArr);
      });
  };

  return (
    <div>
      <h3>Create an author</h3>
      {loaded && (
        <>
          <AuthorForm
            onSubmitProp={createAuthor}
            initialName={""}
            errors={errors}
          />
        </>
      )}
    </div>
  );
}

export default Create;
