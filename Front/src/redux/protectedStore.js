import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import contactsReducer from "./contactSlice";

export const protectedStore = configureStore({
    reducer: {
        user: userSlice,
        contacts: contactsReducer,
    }
})