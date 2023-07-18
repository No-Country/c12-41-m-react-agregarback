import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://nocountrybackend.onrender.com/api/v1/users"

const FAKE_USER = {
    id: 3,
    name: "Gabriel Shimabuku",
    email: "shimabuku.gabriel@gmail.com",
    password: "$2a$12$GucJ16dJ3Gwap3qASfA8P.I18nWXpqvqI8PW2.I5YeoOgipGpNTMu",
    status: "active",
    date_of_birth: "2000-04-27 21:00:00",
    dni: 42645001,
    address: "Av. Siempre Viva 8190",
    phone_number: "1157026651",
    username: "byga",
    accounts: [{
        id: 2,
        amount: 550,
        accountNumber: 966168928,
        cbu: "7721643276693931604187",
        cvu: "3557484903706749472950",
        alias: "Gabriel Shimabuku.2357",
        status: "active",
        currency: "usd",
        userId: 3,
        cards: [],
        transfers: []
    }, {
        id: 3,
        amount: 1000,
        accountNumber: 473168935,
        cbu: "5771014415579761855576",
        cvu: "3624164171071611538935",
        alias: "Gabriel Shimabuku.7517",
        status: "active",
        currency: "pesos",
        userId: 3,
        cards: [],
        transfers: []
    }]

}

const headers = {
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
}

//Obtener datos de usuario, sus cuentas y tarjetas y transferencias asociadas a esa cuenta.
const getUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/1`, headers);
        return FAKE_USER;
    }
)

//Obtener contactos del usuario logeado
const getContacts = createAsyncThunk(
    'user/getContacts',
    async () => {
        const userId = sessionStorage.getItem("userId")
        // const response = await axios.get(`${BASE_URL}/${userId}/contacts`)
        const response =
            [
                {
                    id: 1,
                    validation: "cbu",
                    validationValue: "8959276435583071153092",
                    contactId: 1,
                    contactName: "user",
                    userId: 3
                }
            ]
        return response;
    }
)

const initialState = {
    status: "idle",
    error: "",
    data: {
        id: 0,
        name: "_",
        email: "_",
        password: "_",
        status: "_",
        date_of_birth: "_",
        dni: 0,
        address: "_",
        phone_number: "_",
        username: "_",
        accounts: [],
        contacts: [],
        services: [],
        loans: [],
        investments: [],
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUserInfo.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.data = { ...state.data, ...action.payload }
                state.status = "succeeded"
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(getContacts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.data = { ...state.data, contacts: action.payload }
                state.status = "succeeded"
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })

    }
});

export { getUserInfo, getContacts }
export default userSlice.reducer