import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

// Screens
import PicArea from "../../components/Categories/PicArea";
import i18n from "../../lang/_i18n";

const CategoryScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.topOffer}>
        <View style={styles.topOfferLeft}>
          <AntDesign name="tago" size={32} color="black" style={styles.icon} />
          <Text style={styles.offerText}>{i18n.t("offers.offerText")}</Text>
        </View>
        <View style={styles.topOfferRight}>
          <AntDesign name="right" size={24} color="black" style={styles.icon} />
        </View>
      </View>
      <PicArea />
    </ScrollView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  topOffer: {
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    height: 75,
  },
  topOfferLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  offerText: {
    marginLeft: 5,
    fontSize: 16,
  },
  topOfferRight: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {},
});
