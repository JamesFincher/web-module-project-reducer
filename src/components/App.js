import React from "react";
import reducer, { initialState } from "../reducers/index";
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memClear,
  memStore,
  memRecall,
  MEM_CLEAR,
} from "../actions/index";
import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  //useReducer is the equivalent of const [state, dispatch] = useState(initialState);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //is called by onClick to handle the dispatch to the reducer
  const incrementHandle = (e) => {
    console.log(e.target.value);
    dispatch(addOne(e.target.value));
  };

  const numHandle = (e) => {
    console.log(e.target.value);
    dispatch(applyNumber(e.target.value));
  };

  const opHandle = (e) => {
    console.log("Operator being updated to....", e.target.value);
    dispatch(changeOperation(e.target.value));
  };

  const clearDisplayHandle = () => {
    dispatch(clearDisplay());
  };
  const memClearHandle = () => {
    dispatch(memClear());
  };

  const memPlusHandle = () => {
    dispatch(memStore());
  };
  const memRecallHandle = () => {
    dispatch(memRecall());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => memPlusHandle()} />
              <CalcButton value={"MR"} onClick={() => memRecallHandle()} />
              <CalcButton value={"MC"} onClick={() => memClearHandle()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => numHandle(e)} />
              <CalcButton value={2} onClick={(e) => numHandle(e)} />
              <CalcButton value={3} onClick={(e) => numHandle(e)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => numHandle(e)} />
              <CalcButton value={5} onClick={(e) => numHandle(e)} />
              <CalcButton value={6} onClick={(e) => numHandle(e)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => numHandle(e)} />
              <CalcButton value={8} onClick={(e) => numHandle(e)} />
              <CalcButton value={9} onClick={(e) => numHandle(e)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => opHandle(e)} />
              <CalcButton value={"*"} onClick={(e) => opHandle(e)} />
              <CalcButton value={"-"} onClick={(e) => opHandle(e)} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearDisplayHandle()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
