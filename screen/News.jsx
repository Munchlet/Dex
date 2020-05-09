import React from "react";
import { Dimensions, Image, PixelRatio, ScrollView, StyleSheet, Text, View } from "react-native";
import BackHeader from "../component/BackHeader";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bg: {
		position: "absolute",
		right: -48,
		top: 0,
		height: 256,
		width: 256,
		opacity: 0.4,
	},
	img: {
		height: 200,
		width: Dimensions.get("window").width - 50,
		borderRadius: 20,
		marginVertical: 24,
		zIndex: -1,
	},
	newsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 92 / PixelRatio.get(),
		fontFamily: "opensans-bold",
		marginBottom: 8,
	},
	body: {
		fontFamily: "opensans",
	},
});

export default function News() {
	return (
		<View style={styles.container}>
			<Image style={styles.bg} source={require("../assets/pokeball.png")}></Image>
			<BackHeader />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.newsContainer}>
					<Image
						style={styles.img}
						source={{ uri: "https://www.nintendo-insider.com/wp-content/uploads/2015/09/pokemon-rumble-world-banner-1600x583.jpg" }}
						resizeMode="cover"></Image>
					<Text numberOfLines={2} style={styles.title}>
						Pokemon Rumble Live!
					</Text>
					<Text style={styles.body}>
						{`Picking up from where Pokémon Rumble U left off, Pokémon Rumble World ditches Wii U’s NFC experimentation and serves as another introduction to an addictive and potentially very profitable part of gaming on Nintendo 3DS: free-to-play, or, as Nintendo president Satoru Iwata calls it, free-to-start.

As the fourth iteration in the Pokémon Rumble series, if you have played any of its predecessors you should have some idea as to what to expect. In essence, Pokémon Rumble World places you in control of numerous Toy Pokémon as they go through various stages, battling other Toy Pokémon which, once defeated, will expand your collection.

There’s a basic premise wrapped around this, in that your Mii is living in a kingdom where they are suddenly summoned to see the King. He requests your help because he has been slighted by a magician, who recently made an impromptu visit to the castle and mocked the King for having less Toy Pokémon than him. Recruited to turn the tide, the King asks for your assistance to outmatch his newfound rival and lends you his trusty Pikachu to collect more.

Picking up from where Pokémon Rumble U left off, Pokémon Rumble World ditches Wii U’s NFC experimentation and serves as another introduction to an addictive and potentially very profitable part of gaming on Nintendo 3DS: free-to-play, or, as Nintendo president Satoru Iwata calls it, free-to-start.

As the fourth iteration in the Pokémon Rumble series, if you have played any of its predecessors you should have some idea as to what to expect. In essence, Pokémon Rumble World places you in control of numerous Toy Pokémon as they go through various stages, battling other Toy Pokémon which, once defeated, will expand your collection.

There’s a basic premise wrapped around this, in that your Mii is living in a kingdom where they are suddenly summoned to see the King. He requests your help because he has been slighted by a magician, who recently made an impromptu visit to the castle and mocked the King for having less Toy Pokémon than him. Recruited to turn the tide, the King asks for your assistance to outmatch his newfound rival and lends you his trusty Pikachu to collect more.

Picking up from where Pokémon Rumble U left off, Pokémon Rumble World ditches Wii U’s NFC experimentation and serves as another introduction to an addictive and potentially very profitable part of gaming on Nintendo 3DS: free-to-play, or, as Nintendo president Satoru Iwata calls it, free-to-start.

As the fourth iteration in the Pokémon Rumble series, if you have played any of its predecessors you should have some idea as to what to expect. In essence, Pokémon Rumble World places you in control of numerous Toy Pokémon as they go through various stages, battling other Toy Pokémon which, once defeated, will expand your collection.

There’s a basic premise wrapped around this, in that your Mii is living in a kingdom where they are suddenly summoned to see the King. He requests your help because he has been slighted by a magician, who recently made an impromptu visit to the castle and mocked the King for having less Toy Pokémon than him. Recruited to turn the tide, the King asks for your assistance to outmatch his newfound rival and lends you his trusty Pikachu to collect more.
`}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}
