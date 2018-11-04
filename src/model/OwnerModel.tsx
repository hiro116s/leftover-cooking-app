export default class OwnerModel {
    private internalId: number;
    private externalId: number;
    private title: string;
    private url: string;

	constructor($internalId: number, $externalId: number, $title: string, $url: string) {
		this.internalId = $internalId;
		this.externalId = $externalId;
		this.title = $title;
		this.url = $url;
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
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $url
     * @return {string}
     */
	public get $url(): string {
		return this.url;
	}

}