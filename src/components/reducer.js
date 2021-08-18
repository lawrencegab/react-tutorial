import React, {useContext} from "react"
import { ContactContext } from "../contexts/contactContext";

export default function Counter() {
    const { dispatch, state } = useContext(ContactContext);

    console.log(dispatch, state)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}