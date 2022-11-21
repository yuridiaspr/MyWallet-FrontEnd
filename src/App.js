import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/1 - Login";
import Register from "./pages/2 - Register";
import Menu from "./pages/3 - Menu";
import NewProfit from "./pages/4 - NewProfit";
import NewExpense from "./pages/5 - Newexpense";
import { useState, useEffect } from "react";

function App() {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login auth={auth} setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu auth={auth} setAuth={setAuth} />} />
        <Route path="/newprofit" element={<NewProfit auth={auth} />} />
        <Route path="/newexpense" element={<NewExpense auth={auth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
