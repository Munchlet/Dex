import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

const FirstRoute = () => <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />;

const SecondRoute = () => <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />;

const initialLayout = { width: Dimensions.get("window").width };

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		height: "100%",
	},
	tabview: {
		marginTop: "20%",
	},
});

export default function () {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "About" },
		{ key: "second", title: "Stats" },
		{ key: "third", title: "Evo" },
		{ key: "fourth", title: "Moves" },
	]);

	const renderScene = SceneMap({
		first: FirstRoute,
		second: SecondRoute,
		third: SecondRoute,
		fourth: SecondRoute,
	});

	return (
		<TabView
			style={styles.tabview}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
		/>
	);
}
