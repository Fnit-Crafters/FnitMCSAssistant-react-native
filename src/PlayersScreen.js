// @flow
import React from 'react';

import {Container, Header, Content, Body, Title} from 'native-base';
import PlayersListThumbnail from './PlayersListThumbnail';

import firebase from 'firebase';
import firebaseConfig from '../config/firebase-config';
import { primaryColor, primaryDarkColor } from '../config/colors.js';

export default class PlayerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {players: []}
    }

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);

        this.userRef = firebase.database().ref('users');
        this.userRef.on('value', (snapshot) => {
            this.setState({players: snapshot.val()})
        });
    }

    render() {
        return (
            <Container>
                <Header toolbarTextColor="#ffffff" backgroundColor={primaryColor} androidStatusBarColor={primaryDarkColor}>
                    <Body>
                        <Title>Players</Title>
                    </Body>
                </Header>
                <PlayersListThumbnail players={this.state.players} />
            </Container>
        );
    }
}