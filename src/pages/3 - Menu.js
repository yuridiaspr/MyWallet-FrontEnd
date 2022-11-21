import styled from "styled-components";
import { MainColor } from "../constants/colors";
import { Link } from "react-router-dom";
import Logo_Saida from "../assets/images/Vector.svg";
import Logo_Plus from "../assets/images/ant-design_plus-circle-outlined.svg";
import Logo_Minus from "../assets/images/ant-design_minus-circle-outlined.svg";
import {
  GrayEmpty,
  GrayDate,
  ProfitColor,
  ExpenseColor,
} from "../constants/colors";

const Empty = false;

const DadosMockados = [
  {
    date: "30/11",
    description: "Almoço mãe aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    value: "39,909",
    status: "expense",
  },
  {
    date: "15/11",
    description: "Salário",
    value: "39,902",
    status: "profit",
  },
  {
    date: "30/11",
    description: "Almoço mãe aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    value: "39,9011111",
    status: "expense",
  },
];

let TotalBalance = 0;
if (!Empty) {
  for (let i = 0; i < DadosMockados.length; i++) {
    if (DadosMockados[i].status === "profit") {
      TotalBalance =
        TotalBalance + parseFloat(DadosMockados[i].value.replace(/,/g, "."));
    } else {
      TotalBalance =
        TotalBalance - parseFloat(DadosMockados[i].value.replace(/,/g, "."));
    }
  }
}

export default function Menu() {
  return (
    <>
      <Container>
        <ContainerInside>
          <Info>Olá, Fulano</Info>
          <img src={Logo_Saida} alt="Logo de saída" />
        </ContainerInside>
        {Empty ? (
          <BoardEmpty>
            <div> Não há registros de entrada ou saída </div>
          </BoardEmpty>
        ) : (
          <Board>
            <div>
              {DadosMockados.map((data) => (
                <EachItem status={data.status}>
                  <div>
                    <h1>{data.date}</h1>
                    <div>
                      <h2>{data.description}</h2>
                      <h3>
                        {parseFloat(data.value.replace(/,/g, ".")).toFixed(2)}
                      </h3>
                    </div>
                  </div>
                </EachItem>
              ))}
            </div>
            <Balance TotalBalance={TotalBalance}>
              <h1>Saldo</h1>
              <h2>{Math.abs(TotalBalance).toFixed(2)}</h2>
            </Balance>
          </Board>
        )}
        <ProfitExpense>
          <Button>
            <div>
              <img src={Logo_Plus} alt="Logo Plus" />
              <p>Nova entrada</p>
            </div>
          </Button>
          <Button>
            <div>
              <img src={Logo_Minus} alt="Logo Minus" />
              <p>Nova Saída</p>
            </div>
          </Button>
        </ProfitExpense>

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
`;

const ContainerInside = styled.div`
  margin-top: 25px;
  max-width: 326px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const BoardEmpty = styled.div`
  max-width: 326px;
  width: 95vw;
  max-height: 446px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  border-radius: 5px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: ${GrayEmpty};

  div {
    width: 70%;
  }

  margin: 25px 0 0px;
`;

const Board = styled.div`
  max-width: 326px;
  width: 95vw;
  max-height: 446px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border-radius: 5px;

  margin: 13px 0 0px;
  overflow-y: scroll;

  div {
    max-width: 90%;
  }
`;

const EachItem = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      min-width: 100%;
    }
  }

  h1,
  h2,
  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  h1 {
    text-align: left;
    margin-right: 10px;
    color: ${GrayDate};
  }

  h2 {
    display: inline-block;
    max-width: 80%;
    flex-wrap: wrap;
    word-wrap: break-word;
  }

  h3 {
    color: ${(props) =>
      props.status === "profit" ? ProfitColor : ExpenseColor};
  }
`;

const Balance = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;

  h1,
  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height */
  }

  h2 {
    font-weight: 400;
    color: ${(props) => (props.TotalBalance >= 0 ? ProfitColor : ExpenseColor)};
  }
`;

const ProfitExpense = styled.div`
  max-width: 326px;
  width: 95vw;
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
`;

const Button = styled.button`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  border: none;

  color: white;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;

  display: flex;
  align-items: flex-start;
  padding: 0px;

  div {
    padding: 10px;
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  img {
    width: 21.88px;
  }

  p {
    display: flex;
    text-align: left;
  }
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
