import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./index.scss";

export const Error = () => {
  const { isError } = useContext(DataContext);
  return (
    <div className="isError">
      <p>{isError}</p>
    </div>
  );
};
