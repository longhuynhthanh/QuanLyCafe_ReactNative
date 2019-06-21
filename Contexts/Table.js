import {createContext, useContext} from 'react';
import {initialState} from '../Reducer/Table';

//#region Create Context
export const StateContext = createContext(initialState);
export const DispatchContext = createContext();
//#endregion

//#region useContext
export const useGlobalState = () => {
    return useContext(StateContext);
}
export const useDispatch = () => {
    return useContext(DispatchContext);
}
//#endregion