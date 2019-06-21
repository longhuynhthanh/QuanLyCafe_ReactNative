import React, {useCallback} from 'react';
import {Button, Icon} from 'native-base';
import {useDispatch} from '../../../Contexts/Table';
import {DeleteTableRequest} from '../../../Actions/Table';
function DeleteTable(props) {
    const dispatch = useDispatch();
    const { id, secId, rowId, rowMap } = props;
    const deleteRow = useCallback((secId, rowId, rowMap, id) => {
        rowMap[`${secId}${rowId}`].props.closeRow();
        return DeleteTableRequest(dispatch, id);
    }, [dispatch]);
    return (
        <Button full danger onPress={() => deleteRow(secId, rowId, rowMap, id)} style={{ marginTop: 10 }}>
            <Icon active name="trash" />
        </Button>
    );
}

export default DeleteTable;