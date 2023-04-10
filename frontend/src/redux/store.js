import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthContext"

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})