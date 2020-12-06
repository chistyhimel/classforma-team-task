import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DocumentView.css";
import { documents, annotations } from "../../documentData";
import { Col, Container, Form, Row } from "react-bootstrap";
import AnnotationBar from "./AnnotationBar";

const DocumentView = () => {
  const [document, setDocument] = useState({});
  const [annotation, setAnnotation] = useState(annotations);

  const { id } = useParams();
  useEffect(() => {
    let selectedDocument = documents.find((document) => document.id == id);

    setDocument(selectedDocument);
  }, []);

  const removeAnnotation = (data) => {
    const removeElement = annotation.filter(
      (annotation) => annotation.toLocaleLowerCase() != data.toLocaleLowerCase()
    );
    setAnnotation(removeElement);
  };

  const handleMouseUp = () => {
    let selectedText = window.getSelection().toString();
    let newWord = [...annotation, selectedText];
    setAnnotation(newWord);
  };
  return (
    <Container className="documentView">
      <Row>
        <Col md={7} className="documentView__leftside">
          <h1>{document.title}</h1>

          <Form>
            <Form.Group>
              <Form.Control size="lg" type="email" placeholder="metadata" />
            </Form.Group>
          </Form>

          <p className="documentView__textbox" onMouseUp={handleMouseUp}>
            {document.description}
          </p>
        </Col>
        <Col md={5} className="documentView__Rightside">
          <AnnotationBar
            removeAnnotation={removeAnnotation}
            annotation={annotation}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentView;
