import React from 'react';
import { Container, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default function Contact(props) {
    const { navigation} = props;
    return (
        <Container>
            <Content>
                <ListItem icon onPress={() => navigation.navigate('InfoUser')}>
                    <Left>
                        <Button style={{ backgroundColor: "red" }}>
                            <Icon active name="person" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Thông Tin Tài Khoản</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="wifi" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Wi-Fi</Text>
                    </Body>
                    <Right>
                        <Text>GeekyAnts</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="bluetooth" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                        <Text>On</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            </Content>
        </Container>
    );
}