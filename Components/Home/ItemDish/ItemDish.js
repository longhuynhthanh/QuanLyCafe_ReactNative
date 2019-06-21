import React from 'react';
import { ListItem, Left, Thumbnail, Body, Right, Text } from 'native-base';
function ItemDish(props) {
    const { dish } = props;
    return (
        <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: dish.imageURL }} square />
                <Body>
                    <Text>{dish.name}</Text>
                    <Text note>{dish.description}</Text>
                </Body>
                <Right>
                    <Text style={{marginRight:10}}>{dish.price}$</Text>
                </Right>
            </Left>
        </ListItem>
    );
}
export default ItemDish;