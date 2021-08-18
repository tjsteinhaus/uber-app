import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
	{
		id: "1",
		icon: "home",
		location: "Home",
		destination: "1716 Park Point Rd. Waconia, MN 55387",
	},
	{
		id: "2",
		icon: "briefcase",
		location: "Work",
		destination: "7701 France Ave. Suite 500. Edina, MN",
	},
];

const NavFavorites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tw`bg-gray-200 h-1`, { height: 0.5 }]} />
			)}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity style={tw`flex-row items-center p-5`}>
					<Icon
						style={tw`mr-4 rounded-full bg-gray-300 p-3`}
						name={icon}
						type="ionicon"
						color="white"
						size={18}
					/>
					<View>
						<Text style={tw`font-semibold text-lg`}>{location}</Text>
						<Text style={tw`text-gray-500`}>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavorites;

const styles = StyleSheet.create({});
