import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';
import { Button, Text } from 'native-base';
import { Regist } from '../Actions/Login';
import styles from '../public/style/index';
import useInputValue from '../utils/UseInputValue';

export default function Register(props) {
    const userName = useInputValue('');
    const password = useInputValue('');
    const rePassword = useInputValue('');
    const phone = useInputValue('');


    const handleRegist = useCallback(() => {
        if (userName.value === '' || password.value === '' || rePassword.value === '' || phone.value === '') {
            alert('Vui Lòng Đừng Để Trống Thông Tin');
        } else {
            if (password.value !== rePassword.value) {
                alert('Nhập Lại Mật Khẩu không Giống Với Mật Khẩu, Xin Kiểm Tra lại');
            } else {
                const user = {
                    userName: userName.value,
                    password: password.value,
                    type: false,
                    phone: phone.value
                };
                const AddUser = () => {
                    return Regist(user);
                }
                AddUser();
                props.navigation.navigate('Login', {
                    user: {
                        userName: userName.value, password: password.value
                    }
                });
            }
        }
    }, [userName.value, password.value, rePassword.value, phone.value]);
    return (
        <ImageBackground source={require('../public/images/bg2.jpg')} style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    placeholder="User Name"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    {...userName} />
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    placeholder="Mật Khẩu"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    {...password} />
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    placeholder="Nhập Lại Mật Khẩu"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    {...rePassword} />
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={require('../public/images/phone.png')} />
                <TextInput style={styles.inputs}
                    placeholder="Số Điện Thoại"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    keyboardType='phone-pad'
                    {...phone} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Button danger rounded style={{ width: 150, flex: 1, justifyContent: 'center' }} onPress={handleRegist}>
                    <Text>Đăng Ký</Text>
                </Button>
                <Button warning rounded style={{ width: 150, flex: 1, justifyContent: 'center' }} onPress={() => props.navigation.navigate('Login')}>
                    <Text>Cancel</Text>
                </Button>
            </View>
        </ImageBackground>
    );
}
