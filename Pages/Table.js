import React, { useReducer } from 'react';
import TableComponent from '../Components/Table/Table';
import Reducer, { initialState } from '../Reducer/Table';
import { DispatchContext, StateContext } from '../Contexts/Table';
function Table(props) {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <TableComponent navigation={props.navigation} />
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}
export default Table;