import React, { useState, useMemo } from 'react';
import { AddFood, MinusFood } from '../../../../Actions/Order';
import { EditTableRequest } from '../../../../Actions/Table';
import { useOrderDispatch } from '../../../../Contexts/Order';
import { ListItem, Left, Thumbnail, Body, Text, Right, Button } from 'native-base';
function InfoTableItem(props) {
    const { item, table, foods } = props;
    const [count, setCount] = useState(0);
    const orderDispatch = useOrderDispatch();

    useMemo(() => {
        if (foods.length > 0) {
            for (let index = 0; index < foods.length; index++) {
                if (item.id === foods[index].food.id) {
                    setCount(foods[index].count);
                    break;
                }
            }
        }
    }, [foods]);
    //#region Function
    const handleAddFood = () => {
        setCount(count + 1);
        orderDispatch(AddFood(item));
        if (count === 1) {
            const editTable = { id: table.id, name: table.name, status: true };
            return EditTableRequest(editTable);
        }
    };
    const handleMinusFood = () => {
        setCount(count - 1);
        orderDispatch(MinusFood(item));
        if (count === 0) {
            const editTable = { id: table.id, name: table.name, status: false };
            return EditTableRequest(editTable);
        }
    }

    //#endregion
    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: item.imageURL }} />
            </Left>
            <Body>
                <Text>{item.name}</Text>
                <Text note numberOfLines={1}>{item.description}</Text>
                <Text style={{ color: 'red' }}>{item.price}$</Text>
            </Body>
            <Right style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Button disabled={count < 1 ? true : false} rounded style={{ opacity: count < 1 ? 0 : 1 }} onPress={handleMinusFood}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>-</Text>
                </Button>
                <Text style={{ marginLeft: 5, marginRight: 5, fontWeight: 'bold', opacity: count < 1 ? 0 : 1 }}>{count}</Text>
                <Button rounded onPress={handleAddFood}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>+</Text>
                </Button>
            </Right>
        </ListItem>
    );
}
export default InfoTableItem;