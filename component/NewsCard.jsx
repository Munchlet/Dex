import React from "react";
import { Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginVertical: 20,
	},
	textContainer: {
		flex: 2,
	},
	textTitle: {
		fontFamily: "opensans-bold",
		fontSize: 40 / PixelRatio.get(),
		paddingRight: 18,
	},
	textSubtitle: {
		marginTop: 6,
		fontFamily: "opensans-light",
		fontSize: 32 / PixelRatio.get(),
	},
	img: {
		borderRadius: 16,
		flex: 1,
		height: 70,
		width: 50,
	},
});

export default function NewsCard({ title, time, img, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text numberOfLines={2} style={styles.textTitle}>
						{title}
					</Text>
					<Text style={styles.textSubtitle}>{time}</Text>
				</View>
				<Image style={styles.img} source={{ uri: img }} resizeMode="cover"></Image>
			</View>
		</TouchableOpacity>
	);
}
