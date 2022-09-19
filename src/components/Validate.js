import React from "react";
import Validation from "./Validation";

function Validate() {
  const func = () => {
    console.log("hello rohit");
  };
  return (
    <div>
        <h1>2.</h1>
      <Validation
        hello={"hello"} //proptype string
        obj={{ name: "Rohit" }} //proptype object
        num={10} //proptype number
        bool={false} //proptype boolean
        fun={func} //proptype finction
        symbol={Symbol("m")} //proptype symbol
      />
    </div>
  );
}

export default Validate;
