import React, { useEffect, useState } from "react";
import './Bell.css'
import Recipe from "./Recipe";
const Bell = () => {
  
     const [recipes, setRecipes] = useState([]);
    // const [search, setSearch] = useState("");
    // const [query, setQuery] = useState("")
      
      useEffect(  () => {
          getRecipes();
      },
      []);

      const getRecipes = async () => {
        //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${B_ID}&app_key=${B_KEY}`);
        //   const data = await response.json()
        //   console.log(data.hits);
        //   setRecipes(data.hits);
        // var url = 'http://newsapi.org/v2/top-headlines?' +
        //   'country=us&' +
        //   'apiKey=183e8f09883c4de484e86c082a3bda71';
        //      var req = new Request(url);
        //     fetch(req)
        //      .then(function(response) {
        //           console.log(response.json());
        //        })
                 const response = await fetch('http://newsapi.org/v2/top-headlines?' +
                   'country=in&' +
                   'apiKey=183e8f09883c4de484e86c082a3bda71');
                  const data = await response.json()
                  console.log(data.articles);
                  setRecipes(data.articles);
              };


// const updateSearch = e => {
// setSearch(e.target.value);

// }



// const getSearch = e => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch('');
// }

    return (
           <div className = "Bell">
          {/* <form className = "search-from" onSubmit={getSearch}> 


 key={recipe.recipe.label}
             title={recipe.recipe.label}
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}
             ingredients={recipe.recipe.ingredients}


              <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch}/>
              <button className="search-button" type = "submit">Search</button>

          </form> */}

          <div className="rec">
          {recipes.map(recipe =>(
             <Recipe 
             key={recipe.source.id}
             name={recipe.source.name}
             title={recipe.title}
             content={recipe.content}
             description={recipe.description}
        
            />
          ))}
          </div> 
           </div>
    );
}

export default Bell;