import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/1 - Login";
import Register from "./pages/2 - Register";
import Menu from "./pages/3 - Menu";
import NewProfit from "./pages/4 - NewProfit";
import NewExpense from "./pages/5 - Newexpense";
import { useState } from "react";

export const pathsWithoutHeaderAndMenu = ["/", "/register"];

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/newprofit" element={<NewProfit />} />
        <Route path="/newexpense" element={<NewExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
