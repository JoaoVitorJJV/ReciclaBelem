import { useState } from 'react';
import './login.css';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import Input from '../../../components/common/input/Input';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [activeTab, setActiveTab] = useState("login");
    const navigate = useNavigate();

    // Função para alternar entre as tabs
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const onClickCadastro = (route: string) => navigate(route);

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>ReciclaBelém</h1>
                <p className="subtitle">Entre ou Registre-se para acessar a sua conta</p>

                <div className="tabs">
                    <button
                        className={`tab-button ${activeTab === "login" ? "active" : ""}`}
                        onClick={() => handleTabChange("login")}
                    >
                        Entrar
                    </button>
                    <button
                        className={`tab-button ${activeTab === "register" ? "active" : ""}`}
                        onClick={() => handleTabChange("register")}
                    >
                        Cadastrar
                    </button>
                </div>

                <div key={activeTab} className="fade"> {/* Wrapper com transição de fade */}
                    {activeTab === "login" ? (
                        // Conteúdo do tab "Entrar"
                        <>
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
                        </>
                    ) : (
                        // Conteúdo do tab "Cadastrar"
                        <>
                            <Input
                                type="text"
                                placeholder="Nome"
                                leftIcon={<FiUser />}
                            />

                            <Input
                                type="email"
                                placeholder="Email"
                                leftIcon={<FiMail />}
                            />

                            <Input
                                type="password"
                                placeholder="Senha"
                                leftIcon={<FiLock />}
                                isPassword
                            />

                            <Input
                                type="password"
                                placeholder="Confirmar Senha"
                                leftIcon={<FiLock />}
                                isPassword
                            />

                            <button className="login-button" onClick={() => onClickCadastro('/cadastro')}>Cadastrar</button>
                        </>
                    )}
                </div>

                <p className="terms">
                    Ao registrar uma conta, você estará aceitando os <a href="/">Termos de Serviço</a> e a <a href="/">Política de Privacidade</a>.
                </p>
            </div>
        </div>
    );
};

export default Login;
