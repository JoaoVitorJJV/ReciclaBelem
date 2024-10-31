import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/auth/login/Login";
import SolicitarColeta from "../pages/coleta/SolicitarColeta";
import CadastrarPassos from "../pages/auth/cadastro/CadastrarPassos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <CadastrarPassos />
    },
    {
        path: '/coleta/solicitar',
        element: <SolicitarColeta />
    }
]);

export default router;
