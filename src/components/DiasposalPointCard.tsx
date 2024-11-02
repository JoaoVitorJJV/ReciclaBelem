import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type DisposalPointCardProps = {
    logo: any;
    title: string;
    address: string;
    distance: string;
    discards: string;
    openHours: string;
};

const DisposalPointCard = ({
    logo,
    title,
    address,
    distance,
    discards,
    openHours
}: DisposalPointCardProps) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.address}>{address}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.discards}>{discards}</Text>
                        <Text style={styles.openHours}>{openHours}</Text>
                    </View>
                </View>
                <Text style={styles.distanceContainer}>
                    <Ionicons name='location-outline' size={16} style={styles.icon} />
                    <Text style={styles.distanceText}>{distance}</Text>
                </Text>
            </View>
        </TouchableOpacity>
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
    },
    logo: {
        width: 35,
        height: 35,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    address: {
        color: '#777',
        marginVertical: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    discards: {
        color: '#FF7F50',
    },
    openHours: {
        color: '#1DA1F2',
    },
    distance: {
        color: '#777',
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {

    },
    distanceText: {
        color: '#777',
    },
});

export default DisposalPointCard;
