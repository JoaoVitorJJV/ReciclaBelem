
import Button from '../../../components/common/button/Button';
import { FiMapPin, FiHome, FiChevronDown } from 'react-icons/fi';
import Input from '../../../components/common/input/Input';
import './passo3.css'

type Passo3Props = {
    address: {
        endereco: string;
        numero: string;
        cidadeEstado: string;
    };
    onAddressChange: (field: string, value: string) => void;
    handleConfirmAddress: () => void;
    handleGoBack: () => void;
};

function Passo3({ address, onAddressChange, handleConfirmAddress, handleGoBack }: Passo3Props) {
    return (
        <div className="step-three-container">
            <p className="description">
                Usaremos seu endereço apenas para informar os melhores pontos de coleta mais próximos a você
            </p>
            <Input
                type="text"
                placeholder="Endereço"
                value={address.endereco}
                onChange={(e) => onAddressChange('endereco', e.target.value)}
                leftIcon={<FiMapPin />}
            />
            <Input
                type="text"
                placeholder="Número"
                value={address.numero}
                onChange={(e) => onAddressChange('numero', e.target.value)}
                leftIcon={<FiHome />}
            />
            <Input
                type="text"
                placeholder="Cidade e Estado"
                value={address.cidadeEstado}
                onChange={(e) => onAddressChange('cidadeEstado', e.target.value)}
                leftIcon={<FiChevronDown />}
            />
            <Button onClick={handleConfirmAddress}>Confirmar Endereço</Button>
            <div className="back-button" onClick={handleGoBack}>
                <span>&larr; Voltar</span>
            </div>
        </div>
    );
}

export default Passo3;
