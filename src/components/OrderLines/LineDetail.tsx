import React, { memo } from "react";
import styles from "./style";
import { Text, View } from "react-native";

// Definición de tipos para las props
interface OrderLine {
  salesOrderId: string;
  liPackingSlipId: string;
  status: string;
}

interface OrderLineState {
  value: string;
  label: string;
}

interface LineDetailProps {
  orderLines: OrderLine[];
  orderLineStates: OrderLineState[];
}

const LineDetail: React.FC<LineDetailProps> = ({ orderLines, orderLineStates }) => {
  return (
    <View>
      <Text style={styles.title}>{orderLines[0].salesOrderId}</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.subTitle}>Guía de remisión</Text>
          <Text style={styles.text}>{orderLines[0].liPackingSlipId}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subTitle}>Estado:</Text>
          <Text style={styles.text}>
            {
              orderLineStates.find(
                (sta) => sta.value === orderLines[0].status
              )?.label || "Estado desconocido"
            }
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(LineDetail);