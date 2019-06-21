import * as TYPES from '../Consts/Home';
import callAPI from '../utils/callAPI';

//#region Fetch All Dish
export const FetchAllDishRequest = () => {
    return callAPI('GET', 'dish', null)
    .then(res => {
        return res.data
    });
}
export const FetchAllDishes = (dishes) => {
    return {
        type: TYPES.FETCH_ALL_DISH, 
        dishes
    }
}
//#endregion

//#region Delete Dish
export const DeleteDishRequest = (dispatch, id) => {
    return callAPI('DELETE', `dish/${id}`, null)
    .then(res => {
        dispatch(DeleteDish(id));
    })
}
const DeleteDish = (id) => {
    return {
        type: TYPES.DELETE_DISH,
        id
    }
}
//#endregion
//#region Edit Dish
export const EditDishRequest = (dispatch, editDish) => {
    return callAPI('PUT', `dish/${editDish.id}`, editDish)
    .then(res => {
        dispatch(EditDish(editDish));
    })
}
const EditDish = (editDish) => {
    return {
        type: TYPES.EDIT_DISH,
        editDish
    }
}
//#endregion
//#region Add Dish
export const AddDishrequest = (dispatch, dish) => {
    return callAPI('POST', 'dish', dish)
    .then(res => {
        dispatch(AddDish(dish));
    })
}
const AddDish = (dish) => {
    return {
        type: TYPES.ADD_DISH,
        dish
    }
}
//#endregion