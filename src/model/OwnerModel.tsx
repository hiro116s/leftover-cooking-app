export default class OwnerModel {
    constructor(public readonly internalId: number | null, public readonly externalId: number, public readonly title: string, public readonly url: string) {}
}