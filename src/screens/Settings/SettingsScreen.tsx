import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
// import { useWindowDimensions } from "react-native";
import Company from "../../components/Settings/Company";
import styles from "./style";

const Settings: React.FC = () => {
  // const dimensions = useWindowDimensions();

  return (
    <View style={styles.main}>
      <View
        style={[
          styles.container,
          // {
          //   minHeight: dimensions.height - (dimensions.height * 12) / 100,
          // },
        ] as StyleProp<ViewStyle>}
      >
        <Company />
      </View>
    </View>
  );
};

export default Settings;