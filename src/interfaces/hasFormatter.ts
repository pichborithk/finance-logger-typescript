// interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(text: string): void;
//   spend(amount: number): number;
// }

// const me: IsPerson = {
//   name: 'Bo',
//   age: 34,

//   speak(text) {
//     console.log(text);
//   },

//   spend(amount) {
//     console.log(`I spent ${amount}`);
//     return amount;
//   },
// };

export interface hasFormatter {
  format(): string;
}
