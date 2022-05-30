import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, ordersActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, ordersActions);

export default slice.reducer;
