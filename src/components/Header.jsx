import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon style={{ margin: "0 0.25rem 0 0" }} />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
