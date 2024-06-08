'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextProps {
    user: any;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login/success`;
                const { data } = await axios.get(url,{withCredentials: true});
                setUser(data.user._json);
            } catch (error) {
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    const login = () => {
        window.open(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google?next=${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard`,
            "_self"
        )
    };

    const logout = async () => {
        setUser(null);
        window.open(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
            "_self"
        )
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
