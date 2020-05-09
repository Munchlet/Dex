import Color from "color";
import React from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginVertical: 2,
		width: 60,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 3,
		paddingTop: 2,
		opacity: 0.7,
	},
	type: {
		color: "white",
		fontFamily: "opensans-bold",
		fontSize: 32 / PixelRatio.get(),
	},
});

export default function TypeChip({ type, color, textColor }) {
	return (
		<View style={{ ...styles.container, backgroundColor: Color(color).lighten(0.3).hex() }}>
			<Text style={{ ...styles.type, color: textColor }}>{type}</Text>
		</View>
	);
}
