/* eslint-disable */
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { apiWrapper } from 'utils/reduxUtils';
import { getAllApi, getDataByIdApi, postApi, putApi, delApi } from 'api/crud';
import i18n from 'configs/language';
import {
  convertRequestParams,
  convertResponseData,
  PRIMARY_KEY,
} from './dataProvider';
import { setLoading } from '@redux/loading/slice';

export const getAll = (resource, customApiResource, primaryKey = PRIMARY_KEY) =>
  createAsyncThunk(`${resource}/getAll`, async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading({
        [`${resource}GetAll`]: true
      }));
      const { data = {}, options = {} } = payload;
      const { pageSize, page, includes, filter } = thunkAPI.getState()[
        resource
      ];
      const convertRequest = convertRequestParams(
        'GET_ALL',
        {
          limit: pageSize,
          offset: pageSize * (page - 1),
          filter,
          includes,
          ...data,
        },
        resource,
      );
      const response = await apiWrapper(
        { isShowProgress: options.isShowProgress },
        getAllApi,
        options.customApiResource || customApiResource || resource,
        convertRequest,
      );
      const result = convertResponseData('GET_ALL', response, { primaryKey });
      if (result.data) {
        thunkAPI.dispatch(setLoading({
          [`${resource}GetAll`]: false
        }));
        return {
          data: {
            // numberOfPages: Math.round(result.total / pageSize),
            ...result,
          },
          options,
        };
      }
      thunkAPI.dispatch(setLoading({
        [`${resource}GetAll`]: false
      }));
      return thunkAPI.rejectWithValue({ data: response, options });
    } catch (error) {
      thunkAPI.dispatch(setLoading({
        [`${resource}GetAll`]: false
      }));
      return thunkAPI.rejectWithValue({});
    }
  });

export const getDataById = (resource, customApiResource, primaryKey = PRIMARY_KEY) =>
  createAsyncThunk(`${resource}/getDataById`, async (payload, thunkAPI) => {
    thunkAPI.dispatch(setLoading({
      [`${resource}GetById`]: true
    }));
    const { data, options = { extraParams: {}, isRequestApi: true } } = payload;
    try {
      if (!options.isRequestApi) {
        return { data };
      }
      const response = await apiWrapper(
        { isShowProgress: options.isShowProgress },
        getDataByIdApi,
        options.customApiResource || customApiResource || resource,
        data[PRIMARY_KEY],
        options.extraParams,
      );
      const result = convertResponseData('GET_BY_ID', response, { primaryKey });
      if (result) {
        thunkAPI.dispatch(setLoading({
          [`${resource}GetById`]: false
        }));
        const formatResult = options.formatOnSuccess ? options.formatOnSuccess(result) : result;
        return { data: formatResult };
      }
      thunkAPI.dispatch(setLoading({
        [`${resource}GetById`]: false
      }));
      return thunkAPI.rejectWithValue({ data: result, options });
    } catch (error) {
      return thunkAPI.rejectWithValue({ data, options });
    }
  });

export const edit = (resource, customApiResource, primaryKey = PRIMARY_KEY) =>
  createAsyncThunk(`${resource}/edit`, async (payload, thunkAPI) => {
    const { data, options = {} } = payload;
    try {
      const requestData = convertRequestParams('EDIT', data, { primaryKey });
      const response = await apiWrapper(
        { isShowProgress: options.isShowProgress },
        putApi,
        options.customApiResource || customApiResource || resource,
        data[PRIMARY_KEY],
        requestData,
      );
      const result = convertResponseData('EDIT', response, { primaryKey });
      
      if (options.onSuccess) {
        options.onSuccess(result);
      }
      if (options.fetchAllAfterSuccess) {
        thunkAPI.dispatch(getAll(resource, customApiResource)({
          data: {
            limit: 10,
            ...options.fetchAllFilter,
          },
          options: {
            isRefresh: true,
            customApiResource: options.customApiResource || customApiResource || resource
          }
        }))
      }
      if (result) {
        return {
          data: {
            ...data,
            ...result,
          }
        };
      }
      return thunkAPI.rejectWithValue({
        error: true,
        data: { ...data, ...response },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue({ data, error: true, options });
      //
    }
  });

export const create = (resource, customApiResource) =>
  createAsyncThunk(`${resource}/create`, async (payload, thunkAPI) => {
    const { data, options = {} } = payload;
    try {
      
      const message = i18n.t(`success.${resource}`);
      const response = await apiWrapper(
        {
          isShowProgress: options.isShowProgress,
          isShowSuccessNoti: true,
          successDescription: message,
          ...options,
        },
        postApi,
        options.customApiResource || customApiResource || resource,
        data,
      );
      const result = convertResponseData('CREATE', response);
      if (options.onSuccess) {
        options.onSuccess(result);
      }
      if (options.fetchAllAfterSuccess) {
        thunkAPI.dispatch(getAll(resource, customApiResource)({
          data: {
            limit: 10,
            ...options.fetchAllFilter,
          },
          options: {
            isRefresh: true,
            customApiResource: options.customApiResource || customApiResource || resource
          }
        }))
      }
      if (result) {
        return { data: options.formatResult ? options.formatResult(result, data) : result, fetchAllAfterSuccess: options.fetchAllAfterSuccess};
      }
      return thunkAPI.rejectWithValue({ error: true, data: response });
    } catch (error) {
      return thunkAPI.rejectWithValue({ data: error, error: true });
    }
  });

export const del = (resource, customApiResource, primaryKey = PRIMARY_KEY) =>
  createAsyncThunk(`${resource}/del`, async (payload, thunkAPI) => {
    const { data, options = {} } = payload;
    try {
      const response = await apiWrapper(
        { isShowProgress: true },
        delApi,
        options.customApiResource || customApiResource || resource,
        data.path || data[PRIMARY_KEY],
      );
      const result = convertResponseData('DELETE', response, { primaryKey });
      if (result.success || result.data?.message === 'OK' || result.message === 'success') {
        return { data };
      }
      return thunkAPI.rejectWithValue({ data: response });
    } catch (error) {
      return thunkAPI.rejectWithValue({ options, data, error });
    }
  });

export const clearCurrent = (resource) =>
  createAction(`${resource}/clearCurrent`);

export const clearFilter = (resource) =>
  createAction(`${resource}/clearFilter`);

export const makeActions = (resource, customApiResource, primaryKey) => ({
  getAll: getAll(resource, customApiResource, primaryKey),
  getDataById: getDataById(resource, customApiResource, primaryKey),
  edit: edit(resource, customApiResource, primaryKey),
  create: create(resource, customApiResource, primaryKey),
  del: del(resource, customApiResource, primaryKey),
  clearCurrent: clearCurrent(resource, customApiResource, primaryKey),
  clearFilter: clearFilter(resource, customApiResource, primaryKey),
});
