import React, { memo } from "react";
import { Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";
import { subTitleSize } from "../../constants/text";
import styles from "./style";

interface DeliverOrderBtnProps {
  onPress: () => void;
  textBtn: string;
  color: string;
}

const DeliverOrderBtn: React.FC<DeliverOrderBtnProps> = ({ onPress, textBtn, color }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnDeliverOrder,
        {
          backgroundColor: color,
        },
      ] as StyleProp<ViewStyle>}
      onPress={onPress}
    >
      <Text
        style={{
          color: "white",
          fontSize: subTitleSize + 1,
        } as StyleProp<TextStyle>}
      >
        {textBtn}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(DeliverOrderBtn);