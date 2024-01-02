"use client";

import { useEffect } from "react";

const BootstrapProvider = (props) => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return props.children;
};

export default BootstrapProvider;
