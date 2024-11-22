import { useReducer, useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import CardMeal from './CardMeal'
import { DetailMeal } from './DetailMeal'

const initialState = {
    meals: [], 
    loading: false,
    error: null
}


const mealsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                meals: action.payload.meals || []
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error || 'Unknown error occurred'
            }
        default:
            return state
    }
}

const Meals = () => {
    const [state, dispatch] = useReducer(mealsReducer, initialState)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const { meals, loading, error } = state


    const getMeals = useCallback(async () => {
        dispatch({ type: 'FETCH_START' })
        try {
            const response = await axios.get(
                'https://www.themealdb.com/api/json/v1/1/search.php?f=s'
            )
            if (response.status === 200) {
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: { meals: response.data.meals }
                })
            } else {
                dispatch({
                    type: 'FETCH_ERROR',
                    payload: { error: `Error: ${response.statusText}` }
                })
            }
        } catch (err) {
            dispatch({
                type: 'FETCH_ERROR',
                payload: { error: err.message || 'Network error' }
            })
        }
    }, [])


    useEffect(() => {
        getMeals()
    }, [getMeals])


    const handleShowRecipe = (meal) => setSelectedMeal(meal)
    const handleCloseModal = () => setSelectedMeal(null)


    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : meals && meals.length > 0 ? (
                meals.map((meal, index) => (
                    <CardMeal
                        key={index}
                        meal={meal}
                        onShowRecipe={handleShowRecipe}
                    />
                ))
            ) : (
                <p>No meals found.</p>
            )}
            {/* Render the modal with meal details when a meal is selected */}
            {selectedMeal && (
                <DetailMeal meal={selectedMeal} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Meals
