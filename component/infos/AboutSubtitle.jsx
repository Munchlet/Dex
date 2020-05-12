import React from "react";
import { PixelRatio, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
	title: {
		fontFamily: "opensans-bold",
		fontSize: 50 / PixelRatio.get(),
	},
});

export default function AboutSubtitle({ title, style }) {
	return <Text style={[styles.title, style]}>{title}</Text>;
}
