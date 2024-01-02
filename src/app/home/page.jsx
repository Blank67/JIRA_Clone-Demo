"use client";

import { getCall } from "@/utils/AxiosInterceptor/AxiosInterceptor";
import Container from "@mui/material/Container";

export default function Home() {
    const demoNetworkCall = async () => {
        try {
            const resp = await getCall(
                "https://hub.dummyapis.com/delay?seconds=3"
            );
        } catch (error) {}
    };
    return (
        <Container>
            <div className="d-flex flex-column gap-5 justify-content-center align-items-center vh-100">
                <div>HOME PAGE</div>
                <button className="btn btn-primary" onClick={demoNetworkCall}>
                    START LOADER FOR 3 second
                </button>
            </div>
        </Container>
    );
}
