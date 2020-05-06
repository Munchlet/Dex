import React from "react";
import { StyleSheet, View } from "react-native";
import BackHeader from "../component/BackHeader";

const styles = StyleSheet.create({
	container: {},
});

export default function Pokedex() {
	return (
		<View style={styles.container}>
			<BackHeader />
		</View>
	);
}
