import React, { useMemo } from 'react';
import { FetchAll } from '../Actions/Login';
import useInputvalue from '../utils/UseInputValue';
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
    const userName = useInputvalue('');
    const password = useInputvalue('');

    const newUser = props.navigation.getParam('user');

    const handleLogin = () => {
        const setLogin = () => {
            return FetchAll().then(result => {
                for (let index = 0; index < result.length; index++) {
                    if (userName.value === result[index].userName && password.value === result[index].password) {
                        props.navigation.navigate('App', {
                            id: result[index].id
                        });
                        return;
                    }
                }
                alert('Thông Tin Tài Khoản Bị sai, Vui Lòng Kiểm Tra lại');
            })
        }
        setLogin();
    };

    useMemo(() => {
        if (newUser) {
            userName.setValue(newUser.userName);
            password.setValue(newUser.password);
        }
    }, [newUser]);

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
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    {...password} />
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

