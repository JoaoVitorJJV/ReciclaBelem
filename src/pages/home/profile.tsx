import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface ProfileOptionProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    onPress: () => void;
    showBadge?: boolean;
    screen: string;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({ icon, title, onPress, showBadge = false, screen }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)} style={styles.optionContainer}>
            <View style={styles.optionIconContainer}>
                <Ionicons name={icon} size={24} color="#A1A1A1" />
            </View>
            <Text style={styles.optionText}>{title}</Text>
            {showBadge && <View style={styles.badge}><Text style={styles.badgeText}>2</Text></View>}
            <Ionicons name="chevron-forward" size={20} color="#A1A1A1" />
        </TouchableOpacity>
    );
};

export default function Profile() {
    const profileOptions = [
        { id: '1', icon: 'person-outline', title: 'Informações Pessoais', onPress: () => { }, screen: 'PrivateInformations' },
        { id: '2', icon: 'card-outline', title: 'Pagamentos', onPress: () => { }, screen: 'Payments' },
        { id: '3', icon: 'notifications-outline', title: 'Notificações', onPress: () => { }, showBadge: true, screen: 'Notifications' },
        { id: '4', icon: 'help-circle-outline', title: 'Perguntas Frequentes', onPress: () => { }, screen: 'FAQ' },
        { id: '5', icon: 'location-outline', title: 'Meus pontos de coleta', onPress: () => { }, screen: 'MyPoints' },
        { id: '6', icon: 'log-out-outline', title: 'Sair', onPress: () => { }, screen: 'Exit' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Perfil</Text>

            {/* User Info */}
            <View style={styles.userInfoContainer}>
                <Image source={{ uri: 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&rounded=true' }} style={styles.profileImage} />
                <Text style={styles.userName}>Wallace Wendel</Text>
                <Text style={styles.userRole}>Agente de descarte</Text>
            </View>

            {/* Options List */}
            <FlatList
                data={profileOptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProfileOption
                        icon={item.icon}
                        title={item.title}
                        onPress={item.onPress}
                        showBadge={item.showBadge}
                        screen={item.screen}
                    />
                )}
                style={styles.optionsList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    userInfoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userRole: {
        color: '#A1A1A1',
        fontSize: 14,
    },
    optionsList: {
        marginTop: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    optionIconContainer: {
        width: 30,
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    badge: {
        backgroundColor: '#FF3B30',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 10,
    },
    badgeText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
