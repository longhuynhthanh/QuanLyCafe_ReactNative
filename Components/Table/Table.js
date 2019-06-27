import React, { useMemo } from 'react';
import { List } from 'native-base';
import { ListView } from 'react-native';
import { useGlobalState, useDispatch } from '../../Contexts/Table';
import { FetchAllTablesRequest, AddTableRequest, EditTableRequest, FetchAllTables, EditTable } from '../../Actions/Table';
import ItemTable from './ItemTable/ItemTable';
import Delete from './Controls/DeleteTable';
import Add from './Controls/AddTable';
import Edit from './Controls/EditTable';
function Table(props) {
    const state = useGlobalState();
    const dispatch = useDispatch();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    useMemo(() => {
        const FetchAll = () => {
            return FetchAllTablesRequest().then(result => dispatch(FetchAllTables(result)));
        }
        FetchAll();
    }, [state.tables]);
    //#region Function
    const AddTable = (table) => {
        return AddTableRequest(dispatch, table);
    };
    const EditTable2 = (table) => {
        return EditTableRequest(table).then(res => dispatch(EditTable(table)));
    };
    //#endregion
    return (
        <React.Fragment>
            <List
                leftOpenValue={75}
                rightOpenValue={-75}
                dataSource={ds.cloneWithRows(state.tables)}
                renderRow={data =>
                    <ItemTable
                        Table={data} navigation={props.navigation} />}
                renderLeftHiddenRow={data => <Edit data={data} EditTable={EditTable2} />}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                    <Delete id={data.id} secId={secId} rowId={rowId} rowMap={rowMap} />}
            />
            <Add AddTable={AddTable} />
        </React.Fragment>
    );
}
export default Table;