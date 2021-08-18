import React, { useReducer} from "react";
import { ContactContext } from "./contexts/contactContext";
import TestContext from "./components/testContext";
import TestContextTwo from "./components/testContextTwo";
import Reducer from "./components/reducer"
import RenderTable from "./components/renderTable";

const initialState = {count: 0};

function reducer(state, action) {
    console.log(state, action)
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {
  const [username, setUsername] = React.useState("Bob");
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, dispatch)
  return (
    <div className="App">
      <p>Context API Component Example</p>
      <ContactContext.Provider value={{ username, setUsername, state, dispatch}}>
        <TestContext></TestContext>
        <TestContextTwo></TestContextTwo>
        <Reducer></Reducer>
        </ContactContext.Provider>
        
      <p>---------------------------------------</p>
      <p>Table Component Example</p>
      <RenderTable></RenderTable>
    </div>
  );
}

export default App;
