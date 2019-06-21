import * as TYPES from '../Consts/Order';
export const initialState = {
    foods: []
};
// foods: [
//     {
//         food: {},
//         count: 0
//     }
// ]
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_FOOD: {
            const index = state.foods.findIndex(item => item.food.id === action.food.id);
            if (index !== -1) {
                state.foods[index] = { ...state.foods[index], count: state.foods[index].count + 1 };
            } else {
                state.foods.push({ food: action.food, count: 1 });
            }
            return { ...state };
        }
        case TYPES.MINUS_FOOD: {
            const index = state.foods.findIndex(item => item.food.id === action.food.id);
            state.foods[index] = { ...state.foods[index], count: state.foods[index].count - 1 };
            if (state.foods[index].count === 0) {
                state.foods.slice(index, 1);
            }
            return { ...state };
        }
        case TYPES.PAY_OK: {
            return initialState;
        }
        default: return { ...state };
    }
}

export default Reducer;