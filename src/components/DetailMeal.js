import {
    ModalBackdrop,
    ModalContainer,
    CloseButton
} from './styles/DetailPage.styled'

const DetailMeal = ({ meal, onClose }) => {
    return (
        <ModalBackdrop>
            <ModalContainer>
                <CloseButton onClick={onClose}>Close</CloseButton>
                <h1>{meal.strMeal}</h1>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={{ width: '100%' }}
                />
                <p>
                    <strong>Category:</strong> {meal.strCategory}
                </p>
                <p>
                    <strong>Area:</strong> {meal.strArea}
                </p>
                <p>
                    <strong>Instructions:</strong>
                </p>
                <p>{meal.strInstructions}</p>
                <p>
                    <strong>Ingredients:</strong>
                </p>
                <ul>
                    {Object.keys(meal)
                        .filter(
                            (key) => key.includes('strIngredient') && meal[key]
                        )
                        .map((key, index) => (
                            <li key={index}>{meal[key]}</li>
                        ))}
                </ul>
            </ModalContainer>
        </ModalBackdrop>
    )
}

export { DetailMeal }
