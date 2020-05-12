import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";
import BackHeader from "../component/BackHeader";
import About from "../component/infos/About";
import Tab from "../component/Tab";
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
		flex: 1,
		height: "100%",
		width: "100%",
		position: "absolute",
		alignItems: "center",
		marginTop: 460 / PixelRatio.get(),
		zIndex: 1,
	},
	img: {
		height: 500 / PixelRatio.get(),
		width: 500 / PixelRatio.get(),
	},
	typeInfo: {
		color: "white",
	},
	infoContainer: {
		marginTop: "25%",
		flex: 1,
		backgroundColor: "white",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},
	tabContainer: {
		marginTop: 260 / PixelRatio.get(),
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});

export default function PokemonInfo({ route, navigation }) {
	const [pokeParams] = React.useState(route.params);
	const [pokemon, setPokemon] = React.useState({});
	const [species, setSpecies] = React.useState({});
	const [pokedexColor] = React.useState(getPokedexColor(route.params.color));
	const [selectedTab, setSelectedTab] = React.useState("About");
	const [tabs] = React.useState(["About", "Stats", "Evolution", "Moves"]);

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
			<BackHeader onPress={() => navigation.goBack()} color="white" />
			<View style={styles.header}>
				<Text style={styles.pokeName}>{capFirst(pokemon.name)}</Text>
				<Text style={styles.pokeNo}>{`#${String(pokeParams.id).padStart(3, "0")}`}</Text>
			</View>
			<View style={{ ...styles.header, paddingTop: 10 }}>
				<View style={styles.typesContainer}>
					{pokemon.types.map((type) => (
						<TypeChip
							key={type.type.name}
							type={type.type.name}
							color={pokedexColor}
							textColor={getTextColor(pokeParams.color, true)}
							style={{ marginLeft: 4 }}
						/>
					))}
				</View>
				<Text style={styles.typeInfo}>{species.genera.find((g) => g.language.name === "en").genus}</Text>
			</View>
			<View style={styles.imgContainer}>
				<Image style={styles.img} source={{ uri: pokeParams.img }} />
			</View>
			<View style={styles.infoContainer}>
				<View style={styles.tabContainer}>
					{tabs.map((name) => (
						<Tab key={name} name={name} selected={selectedTab} onSelected={() => setSelectedTab(name)} />
					))}
				</View>
				<View>{selectedTab === "About" ? <About species={species} pokemon={pokemon} /> : <View></View>}</View>
			</View>
		</View>
	);
}
