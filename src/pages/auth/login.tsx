import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useNavigation } from '@react-navigation/native';

type ScreenProps = {
    navigateTo: (screen: string) => void
}

const LoginScreen = ({ navigateTo }: ScreenProps) => {
    return <>
        <Button onPress={() => { }} style={styles.googleButton} childrenStyle={styles.googleButtonChildren}>
            <Image source={require('../../../assets/gLogo.png')} style={{ width: 25, height: 25 }} />
            <Button.Text style={styles.googleButtonText}>Entrar com Google</Button.Text>
        </Button>

        <View style={styles.orContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>ou continue com seu email</Text>
            <View style={styles.divider} />
        </View>


        <Input placeholder="Email" icon="mail-outline" />
        <Input placeholder="Senha" icon="lock-closed-outline" secureTextEntry />

        <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <Button onPress={() => navigateTo('Main')}>
            <Button.Text>Entrar</Button.Text>
        </Button>
    </>
}

const RegistrarScreen = ({ navigateTo }: ScreenProps) => {

    return <>
        <Input placeholder="Nome e Sobrenome" icon="person" />
        <Input placeholder="Email" icon="mail-outline" />
        <Input placeholder="Senha" icon="lock-closed-outline" secureTextEntry />
        <Input placeholder="Confirmar a Senha" icon="lock-closed-outline" secureTextEntry />

        <Button onPress={() => navigateTo('Cadastro')}>
            <Button.Text>Continuar</Button.Text>
        </Button>
    </>
}

export default function Login() {
    const [tabActive, setTabActive] = useState('entrar');
    const navigation = useNavigation();

    const onChangeTabActive = (tab: string) => setTabActive(tab);
    const handleNavigation = (screen: string) => {
        navigation.navigate(screen)
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {/* Parte superior fixa */}
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>ReciclaBelém</Text>
                    <Text style={styles.subtitle}>Entre ou Registre-se para acessar a sua conta</Text>

                    <View style={styles.tabContainer}>
                        <View style={[styles.tabsContainer, tabActive === 'entrar' && styles.tabActive]}>
                            <TouchableOpacity style={styles.tab} onPress={() => onChangeTabActive('entrar')}>
                                <Text
                                    style={[
                                        styles.tabText,
                                        tabActive === 'entrar' && styles.tabActiveText
                                    ]}
                                >
                                    Entrar
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.tabsContainer, tabActive === 'registrar' && styles.tabActiveRight]}>
                            <TouchableOpacity style={styles.tab} onPress={() => onChangeTabActive('registrar')}>
                                <Text
                                    style={[
                                        styles.tabText,
                                        tabActive === 'registrar' && styles.tabActiveText
                                    ]}
                                >
                                    Registrar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Parte inferior que ocupa o espaço restante */}
                <View style={styles.contentContainer}>
                    <View style={styles.mainContent}>
                        {tabActive === 'entrar' ? <LoginScreen navigateTo={handleNavigation} /> : <RegistrarScreen navigateTo={handleNavigation} />}
                    </View>

                    {/* Texto fixado na parte inferior */}
                    <Text style={styles.termsText}>
                        Ao registrar uma conta, você estará aceitando os{' '}
                        <Text style={styles.linkText}>Termos de Serviço</Text> e a{' '}
                        <Text style={styles.linkText}>Política de Privacidade</Text>.
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 0, // Remover o padding para garantir que os elementos fiquem grudados
    },
    divider: {
        height: 1,
        backgroundColor: '#d4d3d5',
        flex: 1
    },
    headerContainer: {
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#E6F7FF',
        padding: 20,
        justifyContent: 'space-between', // Alinha o conteúdo e o texto de termos
    },
    mainContent: {
        flex: 1,
    },
    tabsContainer: {
        width: '50%',
        justifyContent: 'center',
    },
    tabActive: {
        backgroundColor: '#E6F7FF',
        borderTopRightRadius: 10,
    },
    tabActiveRight: {
        backgroundColor: '#E6F7FF',
        borderTopLeftRadius: 10,
    },
    tabActiveText: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    tabText: {
        fontSize: 19,
    },
    tabTextSelected: {
        color: '#1DA1F2',
        fontWeight: 'bold',
    },
    googleButton: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    googleButtonChildren: {
        color: '#333',
        alignItems: 'center',
        flexDirection: 'row'
    },
    googleButtonText: {
        color: 'black',
        marginLeft: 15,
        fontSize: 17
    },
    orText: {
        textAlign: 'center',
        marginVertical: 15,
        color: '#777',
        marginHorizontal: 5
    },
    forgotPassword: {
        textAlign: 'right',
        marginVertical: 10,
        color: '#1DA1F2',
    },
    termsText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#555',
    },
    linkText: {
        color: '#1DA1F2',
        fontSize: 15
    },
});
