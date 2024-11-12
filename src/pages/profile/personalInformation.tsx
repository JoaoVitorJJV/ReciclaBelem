import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';

export default function PrivateInformations() {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar style='dark' />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <BackButton />

                {/* Profile Info */}
                <View style={styles.profileContainer}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={{ uri: 'https://ui-avatars.com/api/?background=8e44ad&color=fff&rounded=true' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editIcon}>
                            <Ionicons name="pencil-outline" size={16} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.userName}>Wallace Wendel</Text>
                    <Text style={styles.userRole}>Agente de descarte</Text>
                </View>

                {/* Form Fields */}
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="#A1A1A1" style={styles.icon} />
                        <TextInput
                            placeholder="xxx@gmail.com"
                            style={styles.input}
                        // editable={false}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#A1A1A1" style={styles.icon} />
                        <TextInput
                            placeholder="Nome e Sobrenome"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="location-outline" size={20} color="#A1A1A1" style={styles.icon} />
                        <TextInput
                            placeholder="Endereço"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#A1A1A1" style={styles.icon} />
                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                {/* Edit Button */}
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Editar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContent: {
        padding: 20,
        flexGrow: 1,
    },
    backButton: {
        marginBottom: 20,
        marginTop: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarWrapper: {
        position: 'relative',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#FFA500',
        borderRadius: 15,
        padding: 4,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userRole: {
        color: '#A1A1A1',
        fontSize: 14,
    },
    form: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F8FA',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginVertical: 10,
        height: 50,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    editButton: {
        backgroundColor: '#1DA1F2',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    editButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
