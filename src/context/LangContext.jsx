import React, { createContext, useState } from "react";

export const LangContext = createContext();

const LangProvider = ({ children }) => {
    const [lang, setLang] = useState("PT");

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export default LangProvider;
