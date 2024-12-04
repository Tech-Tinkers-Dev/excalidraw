import React from "react";
import { Link } from "react-router-dom";

export default function List() {
  return (
    <>
      <h1>List</h1>
      <Link to="/edit">edit</Link>
    </>
  );
}
