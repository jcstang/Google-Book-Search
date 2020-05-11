import React from "react";
import "./Thumbnail.css";

function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Recipe-Image"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
