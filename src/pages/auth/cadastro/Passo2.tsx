import Button from "../../../components/common/button/Button";
import InputLine from "../../../components/common/inputLine/InputLine";


type Passo2Props = {
    cep: string,
    address: {
        endereco: string,
        numero: string,
        cidadeEstado: string
    },
    handleIncrementStep: () => void,
    handleEditAddress: () => void
}

function Passo2({ cep, address, handleIncrementStep, handleEditAddress }: Passo2Props) {

    return <div className="address-confirmation">
        <InputLine
            type="text"
            value={cep}
            readOnly
        />
        <div className="address-details">
            <div className="adress-item">
                <p><strong>Endereço</strong></p>
                <p>{address.endereco}</p>
            </div>

            <div className="adress-item">
                <p><strong>Número</strong></p>
                <p>{address.numero}</p>
            </div>

            <div className="adress-item">
                <p><strong>Cidade e Estado</strong></p>
                <p>{address.cidadeEstado}</p>
            </div>

        </div>
        <Button onClick={handleIncrementStep}>Confirmar Endereço</Button>
        <p className="edit-address" onClick={handleEditAddress}>Não é meu endereço</p>
    </div>

}

export default Passo2;