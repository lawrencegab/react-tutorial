import React, { useContext, useEffect } from "react";
import { ContactContext } from "../contexts/contactContext";

const TestContext = () => {
  const { username, setUsername } = useContext(ContactContext);
  
  useEffect(() => {
    setUsername("Bob");
  }, [setUsername]);

  return (
    <>
      <p>{`This is a test for ${username}`}</p>
      <input onChange={e => setUsername(e.target.value)}></input>
    </>
  );
};

export default TestContext;
