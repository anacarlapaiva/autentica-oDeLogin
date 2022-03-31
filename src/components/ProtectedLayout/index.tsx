import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";

//recebe um filho, analisa se o user ta logado e retorna um filho

interface Props{
    children: JSX.Element
}

const ProtectedLayout = ({ children }: Props) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não tem acesso</h1>;
  }

  return children;
};

export default ProtectedLayout;
