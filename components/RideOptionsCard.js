import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
	{
		id: 1,
		title: "Uber X",
		mulitpler: 1,
		image: "https://links.papareact.com/3pn",
	},
	{
		id: 2,
		title: "Uber XL",
		mulitpler: 1.2,
		image: "https://links.papareact.com/5w8",
	},
	{
		id: 3,
		title: "Uber LUX",
		mulitpler: 1.75,
		image: "https://links.papareact.com/7pf",
	},
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);

	return (
		<SafeAreaView style={tw`flex-grow bg-white`}>
			<View>
				<TouchableOpacity
					style={tw`absolute top-2 left-5 p-3 rounded-full z-50`}
					onPress={() => navigation.navigate("NavigateCard")}
				>
					<Icon name="chevron-left" type="fontawesome" size={30} />
				</TouchableOpacity>
				<Text style={tw`text-center py-5 text-xl`}>
					Select a Ride - {travelTimeInformation?.distance.text}
				</Text>
			</View>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item: { title, image, mulitpler, id }, item }) => (
					<TouchableOpacity
						style={tw`flex-row items-center justify-between px-10 ${
							id === selected?.id && "bg-gray-200"
						}`}
						onPress={() => setSelected(item)}
					>
						<Image
							style={{
								width: 100,
								height: 100,
								resizeMode: "contain",
							}}
							source={{
								uri: image,
							}}
						/>
						<View style={tw`-ml-6`}>
							<Text style={tw`text-xl font-semibold`}>{title}</Text>
							<Text>{travelTimeInformation?.duration.text} Travel Time</Text>
						</View>
						<Text style={tw`text-xl`}>
							{new Intl.NumberFormat("en-us", {
								style: "currency",
								currency: "USD",
							}).format(
								(travelTimeInformation?.duration.value *
									SURGE_CHARGE_RATE *
									mulitpler) /
									100
							)}
						</Text>
					</TouchableOpacity>
				)}
			/>

			<View>
				<TouchableOpacity
					style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
					disabled={!selected}
				>
					<View>
						<Text style={tw`text-center text-white text-xl`}>
							Choose {selected?.title}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
