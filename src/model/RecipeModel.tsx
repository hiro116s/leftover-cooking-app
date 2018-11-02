import Ingredient from './Ingredient';

export default class RecipeModel {
    private imageURL: string;
    private name: string;
    private ingredients: Array<Ingredient>;


	constructor($name: string, $imageURL: string, $ingredients: Array<Ingredient>) {
		this.imageURL = $imageURL;
		this.name = $name;
		this.ingredients = $ingredients;
	}

    /**
     * Getter $imageURL
     * @return {string}
     */
	public get $imageURL(): string {
		return this.imageURL;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $ingredients
     * @return {Array<Ingredient>}
     */
	public get $ingredients(): Array<Ingredient> {
		return this.ingredients;
	}
}