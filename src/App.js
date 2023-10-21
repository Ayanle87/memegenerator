import React from "react";
import "./index.css";
import Header from "./components/Header";
import "./components/Header.css";
import Meme from "./components/Meme";
import "./components/Meme.css";
import memesData from "./memesData";

export default function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
