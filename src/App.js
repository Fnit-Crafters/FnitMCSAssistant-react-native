import React from 'react';

import PlayersScreen from './PlayersScreen'
import PlayersListThumbnail from './PlayersListThumbnail';

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