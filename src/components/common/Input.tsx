import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Instale com `expo install @expo/vector-icons`

type InputProps = TextInputProps & {
    icon?: keyof typeof Ionicons.glyphMap;
};

const Input: React.FC<InputProps> = ({ icon, ...props }) => {
    return (
        <View style={styles.container}>
            {icon && <Ionicons name={icon} size={20} color="#333" style={styles.icon} />}
            <TextInput style={styles.input} {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#F5F8FA',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 45,
        color: '#333',
    },
});

export default Input;
