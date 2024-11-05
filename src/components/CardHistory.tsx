import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CardHistoryProps = {
    logo: any;
    title: string;
    address: string;
    date: string;
    time: string;
    details: string;
};

const CardHistory = ({
    logo,
    title,
    address,
    date,
    time,
    details,
}: CardHistoryProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.address}>{address}</Text>
                    <View style={styles.footer}>
                        <View style={styles.dateContainer}>
                            <Ionicons name="calendar-outline" size={16} color="#A1A1A1" />
                            <Text style={styles.dateText}>{date}</Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Ionicons name="time-outline" size={16} color="#A1A1A1" />
                            <Text style={styles.timeText}>{time}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsText}>{details}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    address: {
        color: '#777',
        marginVertical: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        marginLeft: 5,
        color: '#A1A1A1',
        fontSize: 14,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        marginLeft: 5,
        color: '#A1A1A1',
        fontSize: 14,
    },
    detailsButton: {
        backgroundColor: '#E6F7FF',
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: 'center',
    },
    detailsText: {
        color: '#1DA1F2',
        fontWeight: 'bold',
    },
});

export default CardHistory;
