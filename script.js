// Budget App

const transactionEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");


transactionEl.addEventListener('click', function(event) {
    // Remove the Listed Budget if Clicked
    const clickedEl = event.target.parentNode;
    clickedEl.remove();

    const amountEl = clickedEl.querySelector(".transaction__amount");
    const amount = +amountEl.textContent;
    
    // Updates Income and Expenses
    if (amount > 0) {
        const currentIncome = +numberIncomeEl.textContent;
        const updatedIncome = currentIncome - amount;
        numberIncomeEl.textContent = updatedIncome;
    } else {
        const currentExpenses = +numberExpensesEl.textContent;
        const updatedExpenses = currentExpenses - (amount * -1);
        numberExpensesEl.textContent = updatedExpenses;
    }

    // Updates Balance
    const income = +numberIncomeEl.textContent;
    const expenses = +numberExpensesEl.textContent;
    const updatedBalance = income - expenses;
    balanceNumberEl.textContent = updatedBalance;

    // Changes the balance color to red if value is less than 0
    if (updatedBalance < 0) {
        balanceNumberEl.style.color = "red";
    }
})



// Form Submission to create a budgetted list

formEl.addEventListener('submit', function(event) {
    // Prevents Default Behaviour
    // (Prevents the Form deafault action from refreshing when clicked to submit)
    event.preventDefault();

    // Get Input Values
    const description = inputDescriptionEl.value;
    const amount = +inputAmountEl.value;

    // Create Listed Budget
    const inputDescription = `
        <li class="transaction transaction--${amount > 0 ? "income" : "expense"}">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">
            ${amount > 0 ? "+" : " "}
            ${amount}</span>  
            <button class="transaction__btn">X</button>
        </li>
    `

    // Insert the Created Listed Budget
    transactionEl.insertAdjacentHTML('beforeend', inputDescription);

    // Clear Form Inputs
    inputDescriptionEl.value = "";
    inputAmountEl.value =  "";

    // unfocus (blur) form inputs
    // inputDescriptionEl.blur();
    // inputAmountEl.blur();

    // Constantly updates Income and Expenses
    if (amount > 0) {
        const currentIncome = +numberIncomeEl.textContent;
        const updatedIncome = currentIncome + amount;
        numberIncomeEl.textContent = updatedIncome;
    } else {
        const currentExpenses = +numberExpensesEl.textContent;
        const updatedExpenses = currentExpenses + amount * -1;
        numberExpensesEl.textContent = updatedExpenses;
    }

    // Update Balance Constantly
    const income = +numberIncomeEl.textContent;
    const expenses = +numberExpensesEl.textContent;
    const updatedBalance = income - expenses;
    balanceNumberEl.textContent = updatedBalance;
})
