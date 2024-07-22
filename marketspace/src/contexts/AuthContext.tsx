
import { createContext, useEffect, useState } from "react";
import { UserDTO } from "src/dtos/UserDto";
import { storageDeleteUser, storageLoadUser, storageSaveUser } from "src/storage/storageUser";

export type AuthContextDataProps = {
    signIn: (email: string,password: string) => Promise<void>;
    signOut: () => Promise<void>;
    user: UserDTO;
}

export const AuthContext =  createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export function AuthContextProvider({children}: AuthContextProviderProps){
    const [user, setUser] = useState<UserDTO>({} as UserDTO)

    async function signIn(email: string, password: string){
        const name = "Teste";

        await storageSaveUser({
            email,
            name,
            password
        });

        setUser({
            email,
            name,
            password
        });

        console.log('Sign in');
    }

    async function signOut(){
        await storageDeleteUser();
        setUser({} as UserDTO);
    }

    async function loadUser(){
        const userLogged = await storageLoadUser();
        setUser(userLogged);
    }

    useEffect(() => {
        loadUser();
    },[]);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}