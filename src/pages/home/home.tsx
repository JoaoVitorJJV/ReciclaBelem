import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import MyRecyclingCard from '../../components/MyReciclesCard';
import DisposalPointCard from '../../components/DiasposalPointCard';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter a biblioteca instalada

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.greetingText}>Olá, João</Text>
                <View style={styles.profileImageContainer}>
                    <Image src='https://ui-avatars.com/api/?background=0D8ABC&color=fff&rounded=true' style={styles.profileImage} />
                </View>
            </View>

            {/* My Recycling Card */}
            <MyRecyclingCard />

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#A1A1A1" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="procurar ponto de descarte"
                    placeholderTextColor="#A1A1A1"
                />
            </View>

            {/* Section Title */}
            <Text style={styles.sectionTitle}>Pontos de descarte</Text>

            {/* Disposal Point Cards */}
            <DisposalPointCard
                logo={require('../../../assets/logos/recycle-logo.png')}
                title="Recicla Pará"
                address="Tapanã, 303"
                distance="1.2 KM"
                discards="+300 descartes"
                openHours="abre às 10h - 18h"
            />
            <DisposalPointCard
                logo={require('../../../assets/logos/recycle-logo.png')}
                title="Recicla Pará"
                address="Tapanã, 303"
                distance="1.2 KM"
                discards="+300 descartes"
                openHours="abre às 10h - 18h"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6F7FF',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileImageContainer: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        padding: 5,
    },
    profileImage: {
        width: 40,
        height: 40,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F8FA',
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 45,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
    },
});
