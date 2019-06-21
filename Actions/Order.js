import * as TYPES from '../Consts/Order';

export const AddFood = (food) => {
    return {
        type: TYPES.ADD_FOOD,
        food
    }
}

export const MinusFood = (food) => {
    return {
        type: TYPES.MINUS_FOOD,
        food
    }
}
