import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight + 20,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default function BackHeader() {
	return (
		<View style={styles.container}>
			<Ionicons name="md-arrow-back" size={24} color="#2f2f2f" />
			<Ionicons name="md-menu" size={24} color="#2f2f2f" />
		</View>
	);
}
