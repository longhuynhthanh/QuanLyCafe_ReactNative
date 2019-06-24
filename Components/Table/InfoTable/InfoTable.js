import React, { useState, useMemo, useReducer } from 'react';
import { List, Button, Text } from 'native-base';
import InfoTableItem from './InfoTableItem/InfoTableItem';
import ShowOrder from './ShowOrder';
import { FetchAllDishRequest } from '../../../Actions/Home';
import Reducer, { initialState } from '../../../Reducer/Order';
import { OrderContext, OrderDispatchContext } from '../../../Contexts/Order';
import {FetchAllOrderByIDTable, FetchAllOrder} from '../../../Actions/Order';
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
    //#endregion

    //#region FetchAll Foods By IDTable
    useMemo(() => {
        const FetchAllFoodsByIDTable = () => {
            return FetchAllOrderByIDTable(table.id)
            .then(result => orderDispatch(FetchAllOrder(result)));
        }
        FetchAllFoodsByIDTable();
    }, [orderState.foods]);
    //#endregion

    const elm = dishes.map((item, index) => {
        return <InfoTableItem
            key={index}
            item={item}
            table={table}
            foods={orderState.foods}
        />;
    });
    return (
        <OrderDispatchContext.Provider value={orderDispatch}>
            <OrderContext.Provider value={orderState}>
                <React.Fragment>
                    <Button warning full><Text>Thông Tin Món Ăn Của {table.name}</Text></Button>
                    <List>
                        {elm}
                    </List>
                    <ShowOrder />
                </React.Fragment>
            </OrderContext.Provider>
        </OrderDispatchContext.Provider>
    );
}
export default InfoTable;
