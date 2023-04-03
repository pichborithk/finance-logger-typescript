import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);
// invOne.client = 'Roshi';
// invOne.amount = 50;
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#to-from');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
