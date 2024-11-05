import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import CardHistory from '../../components/CardHistory';
import { Ionicons } from '@expo/vector-icons';

export default function History() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Histórico de Descartes</Text>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#A1A1A1" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="pesquisar"
                    placeholderTextColor="#A1A1A1"
                />
            </View>

            {/* History Card */}
            <CardHistory
                logo={require('../../../assets/logos/recycle-logo.png')}
                title="Recicla Pará"
                address="Tapanã, 303"
                date="ontem, 12 julho"
                time="11:00"
                details="Detalhes"
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F8FA',
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 45,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});
