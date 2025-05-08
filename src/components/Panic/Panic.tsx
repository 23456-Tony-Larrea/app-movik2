import React from "react";
import { Text, TextInput, View } from "react-native";
import { redLife, redPressed } from "../../constants/color";
import styles from "./style";

// Definición de tipos para las props
interface PanicProps {
  order: {
    orderId: string;
  };
  comment: string;
  setcomment: (text: string) => void;
}

const Panic: React.FC<PanicProps> = ({ order, comment, setcomment }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.textTitle}>{order.orderId}</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.subTitle}>
            Ingrese un comentario para incluirlo en la notificación:
          </Text>
        </View>
      </View>
      <TextInput
        placeholder="Ingresa un comentario..."
        editable
        multiline
        numberOfLines={5}
        maxLength={150}
        onChangeText={(text) => setcomment(text)}
        value={comment}
        cursorColor={redLife}
        autoFocus
        style={[
          styles.textArea,
          { backgroundColor: "white", borderColor: redPressed },
        ]}
      />
    </View>
  );
};

export default Panic;