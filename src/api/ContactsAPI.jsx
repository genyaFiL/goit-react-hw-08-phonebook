import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (notice, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', notice);
      // toast.success('contact added successfully');
      return response.data;
    } catch (e) {
      // toast.error('Didn`t add contact (');

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      // toast.success('contact deleted successfully');
      return response.data;
    } catch (e) {
      // toast.error('Didn`t delete contact (');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
