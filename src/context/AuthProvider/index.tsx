import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  //função q será executada quando o provider for montado
  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  //passando as funções que serão recebidas em value
  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout(/*por ser void, não tem param e nao retorna nada */) {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
