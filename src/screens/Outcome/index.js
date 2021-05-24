/** @format */

import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Point from "../../data/Point";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "../Outcome/styles";
import {
	Table,
	TableWrapper,
	Row,
	Rows,
	Col,
	Cols,
	Cell,
} from "react-native-table-component";

function Outcome() {
	const navigation = useNavigation();
	const title = ["Môn học", "Đơn vị học trình", "Điểm"];
	return (
		<View style={styles.container}>
			<Header
				label={"Kết quả học tập kỳ 1"}
				goBack={() => navigation.goBack()}
				rightButton={() => navigation.navigate("Semester2")}
				style={styles.Header}></Header>
			<View style={styles.wrapper}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text
						style={{
							fontSize: 30,
							fontWeight: "bold",
							padding: 10,
							flex: 0,
						}}>
						Lý thuyết
					</Text>
					<Table
						borderStyle={{
							borderWidth: 1,
							borderColor: "#000",
						}}>
						<Row
							data={Point.Head}
							style={styles.HeadStyle}
							textStyle={styles.TableText}
						/>
						<Rows
							data={Point.Data}
							textStyle={styles.TableText}
						/>
					</Table>
					<Text
						style={{
							fontSize: 30,
							fontWeight: "bold",
							padding: 10,
							flex: 0,
						}}>
						Thực hành
					</Text>
					<Table
						borderStyle={{
							borderWidth: 1,
							borderColor: "#000",
						}}>
						<Row
							data={Point.Head}
							style={styles.HeadStyle}
							textStyle={styles.TableText}
						/>
						<Rows
							data={Point.Data}
							textStyle={styles.TableText}
						/>
					</Table>
				</ScrollView>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						marginBottom: 20,
						paddingTop: 0,
					}}>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("StudyAgain")
						}
						style={styles.button}>
						<Text style={styles.txtBtn}>
							Đăng ký học lại
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Outcome;
