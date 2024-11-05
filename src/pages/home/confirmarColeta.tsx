// ConfirmarColeta.tsx
import React, { useEffect, useState, useRef } from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, View, Text, Alert, ActivityIndicator, TouchableOpacity, ScrollView, Animated } from 'react-native';
import ButtonColeta from '../../components/ButtonColeta';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

interface LocationProps {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

interface DisposalType {
    id: string;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
}

export default function ConfirmarColeta() {
    const [location, setLocation] = useState<LocationProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingAddress, setLoadingAddress] = useState(true);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [address, setAdress] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const mapHeight = useRef(new Animated.Value(0.48)).current;

    const types: DisposalType[] = [
        { id: 'reciclavel', label: 'Reciclável', icon: 'leaf-outline' },
        { id: 'toxico', label: 'Tóxico', icon: 'warning-outline' },
        { id: 'hospitalar', label: 'Hospitalar', icon: 'medkit-outline' },
        { id: 'eletronico', label: 'Eletrônico', icon: 'tv-outline' },
    ];

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão negada', 'Permissão de localização é necessária para mostrar a posição no mapa.');
                setLoading(false);
                return;
            }

            let userLocation = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
            await getLocalization(userLocation.coords.latitude, userLocation.coords.longitude);
            setLoading(false);
        })();
    }, []);

    const getLocalization = async (lat: number, long: number) => {
        setLoadingAddress(true);
        const res = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`);
        setAdress(`${res.data.address.postcode}, ${res.data.address.road}, ${res.data.address.suburb}, ${res.data.address.city}, ${res.data.address.state}`);
        setLoadingAddress(false);
    };

    const toggleMapHeight = () => {
        Animated.timing(mapHeight, {
            toValue: isExpanded ? 0.48 : 0.8,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setIsExpanded(!isExpanded);
    };

    const changeLocalozation = async (
        latitude: number,
        longitude: number,
        latitudeDelta: number,
        longitudeDelta: number) => {

        setLocation({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
        });

        setTimeout(() => getLocalization(latitude, longitude), 10);
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                </View>
            ) : (
                <>
                    <Animated.View style={[styles.map, { height: mapHeight.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}>
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={location as Region}
                            onPress={(e) =>
                                changeLocalozation(
                                    e.nativeEvent.coordinate.latitude,
                                    e.nativeEvent.coordinate.longitude,
                                    0.01,
                                    0.01
                                )
                            }
                        >
                            {location && (
                                <Marker
                                    coordinate={location}
                                    title="Localização Atual"
                                    pinColor="#FF0000"
                                />
                            )}
                        </MapView>
                    </Animated.View>
                    <ScrollView>
                        <View style={styles.bottomContainer}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.title}>Confirme o ponto de coleta</Text>
                                <TouchableOpacity onPress={toggleMapHeight}>
                                    <Ionicons color="black" name={isExpanded ? "add-outline" : "remove-outline"} size={20} />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.locationText}>Sua localização</Text>
                            <Text style={styles.address}>
                                {loadingAddress ? <ActivityIndicator /> : address}
                            </Text>
                            <Text style={styles.typeText}>Tipo de descarte</Text>

                            <View style={styles.buttonContainer}>
                                {types.map((type) => (
                                    <ButtonColeta
                                        key={type.id}
                                        icon={type.icon}
                                        label={type.label}
                                        onPress={() => setSelectedType(type.id)}
                                        selected={selectedType === type.id}
                                    />
                                ))}
                            </View>

                            <TouchableOpacity style={styles.requestButton}>
                                <Text style={styles.requestButtonText}>Solicitar</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    locationText: {
        color: '#777',
        fontSize: 12,
        marginBottom: 5,
    },
    address: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 15,
    },
    typeText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    requestButton: {
        backgroundColor: '#1DA1F2',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    requestButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
