import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "25px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
