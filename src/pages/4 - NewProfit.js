import styled from "styled-components";
import { MainColor } from "../constants/colors";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { URL_profit } from "../constants/urls";

export default function NewProfit({ auth }) {
  const [formData, setFormData] = useState({ value: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const token = auth.token;

  if (!token) {
    alert("Faça o login!");
    navigate("/");
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const promisse = axios.post(URL_profit, { ...formData }, config);
    promisse.then((response) => {
      setIsLoading(false);
      navigate("/menu");
    });
    promisse.catch((res) => {
      setIsLoading(false);
      alert(res.response.data);
      navigate("/");
    });
  }

  return (
    <>
      <Container>
        <div>
          <Info>Nova entrada</Info>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input
            type="number"
            placeholder="Valor"
            name="value"
            onChange={handleChange}
            value={formData.value}
            disabled={isLoading}
            required
          />
          <Input
            type="text"
            placeholder="Descrição"
            name="description"
            onChange={handleChange}
            value={formData.description}
            disabled={isLoading}
            required
          />
          <Button>Salvar entrada</Button>
        </Form>
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
