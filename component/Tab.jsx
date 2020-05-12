import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		paddingBottom: 12,
	},
	selected: {
		borderBottomColor: "#7e89df",
		borderBottomWidth: 2,
		paddingBottom: 12,
		paddingHorizontal: 6,
	},
});

export default function Tab({ name, onSelected, selected }) {
	return (
		<TouchableWithoutFeedback onPress={onSelected}>
			{selected === name ? (
				<View style={styles.selected}>
					<Text>{name}</Text>
				</View>
			) : (
				<View style={styles.container}>
					<Text>{name}</Text>
				</View>
			)}
		</TouchableWithoutFeedback>
	);
}
