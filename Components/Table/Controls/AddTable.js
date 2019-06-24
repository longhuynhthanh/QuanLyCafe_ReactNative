import React, { useState, useCallback } from 'react';
import { Fab, Icon, View, Form, Button, Text, Item } from 'native-base';
import { Modal, Alert, TextInput } from 'react-native';
function AddTable(props) {
    const { AddTable } = props;
    const [active, setActive] = useState(true);
    const [name, setName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
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
                })}
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
                            <Icon name='table' type='FontAwesome5' />
                            <TextInput placeholder="Name...." value={name} onChangeText={useCallback((text) => setName(text))} />
                        </Item>
                    </Form>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 15 }}>
                        <Button danger
                            onPress={useCallback(() => setModalVisible(false))} style={{ marginRight: 10 }}>
                            <Text>Close</Text>
                        </Button>
                        <Button success
                            onPress={useCallback(() => {
                                const table = { name, status: false };
                                AddTable(table);
                                setModalVisible(false);
                            })} style={{ marginLeft: 10 }}>
                            <Text>Save</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    );
}

export default AddTable;