import React, { useState, useCallback } from 'react';
import { Button, Text, View, Icon, Form, Item } from 'native-base';
import { Modal, Alert, TextInput } from 'react-native';
import useInputValue from '../../../utils/UseInputValue';
function EditTable(props) {
    const { data, EditTable } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const name = useInputValue(data.name);
    //#region Function
    const saveClick = () => {
        setModalVisible(false);
        const editTable = { id: data.id, name, status: data.status };
        EditTable(editTable);
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
                            <Icon name='table' type='FontAwesome5' />
                            <TextInput placeholder="Name...." {...name} />
                        </Item>
                    </Form>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 15 }}>
                        <Button primary
                            onPress={useCallback(() => setModalVisible(false), [modalVisible])} style={{ marginRight: 10 }}>
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
export default EditTable;