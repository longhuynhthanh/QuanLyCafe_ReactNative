import React, {useMemo} from 'react';
import {Button, Icon} from 'native-base';
import {useDispatch} from '../../../Contexts/Home';
import {DeleteDishRequest} from '../../../Actions/Home';
function DeleteDish(props) {
    const {id, secId, rowId, rowMap} = props;
    const dispatch = useDispatch();
    const deleteRow =  useMemo((secId, rowId, rowMap, id) => {
        rowMap[`${secId}${rowId}`].props.closeRow();
        return DeleteDishRequest(dispatch, id);
    }, [dispatch]);
    return (
        <Button full danger onPress={() => deleteRow(secId, rowId, rowMap, id)} style={{ marginTop: 15 }}>
            <Icon active name="trash" />
        </Button>
    );
}
export default DeleteDish;