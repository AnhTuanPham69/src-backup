import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, customersActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, customersActions);

export default slice.reducer;
