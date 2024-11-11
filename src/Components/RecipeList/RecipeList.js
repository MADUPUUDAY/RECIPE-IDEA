import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const navigate = useNavigate();

  if (!recipes || recipes.length === 0) {
    return <p></p>;
  }

  const handleRecipeClick = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="recipe-item"
          onClick={() => handleRecipeClick(recipe.idMeal)}
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
