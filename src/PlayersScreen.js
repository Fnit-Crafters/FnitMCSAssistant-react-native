// @flow
import React from 'react';

import {Container, Header, Content, Body, Title} from 'native-base';
import PlayersListThumbnail from './PlayersListThumbnail';

import firebase from 'firebase';
import firebaseConfig from '../config/firebase-config';
require("firebase/firestore");

export default class PlayerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {players: []}
    }

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);

        this.userCollection = firebase.firestore().collection('users');
        this.userCollection.orderBy("lastLogin").onSnapshot(collectionSnapshot => {
            let players = []

            collectionSnapshot.forEach((user) => {
                players.push(user.data())
            })

            this.setState({ players })
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