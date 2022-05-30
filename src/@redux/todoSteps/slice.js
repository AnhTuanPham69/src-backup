import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, todoStepsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, todoStepsActions);

export default slice.reducer;
