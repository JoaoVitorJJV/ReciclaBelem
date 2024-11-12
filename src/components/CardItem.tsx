import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

interface CardProps {
    logo: any;
    cardName: string;
    lastDigits: string;
    width?: number;
    height?: number;
}

const CardItem: React.FC<CardProps> = ({ logo, cardName, lastDigits, width = 40, height = 40 }) => (
    <TouchableOpacity style={styles.cardItem}>
        <Image source={logo} style={[styles.cardLogo, { width, height }]} />
        <View style={styles.cardInfo}>
            <Text style={styles.cardName}>{cardName}</Text>
            {lastDigits !== "" && <Text style={styles.cardDigits}>{lastDigits}</Text>}

        </View>
        <Ionicons name="chevron-forward" size={18} color="#A1A1A1" />
    </TouchableOpacity>
);
export default CardItem;

const styles = StyleSheet.create({
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    cardLogo: {
        resizeMode: 'contain',
        marginRight: 15,
    },
    cardInfo: {
        flex: 1,
    },
    cardName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardDigits: {
        color: '#A1A1A1',
    },
});