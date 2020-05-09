import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { PixelRatio, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CategoryCard from "../component/CategoryCard";
import NewsCard from "../component/NewsCard";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		marginTop: 100,
		paddingHorizontal: 20,
	},
	headerFont: {
		fontFamily: "opensans-bold",
		fontSize: 82 / PixelRatio.get(),
	},
	searchSection: {
		marginHorizontal: 20,
		height: 52,
		marginVertical: 20,
		borderRadius: 28,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#e6e6e6",
	},
	searchIcon: {
		marginLeft: 20,
		marginRight: 10,
	},
	input: {
		height: 48,
		backgroundColor: "#e6e6e6",
		color: "black",
		fontSize: 48 / PixelRatio.get(),
	},
	subcategory: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: 20,
	},
	headerContainer: {
		marginTop: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 62 / PixelRatio.get(),
	},
	headerLink: {
		color: "#366fc6",
		fontWeight: "bold",
		fontSize: 42 / PixelRatio.get(),
	},
	newsContainer: {
		paddingHorizontal: 20,
	},
});

export default function Home({ navigation }) {
	const [value, onChangeText] = React.useState("");
	const [news] = React.useState([
		{
			title: "Pokémon trainer creates Sword and Shield stats calculator",
			time: "3 hours ago",
			img:
				"https://cdn1.dotesports.com/wp-content/uploads/2019/11/24204831/Screenshot_2019-11-24-11-Pokemon-Sword-and-Pokemon-Shield-Official-Trailer-YouTube1.jpg",
		},
		{
			title: "Pokémon GO May 2020: Field Research tasks, rewards and Shinx encounter",
			time: "4 hours ago",
			img: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/05/04/10/willowlife.jpg?w968",
		},
		{
			title: "Niantic delays ‘Pokemon Go’ Battle League season 2",
			time: "4.5 hours ago",
			img: "https://micky.com.au/wp-content/uploads/2020/05/3642126-pokemon20go-696x456.jpg",
		},
	]);

	const onNavigate = (title) => navigation.navigate(title);

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<View style={styles.header}>
				<Text style={styles.headerFont}>What Pokemon</Text>
				<Text style={styles.headerFont}>are you looking for?</Text>
			</View>
			<View style={styles.searchSection}>
				<Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
				<TextInput
					style={styles.input}
					placeholder="Search Pokemon, Move, Ability etc"
					underlineColorAndroid="transparent"
					onChangeText={(text) => onChangeText(text)}
					value={value}
				/>
			</View>
			<View>
				<View style={styles.subcategory}>
					<CategoryCard title="Pokedex" color="#159F6E" onPress={() => onNavigate("Pokedex")} />
					<CategoryCard title="Moves" color="#e4362b" />
				</View>
				<View style={styles.subcategory}>
					<CategoryCard title="Abilities" color="#58a9f4" />
					<CategoryCard title="Items" color="#ffce4b" />
				</View>
				<View style={styles.subcategory}>
					<CategoryCard title="Locations" color="#7c528c" />
					<CategoryCard title="Types" color="#b0736d" />
				</View>
			</View>

			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Pokemon News</Text>
				<Text style={styles.headerLink}>View All</Text>
			</View>
			<View style={styles.newsContainer}>
				{news.map((newsItem) => (
					<NewsCard {...newsItem} key={newsItem.title} onPress={() => onNavigate("News")} />
				))}
			</View>
		</ScrollView>
	);
}
