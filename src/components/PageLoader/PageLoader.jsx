"use client";

import React from "react";
import "./PageLoader.scss";
import { useSelector } from "react-redux";

const PageLoader = () => {
    const isLoading = useSelector((state) => state.loader.loading);
    if (!isLoading) {
        return null;
    }
    return (
        <div id="global_loader_placeholder">
            <div className="spinner">
                <div className="spinner-border" role="status" />
            </div>
        </div>
    );
};

export default PageLoader;
