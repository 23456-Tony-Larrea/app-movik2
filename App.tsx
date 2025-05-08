import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StackNavigator from "./src/navigation/StackNavigator";
import TransportOrderState from "./src/context/transportOrder/TransportOrderState";
import OrderLineState from "./src/context/TransportOrderLines/OrderLineState";

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TransportOrderState>
        <OrderLineState>
          <StackNavigator />
        </OrderLineState>
      </TransportOrderState>
    </SafeAreaView>
  );
}