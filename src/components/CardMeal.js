import React from 'react'
import { StyleCard } from './styles/Card.styled'
import Button from "./styles/Button";


const CardMeal = ({ meal }) => {
    return (
        <StyleCard>
            <img src={meal.strMealThumb} alt="" />
            <h1>{meal.strMeal}</h1>
            <p>
            {meal.strCategory}, {meal.strArea}, {meal.strTags}
            </p>
            <Button >Show Recipe</Button>
        </StyleCard>
    )
}

export default CardMeal
