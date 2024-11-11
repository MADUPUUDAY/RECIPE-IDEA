import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import RecipeList from "./Components/RecipeList/RecipeList";
import RecipeDetails from "./Components/RecipeDetails/RecipeDetails";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false); 

  
  useEffect(() => {
    if (searchQuery !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setRecipes(data.meals);
            setNoResults(false); 
          } else {
            setRecipes([]);
            setNoResults(true); 
          }
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      setRecipes([]);
      setNoResults(false); 
    }
  }, [searchQuery]);


  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  return (
    <Router>
      <div className="App">
        <h1 className="app-title">Recipe Explorer</h1>

        <SearchBar onSearch={handleSearch} />

        {noResults && searchQuery !== "" && (
          <p className="no-results-message">No recipes found. Please try a different search.</p>
        )}

        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:idMeal" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
