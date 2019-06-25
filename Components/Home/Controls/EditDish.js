import React, { useState, useCallback } from 'react';
import { Button, Text, View, Icon, Form, Item } from 'native-base';
import { Modal, Alert, TextInput } from 'react-native';
import useInputValue from '../../../utils/UseInputValue';
function EditDish(props) {
    const { data, EditDish } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [price, setPrice] = useState(data.price);
    const imageURL = useInputValue(data.imageURL);
    const name = useInputValue(data.name);
    const description = useInputValue(data.description);

    //#region Function
    const saveClick = () => {
        setModalVisible(false);
        const newDish = { id: data.id, imageURL: imageURL.value, name: name.value, description: description.value, price: parseInt(price, 10) };
        EditDish(newDish);
    };
    //#endregion
    return (
        <View style={{ marginTop: 15 }}>
            <Button full success onPress={useCallback(() => setModalVisible(true), [modalVisible])}>
                <Icon active name="information-circle" />
            </Button>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ margin: 10 }}>
                    <Form>
                        <Item>
                            <Icon name='image' />
                            <TextInput placeholder="Image URL" {...imageURL} />
                        </Item>
                        <Item>
                            <Icon name='person' />
                            <TextInput placeholder="Name...." {...name} />
                        </Item>
                        <Item>
                            <Icon type="FontAwesome5" name='file-import' />
                            <TextInput placeholder="Description...." {...description} />
                        </Item>
                        <Item>
                            <Icon type="FontAwesome5" name="file-invoice-dollar" />
                            <TextInput placeholder="Price...." value={`${price}`} onChangeText={useCallback((text) => setPrice(text), [price])} />
                        </Item>
                    </Form>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 15 }}>
                        <Button primary
                            onPress={() => setModalVisible(false)} style={{ marginRight: 10 }}>
                            <Text>Close</Text>
                        </Button>
                        <Button danger
                            onPress={saveClick} style={{ marginLeft: 10 }}>
                            <Text>Save</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
export default EditDish;