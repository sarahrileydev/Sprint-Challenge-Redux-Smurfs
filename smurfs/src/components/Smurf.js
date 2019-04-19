import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <p>{props.name}</p>
      <p>{props.height}</p>
      <p>{props.age}</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
