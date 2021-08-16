import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const MapScreen = () => {
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View>
				<Text>Map Screen stuff</Text>
			</View>
		</SafeAreaView>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
