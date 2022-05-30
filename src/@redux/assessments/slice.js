import { createSlice } from '@reduxjs/toolkit';
import { getAssessments, getQuestionnaires, getInfoPayments, getAssessmentsQuestion } from './actions';

export const initialState = {
  loading: false,
};

const { reducer } = createSlice({
  name: 'Assessments',
  initialState,
  reducers: {},
  extraReducers: {
    [getAssessments.pending]: (state) => {
      state.loading = true;
    },
    [getAssessments.fulfilled]: (state, { payload }) => {
      state.assessments = payload;
      state.loading = false;
    },
    [getAssessments.rejected]: (state) => {
      state.loading = false;
    },
    [getQuestionnaires.fulfilled]: (state, {payload}) => {
      state.answersDetail = payload.questionAnswers;
    },
    [getInfoPayments.fulfilled]: (state, {payload}) => {
      state.infoOrder = payload;
    },
    [getAssessmentsQuestion.fulfilled]: (state, {payload}) => {
      state.questionnaires = payload;
    },
  },
});

export default reducer;
