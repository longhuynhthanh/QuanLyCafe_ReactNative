import React, {useState} from 'react';
import { useOrderState } from '../../../Contexts/Order';
import { Button, Text } from 'native-base';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
function ShowOrder() {
    const orderState = useOrderState();
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    //#region Function
    const handlePay = () => {
        alert('Đã Click Vào');
        setTimeout(() => {
            alert('Đã truyền vào')
        }, 200);
    }
    //#endregion

    for (let index = 0; index < orderState.foods.length; index++) {
        // totalCount += orderState.foods[index].count;
        setTotalCount(totalCount + orderState.foods[index].count);
        // totalPrice += orderState.foods[index].food.price * orderState.foods[index].count;
        setTotalPrice(totalPrice + orderState.foods[index].food.price * orderState.foods[index].count);
    }
    return (
        <Button full disabled={totalCount > 0 ? false : true} success style={{ position: 'absolute', bottom: 5, alignSelf: 'flex-end', width: width, borderRadius: 10, opacity: totalCount > 0 ? 1 : 0 }} onPress={handlePay}>
            <Text style={{ color: '#000000', fontWeight: 'bold' }}>SL: {totalCount} -------- Tổng Tiền: {totalPrice}$</Text>
        </Button>
    );
}
export default ShowOrder;