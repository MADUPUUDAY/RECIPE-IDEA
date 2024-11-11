import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MoreLinks from "../MoreLinks/MoreLinks"; 
import "./RecipeDetail.css"; 

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (idMeal) {
      setLoading(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setRecipe(data.meals[0]);
          } else {
            setError("Recipe not found.");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recipe details:", error);
          setError("Error fetching recipe details.");
          setLoading(false);
        });
    }
  }, [idMeal]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  
  const instructions = recipe.strInstructions
    .split("STEP")
    .filter(Boolean)
    .map((step, index) => `STEP ${index + 1}: ${step.trim()}`);

  return (
    <div className="recipe-details-container">
      <div className="recipe-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="recipe-instructions">
        <h2>{recipe.strMeal}</h2>
        <h3>Instructions</h3>
        {instructions.map((step, index) => (
          <p key={index} className="recipe-step">
            {step}
          </p>
        ))}
      </div>
      <h4 className="findmoreheading">Find more:</h4>

      
      <div className="more-links">
        <h4></h4>
        <div className="links">
          <a href={`https://www.youtube.com/results?search_query=${recipe.strMeal}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
          <a href={`https://en.wikipedia.org/wiki/${recipe.strMeal}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-wikipedia-w"></i> Wikipedia
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
