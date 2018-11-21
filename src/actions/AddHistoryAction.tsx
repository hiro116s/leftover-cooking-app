import { ActionType } from './ActionType';

export const addHisotry: (recipeIds: Array<number>) => AddHistoryAction = (recipeIds: Array<number>) => ({
    type: ActionType.ADD_HISTORY,
    recipeIds
});

export interface AddHistoryAction {
    type: ActionType
    recipeIds: Array<number>
}
