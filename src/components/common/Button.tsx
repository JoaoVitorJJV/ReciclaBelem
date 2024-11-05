import React, { PropsWithChildren, ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type ButtonProps = PropsWithChildren<{
    onPress: () => void;
    style?: object;
    childrenStyle?: object;
    disabled?: boolean
}>;

const Button: React.FC<ButtonProps> & { Text: React.FC<TextProps> } = ({ children, onPress, style, disabled, childrenStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <View style={childrenStyle}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

// Define o subcomponente Button.Text
type TextProps = {
    children: ReactNode;
    style?: object;
};

Button.Text = ({ children, style }: TextProps) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1DA1F2',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabled: {
        opacity: 0.7
    }
});

export default Button;
