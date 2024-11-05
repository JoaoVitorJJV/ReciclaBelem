import React from 'react';
import { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

type MarkersProps = {
    id: string,
    latitude: number,
    longitude: number,
    color: string
}

const CustomMarker = React.memo(function CustomMarker({ id, latitude, longitude, color }: MarkersProps) {
    return (
        <Marker
            identifier={id}
            key={id}
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            tracksViewChanges={false}
            pinColor='#cb200f'
        >
            <View style={styles.markerWrapper}>
                <View style={[
                    styles.markerBody,
                    {
                        backgroundColor: color || "#4285F4",
                    },
                ]}>
                    <View style={styles.markerDot}></View>
                </View>
                <View style={[
                    styles.markerArrow,
                    {
                        borderBottomColor: color || "#4285F4",
                    }
                ]}>
                </View>
            </View>
            <Callout style={styles.callout}>
                <View>
                    <Text style={styles.title}>Você marcou aqui! </Text>
                    {/* <Text>Latitude: {latitude}</Text>
                    <Text>Longitude: {longitude}</Text> */}
                </View>
            </Callout>
        </Marker>
    );
});

const styles = StyleSheet.create({
    markerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    markerBody: {
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    markerDot: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    markerArrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 16,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{ rotate: "180deg" }],
        marginTop: -10,
    },
    callout: {
        width: 160,
        height: 20,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontWeight: "700",
        fontSize: 14,
        marginBottom: 5
    }
});

export default CustomMarker;
