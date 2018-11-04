import RecipeModel from '../model/RecipeModel';

declare module '*/recipes.json' {
    const value: RecipeModel;
    export = value;
}