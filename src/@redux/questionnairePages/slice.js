import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, questionnairePagesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, questionnairePagesActions);

export default slice.reducer;
