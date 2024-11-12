import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';

export default function AddCreditCard() {
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const navigation = useNavigation();

    const maskCreditCard = (value: string) => {
        // Remove todos os caracteres que não são números
        value = value.replace(/\D/g, '');

        // Aplica a máscara para o cartão de crédito no formato XXXX XXXX XXXX XXXX
        if (value.length <= 4) {
            return value;
        } else if (value.length <= 8) {
            return `${value.slice(0, 4)} ${value.slice(4)}`;
        } else if (value.length <= 12) {
            return `${value.slice(0, 4)} ${value.slice(4, 8)} ${value.slice(8)}`;
        } else {
            return `${value.slice(0, 4)} ${value.slice(4, 8)} ${value.slice(8, 12)} ${value.slice(12, 16)}`;
        }
    }

    const maskDate = (value: string) => {
        // Remove todos os caracteres que não são números
        value = value.replace(/\D/g, '');

        // Aplica a máscara para data de nascimento no formato MM/AA
        if (value.length <= 2) {
            return value;
        } else {
            return `${value.slice(0, 2)}/${value.slice(2, 4)}`;
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.keyboardView}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    {/* Header */}
                    <BackButton />

                    <Text style={styles.title}>Adicionar Cartão</Text>

                    {/* Card Logos */}
                    <View style={styles.cardLogosContainer}>
                        <Image source={require('../../../assets/logos/visa.png')} style={styles.cardLogo} />
                        <Image source={require('../../../assets/logos/master-card.png')} style={styles.cardLogo} />
                    </View>

                    {/* Scan Button */}
                    <TouchableOpacity style={styles.scanButton}>
                        <Ionicons name="scan-outline" size={20} color="#1DA1F2" />
                        <Text style={styles.scanText}>Escanear</Text>
                    </TouchableOpacity>

                    {/* Card Holder Name */}
                    <Text style={styles.label}>Nome no Cartão</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#A1A1A1" style={styles.inputIcon} />
                        <TextInput placeholder="Nome no Cartão" style={styles.input} />
                    </View>

                    {/* Card Number */}
                    <Text style={styles.label}>Número do Cartão</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="card-outline" size={20} color="#A1A1A1" style={styles.inputIcon} />
                        <TextInput
                            placeholder="XXXX  XXXX  XXXX  XXXX"
                            style={styles.input}
                            keyboardType="numeric"
                            value={maskCreditCard(cardNumber)}
                            onChangeText={(text) => setCardNumber(maskCreditCard(text))}
                            maxLength={19}
                        />
                    </View>

                    {/* Expiry and CVV */}
                    <View style={styles.rowContainer}>
                        <View style={styles.halfInputContainer}>
                            <Text style={styles.label}>Vencimento</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="calendar-outline" size={20} color="#A1A1A1" style={styles.inputIcon} />
                                <TextInput
                                    placeholder="MM/AA"
                                    style={styles.input}
                                    value={maskDate(date)}
                                    onChangeText={(text) => setDate(maskDate(text))}
                                    keyboardType="numeric"

                                />
                            </View>
                        </View>
                        <View style={styles.halfInputContainer}>
                            <Text style={styles.label}>CVV</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="#A1A1A1" style={styles.inputIcon} />
                                <TextInput
                                    placeholder="XXX"
                                    style={styles.input}
                                    keyboardType="numeric"
                                    maxLength={3}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <View>
                            {/* Add Button */}
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Adicionar</Text>
                            </TouchableOpacity>

                            {/* Cancel Button */}
                            <TouchableOpacity>
                                <Text style={styles.cancelText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Security Note */}
                        <Text style={styles.securityNote}>
                            Operação totalmente segura. Consulte nossos <Text style={styles.link}>Termos de Serviço</Text> para saber mais.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardView: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    backButton: {
        marginBottom: 20,
        marginTop: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardLogosContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    cardLogo: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
    },
    scanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    scanText: {
        color: '#1DA1F2',
        fontSize: 16,
        marginLeft: 8,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F8FA',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 45,
        marginBottom: 15,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInputContainer: {
        flex: 1,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#1DA1F2',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 40,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelText: {
        textAlign: 'center',
        color: '#333',
        fontSize: 16,
        marginTop: 15,
    },
    securityNote: {
        textAlign: 'center',
        color: '#999',
        fontSize: 12,
        marginTop: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    link: {
        color: '#1DA1F2',
        textDecorationLine: 'underline',
    },
});
