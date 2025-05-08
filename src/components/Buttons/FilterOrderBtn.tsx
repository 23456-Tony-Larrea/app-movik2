import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import styles from "./style";

interface BtnFilterOrderProps {
  fnEnableFilter: () => void; // Define el tipo de la función que se pasa como prop
}

const BtnFilterOrder: React.FC<BtnFilterOrderProps> = ({ fnEnableFilter }) => {
  return (
    <TouchableOpacity
      style={styles.btnFilterOrder}
      onPress={() => fnEnableFilter()}
    >
      <Icon name="search1" color={"white"} size={25} />
    </TouchableOpacity>
  );
};

export default BtnFilterOrder;