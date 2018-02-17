// @flow
import React from 'react';

import {Container, Header, Content, Body, Title} from 'native-base';
import PlayersListThumbnail from './PlayersListThumbnail';

import firebase from 'react-native-firebase';
import firebaseConfig from '../config/firebase-config';
import 'firebase/firestore';

export default class PlayerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {players: []}
    }

    componentDidMount() {
        console.log("components did mount")
        firebase.initializeApp(firebaseConfig);

        this.userCollection = firebase.firestore().collection('users');
        this.userCollection.orderBy("lastLogin").onSnapshot(collectionSnapshot => {
            let players = []

            collectionSnapshot.forEach((user) => {
                players.push(user.data())
            })

            this.setState({ players })
            console.log("Success fetch data")
            console.log(players);
        }, err => {
            console.log('Data Fetch Error. Check your network.');
            console.log(err)
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Players</Title>
                    </Body>
                </Header>
                <PlayersListThumbnail players={this.state.players} />
            </Container>
        );
    }
}