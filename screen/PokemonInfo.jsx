import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";
import BackHeader from "../component/BackHeader";
import TypeChip from "../component/TypeChip";
import { capFirst, getPokedexColor, getTextColor } from "../lib/Helper";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		paddingHorizontal: 20,
		paddingTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	pokeName: {
		color: "white",
		fontFamily: "opensans-bold",
		fontSize: 82 / PixelRatio.get(),
	},
	pokeNo: {
		color: "white",
		fontFamily: "opensans-bold",
		fontSize: 52 / PixelRatio.get(),
	},
	typesContainer: {
		flexDirection: "row",
	},
	imgContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		height: 120,
		width: 120,
	},
	typeInfo: {
		color: "white",
	},
});

export default function PokemonInfo({ route }) {
	console.log(route.params);
	const [pokeParams] = React.useState(route.params);
	const [pokemon, setPokemon] = React.useState({});
	const [species, setSpecies] = React.useState({});
	const [pokedexColor] = React.useState(getPokedexColor(route.params.color));

	React.useEffect(() => {
		async function fetchPokemonInfo() {
			let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeParams.id}`);
			let data = await result.json();
			setPokemon(data);
			result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeParams.id}`);
			data = await result.json();
			setSpecies(data);
		}

		fetchPokemonInfo();
	}, [pokeParams]);

	if (Object.keys(pokemon).length < 1 || Object.keys(species).length < 1)
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);

	return (
		<View style={{ ...styles.container, backgroundColor: pokedexColor }}>
			<BackHeader />
			<View style={styles.header}>
				<Text style={styles.pokeName}>{capFirst(pokemon.name)}</Text>
				<Text style={styles.pokeNo}>{`#${String(pokeParams.id).padStart(3, "0")}`}</Text>
			</View>
			<View style={{ ...styles.header, paddingTop: 10 }}>
				<View style={styles.typesContainer}>
					{pokemon.types.map((type) => (
						<TypeChip type={type.type.name} color={pokedexColor} textColor={getTextColor(pokeParams.color, true)} />
					))}
				</View>
				<Text style={styles.typeInfo}>{species.genera.find((g) => g.language.name === "en").genus}</Text>
			</View>
			<View style={styles.imgContainer}>
				<Image style={styles.img} source={{ uri: pokeParams.img }} />
			</View>
			<View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}></View>
		</View>
	);
}
