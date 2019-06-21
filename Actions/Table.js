import * as TYPES from '../Consts/Table';
import callAPI from '../utils/callAPI';


//#region Fetch All Tables
export const FetchAllTablesRequest = () => {
    return callAPI('GET', 'table', null)
    .then(res => {
        return res.data
    });
}
export const FetchAllTables = (tables) => {
    return {
        type: TYPES.FETCH_ALL_TABLES,
        tables
    }
}
//#endregion

//#region Delete Table
export const DeleteTableRequest = (dispatch, id) => {
    return callAPI('DELETE', `table/${id}`, null)
    .then(res => {
        dispatch(DeleteTable(id));
    });
}
const DeleteTable = (id) => {
    return {
        type: TYPES.DELETE_TABLE,
        id
    }
}
//#endregion

//#region Edit Table
export const EditTableRequest = (editTable) => {
    return callAPI('PUT', `table/${editTable.id}`, editTable);
}
export const EditTable = (editTable) => {
    return {
        type: TYPES.EDIT_TABLE,
        editTable
    };
}
//#endregion

//#region Add Table
export const AddTableRequest = (dispatch, table) => {
    return callAPI('POST', 'table', table)
    .then(res => {
        dispatch(AddTable(table));
    })
}
const AddTable = (table) => {
    return {
        type: TYPES.ADD_TABLE,
        table
    }
}
//#endregion