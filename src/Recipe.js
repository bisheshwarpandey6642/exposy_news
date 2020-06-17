import React from 'react';

const Recipe = ({title, content, description, name}) => {

    return (
    //    <div>
    //        <h1>
    //            {title}
    //        </h1>
    //        <ul>
    //            {ingredients.map(ingredient =>
    //             (
    //             <li>{ingredient.text}</li>      {title, calories, image, ingredients}
    //             ))}
    //        </ul>
    //        <p>{calories}</p>
    //        <img src={image} alt="/" />
    //    </div>
    <div>
        <h1>{title}</h1>
    <h3><b>source===</b>{name}</h3>
        <p><b>CONTENT == </b>  {content}</p>
        <p><b>DESCRIPTION == </b>  {description}</p>
    </div>
    );
}


export default Recipe;