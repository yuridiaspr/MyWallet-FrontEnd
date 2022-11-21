import styled from "styled-components";
import { MainColor } from "../constants/colors";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Container>
        <p>MyWallet</p>
        <Form>
          <Input value="E-mail" />
          <Input value="Senha" />
          <Button>Entrar</Button>
        </Form>
        <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>

        <StyledLink to="/newprofit">Nova Entrada</StyledLink>

        <StyledLink to="/newexpense">Nova Saida</StyledLink>

        <StyledLink to="/Menu">Menu</StyledLink>
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
