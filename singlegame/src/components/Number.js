import React from "react";
import classNames from "classnames";

export default function Number({ entierObjet,  onClick}) {
  return (
      <div
      onClick={onClick}
      className="mx-3 my-2 num-title "
      style={{
        backgroundColor: entierObjet.backgroundColor,
        border: entierObjet.isClicked && "4px solid black",
        borderStyle: entierObjet.isClicked && "dashed",
      }}
    >
      {entierObjet.title}
    </div>
  );
}
