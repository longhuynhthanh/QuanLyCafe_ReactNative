import * as TYPES from '../Consts/Table';

export const initialState = {
    tables: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_ALL_TABLES: {
            return {...state, tables: action.tables};
        }
        case TYPES.ADD_TABLE: {
            state.tables.push(action.table);
            return {...state};
        }
        case TYPES.DELETE_TABLE: {
            const newTables = state.tables.filter(table => table.id !== action.id);
            return {...state, tables: newTables};
        }
        case TYPES.EDIT_TABLE: {
            const index = state.tables.findIndex(table => table.id === action.editTable.id);
            state.tables[index] = {...state.tables[index], name: action.editTable.name, status: action.editTable.status};
            return {...state};
        }
        default: return {...state};
    }
}

export default Reducer;