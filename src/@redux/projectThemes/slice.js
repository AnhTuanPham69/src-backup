import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, projectThemesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, projectThemesActions);

export default slice.reducer;
