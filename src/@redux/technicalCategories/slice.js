import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, technicalCategoriesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, technicalCategoriesActions);

export default slice.reducer;
