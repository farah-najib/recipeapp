import { useReducer, useEffect ,useCallback,useState } from 'react'
import axios from "axios";
import CardMeal from "./CardMeal";
import {DetailMeal} from "./DetailMeal"

const initialState = {
    meals: [],
    loading: false,
    error: null
}

const mealsReducer = (state, action) => {
    switch (action.type) {
        case -1: {
            return {
                ...state,
                loading: true
            }
        }
        case 200: {
            return {
                ...state,
                loading: false,
                meals: action.data.meals
            }
        }
        default: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
    }
}


const Meals = () => {
    const [dispatch, setDispatch] = useReducer(mealsReducer, initialState)
    const [selectedMeal, setSelectedMeal] = useState(null) // State for selected meal
    const { meals, loading, error } = dispatch

    const getMeals = useCallback(async () => {

        const response = await axios.get(
            'https:/www.themealdb.com/api/json/v1/1/search.php?f=a'
        )
        if (response.status === 200)
            setDispatch({ type: response.status, data: response.data })
        else setDispatch({ type: response.status, error: response.error })
    }, [])

    useEffect(() => {
        getMeals()
    }, [getMeals])
     const handleShowRecipe = (meal) => {
         setSelectedMeal(meal) // Set the selected meal when button is clicked
     }
        const handleCloseModal = () => {
            setSelectedMeal(null) // Close modal by resetting selected meal
        }

    return (
        <div>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : meals.length !== 0 ? (
                meals.map((meal, index) => (
                    <CardMeal
                        key={index}
                        meal={meal}
                        onShowRecipe={handleShowRecipe}
                    />
                ))
            ) : (
                <></>
            )}{' '}
            {/* Render the modal with meal details when a meal is selected */}
            {selectedMeal && (
                <DetailMeal meal={selectedMeal} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Meals
