// CadastrarPassos.js
import { useMemo, useState } from 'react';
import './cadastro.css';
import Passo1 from './Passo1';
import Passo2 from './Passo2';
import Passo3 from './Passo3';

const stepsLabel = [
    { id: 1, label: "Por favor, informe seu CEP" },
    { id: 2, label: "Confirme seu endereço" },
    { id: 3, label: "Informe seu endereço" }
];

function CadastrarPassos() {
    const [currentStep, setCurrentStep] = useState(0);
    const [cep, setCep] = useState("66812-500");
    const [address, setAddress] = useState({
        endereco: "Rua Santa Isabel, Icoaraci",
        numero: "1910",
        cidadeEstado: "Belém, Pará, Brasil",
    });

    const handleIncrementStep = () => {
        console.log('entrei! ', currentStep);
        setCurrentStep(currentStep + 1)
    };
    const handleDecrementStep = () => setCurrentStep(currentStep - 1);
    const handleOnChangeCep = (e: any) => setCep(e.target.value);

    const handleOnAddressChange = (field: string, value: string) => {
        setAddress((prevAddress) => ({
            ...prevAddress,
            [field]: value
        }));
    };

    const steps = useMemo(() => [
        <Passo1
            handleIncrementStep={handleIncrementStep}
            cep={cep}
            onChange={handleOnChangeCep}
        />,
        <Passo2
            handleIncrementStep={handleIncrementStep}
            cep={cep}
            address={address}
            handleEditAddress={handleDecrementStep}
        />,
        <Passo3
            address={address}
            onAddressChange={handleOnAddressChange}
            handleConfirmAddress={handleIncrementStep}
            handleGoBack={handleDecrementStep}
        />
    ], [cep, address, currentStep]);

    return (
        <div className="cadastrar-container">
            <div className="cadastrar-card">
                <h1>ReciclaBelém</h1>
                <p className="subtitle">{stepsLabel[currentStep].label}</p>

                {steps[currentStep]}

                <p className="terms">
                    Ao registrar uma conta, você estará aceitando os <a href="/">Termos de Serviço</a> e a <a href="/">Política de Privacidade</a>.
                </p>
            </div>
        </div>
    );
}

export default CadastrarPassos;
