export default class RecipeHistoryModel {
    constructor(
        public readonly historyId: number,
        public readonly createdAt: Date,
        public readonly recipeIds: Array<number>
    ) { }
}