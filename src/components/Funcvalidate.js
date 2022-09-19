import React, { useState } from "react";
import FuncData from "./FuncData";

function Funcvalidate() {
  const [name, setName] = useState();
  const [marks, setMarks] = useState(0);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(0);
  const btnHandler = () => {
    setShow(1);
  };
  return (
    <div>
      <h2>Input Form</h2>
      <div style={{ display: "table", borderSpacing: "10px" }}>
        <div style={{ display: "table-row" }}>
          <label style={{ display: "table-cell" }}>Name :</label>
          <input placeholder="required string"
            style={{ display: "table-cell" }}
            onChange={(e) => {
              setName(e.target.value);
              setShow(0);
            }}
          />
        </div>

        <div style={{ display: "table-row" }}>
          <label style={{ display: "table-cell" }}>Marks :</label>
          <input
            style={{ display: "table-cell" }}
            onChange={(e) => {
              setMarks(+e.target.value);
              setShow(0);
            }}
          />
        </div>

        <div style={{ display: "table-row" }}>
          <label style={{ display: "table-cell" }}>Total :</label>
          <input
            style={{ display: "table-cell" }}
            onChange={(e) => {
              setTotal(+e.target.value);
              setShow(0);
            }}
          />
        </div>
        <button onClick={btnHandler}>Submit</button>
      </div>
      <p>* In case a of error value (ex. Nan) see console for error</p>
      {show === 1 && <FuncData name={name} marks={marks} total={total} />}
    </div>
  );
}

export default Funcvalidate;
