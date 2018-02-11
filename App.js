import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';
import {TabNavigator} from "react-navigation";
import PlayersScreen from './PlayersScreen'
import PlayersListThumbnail from './PlayersListThumbnail';

import firebase from 'firebase';
import firebaseConfig from './firebase-config';

export default(MainScreenNavigator = TabNavigator({
  Players: {
    screen: props => <PlayersScreen {...props}/>
  },
  Chat: {
    screen: props => <PlayersListThumbnail {...props}/>
  },
  Settings: {
    screen: props => <PlayersListThumbnail {...props}/>
  }
}, {
  tabBarPosition: "bottom",
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("Players")}>
            <Icon name="bowtie"/>
            <Text>Players</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("Chat")}>
            <Icon name="briefcase"/>
            <Text>Chat</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("Settings")}>
            <Icon name="headset"/>
            <Text>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}));

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
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
  getFragment() {}
  render()
  {
    return (
      <Container>
        <Header/>
        <Content></Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}>
              <Icon name="bowtie"/>
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}>
              <Icon name="briefcase"/>
              <Text>Nine</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}>
              <Icon name="headset"/>
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}