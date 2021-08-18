import React, { useContext } from "react";
import { ContactContext } from "../contexts/contactContext";

const TestContextTwo = () => {
  const { username } = useContext(ContactContext);

  return (
    <>
      <p>{`This is a test for Test Context Two ${username}`}</p>
    </>
  );
};

export default TestContextTwo;
