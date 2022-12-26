//UTILITIES
import React from "react";
//COMPONENT
import { PageNotFoundSVG } from "../../assets/icons/icons";

export function PageNotFound(props) {
  return (
    <div
      className="page-not-found"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <PageNotFoundSVG />
    </div>
  );
}

export default PageNotFound;
