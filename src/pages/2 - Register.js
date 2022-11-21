import styled from "styled-components";
import { MainColor } from "../constants/colors";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { URL_signUp } from "../constants/urls";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      return alert("Senhas devem ser iguais!");
    }

    setIsLoading(true);
    const promise = axios.post(URL_signUp, {
      ...formData,
    });

    promise.then(() => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch((res) => {
      setIsLoading(false);
      alert(res.response.data);
    });
    setIsLoading(false);
  }

  return (
    <>
      <Container>
        <p>MyWallet</p>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            disabled={isLoading}
            placeholder="Nome"
            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            value={formData.email}
            disabled={isLoading}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleChange}
            value={formData.password}
            disabled={isLoading}
            required
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
            disabled={isLoading}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Carregando" : "Cadastrar"}
          </Button>
        </Form>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: ${MainColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 25px 0 36px;
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  margin-bottom: 13px;

  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  border: none;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: black;

  display: flex;
  align-items: center;

  &::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  max-width: 326px;
  width: 100vw;
  height: 46px;
  background: #a328d6;
  border-radius: 5px;
  border: none;

  color: white;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #ffffff;
`;
