import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { redStrong } from "../../constants/color";
import HomeScreen from "../Home/HomeScreen";
import Profile from "../Profile/ProfileScreen";
import Settings from "../Settings/SettingsScreen";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: redStrong,
          headerStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Órdenes de transporte",
          }}
        />
        <Stack.Screen
          name="Cuenta"
          component={Profile}
          options={{
            title: "Mi Cuenta",
          }}
        />
        <Stack.Screen
          name="Configurar"
          component={Settings}
          options={{
            title: "Configurar",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;