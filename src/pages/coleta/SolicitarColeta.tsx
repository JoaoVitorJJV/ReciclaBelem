import './solicitarColeta.css'


function SolicitarColeta() {

    return (
        <form className="formulario" method="post">
            <p className="form-head">Confirme o ponto de coleta</p>
            <p className="form-corp">selecione o tipo de descarte</p>
            <div className="selecao">
                <input type="radio" name="tipoDescarte" value="reciclavel" />Reciclável
                <input type="radio" name="tipoDescarte" value="hospitalar" />Hospitalar
                <input type="radio" name="tipoDescarte" value="eletronico" />Eletrônico
                <input type="radio" name="tipoDescarte" value="toxico" />Tóxico
            </div>
            <div className="endereco">
                <label htmlFor="adress"></label>
                <input type="text" id="adress" placeholder="Endereço" />
            </div>
            <div className="mensagem">
                <label htmlFor="msg"></label>
                <textarea id="msg" placeholder="Obsevações"></textarea>
            </div>
            <p className="form-obs">Observação: os resíduos devem estar condicionados de
                maneira correta para realização do transporte, em caso de dúvidas, leia o
                <a href="" className="link-manual">Manual de Descarte</a> .</p>

            <input type="submit" name="enviar" value="Solicitar Coleta" />
        </form>
    )
}

export default SolicitarColeta;