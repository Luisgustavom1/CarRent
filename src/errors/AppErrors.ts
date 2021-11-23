export class AppErrors {

    constructor(
        public readonly message: string,
        public readonly statusCode: number,
    ) {}
}