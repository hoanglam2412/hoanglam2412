/** @format */

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	warper: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		// paddingHorizontal: 16,
		paddingTop: 20,
		alignItems: "center",
		paddingHorizontal: 10,
		flex: 1,
		/* flexDirection: "row", */
	},
	line: {
		flexDirection: "row",
	},

	textLabel: {
		fontWeight: "bold",
		width: 100,
		paddingRight: 5,
		fontSize: 17,
		margin: 5,
	},
	button: {
		fontWeight: "bold",
		backgroundColor: "#cd1725",
		fontSize: 20,
		color: "#000",
		width: 150,
		height: 40,
		borderRadius: 7,
		marginTop: 15,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	txtLogin: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
	},
	checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
		marginLeft: 40,
	},
	line2: {},
});
export default styles;
