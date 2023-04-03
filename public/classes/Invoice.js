// export class Invoice {
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {}
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`;
//   }
// }
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
