import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      console.log(response.data.name);
      toast.success(
        `${response.data.name} has been successfully added to the contact list.`
      );
      return response.data;
    } catch (e) {
      toast.error('Something went wrong, please try again.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response.data.name);
      toast.success(
        `${response.data.name} has been successfully deleted from the contact list.`
      );
      return response.data;
    } catch (e) {
      toast.error('Something went wrong, please try again.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
