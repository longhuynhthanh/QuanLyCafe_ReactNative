import React, { useState, useMemo } from 'react';
import { FetchAll } from '../Actions/Login';
import {
    View,
    TextInput,
    TouchableHighlight,
    Image,
    ImageBackground
} from 'react-native';
import { Button, Text } from 'native-base';
import styles from '../public/style/index';
export default function Login(props) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const newUser = props.navigation.getParam('user');

    const handleLogin = () => {
        const setLogin = () => {
            return FetchAll().then(result => {
                for (let index = 0; index < result.length; index++) {
                    if (userName === result[index].userName && password === result[index].password) {
                        props.navigation.navigate('App');
                        return;
                    }
                }
                alert('Thông Tin Tài Khoản Bị sai, Vui Lòng Kiểm Tra lại');
            })
        }
        setLogin();
    }

    useMemo(() => {
        if (newUser) {
            setUserName(newUser.userName);
            setPassword(newUser.password);
        }
    }, [newUser]);

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
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => setPassword(password)} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button danger rounded style={{ width: 150, flex: 1, justifyContent: 'center' }} onPress={handleLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </Button>
                    <Button warning rounded style={{ width: 150, flex: 1, justifyContent: 'center' }} onPress={() => props.navigation.navigate('Register')}>
                        <Text style={styles.loginText}>Register</Text>
                    </Button>
                </View>
                <TouchableHighlight style={styles.buttonContainer} onPress={() => props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.loginText}>Forgot your password?</Text>
                </TouchableHighlight>
        </ImageBackground>
    );
}

