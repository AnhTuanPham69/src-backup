import { set } from 'lodash';
import { makeCRUDSlice } from '@redux/crudCreator';
import {
  MODEL_NAME,
  cmsActions,
  setSelectedContent,
  cleanCMSData,
  setCMSData,
  setEditorData,
} from './actions';

const setPreviewSelectedContent = (state, { payload: data }) => ({
  ...state,
  currentSelected: data,
});

const clear = (state) => ({
  ...state,
  editorData: {
    content: { items: [] },
  },
  currentData: {},
});

const setData = (state, { payload: { key, data } }) => {
  const newData = { ...state.editorData };
  set(newData, key, data);
  state.editorData = newData;
  return state;
};

const setEditorDataReducer = (state, { payload: data }) => ({
  ...state,
  editorData: { ...data, content: data?.content || [] },
});

const slice = makeCRUDSlice(
  MODEL_NAME,
  cmsActions,
  {
    [setSelectedContent.fulfilled]: setPreviewSelectedContent,
    [cleanCMSData.fulfilled]: clear,
    [setCMSData.fulfilled]: setData,
    [setEditorData.fulfilled]: setEditorDataReducer,
  },
  undefined,
  {
    currentSelected: null,
    currentData: {},
    editorData: {
      content: { items: [] },
    },
  },
);

export default slice.reducer;
