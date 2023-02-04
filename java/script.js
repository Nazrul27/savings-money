// Total expenses
function expensesInput(){
    let foodInput = parseFloat(document.getElementById('food-input').value); 
    let rentInput = parseFloat(document.getElementById('rent-input').value);
    let clothInput = parseFloat(document.getElementById('cloth-input').value);
   
    if(isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput)){
        alert('Please give a number');
        return;
        
    }

    return foodInput + rentInput + clothInput;
}

// Decrese Income to Balance
function IncomeInput(){
    const  incomeMoney = parseFloat(document.getElementById('total-income').value);
    const totalExpense = expensesInput();
    const  spendMoney = incomeMoney - totalExpense;
    return spendMoney;
}
//add saveings
function addSavings(){
    const savingsInput = parseFloat(document.getElementById('save-input').value);
    const mainBalance = parseFloat(document.getElementById('total-income').value);
    
    const savings = (mainBalance / 100) * savingsInput;
    const savingsAmount = document.getElementById('saving-amount');
    savingsAmount.innerText = savings;
    const balance = IncomeInput();
    const balanceMoney = document.getElementById('balance-amount');
    balanceMoney.innerText = balance - savings;
    if(savings > balance){
        alert('Your saving money is greater than balance money');
        savingsAmount.innerText = '';
        balanceMoney.innerText = '';
        const saveInput = document.getElementById('save-input');
        saveInput.value = '';
        return ;
    }
    
    

}
// If expenses is greater than Income money
function errorMessage(){
    const totalIncome = parseFloat(document.getElementById('total-income').value);
    const totalExpense = expensesInput();
    if(totalExpense > totalIncome){
        alert('Your expenses is greater that Your income money');
        const expensesError = document.getElementById('expenses');
        expensesError.innerText = ''
        const balanceError = document.getElementById('balance');
        balanceError.innerText = '';
        return;
    }
}
// Calculate
document.getElementById('calculate').addEventListener('click', function(){
     
    const totalExpense = expensesInput();
    const expenses = document.getElementById('expenses');
    expenses.innerText = totalExpense;
    const balance = IncomeInput();
    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;
    errorMessage();
    
})

// Savings
document.getElementById('save').addEventListener('click', function(){
const save = addSavings();

})