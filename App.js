import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { loadAsync } from "expo-font";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Home from "./screen/Home";
import News from "./screen/News";
import Pokedex from "./screen/Pokedex";
import PokemonInfo from "./screen/PokemonInfo";

const Stack = createStackNavigator();

export default function App() {
	const [isLoaded, setLoaded] = useState(false);
	useEffect(() => {
		loadAsync({
			opensans: require("./assets/fonts/OpenSans-Regular.ttf"),
			"opensans-light": require("./assets/fonts/OpenSans-Light.ttf"),
			"opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
		}).then(() => setLoaded(true));
	}, []);

	if (!isLoaded)
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none" initialRouteName="Home" options={{ headerShow: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Pokedex" component={Pokedex} />
				<Stack.Screen name="News" component={News} />
				<Stack.Screen name="PokemonInfo" component={PokemonInfo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
