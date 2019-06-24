import * as TYPES from '../Consts/Order';
import callAPI from '../utils/callAPI';

//#region Add Order
export const AddFoodRequest = (food) => {
    return callAPI('POST', 'order', food);
}

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
//#endregion

//#region Fetch All Order
export const FetchAllOrderByIDTable = (idTable) => {
    return callAPI('GET', `order/${idTable}`, null)
    .then(res => {return res.data.foods});
};

export const FetchAllOrder = (foods) => {
    return {
        type: TYPES.FETCH_ALL_ORDER,
        foods
    }
}

//#endregion

//#region Pay
export const PayRequest = (dispatch) => {
    return callAPI('DELETE', 'order', null)
    .then(res => dispatch(Pay()));
}
const Pay = () => {
    return {
        type: TYPES.PAY_OK
    }
}
//#endregion
