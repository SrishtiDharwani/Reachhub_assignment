import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const CardHolder = ({ items }) => {
  const fallbackImg =
    "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      {items.map((item, k) => (
        <Card style={{ width: "25rem", margin: "2rem" }} key={k} border="info" >
          <Card.Img
            variant="top"
            src={
              item.url != ""
                ? item.url
                : "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"
            }
            placeholder={fallbackImg}
            width={286}
            height={200}
          />
          <Card.Body>
            <Card.Title>Example</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardHolder;
