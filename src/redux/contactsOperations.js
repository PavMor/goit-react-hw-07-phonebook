import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://64667a502ea3cae8dc180276.mockapi.io/contacts/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}`, contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}/${contactID}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);