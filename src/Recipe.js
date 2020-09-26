import React from "react";
import style from "./recipes.module.css";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(a => (
          <li>{a.text}</li>
        ))}
      </ol>
      <p>
        <strong>Calories :</strong> {Math.trunc(calories)}
      </p>
      <a href={url} target="_blank">
        <img className={style.image} src={image} alt={title}></img>
      </a>
    </div>
  );
};

export default Recipe;
