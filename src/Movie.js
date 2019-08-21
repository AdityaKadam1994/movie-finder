import React from "react";

const Movie = ({ key, title, type, year, img, imdb }) => {
  return (
    <div className="wrapper" key={key}>
      <div className="card">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>
          <strong>Imdb ID :</strong> {imdb}
        </p>
        <p>
          <strong>Type :</strong> {type}
        </p>
        <p>
          <strong>Year :</strong> {year}
        </p>
      </div>
    </div>
  );
};

export default Movie;
