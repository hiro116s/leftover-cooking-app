import IngredientModel from './IngredientModel';
import OwnerModel from './OwnerModel';
import ImageUrlBySizeType from './ImageUrlBySizeType';

export default class RecipeModel {    
    constructor(
        public readonly internalId: number, public readonly externalId: number, public readonly owner: OwnerModel, 
        public readonly recipeSource: string, readonly imageUrlBySizeType: ImageUrlBySizeType, public readonly title: string, 
        public readonly url: string, public readonly ingredients: Array<IngredientModel>
    ) { }
}