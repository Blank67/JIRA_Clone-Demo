"use client";
import React, { useState } from "react";
import "./Login.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState({ username: "", password: "" });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useRouter();

    const userDetailChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === "username")
            setError((prev) => ({ ...prev, username: "" }));
        if (name === "password")
            setError((prev) => ({ ...prev, password: "" }));
        setUserDetails((prev) => ({ ...prev, [name]: value }));
    };

    const validateInputs = () => {
        return !Object.values(userDetails).some((value) => value.trim() === "");
    };

    const addErrorMessages = () => {
        if (!userDetails.username)
            setError((prev) => ({ ...prev, username: "Invalid username." }));
        if (!userDetails.password)
            setError((prev) => ({ ...prev, password: "Invalid password." }));
    };

    const handleLogin = () => {
        const isInputValid = validateInputs();
        if (isInputValid) {
            setError("");
            //navigate
            navigate.push("/home");
        } else {
            addErrorMessages();
        }
    };

    return (
        <div className="home-image">
            <div className="login-container ">
                <div className="login-box">
                    <h1 className="heading">VIRA</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            name="username"
                            type="text"
                            id="username"
                            value={userDetails.username}
                            onChange={userDetailChangeHandler}
                        />
                        {error.username && (
                            <p className="error-message">{error.username}</p>
                        )}
                    </div>
                    <div className="form-group position-relative">
                        <label htmlFor="password">Password:</label>
                        <input
                            name="password"
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            value={userDetails.password}
                            onChange={userDetailChangeHandler}
                        />
                        {passwordVisible ? (
                            <VisibilityOffOutlinedIcon
                                className="position-absolute eye-btn1"
                                onClick={() => {
                                    setPasswordVisible(!passwordVisible);
                                }}
                            />
                        ) : (
                            <RemoveRedEyeOutlinedIcon
                                className="position-absolute eye-btn1"
                                onClick={() => {
                                    setPasswordVisible(!passwordVisible);
                                }}
                            />
                        )}
                    </div>
                    <div className="signup flex-row-reverse">
                        <Link href="signUp">
                            <p className="fw-semibold">Sign Up</p>
                        </Link>
                        {error.password && (
                            <p className="error-message">{error.password}</p>
                        )}
                    </div>
                    <Button
                        className="w-100 py-2"
                        variant="outlined"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
