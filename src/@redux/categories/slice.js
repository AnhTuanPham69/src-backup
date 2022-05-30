import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, categoriesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, categoriesActions);

export default slice.reducer;
