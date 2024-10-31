import Input from '../../../components/common/input/Input';
import './login.css';
import { FiMail, FiLock } from 'react-icons/fi';

function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>ReciclaBelém</h1>
                <p className="subtitle">Entre ou Registre-se para acessar a sua conta</p>

                <div className="tabs">
                    <button className="tab-button active">Entrar</button>
                    <button className="tab-button">Cadastrar</button>
                </div>

                <button className="google-login">
                    <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google logo" />
                    <span style={{ fontWeight: 'bold' }}>Entrar com Google</span>
                </button>

                <p className="separator">ou continue com seu email</p>

                <Input
                    type="email"
                    placeholder="Email"
                    leftIcon={<FiMail />}
                />

                <Input
                    type="text"
                    placeholder="Senha"
                    leftIcon={<FiLock />}
                    isPassword
                />

                <a href="/" className="forgot-password">Esqueceu sua senha?</a>

                <button className="login-button">Entrar</button>

                <p className="terms">
                    Ao registrar uma conta, você estará aceitando os <a href="/">Termos de Serviço</a> e a <a href="/">Política de Privacidade</a>.
                </p>
            </div>
        </div>
    );
};

export default Login;