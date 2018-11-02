export default class IngredientModel {
    private title: string;
    private amount: string;

	constructor(title: string, $amount: string) {
		this.title = title;
		this.amount = $amount;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $amount
     * @return {string}
     */
	public get $amount(): string {
		return this.amount;
	}
}