import React, { useState } from 'react';
import {
    View,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';
import {Button, Text} from 'native-base';
import {Regist} from '../Actions/Login';
import styles from '../public/style/index';
export default function Register(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [phone, setphone] = useState('');
    const handleRegist = () => {
        if(userName === '' || password === '' || rePassword === '' || phone === ''){
            alert('Vui Lòng Đừng Để Trống Thông Tin');
        }else{
            if(password !== rePassword){
                alert('Nhập Lại Mật Khẩu không Giống Với Mật Khẩu, Xin Kiểm Tra lại');
            }else{
                const user = {
                    userName: userName,
                    password: password,
                    type: false, 
                    phone
                }
                const AddUser = () => {
                    return Regist(user);
                }
                AddUser();
                props.navigation.navigate('Login', {
                    user: {
                        userName, password
                    }
                });
            }
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
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    value={password}
                    placeholder="Mật Khẩu"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => setPassword(password)} />
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    value={rePassword}
                    placeholder="Nhập Lại Mật Khẩu"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(rePassword) => setRePassword(rePassword)} />
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
            <View style={{flexDirection:"row"}}>
                <Button danger rounded style={{width:150, flex:1, justifyContent:'center'}} onPress={handleRegist}>
                    <Text>Đăng Ký</Text>
                </Button>
                <Button warning rounded style={{width:150, flex:1, justifyContent:'center'}} onPress={() => props.navigation.navigate('Login')}>
                    <Text>Cancel</Text>
                </Button>
            </View>
        </ImageBackground>
    );
}
