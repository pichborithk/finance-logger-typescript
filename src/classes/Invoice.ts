import { hasFormatter } from '../interfaces/hasFormatter.js';

// export class Invoice {

//   constructor(
//     readonly client: string,
//     private detail s: string,
//     public amount: number
//   ) {}

//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`;
//   }
// }

export class Invoice implements hasFormatter {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
