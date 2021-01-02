import React from 'react';
import Style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><strong>Calories:</strong> {calories}</p>
            <img src={image} className={Style.img} alt="" />
        </div>
    )
}

export default Recipe
