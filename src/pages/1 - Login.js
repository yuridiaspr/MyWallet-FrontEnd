import styled from "styled-components";
import { MainColor } from "../constants/colors";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_signIn } from "../constants/urls";

export default function Login({ auth, setAuth }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/menu");
    }
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = axios.post(URL_signIn, { ...formData });
    promise.then((response) => {
      setIsLoading(false);
      login(response.data);
      navigate("/menu");
    });
    promise.catch((res) => {
      setIsLoading(false);
      alert(res.response.data);
    });
  }

  return (
    <>
      <Container>
        <p>MyWallet</p>
        <Form onSubmit={handleSubmit}>
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
          <Button>Entrar</Button>
        </Form>
        <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
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
