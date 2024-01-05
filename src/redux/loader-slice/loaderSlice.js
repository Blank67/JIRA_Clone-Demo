"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
};

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        toggleLoader: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { toggleLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
