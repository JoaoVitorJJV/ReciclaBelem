import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import CardItem from '../../components/CardItem';
import { useNavigation } from '@react-navigation/native';


export default function Payments() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                <Text style={styles.title}>Cartões</Text>

                {/* Card List */}
                <CardItem
                    logo={require('../../../assets/logos/apple-logo.png')}
                    cardName="Apple ID"
                    lastDigits=""
                    width={28}
                />
                <CardItem
                    logo={require('../../../assets/logos/master-card.png')}
                    cardName="Master Card"
                    lastDigits="****6356"
                />
                <CardItem
                    logo={require('../../../assets/logos/visa.png')}
                    cardName="Visa"
                    lastDigits="****5645"
                />

                {/* Add Button */}
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPayment')}>
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContent: {
        padding: 20,
    },
    backButton: {
        marginBottom: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    cardLogo: {
        width: 40,
        height: 40,
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
    addButton: {
        marginTop: 20,
    },
    addButtonText: {
        color: '#1DA1F2',
        fontSize: 16,
    },
});
