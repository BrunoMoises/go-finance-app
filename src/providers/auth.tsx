import { useRouter } from "next/router";
import {
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import AuthContext from "../Context";
import api from "../services/api";
import { LoginCredentials } from "../types/auth";

type AuthProviderProps = {
    children: ReactNode;
};

type AuthState = {
    user_id?: number;
    token: string;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    const router = useRouter();
    const [origin, setOrigin] = useState("/");
    const [data, setData] = useState<AuthState | undefined>(() => {
        if (typeof window === "undefined") return {} as AuthState;
        const token = localStorage.getItem("@gofinance:token");
        const user_id = localStorage.getItem("@gofinance:user_id");
        if (token && user_id) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return { token };
        }
    });
    useEffect(() => {
        if (
            !data?.token &&
            router.pathname !== "/Signin" &&
            router.pathname !== "/Signup"
        ) {
            setOrigin(router.pathname);
            router.replace("/Signin");
        }
    }, [data, router]);
    const login = useCallback(
        async ({ username, password }: LoginCredentials) => {
            const response = await api.post("/login", {
                username,
                password,
            });
            const { user_id, token } = response.data;
            localStorage.setItem("@gofinance:token", token);
            localStorage.setItem("@gofinance:user_id", user_id);
            api.defaults.headers.authorization = `Bearer ${token}`;
            router.replace(origin);
            if (!token) {
                setData(undefined);
            }
            setData({
                user_id: user_id,
                token: token
            });
        },
        [origin, router]
    );
    const logout = useCallback(() => {
        localStorage.removeItem("@gofinance:token");
        localStorage.removeItem("@gofinance:user_id");
        delete api.defaults.headers.authorization;
        setData(undefined);
    }, []);
    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;