import React from "react";

const Tags = ({ tagName, highlight }) => {
  return <div className={`tag ${highlight}`}>{tagName}</div>;
};

export default Tags;
