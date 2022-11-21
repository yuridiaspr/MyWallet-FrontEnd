import styled from "styled-components";
import { MainColor } from "../constants/colors";
import { Link } from "react-router-dom";

export default function NewProfit() {
  return (
    <>
      <Container>
        <div>
          <Info>Nova entrada</Info>
        </div>
        <Form>
          <Input value="Valor" />
          <Input value="Descrição" />
          <Button>Salvar entrada</Button>
        </Form>
        <StyledLink to="/">Inicial</StyledLink>
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

  div {
    margin-top: 15px;
    max-width: 326px;
    width: 100vw;
  }
`;

const Info = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */

  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 25px 0 36px;
`;

const Input = styled.input`
  max-width: 326px;
  width: 100vw;
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
