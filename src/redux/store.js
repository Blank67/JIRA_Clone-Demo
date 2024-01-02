"use client";

import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader-slice/loaderSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
});
