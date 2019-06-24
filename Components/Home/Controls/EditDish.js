import React, { useState, useCallback } from 'react';
import { Button, Text, View, Icon, Form, Item } from 'native-base';
import { Modal, Alert, TextInput } from 'react-native';
function EditDish(props) {
    const { data, EditDish } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [imageURL, setImageURL] = useState(data.imageURL);
    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);

    //#region Function
    const saveClick = () => {
        setModalVisible(false);
        const newDish = {id: data.id, imageURL, name, description, price: parseInt(price, 10)};
        EditDish(newDish);
    }
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
                            <TextInput placeholder="Image URL" value={imageURL} onChangeText={useCallback((text) => setImageURL(text), [imageURL])} />
                        </Item>
                        <Item>
                            <Icon name='person' />
                            <TextInput placeholder="Name...." value={name}  onChangeText={useCallback((text) => setName(text), [name])} />
                        </Item>
                        <Item>
                            <Icon type="FontAwesome5" name='file-import' />
                            <TextInput placeholder="Description...." value={description} onChangeText={useCallback((text) => setDescription(text), [description])} />
                        </Item>
                        <Item>
                            <Icon type="FontAwesome5" name="file-invoice-dollar" />
                            <TextInput placeholder="Price...." value={`${price}`} onChangeText={useCallback((text) => setPrice(text), [price])}/>
                        </Item>
                    </Form>
                    <View style={{flexDirection:"row", alignSelf:"center", marginTop:15}}>
                        <Button primary
                            onPress={useCallback(() => setModalVisible(false), [modalVisible])} style={{marginRight:10}}>
                            <Text>Close</Text>
                        </Button>
                        <Button danger
                            onPress={saveClick} style={{marginLeft:10}}>
                            <Text>Save</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
export default EditDish;