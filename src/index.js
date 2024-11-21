import React from "react";
import {createRoot} from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Transacoes from "./pages/Transacoes";
import AssessorPage from "./pages/AssessorPage";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
                <Route path="/transacoes" element={<Transacoes/>}/>
                <Route path="/assessor" element={<AssessorPage/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
