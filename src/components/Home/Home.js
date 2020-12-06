import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { documents } from "../../documentData";
import "./Home.css";

const Home = () => {
  //
  return (
    <div className="home">
      <div className="home__container">
        <Form>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Type search term..."
            />
          </Form.Group>
        </Form>

        <ListGroup>
          {documents.map((document, idx) => (
            <ListGroup.Item key={idx}>
              {" "}
              <Link to={`/document/${document.id}`}>{document.title}</Link>{" "}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Home;
