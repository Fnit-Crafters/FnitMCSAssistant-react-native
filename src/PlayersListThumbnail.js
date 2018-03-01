import React from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
  Button,
  Left,
  Right,
  Icon,
} from 'native-base';
import {unixTime2ymd} from './TimerHelpers';

export default class PlayersListThumbnail extends React.Component {

  render() {

    return (
      <List
        dataArray={this.props.players}
        renderRow={(player) => {

          return (
            <ListItem>
              <Thumbnail
                size={80}
                source={{
                  uri: "https://minotar.net/avatar/" + player.name
                }} />
              <Body>
                <Text>{player.name}</Text>
                <Text note>{player.isOnline
                  ? "Online"
                  : "Last Login: " + unixTime2ymd(player.lastLogin)}</Text>
              </Body>
              {/*
                <Right>
                  <Button transparent info>
                    <Icon name="ios-arrow-forward-outline" />
                  </Button>
                </Right>
              */}
            </ListItem>
          );
        }}></List>
    );
  }
}