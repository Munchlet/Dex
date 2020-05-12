import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { PixelRatio, ScrollView, StyleSheet, Text, View } from "react-native";
import { capFirst } from "../../lib/Helper";
import AboutSubtitle from "./AboutSubtitle";

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 22,
		paddingVertical: 18,
		position: "relative",
	},
	box: {
		marginVertical: 20,
		borderRadius: 20,
		flexDirection: "row",
		padding: 20,
		color: "white",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	boxTitle: {
		color: "gray",
		marginBottom: 6,
	},
});

export default function ({ species, pokemon }) {
	const [weight] = React.useState(((pokemon.weight / 10) * 2.2046).toFixed(1));
	const [height] = React.useState((pokemon.height * 10 * 0.3937007874).toFixed(1));
	const [genderRate, setGenderRate] = React.useState(((species.gender_rate * 1.0) / 8) * 100);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text>{species.flavor_text_entries.find((s) => s.language.name === "en").flavor_text.replace("\n", "")}</Text>
				<View style={styles.box}>
					<View style={{ flex: 1 }}>
						<Text style={styles.boxTitle}>Height</Text>
						<Text>{`${height}" (${pokemon.height * 10}cm)`}</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Text style={styles.boxTitle}>Weight</Text>
						<Text>{`${weight} lbs (${pokemon.weight / 10}kg)`}</Text>
					</View>
				</View>
				<AboutSubtitle title="Breeding" style={{ marginBottom: 12 }} />
				<View style={{ flex: 1, flexDirection: "row", height: 150 }}>
					<View style={{ flex: 1 }}>
						<Text style={{ marginBottom: 10, fontSize: 44 / PixelRatio.get(), color: "gray" }}>Gender</Text>
						<Text style={{ marginBottom: 10, fontSize: 44 / PixelRatio.get(), color: "gray" }}>Egg Groups</Text>
						<Text style={{ marginBottom: 10, fontSize: 44 / PixelRatio.get(), color: "gray" }}>Habitat</Text>
					</View>
					<View style={{ flex: 2 }}>
						<View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
							<Ionicons name="md-male" size={12} color="blue" />
							<Text style={{ paddingHorizontal: 8 }}>{100 - genderRate}%</Text>
							<Ionicons name="md-female" size={12} color="pink" />
							<Text style={{ paddingHorizontal: 8 }}>{genderRate}%</Text>
						</View>
						<Text style={{ marginBottom: 10, fontSize: 44 / PixelRatio.get() }}>{species.egg_groups.map((e) => capFirst(e.name)).join(", ")}</Text>
						<Text style={{ marginBottom: 10, fontSize: 44 / PixelRatio.get() }}>{capFirst(species.habitat.name)}</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
