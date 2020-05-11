import React from "react";
import { FlatList, Image, PixelRatio, StyleSheet, Text, View } from "react-native";
import BackHeader from "../component/BackHeader";
import PokemonCardSmall from "../component/PokemonCardSmall";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		marginVertical: 20,
		marginHorizontal: 20,
		fontFamily: "opensans-bold",
		fontSize: 102 / PixelRatio.get(),
	},
	pokemonList: {
		flex: 1,
		paddingBottom: 20,
		paddingHorizontal: 8,
	},
	bg: {
		position: "absolute",
		right: -48,
		top: 0,
		height: 256,
		width: 256,
		opacity: 0.4,
		zIndex: -1,
	},
});

export default function Pokedex({ navigation }) {
	const [pokemons, setPokemons] = React.useState([]);

	React.useEffect(() => {
		async function fetchPokemon() {
			const result = await fetch("https://pastebin.com/raw/PZjn51nW");
			const data = await result.json();
			setPokemons(data);
		}

		fetchPokemon();
	}, []);

	const onPokemonClick = (item) => {
		navigation.navigate("PokemonInfo", item);
	};

	if (pokemons.length < 1)
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	return (
		<View style={styles.container}>
			<Image style={styles.bg} source={require("../assets/pokeball.png")}></Image>
			<BackHeader onPress={() => navigation.goBack()} />
			<Text style={styles.header}>Pokedex</Text>
			<FlatList
				style={styles.pokemonList}
				data={pokemons}
				numColumns={2}
				initialNumToRender={20}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <PokemonCardSmall {...item} onClick={() => onPokemonClick(item)} />;
				}}
			/>
		</View>
	);
}
