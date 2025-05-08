import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import styles from "./style";
import { redLife } from "../../constants/color";

interface UploadBtnProps {
  onPress: () => void; // Define que onPress es una función sin parámetros y sin retorno
}

const UploadBtn: React.FC<UploadBtnProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.btnUpload, { backgroundColor: "white" }] as StyleProp<ViewStyle>}
      onPress={onPress}
    >
      <Icon name="upload" color={redLife} size={35} />
    </TouchableOpacity>
  );
};

export default UploadBtn;