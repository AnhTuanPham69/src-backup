import { createSelector } from 'reselect';
import { CRUDSelectors } from '@redux/crudCreator/selectors';
import { MODEL_NAME } from './actions';

export const todoStepsSelectors = new CRUDSelectors(MODEL_NAME);

const getTodoSteps = (state) => state?.todoSteps?.data;

export const getTodoStepsUserSelector = createSelector(
  [getTodoSteps],
  (todoSteps) => {
    const todoStepsArr = Object.values(todoSteps);
    return todoStepsArr.map((step) =>
      step?.userProgramToDoStep
        ? {
            title: step.title,
            options: step.userProgramToDoStep.options,
          }
        : step,
    );
  },
);
