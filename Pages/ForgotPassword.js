import React, { useState } from 'react';
import {
    View,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';
import styles from '../public/style/index';
import { FetchAll } from '../Actions/Login';
import { Button, Text } from 'native-base';


export default function ForgotPassword(props) {
    const [userName, setUserName] = useState('');
    const [phone, setphone] = useState('');

    const handleCheck = () => {
        if (userName === '' || phone === '') {
            alert('Đừng Để Trống, Vui Lòng Kiểm Tra lại');
        } else {
            const Check = () => {
                return FetchAll().then(result => {
                    for (let index = 0; index < result.length; index++) {
                        if (userName === result[index].userName && phone === result[index].phone) {
                            alert('Mật Khẩu Tài Khoản Của bạn là: ' + result[index].password);
                            return;
                        }
                    }
                    alert('Thông Tin Không Chính Xác, Vui Lòng Kiểm Tra lại');
                });
            }
            Check();
        }
    }
    return (
        <ImageBackground source={require('../public/images/bg2.jpg')} style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    value={userName}
                    placeholder="User Name"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(userName) => setUserName(userName)} />
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={require('../public/images/phone.png')} />
                <TextInput style={styles.inputs}
                    value={phone}
                    placeholder="Số Điện Thoại"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    keyboardType='phone-pad'
                    onChangeText={(phone) => setphone(phone)} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Button danger rounded style={{ width: 150, flex: 1, justifyContent: 'center' }} onPress={handleCheck}>
                    <Text>Kiểm Tra</Text>
                </Button>
                <Button warning rounded style={{ width: 150, flex: 1, justifyContent: 'center' }} onPress={() => props.navigation.navigate('Login')}>
                    <Text>Cancel</Text>
                </Button>
            </View>
        </ImageBackground>
    );
}
