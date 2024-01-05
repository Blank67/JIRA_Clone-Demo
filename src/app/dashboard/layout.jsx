"use client";

import "./layout.scss";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";

export default function DashboardLayout({ children }) {
    return (
        <div className="d-flex">
            <SideBar />
            <div
                className="position-relative d-flex flex-column vw-100"
                style={{ height: "100vh" }}
            >
                <Header />
                <div className="overflow-auto flex-grow-1">
                    {children}
                </div>
            </div>
        </div>
    );
}
