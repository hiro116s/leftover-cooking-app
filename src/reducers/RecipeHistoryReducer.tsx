import { SQLite } from 'expo';
import { Action } from 'redux';
import { ActionType, isAddHistoryAction } from '../actions/ActionType';
import { DB } from '../db';
import RecipeHistoryModel from '../model/RecipeHistoryModel';
import { RecipeHistoryState } from './State';

const INITIAL_STATE : RecipeHistoryState = {
    histories: [new RecipeHistoryModel(-1, new Date(), [])]
};

export function recipeHistory(state: RecipeHistoryState = INITIAL_STATE, action: Action<ActionType>): RecipeHistoryState {
    if (isAddHistoryAction(action)) {
        const createdAt: Date = new Date();
        const recipesSeparatedByComma: string = action.recipeIds.join();
        DB.transaction((tx: SQLite.Transaction) => {
            tx.executeSql(
                'insert into history (createdAt, recipesSeparatedByComma) values (?, ?)', [createdAt.toISOString(), recipesSeparatedByComma]
            )
        });
        // TODO: Tie ID correctly
        return { histories: [...state.histories, new RecipeHistoryModel(-1, createdAt, action.recipeIds)] }
    } else {
        return state;
    }
}
