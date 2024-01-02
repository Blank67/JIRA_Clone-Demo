"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const NotFound = () => {
    const navigate = useRouter();
    const navigateRef = useRef(navigate);
    useEffect(() => {
        navigateRef.current.push("/login");
    }, []);
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            The page could not be found. Redirecting to home page......
        </div>
    );
};

export default NotFound;
