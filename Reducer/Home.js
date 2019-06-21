import * as TYPE_HOME from '../Consts/Home';
export const initialState = {
    dishes: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_HOME.FETCH_ALL_DISH: {
            return {...state, dishes: action.dishes};
        }
        case TYPE_HOME.DELETE_DISH: {
            const newDishes = state.dishes.filter(dish => dish.id !== action.id);
            return {...state, dishes: newDishes};
        }
        case TYPE_HOME.EDIT_DISH: {
            const index = state.dishes.findIndex(dish => dish.id === action.editDish.id);
            state.dishes[index] = {...state.dishes[index], imageURL: action.editDish.imageURL, name: action.editDish.name, description: action.editDish.description, price: action.editDish.price};
            return {...state};
        }
        case TYPE_HOME.ADD_DISH: {
            state.dishes.push(action.dish);
            return {...state};
        }
        default: return {...state};
    }
};

export default Reducer;