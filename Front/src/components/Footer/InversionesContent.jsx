import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import PlazoFijo from "./PlazoFijo";
import SuperFondos from "./superFondos.jsx"
import Dolar from "./Dolar";
import axios from "axios";
import Wallet from "./Wallet"


const InversionesContent = () => {
    const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return isLoaded ? (
        <>
            <Wallet />
            <section className="grid lg:grid-cols-2 overflow-hidden p-3 pt-16 gap-4">
                <PlazoFijo />
                <SuperFondos />
                <Dolar />
            </section>
        </>
    ) : (
        <div className="flex flex-row justify-center items-center h-screen">
            <GridLoader color="white" />
        </div>
    );
};

export default InversionesContent;
