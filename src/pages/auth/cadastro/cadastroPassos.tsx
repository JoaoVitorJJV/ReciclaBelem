import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Button from '../../../components/common/Button';
import OutlineInput from '../../../components/common/OutlineInput';
import axios from 'axios';
import { Keyboard } from 'react-native';
import Input from '../../../components/common/Input';
import { Menu, Provider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type AddressViaCep = {
    bairro: string
    cep: string
    complemento: string
    ddd: string
    estado: string
    gia: string
    ibge: string
    localidade: string
    logradouro: string
    regiao: string
    siafi: string
    uf: string
    unidade: string
}


type AddressFormProps = {
    onNext: () => void;
    onBack?: () => void;
};

// Componente do segundo passo
const StepTwo: React.FC<AddressFormProps> = ({ onNext, onBack }) => {
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [visible, setVisible] = useState(false);

    const cities = ['Belém, PA', 'Ananindeua, PA', 'Marituba, PA', 'Castanhal, PA'];

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Provider>
            <View style={styles.stepContainer}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View>
                        <Text style={styles.title}>Informe seu endereço</Text>
                        <Text style={styles.subtitle}>Usaremos seu endereço apenas para informar os melhores pontos de coleta mais próximo a você</Text>
                    </View>
                </TouchableWithoutFeedback>


                <View style={styles.inputContainer}>
                    <Input
                        placeholder="endereço"
                        icon="location-outline"
                        value={address}
                        onChangeText={setAddress}
                    />
                    <Input
                        placeholder="número"
                        icon="home-outline"
                        value={number}
                        onChangeText={setNumber}
                        keyboardType="numeric"
                    />
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={
                            <TouchableOpacity onPress={openMenu} style={styles.menuTrigger}>
                                <Text style={styles.menuText}>{selectedCity || 'cidade e estado'}</Text>
                                <Ionicons name="chevron-down" size={20} color="#333" />
                            </TouchableOpacity>
                        }
                    >
                        {cities.map((city, index) => (
                            <Menu.Item
                                key={index}
                                onPress={() => {
                                    setSelectedCity(city);
                                    closeMenu();
                                }}
                                title={city}
                            />
                        ))}
                    </Menu>
                </View>

                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View>
                        <Button onPress={onNext} disabled={!address || !number || !selectedCity}>
                            <Button.Text>Confirmar Endereço</Button.Text>
                        </Button>
                        <TouchableOpacity onPress={onBack} style={styles.backContainer}>
                            <Ionicons name="arrow-back" size={20} color="#333" style={styles.backIcon} />
                            <Text style={styles.backText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Provider>
    );
};
// Componente de cada etapa do formulário

const StepOne: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [loadingCep, setLoadingCep] = useState(false);
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState<AddressViaCep | undefined>();
    const [error, setError] = useState(false);

    const navigation = useNavigation();

    const unMask = (value: string) => value.replace(/\D/g, '');

    const getCep = async () => {
        setLoadingCep(true);
        setAddress(undefined);
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${unMask(cep)}/json`);
            setLoadingCep(false);
            if (!response.data.erro) {
                setError(false)
                setAddress(response.data);
            } else {
                setError(true)
            }


            Keyboard.dismiss();
        } catch (error) {
            setLoadingCep(false);
            console.error('Erro ao buscar o CEP:', error);
            throw error;
        }
    };

    // Debounce para chamar getCep após o usuário parar de digitar
    useEffect(() => {
        if (cep.length === 10) {
            const timeoutId = setTimeout(() => {
                getCep();
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [cep]);

    const onClickContinue = async () => {
        if (address) {

        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.stepContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Por favor, informe seu CEP</Text>
                    <OutlineInput
                        type='custom'
                        placeholder="Digite aqui CEP..."
                        onChangeText={(text) => setCep(text)}
                        maskType='cep'
                        value={cep}
                        keyboardType='numeric'
                    />

                    <View style={[styles.stepContent, loadingCep && !address && styles.centerlized]}>
                        {loadingCep ? <ActivityIndicator /> : address && !error ?
                            <View style={styles.adressContainer}>
                                <View>
                                    <Text style={styles.addressTitle}>endereço {'\n'}</Text>
                                    <Text style={styles.address}>
                                        {address.logradouro}, {address.bairro}
                                        {'\n'}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.addressTitle}>complemento {'\n'}</Text>
                                    <Text style={styles.address}>
                                        {address.complemento}{'\n'}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.addressTitle}>cidade e estado {'\n'}</Text>
                                    <Text style={styles.address}>
                                        {address.localidade}, {address.estado}{'\n'}
                                    </Text>
                                </View>
                            </View> : error && <Text style={styles.addressTitle}>endereço não localizado, por favor tente novamente</Text>
                        }
                    </View>
                </View>
                <Button
                    onPress={onClickContinue}
                    disabled={cep.length < 10 || loadingCep || !address}
                >
                    <Button.Text>Confirmar Endereço</Button.Text>
                </Button>
                {!loadingCep && address &&
                    <TouchableOpacity style={styles.isNotMyAdressContainer} onPress={onNext}>
                        <Text style={styles.isNotMyAddressText}>Não é meu endereço</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
                    <Ionicons name="arrow-back" size={20} color="#333" style={styles.backIcon} />
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};



export default function CadastroPassos() {
    const [step, setStep] = useState(0);

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBackStep = () => {
        setStep((prevStep) => Math.max(0, prevStep - 1));
    };

    const steps = useMemo(() => [
        StepOne,
        (props: AddressFormProps) => <StepTwo {...props} onBack={handleBackStep} />,
    ], []);

    const CurrentStep = steps[step];

    return (
        // <KeyboardAvoidingView
        //     style={styles.container}
        //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //     keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        // >

        // </KeyboardAvoidingView>

        <View style={styles.container}>

            <View style={styles.contentContainer}>
                {CurrentStep ? <CurrentStep onNext={handleNextStep} /> : <Text>Fim do formulário</Text>}
            </View>

            {/* Texto de Termos e Política */}
            <Text style={styles.termsText}>
                Ao registrar uma conta, você estará aceitando os{' '}
                <Text style={styles.linkText}>Termos de Serviço</Text> e a{' '}
                <Text style={styles.linkText}>Política de Privacidade</Text>.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    stepContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    termsText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#555',
        marginTop: 20,
        marginBottom: 10
    },
    linkText: {
        color: '#1DA1F2',
        fontSize: 15,
    },
    stepContent: {
        flex: 1,
    },
    centerlized: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    adressContainer: {
        paddingVertical: 35
    },
    addressTitle: {
        fontWeight: '700',
        fontSize: 21
    },
    address: {
        fontSize: 16
    },
    isNotMyAdressContainer: {
        marginTop: 20,
        marginBottom: 5
    },
    isNotMyAddressText: {
        textAlign: 'center',
        fontSize: 16
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#777',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginVertical: 5,
        backgroundColor: '#F5F8FA',
    },
    picker: {
        // height: 45,
        color: '#333',
        marginTop: -30
    },
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    backIcon: {
        position: 'absolute',
        left: 0,
    },
    backText: {
        fontSize: 16,
    },

    menuTrigger: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F8FA',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
    },
    menuText: {
        color: '#333',
    },
});
