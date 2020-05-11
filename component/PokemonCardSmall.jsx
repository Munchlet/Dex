import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import { capFirst, getPokedexColor, getTextColor } from "../lib/Helper";
import TypeChip from "./TypeChip";

const styles = StyleSheet.create({
	container: {
		paddingLeft: 14,
		borderRadius: 16,
		marginLeft: 4,
		marginVertical: 6,
		marginRight: 4,
		flex: 0.5,
		height: 120,
		overflow: "hidden",
	},
	name: {
		marginTop: 20,
		color: "white",
		fontFamily: "opensans-bold",
		fontSize: 46 / PixelRatio.get(),
	},
	img: {
		position: "absolute",
		bottom: 3,
		right: 6,
		height: 80,
		width: 80,
	},
	bg: {
		position: "absolute",
		right: -10,
		bottom: -10,
		height: 84,
		width: 84,
		opacity: 0.4,
		transform: [{ rotate: "18deg" }],
	},
});

export default React.memo(function PokemonCardSmall({ color, id, img, name, types, url, onClick }) {
	const [pokedexColor] = React.useState(getPokedexColor(color));
	const [textColor] = React.useState(getTextColor(color));

	return (
		<Ripple style={{ ...styles.container, backgroundColor: pokedexColor }} rippleContainerBorderRadius={16} onPress={onClick}>
			<Image style={styles.bg} source={require("../assets/pokeball.png")}></Image>
			<View style={{ flex: 1, justifyContent: "flex-start" }}>
				<Text style={{ ...styles.name, color: textColor }}>{name}</Text>
				{types.map((type) => (
					<TypeChip key={type} type={capFirst(type)} color={pokedexColor} textColor={getTextColor(color, true)} />
				))}
			</View>

			<Image style={styles.img} source={{ uri: img }} />
		</Ripple>
	);
});
