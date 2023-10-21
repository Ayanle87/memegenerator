import React, { useState, useEffect } from "react";
import "./Meme.css";

export default function Meme() {
  // let url;

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((reps) => reps.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    // event.preventDefault();

    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-main">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="first text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          className="input"
          placeholder="second text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button
          onClick={handleClick}
          value={meme.randomImage}
          className="meme-btn"
        >
          Get a new image meme
        </button>
      </div>

      <div>
        <img
          src={meme.randomImage}
          alt="random memes"
          className="meme-images-url"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
