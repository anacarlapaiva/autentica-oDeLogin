import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Button from "../Button";
import Input from "../Input";
import { Container, FormContainer, FormContent } from "../Login/styles";

const CreateLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.authenticate(email, password);
      navigate("/login");
    } catch (error) {
      alert("Erro na criação da conta");
    }
  };

  return (
    <Container>
      <FormContent onSubmit={handleOnSubmit}>
        <div className="content_top">
          <h1>Crie sua conta!</h1>
        </div>
        <FormContainer>
          <label
            style={{ marginBottom: "6px", fontWeight: "500" }}
            htmlFor="email"
          >
            Email:
          </label>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            style={{ marginBottom: "6px", fontWeight: "500" }}
            htmlFor="password"
          >
            Senha:
          </label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormContainer>
        <Button
          type="submit"
          color="#6EA9FA"
          border="1px solid #ccc"
          width="130px"
          height="50px"
          radius="5px"
        >
          Entrar
        </Button>
        <Link to="/login" style={{ marginTop: "20px" }}>
          Voltar para a página inicial
        </Link>
      </FormContent>
    </Container>
  );
};

export default CreateLogin;
