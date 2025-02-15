import React, { useState } from "react";

const mainSection = () => {
  const [count, setCount] = useState();
  return <div>Count: {count}</div>;
};

export default mainSection;
