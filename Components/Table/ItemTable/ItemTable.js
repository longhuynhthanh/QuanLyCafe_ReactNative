import React from 'react';
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base';
function ItemTable(props) {
    const {Table, navigation} = props;

    //#region Function
    const handleItemClick = () => {
        navigation.navigate('InfoTable', {table: {
            name: Table.name,
            id: Table.id
        }});
    }
    //#endregion
    return (
        <ListItem avatar style={{marginTop:10, marginLeft:10}} onPress={handleItemClick}>
            <Left>
                <Thumbnail source={require('../../../public/images/dinner.png')} square />
            </Left>
            <Body>
                <Text>{Table.name}</Text>
                <Text note>{Table.status ? 'Có Người' : 'Không Có Người'}</Text>
            </Body>
        </ListItem>
    );
}
export default ItemTable;