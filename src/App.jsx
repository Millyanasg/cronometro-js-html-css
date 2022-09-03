import React from "react";
import Conometro from "./components/Conometro";
import Clock from "./components/Clock";
export default () => (
    <>
        <Clock />
        <h1
            style={{
                fontFamily: "'Courier New', Courier, monospace",
                marginTop: "20px",
                display: "block",
                textAlign: "center",
                fontWeight: "Lighter",
            }}
        >
            Millyana Souza
        </h1>
        <Conometro />
    </>
);
