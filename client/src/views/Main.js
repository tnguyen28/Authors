import React, { useEffect, useState } from "react";
import AuthorList from "../components/AuthorList";
import { Link } from "@reach/router";
import axios from "axios";

function Main() {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/create">Add an author</Link>
      <hr />
      {loaded && <AuthorList author={author} />}
    </div>
  );
}
export default Main;
