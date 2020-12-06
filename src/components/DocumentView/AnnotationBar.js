import React, { useState } from "react";
import { documents, annotations } from "../../documentData";
const AnnotationBar = ({ removeAnnotation, annotation }) => {
  return (
    <div className="annotationBar">
      <h2>
        Current <br /> annotation
      </h2>
      {annotation.map((annotation) => (
        <li onClick={() => removeAnnotation(annotation)}>{annotation}</li>
      ))}
    </div>
  );
};

export default AnnotationBar;
