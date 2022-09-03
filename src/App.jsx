import React from "react";
import Conometro from "./components/Conometro";
import Clock from "./components/Clock";
export default () => {
    React.useEffect(() => {
        document.title = "Cronometro Millyana";
    });
    
    return (
        <>
            <Clock />
            <h1>
                Millyana Souza
            </h1>
            <Conometro />
        </>
    );
};
