import React from "react";
import Button from "../Button/Button";

function RemoveBookButton(props) {
  return (
    <Button
      type="danger"
      className="delete-btn"
      {...props}
      role="button"
      tabIndex="0"
    >
      Delete
    </Button>
  );
}

export default RemoveBookButton;