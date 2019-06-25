import React, { useState, useCallback } from 'react';
import { Fab, Icon, View, Form, Button, Text, Item } from 'native-base';
import { Modal, Alert, TextInput } from 'react-native';
import useInputValue from '../../../utils/UseInputValue';
function AddTable(props) {
    const { AddTable } = props;
    const [active, setActive] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const name = useInputValue('');
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
                }, [active, modalVisible])}
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
                            <TextInput placeholder="Name...." {...name} />
                        </Item>
                    </Form>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 15 }}>
                        <Button danger
                            onPress={useCallback(() => setModalVisible(false), [modalVisible])} style={{ marginRight: 10 }}>
                            <Text>Close</Text>
                        </Button>
                        <Button success
                            onPress={useCallback(() => {
                                const table = { name: name.value, status: false };
                                AddTable(table);
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

export default AddTable;