
// // const description = "Salary";
// // const amount = 5000;
// // const isExpense = false;
// // const expenses = [1000, 30, 25];

// // const transaction = {
// //     description: "Salary",
// //     amount: 5000
// // };

// //function declaration
// // function calculateBalance(income, expenses) {
// //     return income - expenses;
// // }
// // const result = calculateBalance(10000, 5000);
// // console.log(result);


// //function expression
// // var  calculateBalance = function(income, expenses) {
// //     return income - expenses;
// // }

// // const result = calculateBalance(10000, 5000);
// // console.log(result);

// // Arrow Function
// // const calculateBalance = (income, expenses) => {
// //     return income - expenses;
// // }
// // const result = calculateBalance(10000, 5000);
// // console.log(result);



// // Interacting with HTML and CSS
// // (DOM Maniputlation)

// // const balanceEl = document.querySelector(".balance-number");

// // balanceEl.addEventListener('click', function() {
// //     const balance = 5000 - 3000;
// //     console.log(balance);
// // } );

// // const balanceEl = document.querySelector(".balance-number");

// // balanceEl.addEventListener('click', function() {
// //     const balance = 5000 - 3000;
// //     balanceEl.textContent = balance;
// // } );



// // Loops ( forEach & for)
// // forEach Loop
// // const incomes = [5000, 200, 10];
// // // incomes.forEach(income => console.log(income + 10))

// // // for Loop
// // for(let i = 0; i < 5; i++) {
// //     incomes[3] = 5;
// //     console.log(incomes[i]);
// // }


// // Budget App

// const transactionEl = document.querySelector(".transactions");
// const balanceNumberEl = document.querySelector(".balance-number");
// const numberIncomeEl = document.querySelector(".number--income");
// const numberExpensesEl = document.querySelector(".number--expenses");
// const formEl = document.querySelector(".form");
// const inputDescriptionEl = document.querySelector(".input--description");
// const inputAmountEl = document.querySelector(".input--amount");


// // formEl.addEventListener('submit', function(event) {
// //     // prevent default behaviour
// //     event.preventDefault();
    
// //     // get input values
// //     const description = inputDescriptionEl.value;
// //     const amount = +inputAmountEl.value;

// //     // Create transaction item HTML
// //     const transactionItemHTML = `
// //         <li class="transaction transaction--${amount > 0 ? "income" : "expense"}">
// //             <span class="transaction__text">${description}</span>
// //             <span class="transaction__amount">
// //             ${amount > 0 ? "+" : " "}
// //             ${amount}</span>
// //             <button class="transaction__btn">X</button>
// //         </li>
// //     `;

// //     // Insert new html
// //     transactionEl.insertAdjacentHTML('beforeend', transactionItemHTML);

// //     // Clear form inputs
// //     inputDescriptionEl.value = " ";
// //     inputAmountEl.value =  " ";

// //     // unfocus (blur) form inputs
// //     inputDescriptionEl.blur();
// //     inputAmountEl.blur();

// //     //update income or expenses
// //     if (amount > 0){
// //         const currentIncome = +numberIncomeEl.textContent;
// //         const updatedIncome = currentIncome + amount;
// //         numberIncomeEl.textContent = updatedIncome;
// //     } else {
// //         const currentExpenses = +numberExpensesEl.textContent;
// //         const updatedExpenses = currentExpenses + amount * -1;
// //         numberExpensesEl.textContent = updatedExpenses;
// //     }

// //     // Update Balance
// //     const income = +numberIncomeEl.textContent;
// //     const expenses = +numberExpensesEl.textContent;
// //     balanceNumberEl.textContent = income - expenses;

// //     // // make red if balance is negative
// //     // if (income - expenses < 0) {
// //     //     balanceNumberEl.style.color = "red";
// //     // }
// // })

// const clickHandler = (event) => {
//     // Remove transaction item visually
//     const clickedEl = event.target.parentNode;
//     clickedEl.remove();

//     // update income or expenses
//     const amountEl = clickedEl.querySelector(".transaction__amount");
//     const amount = +amountEl.textContent;
    
//     if (amount > 0){
//         const currentIncome = +numberIncomeEl.textContent;
//         const updatedIncome = currentIncome - amount;
//         numberIncomeEl.textContent = updatedIncome;
//     } else {
//         const currentExpenses = +numberExpensesEl.textContent;
//         const updatedExpenses = currentExpenses - (amount * -1);
//         numberExpensesEl.textContent = updatedExpenses;
//     }

//     // update Balance
//     const income = +numberIncomeEl.textContent;
//     const expenses = +numberExpensesEl.textContent;
//     balanceNumberEl.textContent = income - expenses;

//     // make red if balance is negative
//     if (income - expenses < 0) {
//         balanceNumberEl.style.color = "red";
//     }
// }

// transactionEl.addEventListener("click", clickHandler);
    