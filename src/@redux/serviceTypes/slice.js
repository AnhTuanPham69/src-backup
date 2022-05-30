import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, serviceTypesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, serviceTypesActions);

export default slice.reducer;
