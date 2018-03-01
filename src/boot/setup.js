import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";

// REF: http://docs.nativebase.io/Customize.html#Customize
import getTheme from '../theme/components';
import material from '../theme/variables/material';
import commonColor from '../theme/variables/commonColor';

import App from "../App";

export default class Setup extends Component {
    constructor() {
      super();
      this.state = {
        isReady: false
      };
    }

    componentWillMount() {
      this.loadFonts();
    }

    async loadFonts() {
      await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
      });
      this.setState({ isReady: true });
    }

    render() {
      if (!this.state.isReady) {
        return <Expo.AppLoading />;
      }

      return (
      <StyleProvider style={getTheme(commonColor)}>
          <App />
       </StyleProvider>
      );
    }
  }