import IngredientModel from './IngredientModel';
import OwnerModel from './OwnerModel';
import { RecipeSource } from './RecipeSource';

class ImageUrl {
    private T280x210: string;

	constructor($T280x210: string) {
		this.T280x210 = $T280x210;
	}

    /**
     * Getter $T280x210
     * @return {string}
     */
	public get $T280x210(): string {
		return this.T280x210;
	}
} 

export default class RecipeModel {    
    private internalId: number;
    private externalId: number;
    private owner: OwnerModel;
    private recipeSource: RecipeSource;
    private imageUrlBySizeType: Array<ImageUrl>;
    private name: string;
    private url: string;
    private ingredients: Array<IngredientModel>;
    
	constructor($internalId: number, $externalId: number, $owner: OwnerModel, $recipeSource: RecipeSource, $imageUrlBySizeType: Array<ImageUrl>, $name: string, $url: string, $ingredients: Array<IngredientModel>) {
		this.internalId = $internalId;
		this.externalId = $externalId;
		this.owner = $owner;
		this.recipeSource = $recipeSource;
		this.imageUrlBySizeType = $imageUrlBySizeType;
		this.name = $name;
		this.url = $url;
		this.ingredients = $ingredients;
	}

    /**
     * Getter $internalId
     * @return {number}
     */
	public get $internalId(): number {
		return this.internalId;
	}

    /**
     * Getter $externalId
     * @return {number}
     */
	public get $externalId(): number {
		return this.externalId;
	}

    /**
     * Getter $owner
     * @return {OwnerModel}
     */
	public get $owner(): OwnerModel {
		return this.owner;
	}

    /**
     * Getter $recipeSource
     * @return {RecipeSource}
     */
	public get $recipeSource(): RecipeSource {
		return this.recipeSource;
	}


    /**
     * Getter $imageUrlBySizeType
     * @return {Array<ImageUrl>}
     */
	public get $imageUrlBySizeType(): Array<ImageUrl> {
		return this.imageUrlBySizeType;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $url
     * @return {string}
     */
	public get $url(): string {
		return this.url;
	}

    /**
     * Getter $ingredients
     * @return {Array<IngredientModel>}
     */
	public get $ingredients(): Array<IngredientModel> {
		return this.ingredients;
	}

}