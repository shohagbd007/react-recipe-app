import React, {useState, useEffect} from 'react'
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = "76980686";
  const APP_KEY = "f2c031c08e80550afb1636c0c8176c5c";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe,key) => (
        <Recipe
          key={key}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}        
        />
      ))}
    </div>
  );
}

export default App;