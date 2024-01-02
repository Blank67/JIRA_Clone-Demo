"use client";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLoader } from "@/redux/loader-slice/loaderSlice";

const axiosInstance = axios.create({
    baseURL: "",
});

export const AxiosInterceptor = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const req = (request) => {
            dispatch(toggleLoader(true));
            return request;
        };
        const resInterceptor = (response) => {
            dispatch(toggleLoader(false));
            return response;
        };
        const errInterceptor = (error) => {
            //CAN ADD REDIRECTION LOGIC HERE
            console.log(error);
            dispatch(toggleLoader(false));
            return Promise.reject();
        };
        const reqInterceptor = axiosInstance.interceptors.request.use(req);
        const interceptor = axiosInstance.interceptors.response.use(
            resInterceptor,
            errInterceptor
        );
        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
            axiosInstance.interceptors.request.eject(reqInterceptor);
        };
    }, [dispatch]);
    return props.children;
};

export const getCall = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        return error;
    }
};

export const postCall = async (url, payload) => {
    try {
        const response = await axiosInstance.post(url, payload);
        return response;
    } catch (error) {
        return error;
    }
};

export const putCall = async (url, payload) => {
    try {
        const response = await axiosInstance.put(url, payload);
        return response;
    } catch (error) {
        return error;
    }
};
