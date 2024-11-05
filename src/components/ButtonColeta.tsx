// ButtonColeta.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonColetaProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
    selected: boolean;
    buttonWidth?: number; // Prop para definir a largura do botão dinamicamente
}

const ButtonColeta: React.FC<ButtonColetaProps> = ({ icon, label, onPress, selected, buttonWidth }) => {
    const defaultWidth = Dimensions.get('window').width / 2 - 30;
    const width = buttonWidth || defaultWidth;

    return (
        <TouchableOpacity
            style={[styles.button, { width }, selected && styles.buttonSelected]}
            onPress={onPress}
        >
            <Ionicons name={icon} size={24} color={selected ? "#fff" : "#333"} />
            <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#f2eeee',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    buttonSelected: {
        backgroundColor: '#0F9D58',
    },
    label: {
        fontSize: 14,
        marginLeft: 5,
        color: '#333',
    },
    labelSelected: {
        color: '#fff',
    },
});

export default ButtonColeta;
