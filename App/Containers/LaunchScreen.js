import React, { Component } from "react";
import { ScrollView, Text, Image, View, TouchableOpacity } from "react-native";
import { Images } from "../Themes";
import styles from "./Styles/LaunchScreenStyles";
import { DrawerActions } from "react-navigation-drawer";

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
            style={{
              backgroundColor: "lightgray",
              marginTop: 25,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              padding: 10
            }}
          >
            <Text>OPEN DRAWER</Text>
          </TouchableOpacity>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless
              your designer handed you this screen and, in that case, congrats!
              You're ready to ship. For everyone else, this is where you'll see
              a live preview of your fully functioning app using Ignite.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
