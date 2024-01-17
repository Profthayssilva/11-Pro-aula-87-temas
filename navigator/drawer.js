import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stack";
import Profile from "../screens/profile";
import Logout from "../screens/logout";
import firebase from "firebase";
import CustomSidebarMenu from "../screens/CustomSidebarMenu";
const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
 //ATIVIDADE DO ALUNO
  }

  componentDidMount() {
    //ATIVIDADE DO ALUNO
  }

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "#e91e63",
          drawerInactiveTintColor: this.state.light_theme ? "black" : "white",
          drawerItemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Tela Inicial"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Profile}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}
