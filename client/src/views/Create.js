import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { navigate } from "@reach/router";
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

  const createAuthor = ({ name }) => {
    axios
      .post("http://localhost:8000/api/author/create", { name })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          const errorResponse = err.response.data.errors.name;
          console.log(err.response.data.errors.name);
          const errorArr = [];
          for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message);
          }

          setErrors(errorArr);
        }
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
