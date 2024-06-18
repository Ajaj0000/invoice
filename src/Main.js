import React from "react";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormDate } from "./Component/FormData";

function Main() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/for" element={<FormDate/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export { Main }