import React from 'react';

import {Container, Header, Content, Body, Title} from 'native-base';
import PlayersListThumbnail from './PlayersListThumbnail';

import firebase from 'firebase';
import firebaseConfig from './firebase-config';

export default class PlayerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: {}
        }
    }

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
        this.usersRef = firebase
            .database()
            .ref('users');
        this
            .usersRef
            .on('value', (snapshot) => {
                this.setState({
                    players: snapshot.val()
                });
            });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Players</Title>
                    </Body>
                </Header>
                <PlayersListThumbnail players={this.state.players}/>
            </Container>
        );
    }
}