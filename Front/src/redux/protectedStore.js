import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const protectedStore = configureStore({
    reducer: {
        user: userSlice,
    }
})