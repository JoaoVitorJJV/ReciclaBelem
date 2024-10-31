import Button from "../../../components/common/button/Button";
import InputLine from "../../../components/common/inputLine/InputLine";


type Passo1Props = {
    handleIncrementStep: () => void,
    cep: string,
    onChange: (e: any) => void
}

function Passo1({ handleIncrementStep, cep, onChange }: Passo1Props) {

    return <>
        <InputLine
            type="text"
            placeholder="Digite aqui CEP..."
            value={cep}
            onChange={(e) => onChange(e)}
        />
        <Button onClick={handleIncrementStep}>Continuar</Button>
    </>
}

export default Passo1