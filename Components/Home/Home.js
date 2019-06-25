import React, { useMemo } from 'react';
import { List, View } from 'native-base';
import { ListView } from 'react-native';
import ItemDish from './ItemDish/ItemDish';
import Edit from './Controls/EditDish';
import Delete from './Controls/DeleteDish';
import Add from './Controls/AddDish';
import { FetchAllDishRequest, EditDishRequest, AddDishrequest, FetchAllDishes } from '../../Actions/Home';
import { useDispatch, useGlobalState } from '../../Contexts/Home';
function Home() {
    const state = useGlobalState();
    const dispatch = useDispatch();
    useMemo(() => {
        const FetchAll = () => {
            return FetchAllDishRequest().then(result => dispatch(FetchAllDishes(result)));
        }
        FetchAll();
    }, [state.dishes]);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    //#region Function
    const EditDish = (newDish) => {
        return EditDishRequest(dispatch, newDish);
    };
    const AddDish = (dish) => {
        return AddDishrequest(dispatch, dish);
    };
    //#endregion
    return (
        <View style={{ flex: 1 }}>
            <List
                style={{ marginBottom: 20 }}
                leftOpenValue={75}
                rightOpenValue={-75}
                dataSource={ds.cloneWithRows(state.dishes)}
                renderRow={data =>
                    <ItemDish
                        dish={data} />}
                renderLeftHiddenRow={data =>
                    <Edit data={data} EditDish={EditDish} />}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                    <Delete id={data.id} secId={secId} rowId={rowId} rowMap={rowMap} />}
            />
            <Add AddDish={AddDish} />
        </View>
    );
}
export default Home;