import React from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../../public/images/bg2.jpg')
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../../public/images/bg3.jpg')
    },
    {
        text: 'Card Three',
        name: 'Three',
        image: require('../../public/images/bg4.jpg')
    }
];
export default function Navigate(){
    return (
        <Container>
            <Header />
            <View>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={item.image} />
                                    <Body>
                                        <Text>{item.text}</Text>
                                        <Text note>Beautiful</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image style={{ height: 300, flex: 1 }} source={item.image} />
                            </CardItem>
                            <CardItem>
                                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                    }
                />
            </View>
        </Container>
    );
}