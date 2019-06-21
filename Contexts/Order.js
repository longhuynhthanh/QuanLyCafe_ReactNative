import {createContext, useContext} from 'react';
import {initialState} from '../Reducer/Order';
//#region Create Context
export const OrderContext = createContext(initialState);
export const OrderDispatchContext = createContext();
//#endregion

//#region useContext
export const useOrderState = () => {
    return useContext(OrderContext);
}
export const useOrderDispatch = () => {
    return useContext(OrderDispatchContext);
}
//#endregion


