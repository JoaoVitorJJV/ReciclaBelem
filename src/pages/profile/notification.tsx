import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';

interface Notification {
    id: string;
    sender: string;
    message: string;
    time: string;
    initials: string;
}

const notifications: Notification[] = [
    {
        id: '1',
        sender: 'Recicla Pará',
        message: 'recebeu sua encomenda, obrigado!',
        time: '15h',
        initials: 'SJ'
    },
];

export default function Notifications() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            {/* Header */}
            <BackButton />
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Notificações</Text>
                <Text style={styles.markAsRead}>Marcar como lida</Text>
            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                <View style={styles.tab}>
                    <Text style={styles.tabTextActive}>Todas</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>1</Text>
                    </View>
                </View>
                <View style={styles.tab}>
                    <Text style={styles.tabText}>Não lidas</Text>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#d5d7db' }} />

            {/* Notification List */}
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.notificationContainer}>
                        <View style={styles.notificationLeft}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>{item.initials}</Text>
                            </View>
                            <View style={styles.notificationTextContainer}>
                                <Text style={styles.senderText}>{item.sender}</Text>
                                <Text style={styles.messageText}>{item.message}</Text>
                            </View>
                        </View>
                        <View style={styles.notificationRight}>
                            <Text style={styles.timeText}>{item.time}</Text>
                            <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.notificationsList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    backButton: {
        marginTop: 30,
        marginBottom: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    markAsRead: {
        color: '#1DA1F2',
        fontSize: 14,
    },
    tabsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    tabTextActive: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1DA1F2',
    },
    tabText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'black',
    },
    badge: {
        backgroundColor: '#E5EFFF',
        borderRadius: 12,
        paddingHorizontal: 6,
        marginLeft: 5,
    },
    badgeText: {
        color: '#1DA1F2',
        fontSize: 12,
    },
    notificationsList: {
        paddingVertical: 10,
    },
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    notificationLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: '#F5F5F5',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6E6E6E',
    },
    notificationTextContainer: {
        flexDirection: 'column',
    },
    senderText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    messageText: {
        fontSize: 14,
        color: '#6E6E6E',
    },
    notificationRight: {
        alignItems: 'flex-end',
    },
    timeText: {
        fontSize: 12,
        color: '#6E6E6E',
        marginBottom: 5,
    },
});

