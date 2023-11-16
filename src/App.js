import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card-container">{cards}</div>
    </div>
  );
}
