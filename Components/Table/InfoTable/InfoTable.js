import React, { useState, useMemo, useReducer } from 'react';
import { List, Button, Text } from 'native-base';
import InfoTableItem from './InfoTableItem/InfoTableItem';
import ShowOrder from './ShowOrder';
import { FetchAllDishRequest } from '../../../Actions/Home';
import Reducer, { initialState } from '../../../Reducer/Order';
import { OrderContext, OrderDispatchContext } from '../../../Contexts/Order';
function InfoTable(props) {
    const [orderState, orderDispatch] = useReducer(Reducer, initialState);
    const { navigation } = props;
    const [dishes, setDishes] = useState([]);
    const table = navigation.getParam('table');

    //#region FetchAll Dishes
    useMemo(() => {
        const FetchAll = () => {
            return FetchAllDishRequest().then(result => {
                setDishes(result);
            });
        }
        FetchAll();
    }, [dishes]);
    const elm = dishes.map((item, index) => {
        return <InfoTableItem
            key={index}
            item={item}
            table={table}
        />;
    });
    return (
        <OrderDispatchContext.Provider value={orderDispatch}>
            <OrderContext.Provider value={orderState}>
                    <Button warning full><Text>Thông Tin Món Ăn Của {table.name}</Text></Button>
                    <List>
                        {elm}
                    </List>
                    <ShowOrder />
            </OrderContext.Provider>
        </OrderDispatchContext.Provider>
    );
}
export default InfoTable;
