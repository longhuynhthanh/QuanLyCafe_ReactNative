import React, { useState, useCallback } from 'react';
import { Fab, Icon, View, Form, Button, Text, Item } from 'native-base';
import { Modal, Alert, TextInput } from 'react-native';
import useInputValue from '../../../utils/UseInputValue';

function AddDish(props) {
    const { AddDish } = props;
    const [active, setActive] = useState(true);

    const [price, setPrice] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const imageURL = useInputValue('');
    const name = useInputValue('');
    const description = useInputValue('');
    return (
        <React.Fragment>
            <Fab
                active={active}
                direction="up"
                style={{ backgroundColor: '#B00020', shadowColor: '#FF0266' }}
                position="bottomRight"
                onPress={useCallback(() => {
                    setModalVisible(true);
                    setActive(!active);
                }, [modalVisible, active])}
            >
                <Icon name="add" />
            </Fab>
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
                        <Button danger
                            onPress={useCallback(() => setModalVisible(false), [modalVisible])} style={{ marginRight: 10 }}>
                            <Text>Close</Text>
                        </Button>
                        <Button success
                            onPress={useCallback(() => {
                                const dish = { imageURL: imageURL.value, name: name.value, description: description.value, price: parseInt(price, 10) };
                                AddDish(dish);
                                setModalVisible(false);
                            }, [modalVisible])} style={{ marginLeft: 10 }}>
                            <Text>Save</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    );
}

export default AddDish;