import React from "react";
import { Dimensions, Image, PixelRatio, StyleSheet, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import { BoxShadow } from "react-native-shadow";

const styles = StyleSheet.create({
	container: {
		borderRadius: 16,
		height: 64,
		justifyContent: "center",
		alignItems: "flex-start",
		overflow: "hidden",
	},
	img: {
		position: "absolute",
		right: -20,
		top: -10,
	},
	cardText: {
		fontFamily: "opensans-bold",
		color: "white",
		paddingLeft: 20,
		fontSize: 50 / PixelRatio.get(),
	},
});

export default function CategoryCard({ color, title }) {
	return (
		<Ripple rippleContainerBorderRadius={16} rippleCentered={true}>
			<BoxShadow
				setting={{
					width: Dimensions.get("window").width / 2 - 30,
					height: 64,
					color,
					border: 10,
					radius: 16,
					opacity: 0.2,
					x: 3,
					y: 8,
					style: { marginVertical: 1 },
				}}>
				<View style={{ ...styles.container, backgroundColor: `${color}b8` }}>
					<Image style={styles.img} source={require("../assets/pokeball.png")}></Image>
					<Text style={styles.cardText}>{title}</Text>
				</View>
			</BoxShadow>
		</Ripple>
	);
}
