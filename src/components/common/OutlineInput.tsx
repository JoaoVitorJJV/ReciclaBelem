import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

type OutlineInputProps = TextInputMaskProps & {
    placeholder: string;
    maskType?: 'custom' | 'cep'; // Define o tipo de máscara, como 'cep',
};

const OutlineInput = ({ placeholder, maskType, ...props }: OutlineInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const borderColorAnim = useRef(new Animated.Value(0)).current;

    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(borderColorAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        Animated.timing(borderColorAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const borderColor = borderColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#555', '#1DA1F2'], // Cor inicial e cor quando focado
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedBorder, { borderBottomColor: borderColor }]}>
                <TextInputMask
                    // type='custom' // Passa a prop type explicitamente
                    options={maskType === 'cep' ? { mask: '99.999-999' } : undefined} // Configura a máscara de CEP
                    placeholder={placeholder}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    animatedBorder: {
        borderBottomWidth: 1,
    },
    input: {
        paddingVertical: 5,
        fontSize: 25,
        color: '#333',
        fontWeight: '700',
    },
});

export default OutlineInput;
