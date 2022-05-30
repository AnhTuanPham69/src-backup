import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, servicesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, servicesActions);

export default slice.reducer;
