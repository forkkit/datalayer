import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HelloLink1 = () => {
  const history = useHistory();
  function handleClick() {
    history.push("/test");
  }
  return (
    <>
      <Link to="/test">Go test with Link</Link>
      <button type="button" onClick={handleClick}>
        Go to test with history
      </button>
    </>
  );
};

export default HelloLink1;
