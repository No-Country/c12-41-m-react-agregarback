import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, headers, userId } from './userSlice';



export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact) => {
        try {
          const{selectedRef, account, contactName} = newContact;
            const body ={
                validation: selectedRef,
                validationValue: account,
                contactName: contactName, 
            }
            console.log(body)
            const response = await axios.post(`${BASE_URL}/users_contacs/${userId}/${account}`, body, {headers})
            return response.data;
        } catch (error) {
            console.log(error)
            //return thunkApi.rejectWithValue(error.response.data);
        }
    }
)


const initialState = {
    id: 1,
    validation: "",
    validationValue: "",
    contactId: 1,
    contactName: "",
    userId: 3
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addContact.fulfilled, (state, action) => {
                state.data = { ...state.data, contacts: action.payload }
                state.status = "succeeded"
            })
            .addCase(addContact.rejected, (state, action) => {
          
            });
    },
})

export const { actions, reducer } = contactSlice;
export default reducer;