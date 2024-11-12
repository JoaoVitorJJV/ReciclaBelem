import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native"

const BackButton = () => {
    const navigation = useNavigation();

    return (<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
    </TouchableOpacity>)
}

export default BackButton;

const styles = StyleSheet.create({
    backButton: {
        marginTop: 30,
        marginBottom: 20,
    },
})