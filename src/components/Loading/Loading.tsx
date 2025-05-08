import React from "react";
import { ActivityIndicator, View, Modal, StyleProp, ViewStyle } from "react-native";
import { redLife } from "../../constants/color";

interface LoadingProps {
  loading: boolean; // Indica si el modal de carga debe mostrarse
  opacity?: number; // Opacidad opcional para el fondo
  sizeIcon?: number | "small" | "large"; // Tamaño opcional del indicador
}

const Loading: React.FC<LoadingProps> = ({ loading, opacity, sizeIcon }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={loading}>
      <View
        style={[
          {
            justifyContent: "center",
            height: "100%",
            backgroundColor: opacity
              ? `rgba(0,0,0,${opacity})`
              : "rgba(0,0,0,0.15)",
          },
        ] as StyleProp<ViewStyle>}
      >
        <ActivityIndicator size={sizeIcon || "large"} color={redLife} />
      </View>
    </Modal>
  );
};

export default Loading;