import RecipeModel from '../model/RecipeModel';

declare module '*/recipes.json' {
    const value: Array<RecipeModel>;
    export = value;
}