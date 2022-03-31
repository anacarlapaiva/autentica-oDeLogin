import { api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  //necessita uma chave para o valor guardado dentro do setItem. U signifca USER
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u")

  //se nao exste json com essa chave ('u'), retorne null

  if (!json) {
    return null;
  }else{
      const user = JSON.parse(json)

      return user ?? null //se for uma string vazia também retornará nulo
  }
}

//função para autenticar
export async function LoginRequest(email: string, password: string) {
  try {
    //como argumento da requisição(payload), passa-se o email e a senha
    const request = await api.post("login", { email, password });
    return request.data;
  } catch {
    return null;
  }
}
