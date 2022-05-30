import { makeActions } from '@redux/crudCreator/actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { readNotiApi, getUnreadCountApi } from 'api/notifications';
// import api
import { apiWrapper } from 'utils/reduxUtils';

export const MODEL_NAME = 'notifications';
export const notificationsActions = makeActions(MODEL_NAME);

export const getAllNotifications = notificationsActions.getAll;
export const editNotifications = notificationsActions.edit;
export const createNotifications = notificationsActions.create;
export const getByIdNotifications = notificationsActions.getDataById;

export const readNoti = createAsyncThunk(
  'auth/readNoti',
  async (payload, thunkAPI) => {
    try {
      await apiWrapper(
        { isShowLoading: true },
        readNotiApi,
        payload?.data?.id,
      );
      return payload?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);
export const getUnreadCount = createAsyncThunk(
  'auth/getUnreadCount',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowLoading: true },
        getUnreadCountApi,
      );
      return response?.count;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);
