"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./page.scss";
import Link from "next/link";
import { Button, TextField, CircularProgress } from "@mui/material";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(5, "Username must be at least 5 characters")
                .required("Username is required"),
            password: Yup.string()
                .min(5, "Password must be at least 5 characters")
                .required("Password is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setTimeout(async () => {
                setLoading(false);

                window.location.href = "/home";
            }, 2000);
        },
    });

    return (
        <div className="home-image">
            <div className="login-container">
                <div className="login-box">
                    <h1 className="heading">VIRA</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <TextField
                                fullWidth
                                id="username"
                                type="text"
                                {...formik.getFieldProps("username")}
                                error={
                                    formik.touched.username &&
                                    Boolean(formik.errors.username)
                                }
                                helperText={
                                    formik.touched.username &&
                                    formik.errors.username
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <TextField
                                fullWidth
                                id="password"
                                type="password"
                                {...formik.getFieldProps("password")}
                                error={
                                    formik.touched.password &&
                                    Boolean(formik.errors.password)
                                }
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                            />
                        </div>
                        <div className="signup">
                            <Link href="/signUp">
                                <h6>Sign Up</h6>
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            variant="outlined"
                            className="w-100 py-2"
                        >
                            {loading ? <CircularProgress size={24} /> : "Login"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
