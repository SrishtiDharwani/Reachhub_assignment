import React from "react";
import Card from "./Card";

const List = () => {
  const items = [
    {
      url: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      desc: "ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange",
    },
    {
      url: "https://images.unsplash.com/photo-1562043236-559c3b65a6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      desc: "ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange",
    },
    {
      url: "",
      desc: "ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>List</h1>
      <Card items={items} />
    </div>
  );
};

export default List;
