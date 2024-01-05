import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <div className="sticky-header bottom-shadow d-flex justify-content-between px-4 py-4">
            <div className="">Dashboard</div>
            <div className="d-flex justify-content-between px-4 gap-5">
                <div>Create Projects</div>
                <div>Tarun Tiwari</div>
            </div>
        </div>
    );
};

export default Header;
