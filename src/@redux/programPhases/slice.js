import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, programPhasesActions, generateCMS } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, programPhasesActions, {
  [generateCMS.pending]: state => {
    state.cmsLoading = true;
  },
  [generateCMS.fulfilled]: state => {
    state.cmsLoading = false;
  },
  [generateCMS.rejected]: state => {
    state.cmsLoading = false;
  },
});

export default slice.reducer;
