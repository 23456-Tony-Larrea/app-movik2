import React, { useState, useContext } from "react";
import { Button, Image, View, Alert, StyleSheet } from "react-native";
import { launchCamera, launchImageLibrary, Asset } from "react-native-image-picker";
import RNFS from "react-native-fs"; // Para convertir imágenes a base64
import { OrderLineContext } from "../../context/TransportOrderLines/OrderLineContext";

interface CameraProps {
  route: {
    params: {
      document: {
        documentName: string;
      };
    };
  };
}

const Camera: React.FC<CameraProps> = ({ route }) => {
  const { document } = route.params;
  const [image, setImage] = useState<string | null>(null);
  const [base64, setBase64] = useState<string>("");

  // Obtén el contexto y verifica que no sea undefined
  const context = useContext(OrderLineContext);
  if (!context) {
    throw new Error("OrderLineContext must be used within a provider");
  }

  const { orderLines, postSPDocumentation } = context;

  const convertToBase64 = async (uri: string) => {
    try {
      const base64String = await RNFS.readFile(uri, "base64");
      setBase64(base64String);
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al convertir la imagen a base64.");
    }
  };

  const pickImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: "photo",
        quality: 1,
      });

      if (result.didCancel) {
        console.log("Selección de imagen cancelada");
        return;
      }

      if (result.assets && result.assets[0]) {
        const asset: Asset = result.assets[0];
        setImage(asset.uri || null);
        if (asset.uri) {
          await convertToBase64(asset.uri);
        }
      }
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al seleccionar la imagen.");
    }
  };

  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: "photo",
        quality: 0.8,
      });

      if (result.didCancel) {
        console.log("Operación de cámara cancelada");
        return;
      }

      if (result.assets && result.assets[0]) {
        const asset: Asset = result.assets[0];
        setImage(asset.uri || null);
        if (asset.uri) {
          await convertToBase64(asset.uri);
        }
      }
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al abrir la cámara.");
    }
  };

  const fnPostDocSP = async () => {
    if (base64) {
      try {
        const sendData = [
          {
            nombreCarpeta: "Desarrollo",
            nombreCarpeta2: orderLines[0].liPackingSlipId,
            nombreArchivo: document.documentName
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""),
            url: "",
            extArchivo: ".png",
            base64: base64,
            vendAccount: "",
            recIdRecord: 0,
            tableId: 0,
          },
        ];
        console.log("Enviando datos...");
        const resp = await postSPDocumentation(sendData);
        console.log("Respuesta:", resp);
      } catch (error) {
        Alert.alert("Error", "Ocurrió un error al enviar el archivo.");
      }
    } else {
      Alert.alert("Error", "No hay imagen para enviar.");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Take photo" onPress={openCamera} />
      <Button title="Pick image" onPress={pickImage} />
      {base64 && (
        <Image
          source={{ uri: "data:image/png;base64," + base64 }}
          style={styles.image}
        />
      )}
      <Button title="Send file" onPress={fnPostDocSP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default Camera;