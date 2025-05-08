import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Root from "../screens/Root/RootScreen";
import OrderLines from "../screens/OrderLines/OrderLinesScreen";
import DeliverOrderScreen from "../screens/DeliverOrder/DeliverOrderScreen";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import DocumentsScreen from "../screens/DocumentScreen/DocumentScreen";
import Camera from "../components/Camera/Camera";
import { blueStrong } from "../constants/color";
import HomeScreen from "../screens/Home/HomeScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: blueStrong,
          headerStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{
            title: "Órdenes de transporte",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detalles"
          component={OrderLines}
          options={{
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
  name="DeliverOrder" 
  component={DeliverOrderScreen}
  options={{
    title: "Entregar orden",
  }}
/>
        <Stack.Screen
          name="PanicNotification"
          component={NotificationScreen}
          options={{
            title: "Notificación de pánico",
          }}
        />
        <Stack.Screen
          name="DocumentsScreen"
          component={DocumentsScreen}
          options={{
            title: "Documento cargado",
          }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            title: "Carga de archivos",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}