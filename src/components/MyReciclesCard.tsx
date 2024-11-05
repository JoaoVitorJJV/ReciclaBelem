import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyRecyclingCard() {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.title}>Minhas reciclagens</Text>
                    <Text style={styles.subtitle}>navegue para ver seu histórico</Text>
                </View>
                <View>
                    <Ionicons name="chevron-forward" size={24} color="#FFF" style={styles.icon} />
                </View>

            </View>
            <View style={{ marginVertical: 15 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#d4d3d5', opacity: 0.6 }} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>último descarte</Text>
                <View style={styles.footerTime}>
                    <Ionicons name="calendar-outline" size={17} color='white' />
                    <Text style={styles.footerTimeText}>{' '} há 2 meses</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1DA1F2',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#FFF',
        marginVertical: 5,
    },
    icon: {
        alignSelf: 'flex-end',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerText: {
        color: '#FFF',
        fontSize: 14,
    },
    footerTime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerTimeText: {
        color: '#FFF',
        fontSize: 14,
    }
});

